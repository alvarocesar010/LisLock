import Link from "next/link";
import Image from "next/image";

type ProductsListProps = {
  id: number;
  product: string;
  src: string;
  link: string;
};

const productsList: ProductsListProps[] = [
  {
    id: 1,
    product: "Fechaduras Convencionais",
    src: "/images/fechConv.webp",
    link: "/produtos/fechaduras-convencionais",
  },
  {
    id: 2,
    product: "Fechaduras Inteligentes",
    src: "/images/fechEle.webp",
    link: "/produtos/fechaduras-inteligentes",
  },
  {
    id: 3,
    product: "Automatimos para Portões",
    src: "/images/motor.webp",
    link: "/produtos/automatismos-de-portoes",
  },
  {
    id: 4,
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
      <p className="italic text-center text-lg md:text-xl">
        Conheça nossos serviços clicando nos links abaixo:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-lg mx-auto md:max-w-3xl">
        {productsList.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className={`flex items-center justify-between bg-slate-100 p-3 md:p-5 rounded-2xl shadow-md border border-slate-200 
                 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-400 transition active:bg-slate-200 active:scale-95`}
          >
            {/* Text */}
            <span className="text-lg md:text-xl font-semibold text-slate-800">
              {item.product}
            </span>

            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-50"
                width={70}
                height={70}
                src={item.src}
                alt={item.product}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductLink;
