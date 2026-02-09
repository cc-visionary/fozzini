import { Card } from "@/components/card";
import { title } from "@/components/primitives";
import { PRODUCTS } from "@/data";

export const metadata = {
  title: "Our Products | Fozzini Lifestyle Inc.",
  description:
    "Explore Fozzini's collection of premium modular cabinetry for your living room, kitchen, bedroom, and bathroom. Stylish and functional designs crafted for modern Filipino homes.",
  openGraph: {
    title: "Our Products | Fozzini Lifestyle Inc.",
    description:
      "Explore Fozzini's collection of premium modular cabinetry for your living room, kitchen, bedroom, and bathroom. Stylish and functional designs crafted for modern Filipino homes.",
    url: "https://fozzini.com/products",
    siteName: "Fozzini Lifestyle Inc.",
    images: [
      {
        url: `${process.env.DOMAIN_URL}/gallery/About Us/AboutCover.jpg`,
        width: 1200,
        height: 630,
        alt: "Fozzini Lifestyle Inc. Products",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products | Fozzini Lifestyle Inc.",
    description:
      "Explore Fozzini's collection of premium modular cabinetry for your living room, kitchen, bedroom, and bathroom. Stylish and functional designs crafted for modern Filipino homes.",
    images: [`${process.env.DOMAIN_URL}/gallery/About Us/AboutCover.jpg`],
  },
  alternates: {
    canonical: "https://fozzini.com/products",
  },
};

export default function ProductsListPage() {
  return (
    <div className="mx-auto max-w-7xl py-8 px-6 flex-grow min-h-[60vh]">
      <h1 className={title()}>Our Products</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PRODUCTS.map(({ name, thumbnail, slug, excerpt }, index) => (
          <Card
            key={index}
            link={`/products/${slug}`}
            image={thumbnail.src}
            title={name}
            excerpt={excerpt}
          />
        ))}
      </div>
    </div>
  );
}
