import Image from "next/image";
import PageHeroSection from "@/components/PageHeroSection";
import BannerConsulting from "@/assets/servicos/banner-consultoria-profissional.png";
import BannerQuemSomos from "@/assets/sobre-nos/banner-quem-somos.jpg";
import ArrowDown from "@/assets/sobre-nos/arrow-down.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoria Profissional",
};

export default function page() {
  return (
    <>
      <PageHeroSection
        backgroundBannerImage={BannerQuemSomos}
        secondBannerImage={BannerConsulting}
        secondBannerAlt="Dois homens sentados em uma cadeira de escritório"
        service={true}
        shadowbg={false}
      >
        <h1 className="w-full text-primary text-3xl font-bold text-center md:text-left uppercase mb-5">
          Consultoria Profissional
        </h1>
        <h2 className="text-black text-xl md:text-2xl text-center md:text-left font-semibold mb-10">
          O IEST Group possui uma equipe altamente qualificada e experiente,
          pronta para oferecer uma ampla gama de serviços de Consultoria
          Profissional. Nosso objetivo é elevar a eficiência do planejamento das
          empresas, minimizando riscos e identificando as melhores oportunidades
          de mercado.
        </h2>
        <div className="text-lg font-base mb-8 text-justify md:text:left">
          <p>
            Contamos com profissionais flexíveis, bilíngues e com profundo
            conhecimento técnico, além de uma compreensão abrangente das
            culturas chinesa e brasileira, garantindo um atendimento
            personalizado e alinhado às necessidades dos nossos clientes. Com
            foco em qualidade e excelência, estamos preparados para ajudar você
            e sua empresa a alcançar os resultados que deseja.
          </p>
        </div>
        <div className="max-w-164 z-20 bg-blue-iest py-7.5 px-10 flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              Segue abaixo demonstrativo de todos os serviços que nós prestamos
              na matéria de consultoria profissional:
            </p>
          </div>
          <div className="text-6xl">
            <Image
              className="w-16 md:w-36"
              src={ArrowDown}
              alt="ícone de uma seta apontando para baixo"
            />
          </div>
        </div>
      </PageHeroSection>
      <div className="flex flex-col gap-10 my-10">
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              1) Consultoria Tributária
            </h2>
            <p className="text-sm md:text-md font-light">
              {" "}
              Realizamos pesquisas e análises da jurisprudência tributária
              brasileira, identificando riscos e oportunidades de maneira
              eficiente, fornecendo informações estratégicas que apoiem nossos
              clientes na tomada de decisões.
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              2) Consultoria Contábil
            </h2>
            <p className="text-sm md:text-md font-light">
              Oferecemos suporte no controle e gestão de empresas por meio de
              análises contábeis e implementação de procedimentos de controle
              interno, assegurando a saúde financeira e operacional dos
              negócios.
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              3) Consultoria de Mercado
            </h2>
            <p className="text-sm md:text-md font-light">
              Elaboramos análises e estudos de mercado personalizados,
              fornecendo informações precisas e relevantes para facilitar
              decisões empresariais mais seguras e assertivas.
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              4) Pesquisas de Informações
            </h2>
            <p className="text-sm md:text-md font-light">
              Identificamos e analisamos dados estratégicos sobre temas
              essenciais para o desenvolvimento e expansão de negócios.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
