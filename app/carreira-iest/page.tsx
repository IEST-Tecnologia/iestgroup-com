import React from "react";
import BgCarreira from "@/assets/banner-carreira.png";
import { Metadata } from "next";
import JobForm from "@/components/JobForm";

export const metadata: Metadata = {
  title: "Carreira Iest",
};

export default function page() {
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgCarreira.src})` }}
      >
        <div className="min-h-100 w-full"></div>
      </section>
      <main className="py-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 px-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-blue-iest font-semibold">
              Por que trabalhar na IEST?
            </h1>
            <p className="text-md text-primary font-extralight">
              No Grupo IEST, acreditamos que o sucesso de uma empresa é
              construído por pessoas talentosas e apaixonadas pelo que fazem.
              Fundado em São Paulo em 2012, o Grupo IEST se dedica a auxiliar
              empresas multinacionais a entenderem e navegarem pelas
              complexidades do mercado brasileiro. Oferecemos uma gama de
              serviços na área de BPO e Consultorias.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl text-blue-iest font-semibold">
              Sua Carreira acontece aqui
            </h2>
            <p className="text-md text-primary font-extralight">
              No Grupo IEST, sua carreira realmente acontece. Valorizamos o
              crescimento e o desenvolvimento de nossos colaboradores,
              proporcionando um ambiente de trabalho dinâmico e desafiador, onde
              suas habilidades e conhecimentos são constantemente aprimorados.
              Buscamos perfis que tenham Soft Skills que se alinhem com os
              nossos valores. São bem vindos profissionais com habilidades de
              adaptação, flexibilidade e curiosos em aprender uma nova cultura.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl text-blue-iest font-semibold">
              Porque você deveria fazer parte do nosso time?
            </h2>

            <div className="text-md text-primary font-extralight">
              <ul className="list-disc ml-6 md:ml-12">
                <li className="text-primary text-md">
                  <strong className="font-semibold">
                    Desafios que Inspiram:
                  </strong>{" "}
                  Buscamos pessoas que gostam de desafios e estão sempre prontas
                  para superar obstáculos e encontrar soluções inovadoras.
                </li>
                <li className="text-primary text-md">
                  <strong className="font-semibold">
                    Ambiente Colaborativo:
                  </strong>{" "}
                  Incentivamos a colaboração e o trabalho em equipe, acreditando
                  que as melhores soluções surgem da união de talentos diversos.
                </li>
                <li className="text-primary text-md">
                  <strong className="font-semibold">
                    Desenvolvimento Contínuo:
                  </strong>{" "}
                  Investimos no desenvolvimento contínuo dos nossos
                  colaboradores, oferecendo treinamentos, workshops e
                  oportunidades de aprendizado que ajudam a expandir suas
                  habilidades e conhecimentos.
                </li>
                <li className="text-primary text-md">
                  <strong className="font-semibold">Impacto Real:</strong>{" "}
                  Trabalhando conosco, você terá a oportunidade de causar um
                  impacto real nas operações de empresas multinacionais,
                  contribuindo para o sucesso de grandes negócios no Brasil.
                </li>
                <li className="text-primary text-md">
                  <strong className="font-semibold">
                    Cultura de Inovação:
                  </strong>{" "}
                  Valorizamos a inovação e incentivamos nossos colaboradores a
                  pensarem fora da caixa, trazendo novas ideias e abordagens
                  para os desafios do dia a dia.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl text-blue-iest font-semibold">
              Junte-se a nós
            </h2>
            <p className="text-md text-primary font-extralight">
              Se você é uma pessoa que busca desafios, gosta de aprender e
              crescer continuamente, e deseja fazer parte de uma equipe que
              valoriza o talento e a dedicação, o Grupo IEST é o lugar certo
              para você. Venha construir uma carreira de sucesso conosco e faça
              a diferença no mundo dos negócios.
            </p>
            <p className="text-md text-primary font-semibold">
              Envie seu currículo e junte-se ao nosso banco de talentos. Estamos
              ansiosos para conhecer você!
            </p>
            <p className="text-md text-primary font-extralight">
              <strong className="font-semibold">Grupo IEST –</strong>{" "}
              Transformando desafios em oportunidades, juntos!
            </p>
          </div>
        </div>
      </main>
      <JobForm />
    </>
  );
}
