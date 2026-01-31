import Image from "next/image";
import PageHeroSection from "@/components/PageHeroSection";
import BannerParalegal from "@/assets/servicos/banner-paralegal.png";
import BgParalegal from "@/assets/servicos/bg-paralegal.jpg";
import ArrowDown from "@/assets/sobre-nos/arrow-down.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Paralegal'
}

export default function page() {
  return (
    <>
      <PageHeroSection
        backgroundBannerImage={BgParalegal}
        secondBannerImage={BannerParalegal}
        secondBannerAlt="Dois homens apontando para um computador"
        service={true}
        shadowbg={true}
      >
        <h1 className="w-full text-blue-iest text-3xl font-bold text-center md:text-left uppercase mb-5">
          Paralegal
        </h1>
        <h2 className="text-black text-xl md:text-2xl text-center md:text-left font-semibold mb-10">
          O Brasil é conhecido como um dos países mais complexos para a abertura
          de um CNPJ, requisito legal indispensável para a constituição de
          empresas.
        </h2>
        <div className="text-lg text-primary font-base mb-8 text-justify md:text:left">
          <p>
            Para auxiliar nesse processo, oferecemos aos nossos clientes um
            serviço completo de abertura de empresas. Auxiliamos em cada etapa,
            desde a escolha da estrutura societária mais adequada, levando em
            conta as diversas opções disponíveis, até a análise detalhada dos
            impactos fiscais associados a cada alternativa.
          </p>
          <p>
            Nosso objetivo é simplificar essa tarefa complexa, analisando todos
            os cenários possíveis e fornecendo aos investidores todas as
            informações relevantes para que possam tomar decisões informadas e
            estratégicas. Com nossa expertise, garantimos um processo seguro,
            eficiente e alinhado às necessidades do seu negócio.
          </p>
        </div>
        <div className="max-w-164 z-20 bg-blue-iest py-7.5 px-10 flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              Segue abaixo demonstrativo com nossos serviços relacionados a
              abertura de empresa:
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
            <h2 className="text-blue-iest text-xl md:text-2xl font-semibold mb-4 ">
              1) Abertura de Empresas
            </h2>
            <p className="text-sm md:text-md text-primary font-light">
              Oferecemos expertise e suporte completo no processo de abertura de
              empresas, com soluções personalizadas que atendem às necessidades
              específicas de cada cliente.
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-blue-iest text-xl md:text-2xl font-semibold mb-4 ">
              2) Endereço Provisório
            </h2>
            <p className="text-sm md:text-md text-primary font-light">
              Disponibilizamos espaço e serviços para a abertura de empresas,
              incluindo o recebimento de correspondências, garantindo
              praticidade e eficiência.
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-blue-iest text-xl md:text-2xl font-semibold mb-4 ">
              3) Obtenção de Licenças
            </h2>
            <p className="text-sm md:text-md text-primary font-light">
              Prestamos suporte na obtenção de alvarás de funcionamento e
              licenças específicas, como RADAR para comércio exterior,
              certificação do Inmetro, Anvisa, entre outras, assegurando
              conformidade com as exigências legais.
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-blue-iest text-xl md:text-2xl font-semibold mb-4 ">
              4) Representante
            </h2>
            <p className="text-sm md:text-md text-primary font-light">
              Atuamos como procuradores de sócios estrangeiros e representantes
              legais no Brasil, facilitando a interação com órgãos reguladores e
              garantindo a conformidade jurídica.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
