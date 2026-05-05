"use client";

import Link from "next/link";
import { useState } from "react";

const FOOTER_LINKS = {
  Produto: ["Recursos", "Funcionalidades", "Planos e preços", "Atualizações"],
  Empresa: ["Sobre nós", "Blog", "Carreiras", "Contato"],
  Suporte: ["Central de ajuda", "Tutoriais", "Política de privacidade", "Termos de uso"],
};

const SOCIAL_LINKS = [
  { label: "Instagram", icon: "IG", href: "#" },
  { label: "Facebook", icon: "FB", href: "#" },
  { label: "LinkedIn", icon: "in", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic here
    setEmail("");
  };

  return (
    <footer className="bg-white pt-16 pb-8" id="contato">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="Domua — início">
            <div className="domua-logo" aria-hidden="true">D</div>
            <span className="font-bold text-domua-text text-xl tracking-tight">Domua</span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs">
            A plataforma completa para corretores que querem vender mais imóveis com menos esforço.
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, icon, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center
                           text-slate-500 text-xs font-bold transition-all duration-200
                           hover:bg-domua-blue hover:text-white hover:border-domua-blue"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {Object.entries(FOOTER_LINKS).map(([group, links]) => (
          <div key={group}>
            <h3 className="font-bold text-domua-text mb-4 text-sm">{group}</h3>
            <ul className="space-y-2.5 text-slate-500 text-sm">
              {links.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-domua-blue transition-colors duration-150">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter + copyright */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
        <div className="border-t border-slate-100 pt-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h4 className="font-bold text-domua-text mb-2 text-sm">Receba novidades</h4>
            <p className="text-slate-500 text-xs">Fique por dentro das novidades e dicas para vender mais.</p>
          </div>
          <form
            onSubmit={handleNewsletter}
            className="relative max-w-sm w-full md:justify-self-end"
            aria-label="Assinar newsletter"
          >
            <label htmlFor="newsletter-email" className="sr-only">Seu melhor e-mail</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="newsletter-input"
              autoComplete="email"
            />
            <button
              type="submit"
              aria-label="Assinar"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-md
                         bg-domua-blue text-white flex items-center justify-center
                         hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>

        <p className="text-center text-slate-400 text-xs mt-8">
          © {new Date().getFullYear()} Domua. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
