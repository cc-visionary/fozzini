import { PRODUCTS } from "./products";

export const NAVBAR = {
  logo: {
    src: "/gallery/Fozzini Logo.png",
    alt: "Fozzini Lifestyle Concepts Logo Mark",
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
