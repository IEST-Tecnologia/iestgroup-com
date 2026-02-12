"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  LogoIcon as Logo,
  ChevronDownIcon as ChevronDown,
  LinkedInIcon,
  WeChatIcon,
  BrazilFlagIcon as BrazilFlag,
  ChinaFlagIcon as ChinaFlag,
  MenuIcon,
} from "@/components/icons";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Sobre nós",
    href: "/sobre-nos",
  },
  {
    label: "Serviços",
    dropdown: [
      { label: "Consultoria Profissional", href: "/consultoria-profissional" },
      {
        label: "BPO Contábil e Financeiro",
        href: "/bpo-contabil-e-financeiro",
      },
      { label: "Recursos Humanos", href: "/recursos-humanos" },
      { label: "Paralegal", href: "/paralegal" },
      { label: "Preços de Transferência", href: "/precos-de-transferencia" },
      { label: "Serviços Digitais", href: "/servico-digital-e-marketing" },
    ],
  },
  {
    label: "Notícias",
    href: "https://china2brazil.com.br/",
  },
  {
    label: "Contato",
    href: "/contato",
  },
  {
    label: "Carreiras",
    dropdown: [
      { label: "Vagas", href: "/vagas" },
      { label: "Trabalhe Conosco", href: "/carreira-iest" },
    ],
  },
];

export default function Header({
  devHover = false,
}: { devHover?: boolean } = {}) {
  const [activeItem, setActiveItem] = useState<string>("/");
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show sticky header when scrolled past 100px
      if (currentScrollY > 200) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const HeaderContent = ({ isSticky = false }: { isSticky?: boolean }) => (
    <div className="mx-auto max-w-317.5 px-5">
      <div
        className={`flex items-center ${isSticky ? "min-h-15" : "min-h-17.5 justify-between"}`}
      >
        {/* Logo */}
        <div className={`shrink-0 pr-4 ${isSticky ? "w-[16.6%]" : ""}`}>
          <Link href="/">
            <Logo width={isSticky ? 75 : 90} height={isSticky ? 30 : 36} />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`hidden md:block ${isSticky ? "w-[66.66%]" : ""}`}>
          <ul className={`flex ${isSticky ? "justify-end" : "flex-wrap"}`}>
            {navigationItems.map((item) => (
              <li
                key={item.label}
                className={`group relative ${devHover ? "hover" : ""}`}
              >
                {item.dropdown ? (
                  <span
                    className={`relative flex cursor-pointer items-center gap-1 whitespace-nowrap px-5 py-2.5 font-montserrat font-semibold transition-colors duration-300 uppercase ${isSticky ? "text-[14px]" : "text-md"} ${devHover ? "text-primary" : "text-gray-600 hover:text-primary"}`}
                  >
                    {item.label}

                    <ChevronDown width={10} height={10} className="ml-1" />
                    {/* Bottom border on hover */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 w-full bg-secondary transition-opacity duration-300 ${devHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                    />
                  </span>
                ) : item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setActiveItem(item.href!)}
                    className={`relative block whitespace-nowrap px-5 py-2.5 font-montserrat font-semibold transition-colors duration-300 uppercase ${isSticky ? "text-[14px]" : "text-md"} ${
                      activeItem === item.href
                        ? "text-primary"
                        : devHover
                          ? "text-primary"
                          : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {item.label}
                    {/* Bottom border on hover/active */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 w-full bg-secondary transition-opacity duration-300 ${
                        activeItem === item.href
                          ? "opacity-100"
                          : devHover
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                ) : null}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`absolute left-0 top-full z-50 min-w-55 border-primary bg-white shadow-lg transition-all duration-300 ${devHover ? "visible opacity-100" : "invisible opacity-0 group-hover:visible group-hover:opacity-100"}`}
                  >
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          onClick={() => setActiveItem(dropdownItem.href)}
                          className={`block px-5 py-2.5 font-montserrat text-[15px] transition-colors duration-300 ${
                            activeItem === dropdownItem.href
                              ? "bg-gray-50 text-primary font-semibold"
                              : "text-[#2F2F2F] hover:bg-gray-100 hover:text-primary"
                          }`}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials and Language Switcher */}
        <div className="hidden md:flex items-center gap-4 ml-6">
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/iestgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-primary bg-white text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-4.25 w-4.25" />
            </a>
            <Link
              href="/we-chat"
              className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-primary bg-white text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            >
              <WeChatIcon className="h-4.25 w-4.25" />
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-3 border-l border-gray-300 pl-4">
            <Link
              href="#"
              className="transition-opacity hover:opacity-70"
              aria-label="Português"
            >
              <BrazilFlag className="h-8.25 w-8.25 rounded-full" />
            </Link>
            <Link
              href="https://iestgroup.com"
              className="transition-opacity hover:opacity-70"
              aria-label="中文"
            >
              <ChinaFlag className="h-8.25 w-8.25 rounded-full" />
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Static Header - scrolls with page */}
      <header className="bg-white border-b border-[#eaeaea]">
        <HeaderContent isSticky={false} />
      </header>

      {/* Fixed Header - appears after 200px scroll */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 bg-white transition-all duration-300 ${
          showStickyHeader
            ? "translate-y-0 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.29)]"
            : "-translate-y-full"
        }`}
      >
        <HeaderContent isSticky={true} />
      </header>
    </>
  );
}
