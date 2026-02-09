import nodemailer from "nodemailer";
import { headers } from "next/headers";

// Rate limiter: max 5 requests per IP per 15 minutes
const rateLimit = new Map();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { firstRequest: now, count: 1 });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return true;
  }

  return false;
}

// Periodically clean up expired entries
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimit) {
    if (now - entry.firstRequest > RATE_LIMIT_WINDOW) {
      rateLimit.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW);

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req) {
  // Rate limiting by IP
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Too many requests. Please try again later.",
      }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  const body = await req.json();

  const { name, email, phone, projectAddress, inquiry, showroom, message } =
    body;

  // Server-side validation
  const errors = {};
  if (!name || name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters long.";
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!phone || (phone && !/^\d{10,15}$/.test(phone))) {
    errors.phone = "Phone number must be 10-15 digits long.";
  }
  if (!inquiry) {
    errors.inquiry = "Inquiry type is required.";
  }
  if (!showroom) {
    errors.showroom = "Showroom selection is required.";
  }
  if (!message || message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  // Return validation errors
  if (Object.keys(errors).length > 0) {
    return new Response(JSON.stringify({ success: false, errors }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Nodemailer setup using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: parseInt(process.env.EMAIL_PORT, 10) === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Sanitize all user input before inserting into HTML
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone) || "N/A";
  const safeProjectAddress = escapeHtml(projectAddress) || "N/A";
  const safeInquiry = escapeHtml(inquiry);
  const safeShowroom = escapeHtml(showroom);
  const safeMessage = escapeHtml(message);

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Inquiry: ${safeInquiry} - ${safeShowroom} - From ${safeName}`,
      html: `
        <h1>New Inquiry from Potential Client</h1>
        <p><strong>Client Details:</strong></p>
        <ul>
          <li><strong>Name:</strong> ${safeName}</li>
          <li><strong>Email:</strong> ${safeEmail}</li>
          <li><strong>Phone:</strong> ${safePhone}</li>
        </ul>
        <p><strong>Project Details:</strong></p>
        <ul>
          <li><strong>Project Address:</strong> ${safeProjectAddress}</li>
          <li><strong>Inquiry About:</strong> ${safeInquiry}</li>
          <li><strong>Showroom:</strong> ${safeShowroom}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
        <hr />
        <p>
          <em>This email was automatically generated from the contact form on your
          website. Please follow up with the client as soon as possible.</em>
        </p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
