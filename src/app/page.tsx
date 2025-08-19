import Carousel from "@/components/Carousel";
import OurServices from "@/components/OurServices";
import ProductLink from "@/components/ProductLink";
import WhyUs from "@/components/WhyUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LisLock",
  description:
    "LisLock oferece abertura de portas 24h em Lisboa, instalação de fechaduras convencionais e inteligentes, além de automatismos para portões.",
  alternates: {
    canonical: "https://www.lislock.pt/",
  },
};

export default function Home() {
  return (
    <section className="flex flex-col gap-2">
      <div className=" flex items-center justify-center bg-gray-100">
        <Carousel />
      </div>

      <div className="p-3 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-indigo-900 text-center ">
          Segurança e qualidade em abertura de portas, Automatismos, Fechaduras
          convencionais e inteligentes!
        </h1>
        <ProductLink />
      </div>
      <WhyUs />
      <OurServices />
    </section>
  );
}
