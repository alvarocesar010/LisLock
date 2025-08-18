import Image from "next/image";

type OurServicesProps = {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  descriptionList: {
    id: number;
    title: string;
    description: string;
    src: string;
  }[];
};

const OurServices = () => {
  const services: OurServicesProps[] = [
    {
      id: 1,
      title: "Fechaduras Convencionais",
      excerpt:
        "Dispomos de várias marcas e modelos de fechaduras convencionais.",
      content:
        "Precisa substituir a sua fechadura?\nTratamos de tudo por si: fornecemos a fechadura e o nosso técnico desloca-se ao seu domicílio para proceder à instalação.",
      descriptionList: [
        {
          id: 1,
          title: "Fechaduras de embutir",
          description:
            "Discretas e resistentes, ideais para portas interiores ou de correr.",
          src: "/images/fechEmbutir.webp",
        },
        {
          id: 2,
          title: "Fechaduras elétricas",
          description:
            "Garantem maior segurança e comodidade, permitindo controlar o acesso às portas de forma prática e fiável.",
          src: "/images/fechEletrica.webp",
        },
        {
          id: 3,
          title: "Fechaduras de segurança / palhetões",
          description:
            "Oferecem proteção reforçada contra arrombamentos, com sistemas de segurança adicionais.",
          src: "/images/fechPalhet.webp",
        },
        {
          id: 4,
          title: "Fechaduras de sobrepor",
          description:
            "Instaladas à superfície da porta, são seguras, práticas e fáceis de aplicar.",
          src: "/images/fechSobre.webp",
        },
      ],
    },
    {
      id: 2,
      title: "Fechaduras Inteligentes p/ Hotel e Residência",
      excerpt:
        "Soluções modernas para trancar e destrancar portas sem chaves, com controle remoto e acesso automatizado.",
      content:
        "Explore as opções de smart locks mais populares, ideais para residências, hotelaria e fácil gestão de acessos.",
      descriptionList: [
        {
          id: 1,
          title: "Fechadura biométrica com senha para porta",
          description:
            "Várias opções de desbloqueio: impressão digital, senha, chaveiro, APP e chaves físicas. ",
          src: "/images/fechTecl.webp",
        },
        {
          id: 2,
          title:
            "Fechadura inteligente c/ leitor de cartões - Hotel Lock System",
          description:
            "A fechadura inteligente com leitor de cartões MIFARE 13.56MHz é uma solução moderna e eficiente para gestão de acessos em ambientes hoteleiros.",
          src: "/images/fechHotel.webp",
        },
        {
          id: 3,
          title: "Fechadura Inteligente Retrofit ",
          description:
            "É a solução Retrofit mais avançada da NUKI para modernizar a segurança da sua porta, sem recorrer a furos e nem substituição do cilindro existente",
          src: "/images/fechNuki.webp",
        },
      ],
    },
    {
      id: 3,
      title: "Automatismos para Portões",
      excerpt:
        "Soluções modernas de automatização para portões residenciais e comerciais, com controlo remoto e maior segurança.",
      content:
        "Oferecemos diferentes tipos de automatismos para portões, adaptados às suas necessidades: batentes, deslizantes ou basculantes. Todos permitem uma utilização prática, segura e cómoda.",
      descriptionList: [
        {
          id: 1,
          title: "Portões de Batente",
          description:
            "Sistemas robustos e versáteis, ideais para residências e empresas. Podem ser abertos através de controlo remoto, código PIN, aplicação móvel ou chave física.",
          src: "/images/slide1.webp",
        },
        {
          id: 2,
          title: "Portões Deslizantes",
          description:
            "Automatismos que garantem maior segurança e comodidade, especialmente indicados para entradas de maior dimensão. Permitem integração com leitores de cartões e sistemas de controlo de acessos.",
          src: "/images/portaoDesli.webp",
        },
        {
          id: 3,
          title: "Portões Basculantes",
          description:
            "Solução prática e compacta, muito utilizada em garagens. Oferece fiabilidade, fácil utilização e compatibilidade com controlo remoto ou aplicações móveis.",
          src: "/images/portaoBascul.webp",
        },
      ],
    },
    {
      id: 4,
      title: "Abertura de Portas",
      excerpt:
        "Serviço rápido e profissional de abertura de portas em situações de perda ou esquecimento de chaves, 24 horas por dia.",
      content:
        "A nossa equipa especializada garante a abertura de portas de forma segura e eficiente, sem causar danos desnecessários à fechadura ou à porta. Trabalhamos com diversos tipos de portas e fechaduras, oferecendo soluções práticas em casos de emergência.",
      descriptionList: [
        {
          id: 1,
          title: "Portas Residenciais",
          description:
            "Abertura rápida de portas de casas e apartamentos em situações de emergência, sem comprometer a segurança.",
          src: "/images/portaResidencial.webp",
        },
        {
          id: 2,
          title: "Portas Comerciais",
          description:
            "Soluções para estabelecimentos e escritórios, garantindo acesso imediato com total discrição e segurança.",
          src: "/images/portaComercial.webp",
        },
        {
          id: 3,
          title: "Portas Blindadas",
          description:
            "Serviço especializado para portas de alta segurança, realizado por técnicos com experiência em sistemas avançados.",
          src: "/images/portaBlindada.webp",
        },
      ],
    },
  ];

  return (
    <div className=" p-3 md:w-full mx-auto">
      <div>
        <h3 className="text-2xl font-semibold my-4 mx-6">
          Nossos Produtos e serviços
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          {services.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-slate-50 rounded-2xl flex flex-col gap-4 
          md:w-[450px]  shadow-md border border-slate-300"
            >
              <h4 className="text-2xl font-extrabold text-center text-indigo-950">
                {item.title}
              </h4>
              <p className="italic text-slate-800 text-center">
                {item.excerpt}
              </p>
              <p className="text-slate-900 text-base leading-relaxed text-center">
                {item.content}
              </p>

              <ul className="relative border-l-2 border-indigo-200 pl-6 space-y-6">
                {item.descriptionList.map((product) => (
                  <li key={product.id} className="relative">
                    <div className="flex items-start gap-4">
                      <Image
                        src={product.src}
                        alt={product.title}
                        width={50}
                        height={50}
                        className="rounded-md shadow"
                      />
                      <div>
                        <h4 className="text-base font-semibold text-slate-900">
                          {product.title}
                        </h4>
                        {/* <p className="text-sm text-slate-600">
                          {product.description}
                        </p> */}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
