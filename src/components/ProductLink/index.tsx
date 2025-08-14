import Link from "next/link";
import Image from "next/image";

type ProductLinkProps = {
  src: string;
  product: string;
  link: string;
};

const ProductLink = ({ src, product, link }: ProductLinkProps) => {
  return (
    <Link
      href={link}
      className="h-24 flex flex-row justify-center items-center gap-2 bg-indigo-100 p-2 rounded-xl"
    >
      {product}
      <Image
        className="rounded-xl object-cover"
        width={70}
        height={70}
        src={src}
        alt={product}
      />
    </Link>
  );
};

export default ProductLink;
