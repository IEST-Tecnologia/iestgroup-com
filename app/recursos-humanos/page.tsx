import Image from "next/image";
import PageHeroSection from "@/components/PageHeroSection";
import BannerRh from "@/assets/servicos/banner-rh.png";
import BgRh from "@/assets/servicos/bg-rh.jpg";
import ArrowDown from "@/assets/sobre-nos/arrow-down.svg";

export default function page() {
  return (
    <>
      <PageHeroSection
        backgroundBannerImage={BgRh}
        secondBannerImage={BannerRh}
        secondBannerAlt="Cumprimento"
        service={true}
        shadowbg={true}
      >
        <h1 className="w-full text-blue-iest text-3xl font-bold text-center md:text-left uppercase mb-5">
          Recursos Humanos
        </h1>
        <h2 className="text-black text-xl md:text-2xl text-center md:text-left font-semibold mb-10">
          Se sua empresa busca crescer no Brasil ou na China com uma equipe de
          mão de obra especializada, o IEST Group tem a solução!
        </h2>
        <div className="text-lg text-primary font-base mb-8 text-justify md:text:left">
          <p>
            Contamos com uma equipe altamente qualificada em Gestão de Recursos
            Humanos, preparada para oferecer serviços de excelência e atender às
            necessidades específicas de nossos parceiros. Estamos prontos para
            ajudar sua empresa a alcançar seus objetivos com eficiência e
            qualidade.
          </p>
        </div>
        <div className="max-w-164 z-20 bg-blue-iest py-7.5 px-10 flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              Segue abaixo o demonstrativo dos nossos serviços de RH:
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
              1) Recrutamento
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-sm md:text-md text-primary font-light">
                Auxiliamos empresas chinesas a encontrar colaboradores que
                atendam aos perfis desejados, através de plataformas para busca
                de profissionais bilíngues Português-Mandarim. Além disso,
                contamos com a parceria de empresas especializadas em
                headhunting, que nos apoiam na busca por profissionais.
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                Desde de 2016, organizamos a Feira de Recrutamento de Empresas
                Chinesas. Em todas as edições o evento contou com a participação
                de diversas multinacionais chinesas, incluindo empresas
                renomadas como Three Gorges, State Grid, Huawei, ZTE, CNOOC,
                XCMG, Nuctech, BYD, 99, entre outras.
              </p>
              <p className="text-sm md:text-md text-primary font-light">
                Esses eventos demonstram a eficácia do IEST Group na área de
                recrutamento, fortalecendo nossa capacidade de auxiliar no
                recrutamento de profissionais altamente qualificados.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-blue-iest text-xl md:text-2xl font-semibold mb-4 ">
              2) Global Mobility Services
            </h2>
            <ul className="list-disc ml-6 md:ml-12 text-sm md:text-md text-primary font-light">
              <li>
                <strong className="font-bold">Emissão de Vistos:</strong>{" "}
                Suporte completo para a obtenção de vistos, incluindo categorias
                como administrador, trabalho, técnico, entre outros, garantindo
                conformidade com as regulamentações locais.
              </li>
              <li>
                <strong className="font-bold">Assessoria Tributária:</strong>{" "}
                Auxílio na elaboração de declarações de imposto de renda para
                pessoas físicas expatriadas, assegurando precisão e conformidade
                tributária.
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-blue-iest text-xl md:text-2xl font-semibold mb-4 ">
              3) Consultoria Trabalhista
            </h2>
            <ul className="list-disc ml-6 md:ml-12 text-sm md:text-md text-primary font-light">
              <li>
                <strong className="font-bold">
                  Elaboração e Revisão de Contratos:
                </strong>{" "}
                Desenvolvimento e análise de contratos trabalhistas, garantindo
                alinhamento com as legislações vigentes.
              </li>
              <li>
                <strong className="font-bold">
                  Elaboração e Revisão de Normas Internas:
                </strong>
                Criação e atualização de políticas internas para promover
                conformidade e organização no ambiente corporativo.
              </li>
              <li>
                <strong className="font-bold">
                  Gestão de Programas de PLR:
                </strong>
                Elaboração de contratos para Programas de Participação nos
                Lucros e Resultados (PLR), além de acompanhamento junto ao
                sindicato da categoria para assegurar validação e conformidade.
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-blue-iest text-xl md:text-2xl font-semibold mb-4 ">
              4) Terceirização.
            </h2>
            <p className="text-sm md:text-md text-primary font-light mb-8">
              Com a reforma da legislação trabalhista no Brasil, que permitiu a
              terceirização de atividades-fim, passamos a oferecer serviços
              especializados de terceirização de Recursos Humanos (RH). Essa
              solução se tornou uma alternativa viável para empresas que ainda
              não possuem uma subsidiária no país.
            </p>
            <p className="text-sm md:text-md text-primary font-light">
              Entre os serviços que disponibilizamos estão:
            </p>
            <ul className="list-disc ml-6 md:ml-12 text-sm md:text-md text-primary font-light">
              <li>
                <strong className="font-bold">
                  Elaboração e Revisão de Contratos:
                </strong>{" "}
                Desenvolvimento e análise de contratos trabalhistas, garantindo
                alinhamento com as legislações vigentes.
              </li>
              <li>
                <strong className="font-bold">
                  Elaboração e Revisão de Normas Internas:
                </strong>
                Criação e atualização de políticas internas para promover
                conformidade e organização no ambiente corporativo.
              </li>
              <li>
                <strong className="font-bold">
                  Gestão de Programas de PLR:
                </strong>
                Elaboração de contratos para Programas de Participação nos
                Lucros e Resultados (PLR), além de acompanhamento junto ao
                sindicato da categoria para assegurar validação e conformidade.
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-blue-iest text-xl md:text-2xl font-semibold mb-4 ">
              5) Departamento Pessoal
            </h2>
            <p className="text-sm md:text-md text-primary font-light mb-4">
              Oferecemos serviços completos e especializados na gestão de
              Departamento Pessoal, garantindo eficiência e conformidade com a
              legislação trabalhista vigente. Nossos serviços incluem:
            </p>
            <ul className="list-disc ml-6 md:ml-12 text-sm md:text-md text-primary font-light">
              <li>
                <strong className="font-bold">Administração de Pessoal:</strong>{" "}
                Gestão completa de processos relacionados aos colaboradores,
                desde a admissão até o desligamento.
              </li>
              <li>
                <strong className="font-bold">
                  Controle e Cálculo de Férias:
                </strong>
                Planejamento e cálculo preciso para assegurar o cumprimento das
                normas legais.
              </li>
              <li>
                <strong className="font-bold">
                  Controle de Exames Ocupacionais:
                </strong>
                Monitoramento e agendamento de exames admissionais, periódicos e
                demissionais, conforme exigências legais.
              </li>
              <li>
                <strong className="font-bold">
                  Gerenciamento de Folha de Pagamento:
                </strong>
                Processamento e administração da folha, com foco em precisão e
                regularidade.
              </li>
              <li>
                <strong className="font-bold">
                  Gerenciamento de Benefícios:
                </strong>
                Coordenação eficiente de benefícios corporativos, garantindo
                satisfação dos colaboradores.
              </li>
              <li>
                <strong className="font-bold">Obrigações Acessórias:</strong>
                Elaboração e envio de declarações obrigatórias.
              </li>
              <li>
                <strong className="font-bold">
                  Conformidade com a Legislação Vigente:
                </strong>
                Procedimentos realizados com base nas normas legais, reduzindo
                riscos e garantindo segurança jurídica.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
