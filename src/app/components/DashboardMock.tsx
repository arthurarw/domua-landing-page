import Image from "next/image";

export default function DashboardMock() {
  return (
    <div
      className="dash-card text-[11px]"
      aria-hidden="true"
      role="presentation"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-white">
        <div className="flex items-center gap-2">
          <Image
            src="/domua-logo.png"
            alt="Logo da Domua"
            width={130}
            height={42}
            priority
          />
        </div>
        <div className="flex-1 max-w-xs mx-4 relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-2.5 h-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <div className="w-full bg-slate-50 rounded-md pl-7 pr-2 py-1.5 text-[10px] text-slate-400">
            Buscar...
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 to-blue-600" />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-36 bg-slate-50/60 p-3 space-y-1 border-r border-slate-100">
          {[
            { icon: "⊞", label: "Dashboard", active: true },
            { icon: "👥", label: "Leads" },
            { icon: "🏠", label: "Imóveis" },
            { icon: "🤝", label: "Negociações" },
            { icon: "✅", label: "Tarefas" },
            { icon: "📄", label: "Contratos" },
            { icon: "📈", label: "Relatórios" },
            { icon: "⚙", label: "Configurações" },
          ].map(({ label, active }) => (
            <div
              key={label}
              className={`dash-side-item${active ? " active" : ""}`}
            >
              <span className="text-[10px]">{label}</span>
            </div>
          ))}
        </aside>

        {/* Main */}
        <main className="flex-1 p-4 space-y-3 bg-white">
          <h3 className="font-bold text-domua-text text-sm">Dashboard</h3>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Leads", value: "128", growth: "+12% este mês" },
              { label: "Negociações", value: "56", growth: "+8% este mês" },
              { label: "Imóveis", value: "312", growth: "+12% este mês" },
              { label: "Fechamentos", value: "23", growth: "+30% este mês" },
            ].map(({ label, value, growth }) => (
              <div key={label} className="stat-card">
                <div className="text-slate-500 text-[9px]">{label}</div>
                <div className="font-bold text-domua-text text-base mt-0.5">
                  {value}
                </div>
                <div className="text-emerald-500 text-[8px] mt-0.5">
                  {growth}
                </div>
              </div>
            ))}
          </div>

          {/* Funnel */}
          <div className="bg-slate-50/60 rounded-xl p-3 border border-slate-100">
            <div className="font-semibold text-domua-text text-[10px] mb-2">
              Funil de vendas
            </div>
            <div className="grid grid-cols-5 gap-1 text-[9px]">
              {[
                { label: "Novos Leads", count: "128", value: "R$ 0,00" },
                { label: "Qualificados", count: "45", value: "R$ 350.000" },
                {
                  label: "Proposta",
                  count: "18",
                  value: "R$ 110.000",
                  highlight: true,
                },
                { label: "Negociação", count: "9", value: "R$ 320.000" },
                { label: "Fechado", count: "23", value: "R$ 1.250.000" },
              ].map(({ label, count, value, highlight }) => (
                <div
                  key={label}
                  className={`funnel-col${highlight ? " highlight" : ""}`}
                >
                  <div className="text-slate-500">{label}</div>
                  <div
                    className={`font-bold mt-1 ${highlight ? "text-amber-600" : "text-domua-text"}`}
                  >
                    {count}
                  </div>
                  <div className="text-slate-400 text-[8px]">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity + Tasks */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-slate-50/60 rounded-xl p-3 border border-slate-100">
              <div className="font-semibold text-domua-text text-[10px] mb-2">
                Atividades recentes
              </div>
              <div className="space-y-2 text-[9px]">
                {[
                  {
                    color: "blue",
                    label: "Novo lead cadastrado",
                    desc: "João Silva se interessou por Apartamento no Centro",
                    time: "10 min atrás",
                  },
                  {
                    color: "amber",
                    label: "Proposta enviada",
                    desc: "Proposta enviada para Maria Santos - R$ 450.000",
                    time: "1 hora atrás",
                  },
                  {
                    color: "emerald",
                    label: "Negociação atualizada",
                    desc: "Negociação com Carlos Souza movida para Proposta",
                    time: "2 horas atrás",
                  },
                ].map(({ color, label, desc, time }) => (
                  <div key={label} className="flex items-start gap-2">
                    <div
                      className={`w-5 h-5 rounded-full bg-${color}-100 text-${color}-600 flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-[8px]">●</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-domua-text">
                        {label}
                      </div>
                      <div className="text-slate-400 truncate">{desc}</div>
                    </div>
                    <div className="text-slate-400 text-[8px] whitespace-nowrap">
                      {time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50/60 rounded-xl p-3 border border-slate-100">
              <div className="font-semibold text-domua-text text-[10px] mb-2">
                Tarefas do dia
              </div>
              <div className="space-y-1.5 text-[9px]">
                {[
                  "Ligar para João Silva",
                  "Enviar proposta para Maria",
                  "Visita - Apartamento Centro",
                  "Reunião com proprietário",
                ].map((task) => (
                  <div
                    key={task}
                    className="flex items-center gap-2 p-1.5 bg-white rounded-md border border-slate-100"
                  >
                    <div className="w-2.5 h-2.5 rounded border border-slate-300" />
                    <span className="text-domua-text">{task}</span>
                  </div>
                ))}
                <div className="text-domua-blue text-[9px] mt-2 cursor-pointer">
                  Ver todas as tarefas →
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
