import { PRODUCTS } from "@/data";

export default function sitemap() {
  const BASE_URL = process.env.DOMAIN_URL;

  // Static routes
  const staticRoutes = [
    { route: "", changeFrequency: "weekly", priority: 0.8 },
    { route: "about", changeFrequency: "yearly", priority: 0.6 },
    { route: "contact", changeFrequency: "yearly", priority: 0.6 },
  ].map(({ route, changeFrequency, priority }) => ({
    url: `${BASE_URL}/${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority,
  }));

  // Brand routes
  const productRoutes = PRODUCTS.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Combine all routes
  return [...staticRoutes, ...productRoutes];
}
