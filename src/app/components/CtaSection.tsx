import Link from "next/link";

const PERKS = ["14 dias grátis", "Sem cartão de crédito", "Suporte humano e especializado"];

export default function CtaSection() {
  return (
    <section className="py-16 bg-domua-blue-pale" id="planos" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="cta-bg p-8 md:p-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2
              id="cta-heading"
              className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
            >
              Pronto para vender mais?
            </h2>
            <p className="text-slate-300 text-sm mb-6">
              Comece agora mesmo e descubra como a Domua pode transformar seu negócio.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#" className="btn-primary">Começar grátis agora</Link>
              <Link href="#" className="btn-ghost-dark">Falar com especialista</Link>
            </div>
          </div>

          <ul className="space-y-3 md:pl-12" aria-label="O que está incluído">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-slate-200 text-sm">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
