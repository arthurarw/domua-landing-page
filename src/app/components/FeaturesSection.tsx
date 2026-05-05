const FEATURES = [
  {
    icon: "👥",
    title: "Gestão de leads",
    description: "Capture, organize e acompanhe seus leads para não perder nenhuma oportunidade.",
  },
  {
    icon: "🏠",
    title: "Controle de imóveis",
    description: "Cadastre e gerencie seus imóveis com fotos, detalhes e disponibilidade.",
  },
  {
    icon: "▽",
    title: "Funil de vendas",
    description: "Acompanhe cada negociação em tempo real e saiba onde focar seus esforços.",
  },
  {
    icon: "📄",
    title: "Contratos e documentos",
    description: "Gere contratos e documentos de forma rápida e segura. Tudo digital.",
  },
  {
    icon: "📈",
    title: "Relatórios inteligentes",
    description: "Relatórios completos para você tomar decisões e vender cada vez mais.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="section pt-0" id="funcionalidades" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="pill pill-light mb-5">A Solução</span>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-domua-text leading-tight tracking-tight"
          >
            Tudo que você precisa,<br />em um só lugar
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {FEATURES.map(({ icon, title, description }) => (
            <article key={title} className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <span className="text-[22px]">{icon}</span>
              </div>
              <h3 className="font-bold text-domua-text mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
