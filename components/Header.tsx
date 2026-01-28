"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import ChevronDown from "@/assets/chevron-down.svg";
import Image from "next/image";

// Inline SVG components for color control
const LinkedInIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
    />
  </svg>
);

const WeChatIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 576 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"
    />
  </svg>
);

const BrazilFlag = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle fill="#6DA544" cx="256" cy="256" r="256" />
    <polygon
      fill="#FFDA44"
      points="256,100.174 467.478,256 256,411.826 44.522,256"
    />
    <circle fill="#F0F0F0" cx="256" cy="256" r="89.043" />
    <path
      fill="#0052B4"
      d="M211.478,250.435c-15.484,0-30.427,2.355-44.493,6.725c0.623,48.64,40.227,87.884,89.015,87.884c30.168,0,56.812-15.017,72.919-37.968C301.362,272.579,258.961,250.435,211.478,250.435z"
    />
    <path
      fill="#0052B4"
      d="M343.393,273.06c1.072-5.524,1.651-11.223,1.651-17.06c0-49.178-39.866-89.043-89.043-89.043c-36.694,0-68.194,22.201-81.826,53.899c12.05-2.497,24.526-3.812,37.305-3.812C263.197,217.043,309.983,238.541,343.393,273.06z"
    />
  </svg>
);

const ChinaFlag = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="-49 141 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle fill="#D80027" cx="207" cy="397" r="256" />
    <g fill="#FFDA44">
      <polygon points="91.1,296.8 113.2,364.8 184.7,364.8 126.9,406.9 149,474.9 91.1,432.9 33.2,474.9 55.4,406.9 -2.5,364.8 69,364.8" />
      <polygon points="254.5,537.5 237.6,516.7 212.6,526.4 227.1,503.9 210.2,483 236.1,489.9 250.7,467.4 252.1,494.2 278.1,501.1 253,510.7" />
      <polygon points="288.1,476.5 296.1,450.9 274.2,435.4 301,435 308.9,409.4 317.6,434.8 344.4,434.5 322.9,450.5 331.5,475.9 309.6,460.4" />
      <polygon points="333.4,328.9 321.6,353 340.8,371.7 314.3,367.9 302.5,391.9 297.9,365.5 271.3,361.7 295.1,349.2 290.5,322.7 309.7,341.4" />
      <polygon points="255.2,255.9 253.2,282.6 278.1,292.7 252,299.1 250.1,325.9 236,303.1 209.9,309.5 227.2,289 213,266.3 237.9,276.4" />
    </g>
  </svg>
);

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
      { label: "BPO Contábil e Financeiro", href: "/bpo" },
      { label: "Recursos Humanos", href: "/recursos-humanos" },
      { label: "Paralegal", href: "/paralegal" },
      { label: "Preços de Transferência", href: "/precos-de-transferencia" },
      { label: "Serviços Digitais", href: "/servicos-digitais" },
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
      { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
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
      <div className={`flex items-center ${isSticky ? "min-h-15" : "min-h-17.5 justify-between"}`}>
        {/* Logo */}
        <div className={`shrink-0 pr-4 ${isSticky ? "w-[16.6%]" : ""}`}>
          <Link href="/">
            <Image
              src={Logo}
              alt="IEST Group logo"
              width={isSticky ? 75 : 90}
              height={isSticky ? 30 : 36}
              priority
            />
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
                    className={`relative flex cursor-pointer items-center gap-1 whitespace-nowrap px-5 py-2.5 font-montserrat font-semibold transition-colors duration-300 uppercase ${isSticky ? "text-[14px]" : "text-[16px]"} ${devHover ? "text-primary" : "text-gray-600 hover:text-primary"}`}
                  >
                    {item.label}
                    <Image
                      src={ChevronDown}
                      alt=""
                      width={10}
                      height={10}
                      className="ml-1"
                    />
                    {/* Bottom border on hover */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 w-full bg-secondary transition-opacity duration-300 ${devHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                    />
                  </span>
                ) : item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setActiveItem(item.href!)}
                    className={`relative block whitespace-nowrap px-5 py-2.5 font-montserrat font-semibold transition-colors duration-300 uppercase ${isSticky ? "text-[14px]" : "text-[16px]"} ${
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
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-primary bg-white text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              aria-label="WeChat"
            >
              <WeChatIcon className="h-4.25 w-4.25" />
            </a>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-3 border-l border-gray-300 pl-4">
            <Link
              href="/pt"
              className="transition-opacity hover:opacity-70"
              aria-label="Português"
            >
              <BrazilFlag className="h-8.25 w-8.25 rounded-full" />
            </Link>
            <Link
              href="/zh"
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
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
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
          showStickyHeader ? "translate-y-0 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.29)]" : "-translate-y-full"
        }`}
      >
        <HeaderContent isSticky={true} />
      </header>
    </>
  );
}
