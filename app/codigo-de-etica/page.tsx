import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Código de ética",
};

function SectionComponent({
  title,
  children,
  last,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-6 font-light pb-6 leading-6 px-4 md:px-0 ${last ? "mb-0" : "border-b-2 border-[#DADADA] mb-6"}`}
    >
      <h2 className="font-bold text-md">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default function page() {
  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="mb-6 px-4 md:px-0">
          <h1 className="text-3xl text-primary font-semibold">
            Código de Ética e Conduta – Grupo IEST
          </h1>
        </div>
        <SectionComponent title="1. Introdução">
          <>
            <p className="text-md">
              O Grupo IEST tem como princípio atuar de forma íntegra,
              responsável e transparente em todas as suas relações.
            </p>
            <p className="text-md">
              Este Código de Ética e Conduta define os valores que orientam
              nossas ações e estabelece diretrizes para colaboradores, parceiros
              e fornecedores, reforçando nosso compromisso com a ética, o
              respeito às pessoas, a sustentabilidade e o desenvolvimento da
              sociedade.
            </p>
          </>
        </SectionComponent>
        <SectionComponent title="2. Nossos Valores">
          <ul className="list-disc ml-12">
            <li className="text-md">Agir com integridade</li>
            <li className="text-md">Busca por Excelência</li>
            <li className="text-md">
              Atuar como parte integrante da organização
            </li>
            <li className="text-md">Importar-se com as Pessoas</li>
            <li className="text-md">Satisfação do Cliente</li>
          </ul>
        </SectionComponent>
        <SectionComponent title="3. Relações no Ambiente de Trabalho">
          <ul className="list-disc ml-12">
            <li className="text-md">
              Promover um ambiente seguro, saudável e livre de discriminação.
            </li>
            <li className="text-md">
              Valorizar a diversidade, assegurando igualdade de oportunidades.
            </li>
            <li className="text-md">
              Rejeitar qualquer forma de assédio, abuso ou violência.
            </li>
            <li className="text-md">
              Estimular a colaboração, o aprendizado e a troca de conhecimento.
            </li>
          </ul>
        </SectionComponent>
        <SectionComponent title="4. Relacionamento com Clientes e Parceiros">
          <ul className="list-disc ml-12">
            <li className="text-md">
              Atuar com transparência e profissionalismo em todas as interações.
            </li>
            <li className="text-md">
              Garantir confidencialidade e proteção de dados.
            </li>
            <li className="text-md">
              Cumprir prazos, contratos e compromissos assumidos.
            </li>
            <li className="text-md">
              Oferecer serviços de qualidade, buscando sempre superar
              expectativas.
            </li>
          </ul>
        </SectionComponent>
        <SectionComponent title="5. Relacionamento com a Sociedade e o Meio Ambiente">
          <ul className="list-disc ml-12">
            <li className="text-md">
              Atuar com responsabilidade socioambiental.
            </li>
            <li className="text-md">
              Promover iniciativas sustentáveis e de impacto positivo.
            </li>
            <li className="text-md">
              Contribuir para o desenvolvimento das comunidades em que atuamos.
            </li>
            <li className="text-md">
              Combater práticas ilegais, corrupção e qualquer forma de
              exploração.
            </li>
          </ul>
        </SectionComponent>
        <SectionComponent title="6. Conflito de Interesses e Conduta Profissional">
          <ul className="list-disc ml-12">
            <li className="text-md">
              Agir sempre no melhor interesse do Grupo IEST, evitando situações
              de conflito pessoal ou profissional.
            </li>
            <li className="text-md">
              Utilizar recursos da empresa de forma ética e responsável.
            </li>
            <li className="text-md">
              Proteger informações confidenciais, evitando seu uso indevido.
            </li>
            <li className="text-md">
              Rejeitar presentes ou benefícios que possam influenciar decisões
              de negócio.
            </li>
          </ul>
        </SectionComponent>
        <SectionComponent title="7. Cumprimento das Leis e Normas">
          <ul className="list-disc ml-12">
            <li className="text-md">
              Respeitar a legislação vigente em todas as áreas de atuação.
            </li>
            <li className="text-md">
              Cumprir normas internas e regulamentos aplicáveis ao setor.
            </li>
            <li className="text-md">
              Adotar boas práticas de governança corporativa e compliance.
            </li>
          </ul>
        </SectionComponent>
        <SectionComponent title="8. Canal de Ética">
          <>
            <p className="text-md">
              O Grupo IEST disponibiliza um canal confidencial e seguro para
              registro de dúvidas, denúncias ou situações que possam violar este
              Código de Ética.
            </p>
            <p className="text-md">
              Todas as manifestações serão analisadas com imparcialidade e
              tratadas com respeito e sigilo.
            </p>
          </>
        </SectionComponent>
        <SectionComponent title="9. Compromisso Final" last>
          <>
            <p className="text-md">
              Este Código de Ética e Conduta reflete os princípios que guiam a
              atuação do Grupo IEST.
            </p>
            <p className="text-md">
              Cada colaborador, parceiro e fornecedor é responsável por
              conhecer, respeitar e aplicar essas diretrizes no dia a dia.
            </p>
            <p className="text-md">
              Agindo com ética, construímos juntos uma empresa mais forte, justa
              e sustentável.
            </p>
          </>
        </SectionComponent>
      </div>
    </main>
  );
}
