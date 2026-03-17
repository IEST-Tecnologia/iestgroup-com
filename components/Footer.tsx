"use client";

import { removeConsentCookie } from "@/app/actions/consent";
import { subscribeNewsletter } from "@/app/actions/newsletter";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { t } from "@/lib/i18n";

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  return (
    <div className="bg-white flex justify-center">
      <div className="max-w-7xl flex flex-col py-8">
        <div className="px-6 md:px-0 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-8">
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start gap-6">
            <Image
              src="/logo-iest-footer.png"
              width={130}
              height={52}
              alt={t("footer_logo_alt")}
            />
            <p className="text-md ">{t("footer_about")}</p>
            <div className="w-full flex flex-col md:flex-row gap-2">
              <div className="w-full md:w-1/3 flex justify-center items-center">
                <Image
                  src="/selo-pqec.png"
                  width={150}
                  height={150}
                  alt={t("footer_seal_alt")}
                />
              </div>
              <div className="flex flex-col items-start w-full md:w-2/3">
                <p className=" text-md font-semibold">
                  {t("footer_cert_title")}
                </p>
                <p className=" text-md font-light">
                  {t("footer_cert_subtitle")}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start gap-6">
            <p className=" text-lg uppercase font-semibold">
              {t("footer_section_about")}
            </p>
            <ul className="flex flex-col items-center md:items-start  gap-2">
              <li>
                <Link className="hover:text-foreground/80" href="/sobre-nos">
                  {t("footer_link_about")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="https://www.china2brazil.com.br"
                >
                  {t("footer_link_news")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/carreira-iest"
                >
                  {t("footer_link_career")}
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground/80" href="/contato">
                  {t("footer_link_contact")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/codigo-de-etica"
                >
                  {t("footer_link_ethics")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start gap-6">
            <p className=" text-lg uppercase font-semibold">
              {t("footer_section_services")}
            </p>
            <ul className="flex flex-col items-center md:items-start  gap-2">
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/consultoria-profissional"
                >
                  {t("footer_link_consulting")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/bpo-contabil-e-financeiro"
                >
                  {t("footer_link_bpo")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/recursos-humanos"
                >
                  {t("footer_link_rh")}
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground/80" href="/paralegal">
                  {t("footer_link_paralegal")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/precos-de-transferencia"
                >
                  {t("footer_link_transfer")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/servico-digital-e-marketing"
                >
                  {t("footer_link_digital")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start gap-6">
            <p className=" text-lg uppercase font-semibold">
              {t("footer_section_lgpd")}
            </p>
            <ul className="flex flex-col items-center md:items-start  gap-2">
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/politica-de-privacidade"
                >
                  {t("footer_link_privacy")}
                </Link>
              </li>
              <li>
                <p className="hover:text-foreground/80">dpo@iestgroup.com</p>
              </li>
              <li>
                <p
                  className="hover:text-foreground/80 cursor-pointer"
                  onClick={async () => {
                    await removeConsentCookie(pathname);
                  }}
                >
                  {t("footer_manage_cookies")}
                </p>
              </li>
            </ul>
            <div className="flex flex-col items-center md:items-start gap-3 w-full">
              <p className="text-lg uppercase font-semibold">
                {t("footer_newsletter_title")}
              </p>
              <form
                className="flex flex-col gap-2 w-full"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setNewsletterStatus("loading");
                  try {
                    const res = await subscribeNewsletter(email);
                    if (!res.success) throw new Error();
                    setEmail("");
                    setNewsletterStatus("success");
                  } catch {
                    setNewsletterStatus("error");
                  }
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer_newsletter_placeholder")}
                  className="border border-gray-300 rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-gray-500"
                  required
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === "loading"}
                  className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {t("footer_newsletter_submit")}
                </button>
                {newsletterStatus === "success" && (
                  <p className="text-sm text-green-600">
                    {t("footer_newsletter_success")}
                  </p>
                )}
                {newsletterStatus === "error" && (
                  <p className="text-sm text-red-500">
                    {t("footer_newsletter_error")}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="w-full  bg-gray-300 h-0.5 my-5"></div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4">
          <div>
            <p className="text-sm ">{t("footer_copyright")}</p>
          </div>
          <div className="hidden md:flex flex-row gap-6">
            <Link href="https://www.linkedin.com/company/iestgroup">
              <Image
                src="/linkedin.svg"
                width={24}
                height={24}
                alt={t("footer_linkedin_alt")}
              />
            </Link>
            <Link href="https://www.facebook.com/IESTGROUP/?locale=pt_BR">
              <Image
                src="/facebook.svg"
                width={24}
                height={24}
                alt={t("footer_facebook_alt")}
              />
            </Link>
            <Link href="https://www.instagram.com/iestgroup/">
              <Image
                src="/instagram.svg"
                width={24}
                height={24}
                alt={t("footer_instagram_alt")}
              />
            </Link>
          </div>
        </div>
        <div className="w-full  bg-gray-300 h-0.5 my-5 block md:hidden"></div>
        <div className="px-6 flex md:hidden flex-row justify-end w-full  gap-6">
          <Link href="https://www.linkedin.com/company/iestgroup">
            <Image
              src="/linkedin.svg"
              width={24}
              height={24}
              alt={t("footer_linkedin_alt")}
            />
          </Link>
          <Link href="https://www.facebook.com/IESTGROUP/?locale=pt_BR">
            <Image
              src="/facebook.svg"
              width={24}
              height={24}
              alt={t("footer_facebook_alt")}
            />
          </Link>
          <Link href="https://www.instagram.com/iestgroup/">
            <Image
              src="/instagram.svg"
              width={24}
              height={24}
              alt={t("footer_instagram_alt")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
