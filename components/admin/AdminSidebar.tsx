"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Vagas", href: "/gestao/vagas" },
  { label: "Banners", href: "/gestao/banners" },
  { label: "Clientes", href: "/gestao/clientes" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 min-h-screen bg-primary text-white flex flex-col shrink-0">
      <div className="px-6 py-5 border-b border-white/20">
        <span className="text-lg font-semibold tracking-wide uppercase">
          Admin
        </span>
      </div>

      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center px-3 py-2.5 rounded text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-3 py-4 border-t border-white/20">
        <a
          href="/api/auth/logout"
          className="flex items-center px-3 py-2.5 rounded text-sm font-medium text-white/75 hover:bg-white/10 hover:text-white transition-colors duration-150"
        >
          Sair
        </a>
      </div>
    </aside>
  );
}
