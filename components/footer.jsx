"use client";

import { Link } from "@nextui-org/link";
import Image from "next/image";

import { FOOTER, HOME } from "@/data"; // Import the footer data from your data file

export const Footer = () => {
  const {
    companyName,
    logo,
    quickLinks,
    showroomAddresses,
    contactInformation,
    socialLinks,
  } = FOOTER;

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="py-6 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1: Company Info */}
          <div className="flex sm:justify-end items-center sm:border-r-2 sm:border-r-white sm:pr-8">
            <Image
              width={200}
              height={75}
              src={logo.src}
              alt={logo.alt}
              className="object-contain"
            />
          </div>

          {/* Column 2: Quick Links  */}
          {/* <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="mb-6">
            {quickLinks.map(
              ({ label, link }, index) =>
                label && (
                  <li key={index} className="mb-2">
                    <Link href={link}>{label}</Link>
                  </li>
                )
            )}
          </ul>
        </div> */}
          {/* Column 3: Showrooms */}
          {/* <div>
          <h4 className="font-bold text-lg mb-4">Showroom Locations</h4>
          <ul>
            {showroomAddresses.map(
              ({ name, openingHours, address, googleMaps }, index) => (
                <li key={index} className="mb-2">
                  <p className="font-semibold">{name}</p>
                  <p className="font-light text-sm">{openingHours}</p>
                  <Link href={googleMaps} isExternal>
                    {address}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div> */}

          {/* Column 4: Contact Info & Social Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <Link
                className="text-white"
                href={`mailto:${contactInformation.email}`}
              >
                {contactInformation.email}
              </Link>
            </p>
            <p className="mb-2">
              <strong>Telephone:</strong>{" "}
              <Link
                className="text-white"
                href={`tel:${FOOTER.contactInformation.telephone}`}
              >
                {FOOTER.contactInformation.telephone}
              </Link>
            </p>
            <p className="mb-6">
              <strong>Phone:</strong>{" "}
              <Link
                className="text-white"
                href={`tel:${FOOTER.contactInformation.phone}`}
              >
                {FOOTER.contactInformation.phone}
              </Link>
            </p>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon, alt, link }, index) => (
                <Link key={index} href={link} aria-label={alt} isExternal>
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-5 text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} {companyName} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
