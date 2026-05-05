const PROBLEMS = [
  "Leads que se perdem no WhatsApp",
  "Planilhas confusas e desatualizadas",
  "Negociações sem acompanhamento",
  "Falta de organização e relatórios",
];

const LEADS = [
  { name: "João Silva", status: "Novo lead", statusColor: "bg-emerald-100 text-emerald-700", avatarStyle: {} },
  { name: "Maria Santos", status: "Qualificado", statusColor: "bg-blue-100 text-blue-700", avatarStyle: { background: "linear-gradient(135deg,#FBCFE8,#DB2777)" } },
  { name: "Carlos Souza", status: "Proposta", statusColor: "bg-amber-100 text-amber-700", avatarStyle: { background: "linear-gradient(135deg,#FCD34D,#D97706)" } },
  { name: "Ana Lima", status: "Negociação", statusColor: "bg-orange-100 text-orange-700", avatarStyle: { background: "linear-gradient(135deg,#A78BFA,#7C3AED)" } },
];

export default function ProblemSection() {
  return (
    <section className="section" id="recursos" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="pill pill-light mb-5">O Problema</span>
          <h2
            id="problem-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-domua-text leading-tight tracking-tight mb-5"
          >
            Você está perdendo<br />vendas sem perceber
          </h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Leads esquecidos, negociações desorganizadas e informações espalhadas fazem você perder tempo — e dinheiro.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            A Domua resolve isso com uma experiência simples e eficiente.
          </p>
          <ul className="space-y-3 text-slate-700" aria-label="Problemas comuns de corretores">
            {PROBLEMS.map((problem) => (
              <li key={problem} className="flex items-center gap-3">
                <span className="problem-x" aria-hidden="true">✕</span>
                {problem}
              </li>
            ))}
          </ul>
        </div>

        {/* Illustration */}
        <div className="hidden sm:flex items-center justify-center gap-6" aria-hidden="true">
          {/* Messy side */}
          <div className="relative">
            <div className="w-44 h-32 bg-white rounded-xl shadow-card border border-slate-100 -rotate-6 absolute -top-3 -left-2 flex items-center justify-center">
              <div className="w-10 h-10 bg-emerald-500 rounded-md flex items-center justify-center text-white font-bold text-sm">
                <span>⊞</span>
              </div>
            </div>
            <div className="w-44 h-32 bg-white rounded-xl shadow-card border border-slate-100 rotate-3 relative">
              <div className="p-3 space-y-1.5">
                {["w-3/4", "w-1/2", "w-2/3", "w-1/3", "w-3/4"].map((w, i) => (
                  <div key={i} className={`h-1.5 bg-slate-200 rounded ${w}`} />
                ))}
              </div>
              <div className="absolute -bottom-3 -right-3 w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg text-sm">
                W
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="text-domua-blue text-2xl animate-arrow-pulse">⇄</div>

          {/* Organized side */}
          <div className="w-56 bg-white rounded-2xl shadow-card-hover border border-slate-100 p-3">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="domua-logo domua-logo-sm">D</div>
              <span className="font-bold text-domua-text text-xs">Domua</span>
            </div>
            <div className="text-[10px] font-semibold text-domua-text mb-2">Leads</div>
            <div className="space-y-2">
              {LEADS.map(({ name, status, statusColor, avatarStyle }) => (
                <div key={name} className="flex items-center gap-2">
                  <div className="avatar" style={avatarStyle} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold text-domua-text">{name}</div>
                    <div className="text-[8px] text-slate-400">{status}</div>
                  </div>
                  <span className={`lead-pill ${statusColor}`}>{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
