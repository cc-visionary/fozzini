import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { PRODUCTS } from "@/data";
import Gallery from "@/components/gallery";
import Carousel from "@/components/carousel";

// Static paths generation
export async function generateStaticParams() {
  return PRODUCTS.map(({ slug }) => ({
    brand: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { product } = await params;
  const productData = PRODUCTS.find((b) => b.slug === product);
  if (!productData) return notFound();

  return {
    title: `${productData.name} | Explore ${productData.name} Products & Designs`,
    description: productData.description,
    openGraph: {
      title: `${productData.name}`,
      description: productData.description,
      url: `https://kassidinc.com/brands/${productData.slug}`,
      siteName: "Kassi Distributors Inc.",
      images: [productData.thumbnail.src],
      type: "website",
    },
  };
}

// Page Component
export default async function BrandItemPage({ params }) {
  const { product } = await params;

  // Find the product data by slug
  const productData = PRODUCTS.find((b) => b.slug === product);

  if (!productData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] px-4">
        <div className="max-w-md text-center bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Oops! The product you're looking for doesn't exist or might have
            been removed. Don't worry, there's more to explore!
          </p>
          <Button className="w-full" color="primary" as={Link} href="/products">
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const { name, excerpt, description, sellingPoint, covers, gallery } =
    productData;

  return (
    <>
      <Carousel
        images={covers}
        sizeClass="w-full h-[30vh] md:h-[40vh] lg:h-[50vh]"
      />

      {/* Description Section */}
      <section className="relative h-[30vh] px-6 py-12 flex justify-center gap-4 items-center lg:px-0">
        <div className="absolute left-0 top-0 h-full w-1/3 hidden xl:block z-0 pointer-events-none">
          <div
            className="h-full w-full bg-no-repeat bg-left"
            style={{
              backgroundImage: "url('/gallery/Background Square Pattern.png')",
            }}
          />
        </div>
        <div className="max-w-sm mx-auto flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
          <h2 className="text-3xl font-bold mb-4">{name}</h2>
          <div className="space-y-2 max-w-xl text-md sm:text-lg">
            {description}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 bg-primary text-white lg:px-0">
        <div className="max-w-3xl mx-auto flex justify-center gap-4 items-center flex-col md:flex-row">
          <Carousel
            images={gallery}
            sizeClass="h-[40rem] w-[24rem]"
            height={1920}
            width={1080}
          />
          <div className="space-y-2 max-w-xl text-md text-center md:text-left sm:text-lg py-8">
            {excerpt}
          </div>
        </div>
      </section>

      {/* Selling Point Section */}
      <section className="relative h-[50vh] px-6 py-12 flex justify-center gap-4 items-center lg:px-0">
        <div className="absolute right-0 top-0 h-full w-1/3 hidden xl:block z-0 pointer-events-none">
          <div
            className="h-full w-full bg-no-repeat bg-right"
            style={{
              backgroundImage: "url('/gallery/Background Square Pattern.png')",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto xl:pr-64 flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
          <div className="space-y-2 max-w-xl text-md sm:text-lg">
            {sellingPoint}
          </div>
        </div>
      </section>
    </>
  );
}
