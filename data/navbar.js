import { PRODUCTS } from "./products";

export const NAVBAR = {
  logo: {
    src: "/logos/KDI Official Logo Files_KDI Official Logo.png",
    alt: "Kassi Distributors Inc. Logo Mark",
    link: "/",
  },
  links: [
    {
      label: "Products",
      link: "/products",
      subcategories: PRODUCTS.map(({ slug, name }) => ({
        label: name,
        link: `/products/${slug}`,
      })),
    },
    {
      label: "Projects",
      link: "/projects",
    },
    { label: "About Us", link: "/about" },
  ],
};
