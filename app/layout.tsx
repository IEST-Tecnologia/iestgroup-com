import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: {
    template: '%s - IEST Group',
    default: 'IEST Group'
  },
  description: "Consultoria empresarial especializada em negócios entre China e Brasil. Apoiamos sua empresa em áreas administrativa, legal e contratação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
