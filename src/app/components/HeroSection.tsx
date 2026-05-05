import Link from "next/link";
import DashboardMock from "./DashboardMock";

export default function HeroSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-20 lg:pt-16 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center"
      aria-labelledby="hero-heading"
    >
      <div className="animate-fadeUp">
        <span className="pill pill-dark mb-6">A plataforma completa para corretores</span>
        <h1
          id="hero-heading"
          className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6"
        >
          Venda mais imóveis<br />com menos esforço
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
          Organize leads, gerencie imóveis, acompanhe negociações e feche mais negócios — tudo em um só lugar.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link href="#planos" className="btn-primary">
            Começar grátis
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="#" className="btn-ghost-dark">Agendar demonstração</Link>
        </div>
        <ul className="flex flex-wrap gap-6 text-slate-300 text-sm" aria-label="Benefícios de cadastro">
          {["14 dias grátis", "Sem cartão de crédito", "Cancelamento fácil"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="animate-fadeUp-2 hidden lg:block">
        <DashboardMock />
      </div>
    </section>
  );
}
