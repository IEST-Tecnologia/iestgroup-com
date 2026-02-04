import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ConsentPopUp from "@/components/ConsentPopUp";
import { getConsentCookie } from "./actions/consent";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - IEST Group",
    default: "IEST Group",
  },
  description:
    "Consultoria empresarial especializada em negócios entre China e Brasil. Apoiamos sua empresa em áreas administrativa, legal e contratação.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const consent = await getConsentCookie();
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Footer />
        {consent === "accepted" && (
          <>
            <Analytics />
          </>
        )}
        <ConsentPopUp />
      </body>
    </html>
  );
}
