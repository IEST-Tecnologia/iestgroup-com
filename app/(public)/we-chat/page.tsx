import QRCode from "@/assets/qrcode.png";
import { Metadata } from "next";
import Image from "next/image";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "We chat",
};

export default function page() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl text-primary font-semibold mb-6 text-center">
        {t("wechat_h1")}
      </h1>
      <Image src={QRCode} alt={t("wechat_qrcode_alt")} />
    </main>
  );
}
