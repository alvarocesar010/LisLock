import Carousel from "@/components/Carousel";
import ProductLink from "@/components/ProductLink";

export default function Home() {
  const productsLink = [
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
      product: "Automatimos Portões",
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

  return (
    <>
      <main className=" flex items-center justify-center bg-gray-100">
        <Carousel />
      </main>
      <div className="p-3 flex flex-col gap-2">
        <h1 className="text-3xl/tight font-semibold text-center ">
          LisLock <br /> Segurança e qualidade na prestação de serviços!
        </h1>

        {/* Products list */}
        <p className="italic text-center">
          Conheça nossos serviços clicando nos links abaixo:
        </p>
        <div className="grid grid-cols-2 mx-auto gap-4">
          {productsLink.map((item) => (
            <ProductLink
              product={item.product}
              key={item.product}
              src={item.src}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
