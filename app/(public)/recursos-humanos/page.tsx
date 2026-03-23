import Image from "next/image";
import PageHeroSection from "@/components/PageHeroSection";
import BannerRh from "@/assets/servicos/banner-rh.png";
import BgRh from "@/assets/servicos/bg-rh.jpg";
import ArrowDown from "@/assets/sobre-nos/arrow-down.svg";
import { Metadata } from "next";
import Contacts from "@/components/Contacts";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Recursos Humanos",
  description:
    "Recursos Humanos para empresas que precisam contratar chineses ou que tenham a fluência na língua chinesa. Saiba Mais.",
};

export default function page() {
  return (
    <>
      <PageHeroSection
        backgroundBannerImage={BgRh}
        secondBannerImage={BannerRh}
        secondBannerAlt={t("rh_banner_alt")}
        service={true}
        shadowbg={true}
      >
        <h1 className="w-full text-primary text-3xl font-bold text-center md:text-left uppercase mb-5">
          {t("rh_h1")}
        </h1>
        <h2 className="text-black text-xl md:text-2xl text-center md:text-left font-semibold mb-10">
          {t("rh_h2")}
        </h2>
        <div className="text-lg font-base mb-8 text-justify md:text:left">
          <p>{t("rh_p1")}</p>
        </div>
        <div className="max-w-164 z-20 bg-primary py-7.5 px-10 flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              {t("rh_services_intro")}
            </p>
          </div>
          <div className="text-6xl">
            <Image
              className="w-16 md:w-36"
              src={ArrowDown}
              alt={t("rh_arrow_alt")}
            />
          </div>
        </div>
      </PageHeroSection>
      <div className="flex flex-col gap-10 my-10">
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("rh_recrutamento_title")}
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-sm md:text-md font-light">{t("rh_recrutamento_p1")}</p>
              <p className="text-sm md:text-md font-light">{t("rh_recrutamento_p2")}</p>
              <p className="text-sm md:text-md font-light">{t("rh_recrutamento_p3")}</p>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("rh_global_title")}
            </h2>
            <ul className="list-disc ml-6 md:ml-12 text-sm md:text-md font-light">
              <li>
                <strong className="font-bold">{t("rh_global_vistos_title")}</strong>{" "}
                {t("rh_global_vistos_text")}
              </li>
              <li>
                <strong className="font-bold">{t("rh_global_tributaria_title")}</strong>{" "}
                {t("rh_global_tributaria_text")}
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("rh_consultoria_title")}
            </h2>
            <ul className="list-disc ml-6 md:ml-12 text-sm md:text-md font-light">
              <li>
                <strong className="font-bold">{t("rh_consultoria_contratos_title")}</strong>{" "}
                {t("rh_consultoria_contratos_text")}
              </li>
              <li>
                <strong className="font-bold">{t("rh_consultoria_normas_title")}</strong>
                {t("rh_consultoria_normas_text")}
              </li>
              <li>
                <strong className="font-bold">{t("rh_consultoria_plr_title")}</strong>
                {t("rh_consultoria_plr_text")}
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("rh_terceirizacao_title")}
            </h2>
            <p className="text-sm md:text-md font-light mb-8">
              {t("rh_terceirizacao_p1")}
            </p>
            <p className="text-sm md:text-md font-light">
              {t("rh_terceirizacao_p2")}
            </p>
            <ul className="list-disc ml-6 md:ml-12 text-sm md:text-md font-light">
              <li>
                <strong className="font-bold">{t("rh_terceirizacao_contratos_title")}</strong>{" "}
                {t("rh_terceirizacao_contratos_text")}
              </li>
              <li>
                <strong className="font-bold">{t("rh_terceirizacao_normas_title")}</strong>
                {t("rh_terceirizacao_normas_text")}
              </li>
              <li>
                <strong className="font-bold">{t("rh_terceirizacao_plr_title")}</strong>
                {t("rh_terceirizacao_plr_text")}
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full">
          <div className="max-w-7xl mx-auto shadow-card p-7.5">
            <h2 className="text-primary text-xl md:text-2xl font-semibold mb-4 ">
              {t("rh_dp_title")}
            </h2>
            <p className="text-sm md:text-md font-light mb-4">
              {t("rh_dp_p1")}
            </p>
            <ul className="list-disc ml-6 md:ml-12 text-sm md:text-md font-light">
              <li>
                <strong className="font-bold">{t("rh_dp_admin_title")}</strong>{" "}
                {t("rh_dp_admin_text")}
              </li>
              <li>
                <strong className="font-bold">{t("rh_dp_ferias_title")}</strong>
                {t("rh_dp_ferias_text")}
              </li>
              <li>
                <strong className="font-bold">{t("rh_dp_exames_title")}</strong>
                {t("rh_dp_exames_text")}
              </li>
              <li>
                <strong className="font-bold">{t("rh_dp_folha_title")}</strong>
                {t("rh_dp_folha_text")}
              </li>
              <li>
                <strong className="font-bold">{t("rh_dp_beneficios_title")}</strong>
                {t("rh_dp_beneficios_text")}
              </li>
              <li>
                <strong className="font-bold">{t("rh_dp_obrigacoes_title")}</strong>
                {t("rh_dp_obrigacoes_text")}
              </li>
              <li>
                <strong className="font-bold">{t("rh_dp_conformidade_title")}</strong>
                {t("rh_dp_conformidade_text")}
              </li>
            </ul>
          </div>
        </section>
        <Contacts />
      </div>
    </>
  );
}
