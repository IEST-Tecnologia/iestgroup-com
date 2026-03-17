import Image, { getImageProps } from "next/image";
import MainImage from "@/assets/home-main.png";
import Section1Image from "@/assets/home-section1.png";
import Section2Image from "@/assets/home-section2.png";
import Link from "next/link";
import Button from "@/components/Button";
import { getBackgroundImage } from "@/lib/utils";
import Contacts from "@/components/Contacts";
import BannerCarousel from "@/components/BannerCarousel";
import ClientsMarquee from "@/components/ClientsMarquee";
import { listBanners, listClients } from "@/lib/admin/store";
import { Metadata } from "next";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Consultoria Empresarial",
};

export default async function Home() {
  const FEATURE_FLAG_HERO_BANNER =
    process.env.NEXT_PUBLIC_FEATURE_FLAG_HERO_BANNER === "true";
  const [banners, clients] = await Promise.all([
    FEATURE_FLAG_HERO_BANNER ? listBanners(true).catch(() => []) : Promise.resolve([]),
    listClients().catch(() => []),
  ]);

  const {
    props: { srcSet },
  } = getImageProps({
    alt: "",
    width: 1920,
    height: 827,
    src: "/home-section3.jpg",
  });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = { backgroundImage };
  return (
    <div>
      {FEATURE_FLAG_HERO_BANNER && <BannerCarousel banners={banners} />}
      <main className="bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto py-6 md:py-10 px-4">
          <div className="w-full lg:w-1/2 p-2.5 flex flex-col gap-5">
            <h2 className="font-bold uppercase leading text-primary text-2xl md:text-[28px] lg:text-[32px]">
              {t("home_history_title")}
            </h2>
            <p className="text-base md:text-lg lg:text-[19px] font-medium">
              {t("home_history_text")}
            </p>
            <Link href="/sobre-nos">
              <Button>{t("home_history_cta")}</Button>
            </Link>
          </div>
          <div className="w-full lg:w-1/4 mt-6 lg:mt-0">
            <Image src={MainImage} alt={t("home_history_img_alt")} sizes="(min-width: 1024px) 25vw, 100vw" priority={!FEATURE_FLAG_HERO_BANNER || banners.length === 0} fetchPriority={!FEATURE_FLAG_HERO_BANNER || banners.length === 0 ? "high" : "auto"} />
          </div>
        </div>
      </main>
      <section className="bg-primary">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto py-6 md:py-10 px-4">
          <div className="w-full lg:w-1/2 p-2.5 flex flex-col gap-5">
            <h2 className="font-bold uppercase leading text-white text-2xl md:text-[28px] lg:text-[32px]">
              {t("home_services_title")}
            </h2>

            <ul className="text-xl md:text-2xl lg:text-[28px] text-white font-bold *:hover:text-light-primary *:transition-colors *:duration-200 *:leading-[1.7em]">
              <li>
                <Link href="/consultoria-profissional" className="">
                  {t("header_nav_services_consulting")}
                </Link>
              </li>

              <li>
                <Link href="/bpo-contabil-e-financeiro">{t("header_nav_services_bpo")}</Link>
              </li>
              <li>
                <Link href="/recursos-humanos">{t("header_nav_services_rh")}</Link>
              </li>
              <li>
                <Link href="/paralegal">{t("header_nav_services_paralegal")}</Link>
              </li>
              <li>
                <Link href="/precos-de-transferencia">
                  {t("header_nav_services_transfer")}
                </Link>
              </li>
              <li>
                <Link href="/servico-digital-e-marketing">{t("header_nav_services_digital")}</Link>
              </li>
            </ul>
            <Link href="/contato" className="mt-5">
              <Button variant="inverted">{t("home_services_cta")}</Button>
            </Link>
          </div>
          <div className="w-full lg:w-2/5 p-2.5 mt-6 lg:mt-0">
            <Image src={Section1Image} alt={t("home_services_img_alt")} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto py-6 md:py-10 px-4">
          <div className="w-full lg:w-1/2 p-2.5 flex flex-col gap-5">
            <h2 className="font-bold uppercase leading text-primary text-2xl md:text-[28px] lg:text-[32px]">
              {t("home_diff_title")}
            </h2>
            <p className="text-base md:text-lg lg:text-[19px] font-medium">
              {t("home_diff_p1")}
            </p>
            <p className="text-base md:text-lg lg:text-[19px] font-medium">
              {t("home_diff_p2")}
            </p>
            <Link href="/sobre-nos">
              <Button>{t("home_diff_cta")}</Button>
            </Link>
          </div>
          <div className="w-full lg:w-3/8 mt-6 lg:mt-0">
            <Image src={Section2Image} alt={t("home_diff_img_alt")} sizes="(min-width: 1024px) 37.5vw, 100vw" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="flex flex-col justify-between items-center max-w-7xl mx-auto py-6 md:py-10 px-4">
          <h2 className="px-4 font-bold uppercase leading text-primary text-2xl md:text-[28px] lg:text-[32px]">
            {t("home_clients_title")}
          </h2>
          <ClientsMarquee clients={clients} />
        </div>
      </section>
      <section
        className="relative bg-center bg-no-repeat bg-cover px-4"
        style={style}
      >
        <div className="w-full  max-w-7xl mx-auto md:w-4/5 lg:w-3/5 py-6 md:py-10 p-2.5 flex flex-col gap-6 md:gap-10">
          <p className="font-medium leading-[1.3em] text-white text-2xl md:text-3xl lg:text-[35px]">
            {t("home_cta_p1")}
          </p>
          <h1 className="font-medium leading-[1.3em] text-white text-2xl md:text-3xl lg:text-[35px]">
            {t("home_cta_p2")}
          </h1>
          <Link href="/contato" className="">
            <Button variant="inverted">{t("home_cta_button")}</Button>
          </Link>
        </div>
      </section>
      <Contacts />
    </div>
  );
}
