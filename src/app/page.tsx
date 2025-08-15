import Carousel from "@/components/Carousel";
import ProductLink from "@/components/ProductLink";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <div className=" flex items-center justify-center bg-gray-100">
        <Carousel />
      </div>

      <div className="p-3 flex flex-col gap-6">
        <h1 className="text-3xl/tight text-center font-extrabold text-indigo-950">
          LisLock <br /> Segurança e qualidade na prestação de serviços!
        </h1>

        <ProductLink />
      </div>

      <WhyUs />
    </main>
  );
}
