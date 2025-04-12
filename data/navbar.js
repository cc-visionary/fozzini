import { PRODUCTS } from "./products";

export const NAVBAR = {
  logo: {
    src: "/logos/KDI Official Logo Files_KDI Official Logo.png",
    alt: "Kassi Distributors Inc. Logo Mark",
    link: "/",
  },
  links: [
    {
      label: "Brands",
      link: "/brands",
      subcategories: PRODUCTS.map(({ slug, name, logo }) => ({
        label: name,
        logo,
        link: `/brands/${slug}`,
      })),
    },
    {
      label: "Projects",
      link: "/projects",
    },
    {
      label: "Showroom",
      link: "/showroom",
    },
    { label: "About Us", link: "/about" },
  ],
};
