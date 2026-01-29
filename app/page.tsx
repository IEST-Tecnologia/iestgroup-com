import Image from "next/image";
import MainImage from "@/assets/home-main.png";
import Section1Image from "@/assets/home-section1.png";
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div>
      <main className="bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
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
        </div>
      </main>
      <section className="bg-primary">
        <div className="flex justify-between items-center max-w-7xl mx-auto py-10">
          <div className="w-1/2 p-2.5 flex flex-col gap-5">
            <h2 className="font-bold uppercase leading text-white text-[32px]">
              O que fazemos
            </h2>

            <ul className="text-[28px] text-white font-bold *:hover:text-light-primary *:transition-colors *:duration-200 *:leading-[1.7em]">
              <li>
                <Link href="/consultoria-profissional" className="">
                  Consultoria Profissional
                </Link>
              </li>

              <li>
                <Link href="/bpo">BPO Contábil e Financeiro</Link>
              </li>
              <li>
                <Link href="/recursos-humanos">Recursos Humanos</Link>
              </li>
              <li>
                <Link href="/paralegal">Paralegal</Link>
              </li>
              <li>
                <Link href="/precos-de-transferencia">
                  Preços de Transferência
                </Link>
              </li>
              <li>
                <Link href="/servicos-digitais">Serviços Digitais</Link>
              </li>
            </ul>
            <Link href="/contato" className="mt-5">
              <Button variant="inverted">Saiba Mais</Button>
            </Link>
          </div>
          <div className="w-2/5 p-2.5">
            <Image src={Section1Image} alt="secao" />
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
}
