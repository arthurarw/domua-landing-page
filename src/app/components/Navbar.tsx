"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "#recursos", label: "Recursos" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#planos", label: "Planos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between"
      aria-label="Navegação principal"
    >
      {/* Logo */}
      <Link
        href="/"
        aria-label="Domua — início"
        className="flex items-center gap-2.5"
      >
        <Image
          src="/domua-logo-white.png"
          alt="Logo da Domua"
          width={172}
          height={52}
          priority
        />
      </Link>

      {/* Desktop links */}
      <div className="hidden lg:flex items-center gap-8" role="list">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-link"
            role="listitem"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="#planos"
        className="btn-primary text-sm hidden sm:inline-flex"
      >
        Começar grátis
      </Link>

      {/* Mobile toggle */}
      <button
        className="lg:hidden text-white/80 hover:text-white p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={mobileOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-domua-navy-deep border-t border-white/10 px-6 py-4 space-y-3 z-50 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block nav-link py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#planos"
            className="btn-primary text-sm mt-2 w-full justify-center"
          >
            Começar grátis
          </Link>
        </div>
      )}
    </nav>
  );
}
