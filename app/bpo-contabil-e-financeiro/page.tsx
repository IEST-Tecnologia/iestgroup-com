import Image from "next/image";
import PageHeroSection from "@/components/PageHeroSection";
import BannerBpo from "@/assets/servicos/banner-bpo.png";
import BgBpo from "@/assets/servicos/bg-bpo.jpg";
import SeloPQCE from "@/assets/servicos/selo-pqec.png";
import ArrowDown from "@/assets/sobre-nos/arrow-down.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'BPO Contábil e Financeiro'
}

export default function page() {
  return (
    <>
      <PageHeroSection
        backgroundBannerImage={BgBpo}
        secondBannerImage={BannerBpo}
        secondBannerAlt="Uma mão feminina navegando no computador"
        service={true}
        shadowbg={true}
      >
        <h1 className="w-full text-blue-iest text-3xl font-bold text-center md:text-left uppercase mb-5">
          BPO Contábil e Financeiro
        </h1>
        <h2 className="text-black text-xl md:text-2xl text-center md:text-left font-semibold mb-10">
          No Brasil, devido a rigorosa supervisão dos entes estatais, as
          empresas são obrigadas a prestar uma grande quantidade de declarações
          contábeis, fiscais e trabalhistas, o que demanda grande volume de
          trabalho e podem causar imensos problemas para as empresas.
        </h2>
        <div className="text-lg text-primary font-base mb-8 text-justify md:text-left">
          <p>
            A contratação de serviços de BPO (Business Process Outsourcing)
            oferece diversas vantagens estratégicas para empresas que buscam
            otimizar recursos e aumentar a eficiência operacional. Uma das
            principais vantagens é a redução de custos, pois ao terceirizar
            processos, as empresas economizam com infraestrutura, salários,
            benefícios e treinamento, além de contar com custos mais
            previsíveis.
          </p>
          <p>
            Os serviços de BPO também ajudam a reduzir riscos. Nossa equipe é
            altamente qualificada e conhecedora das regulamentações brasileiras,
            minimizando erros e penalidades. Outro benefício significativo é a
            melhoria na qualidade e eficiência, uma vez que processos
            terceirizados são otimizados para garantir entregas de alto padrão e
            no prazo estipulado.
          </p>
          <p>Confira abaixo todos os nossos serviços de BPO.</p>
        </div>
        <div className="max-w-164 z-20 bg-blue-iest py-7.5 px-10 flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              Segue abaixo demonstrativo de todos os serviços que nós prestamos
              na matéria de outsourcing:
            </p>
          </div>
          <div>
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
              1) BPO Contábil
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-sm md:text-md text-primary font-light">
                ● Aplicação dos dispositivos legais vigentes, sejam federais,
                estaduais ou municipais;
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                ● Elaboração das demonstrações contábeis (Balancetes, Balanços
                Patrimoniais, Demonstração do Resultado do Exercício);
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                ● Elaboração das obrigações acessórias conforme as
                características da apuração do lucro da empresa (SPED Contábil);
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                ● Todo suporte exigido pela legislação vigente.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-blue-iest text-xl md:text-2xl font-semibold mb-4 ">
              2) BPO Fiscal
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-sm md:text-md text-primary font-light">
                ● Aplicação dos dispositivos legais vigentes, federais,
                estaduais e municipais;
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                ● Escrituração dos registros fiscais dos tributos e elaboração
                das guias de informação e de recolhimento dos tributos devidos;
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                ● Elaboração das obrigações acessórias conforme as
                características da apuração do lucro da empresa (SPED);
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                ● Atendimento das demais exigências previstas em atos
                normativos.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-blue-iest text-xl md:text-2xl font-semibold mb-4 ">
              3) BPO Departamento pessoal
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-sm md:text-md text-primary font-light">
                ● Registro e controle de documentos funcionais;
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                ● Elaboração das demonstrações contábeis (Balancetes, Balanços
                Patrimoniais, Demonstração do Resultado do Exercício);
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                ● Preparo de folha de pagamento;
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                ● Preparo de guias de recolhimento de encargos sociais;
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                ● Controle de informações trabalhistas para órgãos públicos;
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                ● Execução de rotinas trabalhistas;
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                ● Controle e administração de benefícios sociais;
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                ● Aplicação da legislação vigente.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
              <div className="max-w-125 flex flex-col justify-center items-center p-4 md:p-0">
                <h2 className="text-blue-iest text-3xl font-bold mb-4 text-left w-full">
                  Certificação
                </h2>
                <p className="text-md text-primary font-light">
                  A IEST Serviços Contábeis é certificada pelo{" "}
                  <strong className="font-bold">
                    PQEC – Programa de Qualidade
                  </strong>{" "}
                  nas <strong className="font-bold">Empresas Contábeis</strong>,
                  atestando nosso compromisso com a excelência e a conformidade
                  nos serviços contábeis prestados.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                className="w-auto max-h-125"
                src={SeloPQCE}
                alt="Selo do Programa de Qualificação em Excelencia contínua"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
