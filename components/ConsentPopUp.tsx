"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { setConsentCookie, getConsentCookie } from "@/app/actions/consent";
import Link from "next/link";

export default function ConsentPopUp() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkConsent = async () => {
      const consent = await getConsentCookie();
      if (!consent) {
        setIsVisible(true);
      }
    };
    checkConsent();
  }, []);

  const handleConsent = async (value: "accepted" | "rejected") => {
    await setConsentCookie(value, pathname);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow-card border border-gray-100 p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-iest/10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-iest"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary">
                Sua privacidade importa
              </h3>
            </div>
            <p className="text-primary/80 text-sm leading-relaxed">
              Utilizamos cookies para melhorar sua experiência de navegação,
              personalizar conteúdo e analisar nosso tráfego. Ao clicar em
              &quot;Aceitar&quot;, você concorda com o uso de cookies conforme
              descrito em nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-blue-iest font-medium hover:underline"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <button
              onClick={() => handleConsent("rejected")}
              className="px-6 py-3 text-sm font-medium text-primary border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              Rejeitar
            </button>
            <button
              onClick={() => handleConsent("accepted")}
              className="px-6 py-3 text-sm font-medium text-white bg-blue-iest rounded-xl hover:bg-blue-iest/90 transition-colors duration-200 cursor-pointer"
            >
              Aceitar cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
