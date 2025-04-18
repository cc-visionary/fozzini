import Image from "next/image";
import { Link } from "@nextui-org/link";

export const Card = ({ link, image, title, excerpt, contain = false }) => {
  return (
    <Link
      href={link}
      className="border shadow flex flex-col items-stretch justify-between transition hover:shadow-xl"
    >
      <div className="relative w-full h-72">
        <Image
          src={image}
          alt={title}
          className={contain ? "object-contain pt-4 pl-4 pr-4" : "object-cover"}
          fill
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold line-clamp-2">{title}</h2>
        <p className="text-gray-700 mt-2 line-clamp-3 text-sm sm:text-md">
          {excerpt}
        </p>
      </div>
    </Link>
  );
};
