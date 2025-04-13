import { Card } from "@/components/card";
import { title } from "@/components/primitives";
import { PRODUCTS } from "@/data";

export default function ProductsListPage() {
  return (
    <div>
      <h1 className={title()}>Our Products</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map(({ name, thumbnail, slug, excerpt }, index) => (
          <Card
            key={index}
            link={`/brands/${slug}`}
            image={thumbnail.src}
            title={name}
            excerpt={excerpt}
            contain
          />
        ))}
      </div>
    </div>
  );
}
