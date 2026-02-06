"use client";

import { removeConsentCookie } from "@/app/actions/consent";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  const pathname = usePathname();

  return (
    <div className="bg-white flex justify-center">
      <div className="max-w-7xl flex flex-col py-8">
        <div className="px-6 md:px-0 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-8">
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start gap-6">
            <Image
              src="/logo-iest-footer.png"
              width={130}
              height={52}
              alt="Logo da IEST"
            />
            <p className="text-md ">
              Desde 2012, o IEST Group auxilia multinacionais a se estabelecerem
              no Brasil. Somos especialistas no oferecimento de serviços
              empresais completos para empresas brasileiras e estrangeiras.
            </p>
            <div className="w-full flex flex-col md:flex-row gap-2">
              <div className="w-full md:w-1/3 flex justify-center items-center">
                <Image
                  src="/selo-pqec.png"
                  width={150}
                  height={150}
                  alt="Selo Programa de Qualificação em Excelencia Contínua"
                />
              </div>
              <div className="flex flex-col items-start w-full md:w-2/3">
                <p className=" text-md font-semibold">Certificação PQEC</p>
                <p className=" text-md font-light">
                  Programa de Qualificação em Excelencia contínua
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start gap-6">
            <h5 className=" text-lg uppercase font-semibold">
              SOBRE O IEST GROUP
            </h5>
            <ul className="flex flex-col items-center md:items-start  gap-2">
              <li>
                <Link className="hover:text-foreground/80" href="/sobre-nos">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="www.china2brazil.com.br"
                >
                  Notícias
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/carreira-iest"
                >
                  Carreira
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground/80" href="/contato">
                  Entre em contato
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/codigo-de-etica"
                >
                  Código de ética
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start gap-6">
            <h5 className=" text-lg uppercase font-semibold">SERVIÇOS</h5>
            <ul className="flex flex-col items-center md:items-start  gap-2">
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/consultoria-profissional"
                >
                  Consultoria Profissional
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/bpo-contabil-e-financeiro"
                >
                  BPO Contábil e Financeiro
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/recursos-humanos"
                >
                  Recursos Humanos
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground/80" href="/paralegal">
                  Paralegal
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/precos-de-transferencia"
                >
                  Transferência
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/servico-digital-e-marketing"
                >
                  Digitais
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start gap-6">
            <h5 className=" text-lg uppercase font-semibold">LGPD</h5>
            <ul className="flex flex-col items-center md:items-start  gap-2">
              <li>
                <Link
                  className="hover:text-foreground/80"
                  href="/politica-de-privacidade"
                >
                  Política de Privacidade
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
                  Gerenciar cookies
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full  bg-gray-300 h-0.5 my-5"></div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4">
          <div>
            <p className="text-sm ">
              Grupo IEST - {year} © All Rights Reserved.
            </p>
          </div>
          <div className="hidden md:flex flex-row gap-6">
            <Link href="https://www.linkedin.com/company/">
              <Image
                src="/linkedin.svg"
                width={24}
                height={24}
                alt="Logo Linkedin"
              />
            </Link>
            <Link href="https://www.facebook.com/IESTGROUP/?locale=pt_BR">
              <Image
                src="/facebook.svg"
                width={24}
                height={24}
                alt="Logo Linkedin"
              />
            </Link>
            <Link href="https://www.instagram.com/iestgroup/">
              <Image
                src="/instagram.svg"
                width={24}
                height={24}
                alt="Logo Linkedin"
              />
            </Link>
          </div>
        </div>
        <div className="w-full  bg-gray-300 h-0.5 my-5 block md:hidden"></div>
        <div className="px-6 flex md:hidden flex-row justify-end w-full  gap-6">
          <Link href="https://www.linkedin.com/company/">
            <Image
              src="/linkedin.svg"
              width={24}
              height={24}
              alt="Logo Linkedin"
            />
          </Link>
          <Link href="https://www.facebook.com/IESTGROUP/?locale=pt_BR">
            <Image
              src="/facebook.svg"
              width={24}
              height={24}
              alt="Logo Facebook"
            />
          </Link>
          <Link href="https://www.instagram.com/iestgroup/">
            <Image
              src="/instagram.svg"
              width={24}
              height={24}
              alt="Logo Instagram"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
