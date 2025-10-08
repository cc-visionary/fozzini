import { Card } from "@/components/card";
import { title } from "@/components/primitives";
import { PRODUCTS } from "@/data";

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
