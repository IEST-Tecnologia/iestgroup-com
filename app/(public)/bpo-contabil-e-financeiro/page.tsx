import Image from "next/image";
import PageHeroSection from "@/components/PageHeroSection";
import BannerBpo from "@/assets/servicos/banner-bpo.png";
import BgBpo from "@/assets/servicos/bg-bpo.jpg";
import SeloPQCE from "@/assets/servicos/selo-pqec.png";
import ArrowDown from "@/assets/sobre-nos/arrow-down.svg";
import { Metadata } from "next";
import Contacts from "@/components/Contacts";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "BPO Contábil e Financeiro",
  description:
    "Faça o BPO Contábil e Financeiro da sua empresa com quem entende do assunto. Sua empresa é chinesa ou faz negócios com a China. Acesse",
};

export default function page() {
  return (
    <>
      <PageHeroSection
        backgroundBannerImage={BgBpo}
        secondBannerImage={BannerBpo}
        secondBannerAlt={t("bpo_banner_alt")}
        service={true}
        shadowbg={true}
      >
        <h1 className="w-full text-primary text-3xl font-bold text-center md:text-left uppercase mb-5">
          {t("bpo_h1")}
        </h1>
        <h2 className="text-black text-xl md:text-2xl text-center md:text-left font-semibold mb-10">
          {t("bpo_h2")}
        </h2>
        <div className="text-lg font-base mb-8 text-justify md:text-left">
          <p>{t("bpo_p1")}</p>
          <p>{t("bpo_p2")}</p>
          <p>{t("bpo_p3")}</p>
        </div>
        <div className="max-w-164 z-20 bg-primary py-7.5 px-10 flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              {t("bpo_services_intro")}
            </p>
          </div>
          <div>
            <Image
              className="w-16 md:w-36"
              src={ArrowDown}
              alt={t("bpo_arrow_alt")}
            />
          </div>
        </div>
      </PageHeroSection>
      <div className="flex flex-col gap-10 my-10">
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("bpo_contabil_title")}
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-sm md:text-md font-light">{t("bpo_contabil_p1")}</p>
              <p className="text-sm md:text-md font-light">{t("bpo_contabil_p2")}</p>
              <p className="text-sm md:text-md font-light">{t("bpo_contabil_p3")}</p>
              <p className="text-sm md:text-md font-light">{t("bpo_contabil_p4")}</p>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("bpo_fiscal_title")}
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-sm md:text-md font-light">{t("bpo_fiscal_p1")}</p>
              <p className="text-sm md:text-md font-light">{t("bpo_fiscal_p2")}</p>
              <p className="text-sm md:text-md font-light">{t("bpo_fiscal_p3")}</p>
              <p className="text-sm md:text-md font-light">{t("bpo_fiscal_p4")}</p>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("bpo_dp_title")}
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-sm md:text-md font-light">{t("bpo_dp_p1")}</p>
              <p className="text-sm md:text-md font-light">{t("bpo_dp_p2")}</p>
              <p className="text-sm md:text-md font-light">{t("bpo_dp_p3")}</p>
              <p className="text-sm md:text-md font-light">{t("bpo_dp_p4")}</p>
              <p className="text-sm md:text-md font-light">{t("bpo_dp_p5")}</p>
              <p className="text-sm md:text-md font-light">{t("bpo_dp_p6")}</p>
              <p className="text-sm md:text-md font-light">{t("bpo_dp_p7")}</p>
              <p className="text-sm md:text-md font-light">{t("bpo_dp_p8")}</p>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
              <div className="max-w-125 flex flex-col justify-center items-center p-4 md:p-0">
                <h2 className="text-primary text-3xl font-bold mb-4 text-left w-full">
                  {t("bpo_cert_title")}
                </h2>
                <p className="text-md font-light">{t("bpo_cert_text")}</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                className="w-auto max-h-125"
                src={SeloPQCE}
                alt={t("bpo_seal_alt")}
              />
            </div>
          </div>
        </section>
        <Contacts />
      </div>
    </>
  );
}
