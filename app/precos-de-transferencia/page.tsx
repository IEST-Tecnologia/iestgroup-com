import Image from "next/image";
import PageHeroSection from "@/components/PageHeroSection";
import FlipCard from "@/components/FlipCard";
import BannerPrecos from "@/assets/servicos/banner-precos.jpg";
import BgPrecos from "@/assets/servicos/bg-precos.jpg";
import ArrowDown from "@/assets/sobre-nos/arrow-down.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preços de Transferência",
};

export default function page() {
  return (
    <>
      <PageHeroSection
        backgroundBannerImage={BgPrecos}
        secondBannerImage={BannerPrecos}
        secondBannerAlt="Um banner com uma mãpo entendendo um cartão e outra estendendo uma sacola"
        service={true}
        shadowbg={true}
      >
        <h1 className="w-full text-primary text-3xl font-bold text-center md:text-left uppercase mb-5">
          Preços de Transferência
        </h1>
        <h2 className="text-black text-xl md:text-2xl text-center md:text-left font-semibold mb-10">
          Com uma equipe de profissionais provenientes das renomadas Big Four e
          vasta experiência em Preços de Tranferência (ou Transfer Pricing), o
          IEST Group está preparado para garantir que sua empresa opere com
          segurança e conformidade, evitando problemas tributários.
        </h2>
        <div className="text-lg font-base mb-8 text-justify md:text:left md:columns-2 md:gap-12.5 [&>p]:mb-6">
          <p>
            Atendemos às demandas de clientes que realizam transações com partes
            vinculadas no exterior ou com terceiros localizados em países de
            tributação favorecida (paraísos fiscais) ou sob regimes fiscais
            privilegiados,
          </p>
          <p>
            assegurando total conformidade com as regras de Preços de
            Transferência. Nossa expertise garante análises precisas e soluções
            eficazes para suas necessidades internacionais.
          </p>
        </div>
        <div className="max-w-164 z-20 bg-blue-iest py-7.5 px-10 flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              A nossa assessoria garante a aplicação da metodologia adequada
              para prevenir os ajustes fiscais.
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
      <section className="w-full bg-[#f5f5f5] py-10 mt-10">
        <div className="max-w-277.75 mx-auto">
          <div className="flex justify-center">
            <h3 className="w-full md:w-3/5 text-primary font-bold text-xl md:text-3xl text-center">
              As seguintes transações estão sujeitas às regras de preços de
              transferência:
            </h3>
          </div>
          <div className="flex flex-col md:flex-row mt-8">
            <FlipCard
              frontText="Importação de bens, direitos ou serviços"
              backText="Exportação de bens, direitos ou serviços"
            />
            <FlipCard
              frontText="Receitas financeiras de juros decorrentes de contrato mútuo"
              backText="Despesas financeiras de juros decorrentes de contrato mútuo"
            />
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-10 my-10">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-primary font-medium text-xl md:text-3xl text-center px-2">
            Segue abaixo demonstrativo de todos os serviços que nós prestamos
            dentro da nossa Consultoria de Preços de Transferência:
          </h3>
        </div>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-lg md:text-2xl font-semibold mb-4 ">
              01) Elaboração dos cálculos de preços de transferência
            </h2>
            <p className="text-sm md:text-md font-light">
              Desenvolvemos cálculos detalhados, assegurando precisão e
              conformidade com as regulamentações vigentes.
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-lg md:text-2xl font-semibold mb-4 ">
              2) Revisão das Metodologias Aplicadas
            </h2>
            <p className="text-sm md:text-md font-light">
              Analisamos as metodologias empregadas nos cálculos de preços de
              transferência, garantindo aderência às normas e otimização dos
              processos.
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-lg md:text-2xl font-semibold mb-4 ">
              3) Planejamento e Monitoramento
            </h2>
            <p className="text-sm md:text-md font-light">
              Oferecemos planejamento estratégico e monitoramento contínuo dos
              cálculos de preços de transferência, com o objetivo de estimar e
              prevenir ajustes fiscais indesejados.
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-lg md:text-2xl font-semibold mb-4 ">
              4) Treinamentos e Palestras
            </h2>
            <p className="text-sm md:text-md font-light">
              Realizamos capacitações e palestras personalizadas sobre o tema,
              promovendo o entendimento técnico e estratégico para equipes e
              gestores.
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-lg md:text-2xl font-semibold mb-4 ">
              5) Atendimento à Fiscalização
            </h2>
            <p className="text-sm md:text-md font-light">
              Prestamos suporte completo durante auditorias e fiscalizações,
              assegurando que as demandas dos órgãos reguladores sejam atendidas
              com eficiência e transparência.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
