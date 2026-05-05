const BENEFITS = [
  {
    icon: "🚀",
    title: "Mais organização",
    description: "Tenha todas as informações centralizadas e acessíveis em qualquer lugar.",
  },
  {
    icon: "⚡",
    title: "Mais produtividade",
    description: "Automatize tarefas, ganhe tempo e foque no que realmente importa: vender.",
  },
  {
    icon: "🏆",
    title: "Mais vendas",
    description: "Com processos claros e acompanhamento eficiente, seus resultados crescem.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="benefits-bg py-20" id="beneficios" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="pill pill-dark mb-5">Benefícios</span>
          <h2
            id="benefits-heading"
            className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-10"
          >
            Feito para corretores<br />que querem crescer
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-slate-200">
            {BENEFITS.map(({ icon, title, description }) => (
              <div key={title}>
                <div
                  className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300 mb-3 text-lg"
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <h3 className="text-white font-bold mb-1.5 text-sm">{title}</h3>
                <p className="text-xs leading-relaxed text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Video card */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" role="button" aria-label="Assistir vídeo: Domua em 2 minutos" tabIndex={0}>
          <div className="aspect-[16/10] bg-gradient-to-br from-slate-700 to-slate-900 relative">
            {/* House illustration */}
            <svg viewBox="0 0 400 250" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <defs>
                <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="window" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#fde68a" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <rect width="400" height="250" fill="url(#sky)" />
              <rect x="80" y="120" width="240" height="100" fill="#0f172a" />
              <rect x="80" y="100" width="160" height="20" fill="#1e293b" />
              <rect x="240" y="80" width="80" height="40" fill="#1e293b" />
              <rect x="100" y="135" width="50" height="40" fill="url(#window)" opacity="0.9" />
              <rect x="170" y="135" width="50" height="40" fill="url(#window)" opacity="0.9" />
              <rect x="250" y="135" width="60" height="40" fill="url(#window)" opacity="0.9" />
              <rect x="100" y="190" width="40" height="30" fill="url(#window)" opacity="0.7" />
              <rect x="160" y="190" width="40" height="30" fill="url(#window)" opacity="0.7" />
              <rect x="0" y="220" width="400" height="30" fill="#1e40af" opacity="0.6" />
            </svg>

            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />

            {/* Play button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
              <svg className="w-5 h-5 text-domua-blue ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            {/* Caption */}
            <div className="absolute bottom-4 right-4">
              <div className="bg-domua-blue text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                <span aria-hidden="true">▶</span> Domua em 2 minutos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
