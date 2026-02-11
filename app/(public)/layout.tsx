import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentPopUp from "@/components/ConsentPopUp";
import { getConsentCookie } from "@/app/actions/consent";
import { Analytics } from "@vercel/analytics/next";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const consent = await getConsentCookie();
  return (
    <>
      <Header />
      {children}
      <Footer />
      {consent === "accepted" && <Analytics />}
      <ConsentPopUp consent={consent} />
    </>
  );
}
