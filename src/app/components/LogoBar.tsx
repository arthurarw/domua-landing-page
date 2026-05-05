const PARTNERS = [
  { icon: "⬡", name: "imobiliar", subtitle: "IMOBILIÁRIA" },
  { icon: "🏠", name: "Casa & Lar", subtitle: "IMOBILIÁRIA" },
  { icon: "🏢", name: "Prime Imóveis", subtitle: "PREMIUM" },
  { icon: "🛡", name: "NovoLar", subtitle: "IMOBILIÁRIA" },
  { icon: "⛰", name: "Atualize", subtitle: "NEGÓCIOS IMOBILIÁRIOS" },
];

export default function LogoBar() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-10"
      aria-label="Corretoras parceiras"
    >
      <div className="logo-bar p-6 md:p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 items-center">
        <p className="text-domua-text font-bold text-sm leading-snug">
          Corretoras que<br />confiam na Domua
        </p>
        {PARTNERS.map(({ icon, name, subtitle }) => (
          <div key={name} className="logo-item justify-center">
            <span className="text-xl" aria-hidden="true">{icon}</span>
            <div className="leading-tight">
              <div className="text-sm">{name}</div>
              <div className="text-[9px] text-slate-400 tracking-widest">{subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
