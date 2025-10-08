import { Link } from "@nextui-org/link";
import { ABOUT } from "./about";
import { PRODUCTS } from "./products";
import { CONTACT } from "./contact";
import { Button } from "@nextui-org/button";

export const HOME = {
  heroSection: {
    heading: "Live in Comfort",
    subheading: "Built in Style,",
    introduction: ABOUT.aboutSection.description,
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
  productSection: PRODUCTS.map(({ slug, name, thumbnail, excerpt }) => ({
    name: name,
    thumbnail,
    excerpt,
    href: `/products/${slug}`,
  })),
  aboutSection: {
    title: "About Us",
    description:
      "Fozzini aims to be a globally competitive provider of high-caliber modular cabinetry and furniture.",
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
    cta: "Send us a Message",
    link: "/contact",
  },
};

export const companiesWeWorked = [];
