import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <div className="hero-bg min-h-screen flex flex-col items-center justify-center px-6">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative text-center flex flex-col items-center gap-10 max-w-xl">
        {/* Logo */}
        <Image
          src="/domua-logo-white.png"
          alt="Domua"
          width={200}
          height={60}
          priority
        />

        {/* Divider */}
        <div className="w-px h-12 bg-white/15" />

        {/* Content */}
        <div className="flex flex-col items-center gap-5">
          <span className="pill pill-dark">Em breve</span>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
            Uma nova experiência
            <br />
            está chegando
          </h1>

          <p className="text-white/55 text-base sm:text-lg leading-relaxed max-w-sm">
            Estamos preparando algo incrível para corretores de imóveis.
            Em breve o novo sistema estará pronto.
          </p>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50 animate-pulse [animation-delay:200ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400/25 animate-pulse [animation-delay:400ms]" />
        </div>
      </div>
    </div>
  );
}
