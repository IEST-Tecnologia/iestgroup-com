import Image from "next/image";
import PageHeroSection from "@/components/PageHeroSection";
import BannerConsulting from "@/assets/servicos/banner-consultoria-profissional.png";
import BannerQuemSomos from "@/assets/sobre-nos/banner-quem-somos.jpg";
import ArrowDown from "@/assets/sobre-nos/arrow-down.svg";
import { Metadata } from "next";
import Contacts from "@/components/Contacts";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Consultoria Profissional",
  description:
    "Realizamos pesquisas e análises da jurisprudência tributária brasileira, identificando riscos e oportunidades de maneira eficiente, fornecendo informações",
};

export default function page() {
  return (
    <>
      <PageHeroSection
        backgroundBannerImage={BannerQuemSomos}
        secondBannerImage={BannerConsulting}
        secondBannerAlt={t("consulting_banner_alt")}
        service={true}
        shadowbg={false}
      >
        <h1 className="w-full text-primary text-3xl font-bold text-center md:text-left uppercase mb-5">
          {t("consulting_h1")}
        </h1>
        <h2 className="text-black text-xl md:text-2xl text-center md:text-left font-semibold mb-10">
          {t("consulting_h2")}
        </h2>
        <div className="text-lg font-base mb-8 text-justify md:text:left">
          <p>{t("consulting_p1")}</p>
        </div>
        <div className="max-w-164 z-20 bg-primary py-7.5 px-10 flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              {t("consulting_services_intro")}
            </p>
          </div>
          <div className="text-6xl">
            <Image
              className="w-16 md:w-36"
              src={ArrowDown}
              alt={t("consulting_arrow_alt")}
            />
          </div>
        </div>
      </PageHeroSection>
      <div className="flex flex-col gap-10 my-10">
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("consulting_tributaria_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("consulting_tributaria_text")}
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("consulting_contabil_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("consulting_contabil_text")}
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("consulting_mercado_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("consulting_mercado_text")}
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("consulting_pesquisas_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("consulting_pesquisas_text")}
            </p>
          </div>
        </section>
        <Contacts />
      </div>
    </>
  );
}
