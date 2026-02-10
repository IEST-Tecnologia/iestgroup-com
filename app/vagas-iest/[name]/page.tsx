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
import Tiptap from "@/components/Tiptap";

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
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Informações gerais</h2>
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
          <Tiptap />
        </div>
      </main>
    </>
  );
}
