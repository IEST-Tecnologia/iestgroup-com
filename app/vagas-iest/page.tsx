import React from "react";
import BgVagas from "@/assets/vagas/banner-vagas.png";
import IconBriefcase from "@/assets/vagas/briefcase.svg";
import Image from "next/image";

export default function page() {
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgVagas.src})` }}
      >
        <div className="min-h-87.5 w-full"></div>
      </section>
      <main className="w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div className="rounded-xl shadow-card-job p-4 border border-gray-200">
              <p className="text-sm">Campinas, SP</p>
              <p className="text-lg font-semibold">Representante comercial</p>
              <div className="flex gap-2">
                <Image
                  className="w-5 h-5"
                  src={IconBriefcase}
                  alt="Icone de maleta"
                />
                <p>CLT</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
