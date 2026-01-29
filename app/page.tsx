import Image, { getImageProps } from "next/image";
import MainImage from "@/assets/home-main.png";
import Section1Image from "@/assets/home-section1.png";
import Section2Image from "@/assets/home-section2.png";
import Link from "next/link";
import Button from "@/components/Button";
import { getBackgroundImage } from "@/lib/utils";
import Contacts from "@/components/Contacts";

export default function Home() {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "",
    width: 1920,
    height: 827,
    src: "/home-section3.jpg",
  });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = { backgroundImage };

  return (
    <div>
      <main className="bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto py-6 md:py-10 px-4">
          <div className="w-full lg:w-1/2 p-2.5 flex flex-col gap-5">
            <h2 className="font-bold uppercase leading text-primary text-2xl md:text-[28px] lg:text-[32px]">
              Nossa história
            </h2>
            <p className="text-base md:text-lg lg:text-[19px] font-medium">
              Desde 2012, fornecendo serviços e soluções empresariais completas
              para multinacionais que buscam ingressar e prosperar no mercado
              brasileiro.
            </p>
            <Link href="/sobre-nos">
              <Button>Saiba mais</Button>
            </Link>
          </div>
          <div className="w-full lg:w-1/4 mt-6 lg:mt-0">
            <Image src={MainImage} alt="globo" />
          </div>
        </div>
      </main>
      <section className="bg-primary">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto py-6 md:py-10 px-4">
          <div className="w-full lg:w-1/2 p-2.5 flex flex-col gap-5">
            <h2 className="font-bold uppercase leading text-white text-2xl md:text-[28px] lg:text-[32px]">
              O que fazemos
            </h2>

            <ul className="text-xl md:text-2xl lg:text-[28px] text-white font-bold *:hover:text-light-primary *:transition-colors *:duration-200 *:leading-[1.7em]">
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
          <div className="w-full lg:w-2/5 p-2.5 mt-6 lg:mt-0">
            <Image src={Section1Image} alt="imagem seção 1" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto py-6 md:py-10 px-4">
          <div className="w-full lg:w-1/2 p-2.5 flex flex-col gap-5">
            <h2 className="font-bold uppercase leading text-primary text-2xl md:text-[28px] lg:text-[32px]">
              Nosso diferencial
            </h2>
            <p className="text-base md:text-lg lg:text-[19px] font-medium">
              O <strong className="font-bold">IEST Group</strong> conta com uma
              equipe altamente experiente e qualificada para atender às demandas
              em serviços empresariais.
            </p>
            <p className="text-base md:text-lg lg:text-[19px] font-medium">
              Nossos profissionais, além de possuírem profundo conhecimento
              técnico, são bilíngues e estão sempre atualizados com as
              tendências e necessidades do mercado, garantindo um atendimento de
              excelência.
            </p>
            <Link href="/sobre-nos">
              <Button>Saiba mais</Button>
            </Link>
          </div>
          <div className="w-full lg:w-3/8 mt-6 lg:mt-0">
            <Image src={Section2Image} alt="imagem seção 2" />
          </div>
        </div>
      </section>
      <section className="px-4 py-6 md:py-10">
        <h2 className="font-bold uppercase leading text-primary text-2xl md:text-[28px] lg:text-[32px]">
          Nossos Clientes
        </h2>
      </section>
      <section
        className="relative bg-center bg-no-repeat bg-cover px-4"
        style={style}
      >
        <div className="w-full  max-w-7xl mx-auto md:w-4/5 lg:w-3/5 py-6 md:py-10 p-2.5 flex flex-col gap-6 md:gap-10">
          <p className="font-medium leading-[1.3em] text-white text-2xl md:text-3xl lg:text-[35px]">
            Inicie seu negócio no Brasil com o IEST Group.
          </p>
          <h1 className="font-medium leading-[1.3em] text-white text-2xl md:text-3xl lg:text-[35px]">
            Expanda sua empresa para outros mercados com o IEST Group. Nós
            sabemos o caminho!
          </h1>
          <Link href="/contato" className="">
            <Button variant="inverted">Saiba mais</Button>
          </Link>
        </div>
      </section>
      <Contacts />
    </div>
  );
}
