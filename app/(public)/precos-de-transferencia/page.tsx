import Image from "next/image";
import PageHeroSection from "@/components/PageHeroSection";
import FlipCard from "@/components/FlipCard";
import BannerPrecos from "@/assets/servicos/banner-precos.jpg";
import BgPrecos from "@/assets/servicos/bg-precos.jpg";
import ArrowDown from "@/assets/sobre-nos/arrow-down.svg";
import { Metadata } from "next";
import Contacts from "@/components/Contacts";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Preços de Transferência",
  description:
    "Preparados para os preços de transferência de qualquer pessoa física ou jurídica. Apoiamos você na transferência de dinheiro, Brasil e China.",
};

export default function page() {
  return (
    <>
      <PageHeroSection
        backgroundBannerImage={BgPrecos}
        secondBannerImage={BannerPrecos}
        secondBannerAlt={t("precos_banner_alt")}
        service={true}
        shadowbg={true}
      >
        <h1 className="w-full text-primary text-3xl font-bold text-center md:text-left uppercase mb-5">
          {t("precos_h1")}
        </h1>
        <h2 className="text-black text-xl md:text-2xl text-center md:text-left font-semibold mb-10">
          {t("precos_h2")}
        </h2>
        <div className="text-lg font-base mb-8 text-justify md:text:left md:columns-2 md:gap-12.5 [&>p]:mb-6">
          <p>{t("precos_p1")}</p>
        </div>
        <div className="max-w-164 z-20 bg-primary py-7.5 px-10 flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              {t("precos_services_intro")}
            </p>
          </div>
          <div className="text-6xl">
            <Image
              className="w-16 md:w-36"
              src={ArrowDown}
              alt={t("precos_arrow_alt")}
            />
          </div>
        </div>
      </PageHeroSection>
      <section className="w-full bg-[#f5f5f5] py-10 mt-10">
        <div className="max-w-277.75 mx-auto">
          <div className="flex justify-center">
            <h3 className="w-full md:w-3/5 text-primary font-bold text-xl md:text-3xl text-center">
              {t("precos_subject_title")}
            </h3>
          </div>
          <div className="flex flex-col md:flex-row mt-8">
            <FlipCard
              frontText={t("precos_flip1_front")}
              backText={t("precos_flip1_back")}
            />
            <FlipCard
              frontText={t("precos_flip2_front")}
              backText={t("precos_flip2_back")}
            />
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-10 my-10">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-primary font-medium text-xl md:text-3xl text-center px-2">
            {t("precos_list_intro")}
          </h3>
        </div>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-lg md:text-2xl font-semibold mb-4 ">
              {t("precos_calculo_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("precos_calculo_text")}
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-lg md:text-2xl font-semibold mb-4 ">
              {t("precos_revisao_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("precos_revisao_text")}
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-lg md:text-2xl font-semibold mb-4 ">
              {t("precos_planejamento_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("precos_planejamento_text")}
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-lg md:text-2xl font-semibold mb-4 ">
              {t("precos_treinamentos_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("precos_treinamentos_text")}
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-lg md:text-2xl font-semibold mb-4 ">
              {t("precos_fiscalizacao_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("precos_fiscalizacao_text")}
            </p>
          </div>
        </section>
        <Contacts />
      </div>
    </>
  );
}
