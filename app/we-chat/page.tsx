import QRCode from "@/assets/qrcode.png";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "We chat",
};

export default function page() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl text-primary font-semibold mb-6 text-center">
        SIGA A NOSSA CONTA OFICIAL DO WECHAT
      </h1>
      <Image src={QRCode} alt="Qrcode para wechat da Iest" />
    </main>
  );
}
