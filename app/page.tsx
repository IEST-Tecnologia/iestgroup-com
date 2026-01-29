import Image from "next/image";
import MainImage from "@/assets/home-main.png";
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="*:max-w-7xl *:mx-auto">
      <main className="mx-10 flex justify-between items-center">
        <div className="w-1/2 p-2.5 flex flex-col gap-5">
          <h2 className="font-bold uppercase leading text-primary text-[32px]">
            Nossa história
          </h2>
          <p className="text-[19px] font-medium">
            Desde 2012, fornecendo serviços e soluções empresariais completas
            para multinacionais que buscam ingressar e prosperar no mercado
            brasileiro.
          </p>
          <Link href="/sobre-nos">
            <Button>Saiba mais</Button>
          </Link>
        </div>
        <div className="w-1/4">
          <Image src={MainImage} alt="globo" />
        </div>
      </main>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
}
