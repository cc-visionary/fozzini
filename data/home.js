import { Link } from "@nextui-org/link";
import { ABOUT } from "./about";
import { PRODUCTS } from "./products";
import { CONTACT } from "./contact";
import { Button } from "@nextui-org/button";

export const HOME = {
  heroSection: {
    heading: "Live in Comfort",
    subheading: "Built in Style,",
    introduction:
      "Here at Fozzini Lifestyle Concepts, Inc., we believe that living in comfort can go hand-in-hand with sophistication and style. We produce and customize high-calibur modular cabinetry that fits your preference and lifestyle.",
    images: [
      {
        desktopSrc: "/gallery/Home/Hero1.jpg",
        mobileSrc: "/gallery/Home/Hero1.jpg",
        alt: "Fozzini Lifestyle Concepts Gallery 1",
      },
      {
        desktopSrc: "/gallery/Home/Hero2.jpg",
        mobileSrc: "/gallery/Home/Hero2.jpg",
        alt: "Fozzini Lifestyle Concepts Gallery 2",
      },
      {
        desktopSrc: "/gallery/Home/Hero3.jpg",
        mobileSrc: "/gallery/Home/Hero3.jpg",
        alt: "Fozzini Lifestyle Concepts Gallery 3",
      },
    ],
    callToAction: (
      <Button
        as={Link}
        variant="bordered"
        href="/contact"
        className="text-white text-sm sm:text-lg rounded-none"
      >
        Book a Consultation
      </Button>
    ),
  },
  brandSection: PRODUCTS.map(({ slug, name, logo, description }) => ({
    name: name,
    logo,
    description,
    href: `/brands/${slug}`,
  })),
  aboutSection: {
    title: "About Us",
    description: ABOUT.aboutSection.description,
    image: "/gallery/Home/About.webp",
    alt: "About Fozzini Lifestyle Concepts",
    cta: "Learn More",
    link: "/about",
  },
  contactSection: {
    title: "Contact Us",
    description: CONTACT.subheading,
    image: "/gallery/Home/Contact.jpg",
    alt: "Contact Fozzini Lifestyle Concepts",
    cta: "Contact",
    link: "/contact",
  },
};

export const companiesWeWorked = [];
