import Image from "next/image";

type WhyUsProps = {
  title: string;
  content: string;
  src: string;
};

const WhyUs = () => {
  const qualificationsList: WhyUsProps[] = [
    {
      title: "Técnicos certificados",
      content: "Os nossos técnicos são certificados para melhor o servir",
      src: "/images/certified.webp",
    },
    {
      title: "Preços justos e sem surpresas",
      content: "Sabe exatamente o que vai pagar antes de começarmos",
      src: "/images/fairPrice.webp",
    },
    {
      title: "Pagamento facilitado",
      content: "Aceitamos Cartão e MB Way",
      src: "/images/Payments.webp",
    },
    {
      title: "Garantia Produtos e serviços",
      content: "Oferecemos garantia no nossos produtos e serviços realizados!",
      src: "/images/garantia.webp",
    },
  ];

  return (
    <div className="bg-indigo-50 p-6 flex justify-center">
      <div className="w-full md:w-4/5 bg-slate-200 rounded-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Por que escolher a LisLock?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cards */}

          {qualificationsList.map((item) => (
            <div
              key={item.src}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
            >
              <Image
                src={item.src}
                width={80}
                height={80}
                alt="Garantia"
                className="mb-4 rounded-full"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
