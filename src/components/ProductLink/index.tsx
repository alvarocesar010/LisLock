import Link from "next/link";
import Image from "next/image";

type ProductsListProps = {
  product: string;
  src: string;
  link: string;
};

const productsList: ProductsListProps[] = [
  {
    product: "Fechaduras Convencionais",
    src: "/images/fechConv.webp",
    link: "/produtos/fechaduras-convencionais",
  },
  {
    product: "Fechaduras Inteligentes",
    src: "/images/fechEle.webp",
    link: "/produtos/fechaduras-inteligentes",
  },
  {
    product: "Automatimos para Portões",
    src: "/images/motor.webp",
    link: "/produtos/automatismos-de-portoes",
  },
  {
    product: "Abertura de portas",
    src: "/images/abertPor.webp",
    link: "/produtos/abertura-de-portas",
  },
  // {
  //   product: "Instalação, troca, ou reparação de fechaduras",
  //   src: "/images/abertPor.webp",
  //   link: "/produtos/servicos-de-instalacao",
  // },
];

const ProductLink = () => {
  return (
    <>
      {/* Products list */}
      <p className="italic text-center">
        Conheça nossos serviços clicando nos links abaixo:
      </p>
      <div className="grid grid-cols-2 mx-auto gap-3">
        {productsList.map((item) => (
          <Link
            key={item.product}
            href={item.link}
            className="h-24 flex flex-row justify-center items-center gap-2 bg-indigo-100 p-2 rounded-xl
            active:bg-indigo-400 active:scale-95
            border-1 border-indigo-600 transition duration-150
            "
          >
            {item.product}
            <Image
              className="rounded-xl object-cover"
              width={70}
              height={70}
              src={item.src}
              alt={item.product}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductLink;
