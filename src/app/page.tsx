import Carousel from "@/components/Carousel";
import ProductLink from "@/components/ProductLink";

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <div className=" flex items-center justify-center bg-gray-100">
        <Carousel />
      </div>

      <div className="p-3 flex flex-col gap-6">
        <h1 className="text-3xl/tight font-semibold text-center ">
          LisLock <br /> Segurança e qualidade na prestação de serviços!
        </h1>

        <ProductLink />
      </div>

      <div className="bg-indigo-50">
        <h2>Por que escolher a LisLock?</h2>
        <p>Temos técnicos certificados para te atender</p>
        <p>Preços justos e sem surpresas</p>
        <p>Pagamento facilitado (Cartão e MB Way)</p>
        <p>Produtos com garantia</p>
      </div>
    </main>
  );
}
