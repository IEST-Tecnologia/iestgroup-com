import Image from "next/image";
import PageHeroSection from "@/components/PageHeroSection";
import BannerParalegal from "@/assets/servicos/banner-paralegal.png";
import BgParalegal from "@/assets/servicos/bg-paralegal.jpg";
import ArrowDown from "@/assets/sobre-nos/arrow-down.svg";
import { Metadata } from "next";
import Contacts from "@/components/Contacts";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Serviço Digital e Marketing",
  description:
    "Desenvolvemos soluções completas para plataformas de comércio eletrônico, otimizando a experiência do usuário e maximizando as vendas através do Alibaba.",
};

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
        <h1 className="w-full text-primary text-3xl font-bold text-center md:text-left uppercase mb-5">
          {t("digital_h1")}
        </h1>
        <h2 className="text-black text-xl md:text-2xl text-center md:text-left font-semibold mb-10">
          {t("digital_h2")}
        </h2>
        <div className="text-lg font-base mb-8 text-justify md:text:left">
          <p>{t("digital_p1")}</p>
        </div>
        <div className="max-w-164 z-20 bg-primary py-7.5 px-10 flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              {t("digital_services_intro")}
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
              {t("digital_ecommerce_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("digital_ecommerce_text")}
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("digital_marketing_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("digital_marketing_text")}
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("digital_moderacao_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("digital_moderacao_text")}
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("digital_design_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("digital_design_text")}
            </p>
          </div>
        </section>
        <Contacts />
      </div>
    </>
  );
}
