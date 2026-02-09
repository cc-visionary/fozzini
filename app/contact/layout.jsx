export const metadata = {
  title: "Contact Us | Fozzini Lifestyle Inc.",
  description:
    "Get in touch with Fozzini Lifestyle Inc. Schedule a showroom visit, request a consultation, or inquire about our premium modular cabinetry solutions for your home.",
  openGraph: {
    title: "Contact Us | Fozzini Lifestyle Inc.",
    description:
      "Get in touch with Fozzini Lifestyle Inc. Schedule a showroom visit, request a consultation, or inquire about our premium modular cabinetry solutions for your home.",
    url: "https://fozzini.com/contact",
    siteName: "Fozzini Lifestyle Inc.",
    images: [
      {
        url: `${process.env.DOMAIN_URL}/gallery/About Us/AboutCover.jpg`,
        width: 1200,
        height: 630,
        alt: "Fozzini Lifestyle Inc. Showroom",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Fozzini Lifestyle Inc.",
    description:
      "Get in touch with Fozzini Lifestyle Inc. Schedule a showroom visit, request a consultation, or inquire about our premium modular cabinetry solutions for your home.",
    images: [`${process.env.DOMAIN_URL}/gallery/About Us/AboutCover.jpg`],
  },
  alternates: {
    canonical: "https://fozzini.com/contact",
  },
};

export default function PageLayout({ children }) {
  return (
    <div className="mx-auto max-w-7xl py-8 px-6 flex-grow">{children}</div>
  );
}
