import Bg from "@/assets/vagas/banner-vaga-individual.jpg";
import IconLocation from "@/assets/vagas/location.svg";
import IconBriefcase from "@/assets/vagas/briefcase.svg";
import IconCompany from "@/assets/vagas/company.svg";
import IconUserLocation from "@/assets/vagas/user-location.svg";
import IconTimer from "@/assets/vagas/timer.svg";
import IconTarget from "@/assets/vagas/target.svg";
import IconRank from "@/assets/vagas/rank.svg";
import IconMoney from "@/assets/vagas/money.svg";
import InfoItem from "@/components/InfoItem";
import JobForm from "@/components/JobForm";

export default async function page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  console.log(name);
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Bg.src})` }}
      >
        <div className="min-h-65 max-w-7xl mx-auto flex items-center">
          <h1 className="text-3xl font-bold text-white uppercase">
            Representante Comercial
          </h1>
        </div>
      </section>
      <main className="py-8">
        <div className="max-w-262.5 mx-auto">
          <div className="flex flex-col gap-4 pb-8">
            <h2 className="text-2xl font-semibold">Informações gerais</h2>
            <div className="ml-4 flex flex-col gap-2">
              <InfoItem
                icon={IconCompany}
                iconAlt="Icone de empresa"
                label="Empresa"
                value="IEST Group"
              />
              <InfoItem
                icon={IconLocation}
                iconAlt="Icone de localização"
                label="Localidade"
                value="Campinas, SP"
              />
              <InfoItem
                icon={IconUserLocation}
                iconAlt="Icone de modelo de trabalho"
                label="Modelo de trabalho"
                value="Presencial"
              />
              <InfoItem
                icon={IconBriefcase}
                iconAlt="Icone de maleta"
                label="Tipo de contrato"
                value="CLT"
              />
              <InfoItem
                icon={IconTimer}
                iconAlt="Icone de relógio"
                label="Jornada"
                value="Integral"
              />
              <InfoItem
                icon={IconTarget}
                iconAlt="Icone de alvo"
                label="Área de atuação"
                value="Consultoria empresarial"
              />
              <InfoItem
                icon={IconRank}
                iconAlt="Icone de nível"
                label="Nível"
                value="Especialista"
              />
              <InfoItem
                icon={IconMoney}
                iconAlt="Icone de dinheiro"
                label="Salário"
                value="A combinar"
              />
            </div>
          </div>
          <div className="py-8 border-t border-b border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">
              Sobre a oportunidade
            </h2>
            <p className="text-md font-extralight">
              Estamos apoiando uma empresa multinacional em fase de estruturação
              no Brasil na contratação de um(a) profissional para atuar na área
              financeira, com foco em organização de processos, controle de
              pagamentos e apoio à consolidação da operação local.
            </p>
          </div>
          <div className="py-8 border-b border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">
              Principais responsabilidades
            </h2>
            <ul className="list-disc ml-12 gap-1 flex flex-col font-extralight">
              <li>
                Desenvolver novos negócios e executar vendas no mercado
                brasileiro de agroquímicos;
              </li>
              <li>
                Prospectar ativamente novos clientes (distribuidores,
                cooperativas e produtores);
              </li>
              <li>Realizar visitas comerciais presenciais e remotas;</li>
              <li>
                Construir e manter relacionamento com decisores (compras,
                proprietários e influenciadores);
              </li>
              <li>
                Identificar necessidades dos clientes, negociar condições
                comerciais e fechar pedidos;
              </li>
              <li>Elaborar relatórios de visitas e reuniões em até 48h;</li>
              <li>
                Preparar relatórios semanais de atividades, resultados, desafios
                e planos de ação;
              </li>
              <li>Realizar pesquisas de mercado e análise de concorrência;</li>
              <li>
                Apoiar a identificação de produtos com potencial para o mercado
                brasileiro;
              </li>
              <li>
                Atuar no pós-venda, interfaceando com a matriz em temas
                comerciais e operacionais;
              </li>
              <li>
                Apoiar clientes em processos de comércio exterior, logística e
                desembaraço aduaneiro.
              </li>
            </ul>
          </div>
          <div className="py-8 border-b border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">
              Requisitos obrigatórios
            </h2>
            <ul className="list-disc ml-12 gap-1 flex flex-col font-extralight">
              <li>
                Experiência comprovada em vendas de agroquímicos (herbicidas,
                inseticidas e/ou fungicidas);
              </li>
              <li>
                Vivência comercial com distribuidores, cooperativas e grandes
                clientes do agro;
              </li>
              <li>
                Forte perfil comercial, com foco em prospecção, negociação e
                fechamento;
              </li>
              <li>Disponibilidade para viagens frequentes em todo o Brasil;</li>
              <li>
                Capacidade de atuação autônoma, com organização e foco em
                resultados;
              </li>
              <li>
                Inglês fluente, para comunicação e reportes diários à matriz.
              </li>
            </ul>
          </div>
          <div className="py-8 border-b border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">Benefícios</h2>
            <ul className="list-disc ml-12 gap-1 flex flex-col font-extralight">
              <li>VR/VA</li>
              <li>Vale Transporte</li>
              <li>Seguro de Vida</li>
              <li>TotalPass</li>
            </ul>
          </div>
          <div className="py-8 border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">
              Etapas do processo seletivo
            </h2>
            <ol className="list-decimal ml-12 gap-1 flex flex-col font-extralight">
              <li>Triagem de currículos</li>
              <li>Entrevista com o IEST Group</li>
              <li>Entrevista com a empresa</li>
              <li>Proposta e admissão</li>
            </ol>
          </div>
        </div>
      </main>
      <section>
        <JobForm />
      </section>
    </>
  );
}
