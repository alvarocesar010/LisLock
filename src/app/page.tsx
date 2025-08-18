import Carousel from "@/components/Carousel";
import OurServices from "@/components/OurServices";
import ProductLink from "@/components/ProductLink";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <div className=" flex items-center justify-center bg-gray-100">
        <Carousel />
      </div>

      <div className="p-3 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-indigo-900 text-center ">
          Segurança e qualidade na prestação de serviços!
        </h1>

        <ProductLink />
      </div>
      <WhyUs />
      <OurServices />
    </main>
  );
}
