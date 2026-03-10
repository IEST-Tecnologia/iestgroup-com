import Image from "next/image";
import PageHeroSection from "@/components/PageHeroSection";
import BannerParalegal from "@/assets/servicos/banner-paralegal.png";
import BgParalegal from "@/assets/servicos/bg-paralegal.jpg";
import ArrowDown from "@/assets/sobre-nos/arrow-down.svg";
import { Metadata } from "next";
import Contacts from "@/components/Contacts";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Paralegal",
  description:
    "Oferecemos expertise e suporte completo no processo de abertura de empresas, com soluções personalizadas que atendem às necessidades específicas de cada",
};

export default function page() {
  return (
    <>
      <PageHeroSection
        backgroundBannerImage={BgParalegal}
        secondBannerImage={BannerParalegal}
        secondBannerAlt={t("paralegal_banner_alt")}
        service={true}
        shadowbg={true}
      >
        <h1 className="w-full text-primary text-3xl font-bold text-center md:text-left uppercase mb-5">
          {t("paralegal_h1")}
        </h1>
        <h2 className="text-black text-xl md:text-2xl text-center md:text-left font-semibold mb-10">
          {t("paralegal_h2")}
        </h2>
        <div className="text-lg font-base mb-8 text-justify md:text:left">
          <p>{t("paralegal_p1")}</p>
          <p>{t("paralegal_p2")}</p>
        </div>
        <div className="max-w-164 z-20 bg-primary py-7.5 px-10 flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              {t("paralegal_services_intro")}
            </p>
          </div>
          <div className="text-6xl">
            <Image
              className="w-16 md:w-36"
              src={ArrowDown}
              alt={t("paralegal_arrow_alt")}
            />
          </div>
        </div>
      </PageHeroSection>
      <div className="flex flex-col gap-10 my-10">
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("paralegal_abertura_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("paralegal_abertura_text")}
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("paralegal_endereco_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("paralegal_endereco_text")}
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("paralegal_licencas_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("paralegal_licencas_text")}
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("paralegal_representante_title")}
            </h2>
            <p className="text-sm md:text-md font-light">
              {t("paralegal_representante_text")}
            </p>
          </div>
        </section>
        <Contacts />
      </div>
    </>
  );
}
