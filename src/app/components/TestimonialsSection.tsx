const TESTIMONIALS = [
  {
    quote: "A Domua transformou a forma como gerenciamos nossos leads. Hoje não perdemos nenhuma oportunidade!",
    name: "Carlos Mendes",
    role: "Diretor – Prime Imóveis",
    avatarStyle: { background: "linear-gradient(135deg,#93C5FD,#1E40AF)" },
  },
  {
    quote: "Interface simples, intuitiva e completa. Conseguimos organizar todo nosso funil e aumentar nossas vendas.",
    name: "Juliana Oliveira",
    role: "Corretora – Casa & Lar",
    avatarStyle: { background: "linear-gradient(135deg,#FBCFE8,#BE185D)" },
  },
  {
    quote: "Relatórios incríveis que ajudam nas decisões do dia a dia. Recomendo para todos os corretores!",
    name: "Ricardo Alves",
    role: "Sócio – NovoLar Imobiliária",
    avatarStyle: { background: "linear-gradient(135deg,#FCD34D,#B45309)" },
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section bg-domua-blue-pale" id="depoimentos" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="pill pill-light mb-5">Depoimentos</span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-domua-text leading-tight tracking-tight"
          >
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, role, avatarStyle }) => (
            <article key={name} className="testi-card">
              <div className="stars mb-4" aria-label="Avaliação 5 estrelas">★★★★★</div>
              <blockquote className="text-slate-600 leading-relaxed mb-6 text-sm">
                "{quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="avatar avatar-lg" style={avatarStyle} aria-hidden="true" />
                <div>
                  <div className="font-bold text-domua-text text-sm">{name}</div>
                  <div className="text-slate-500 text-xs">{role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Navegação de depoimentos">
          <span className="dot active" role="tab" aria-selected="true" aria-label="Página 1" />
          <span className="dot" role="tab" aria-selected="false" aria-label="Página 2" />
          <span className="dot" role="tab" aria-selected="false" aria-label="Página 3" />
        </div>
      </div>
    </section>
  );
}
