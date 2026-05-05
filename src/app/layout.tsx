import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://domua.com.br"),
  title: {
    default: "Domua — A plataforma completa para corretores de imóveis",
    template: "%s | Domua",
  },
  description:
    "Organize leads, gerencie imóveis, acompanhe negociações e feche mais negócios. A plataforma CRM completa feita para corretores de imóveis que querem vender mais com menos esforço.",
  keywords: [
    "CRM imobiliário",
    "software para corretores",
    "gestão de leads imobiliários",
    "plataforma imobiliária",
    "funil de vendas imóveis",
    "sistema para imobiliária",
    "corretor de imóveis",
  ],
  authors: [{ name: "Domua" }],
  creator: "Domua",
  publisher: "Domua",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://domua.com.br",
    siteName: "Domua",
    title: "Domua — A plataforma completa para corretores de imóveis",
    description:
      "Organize leads, gerencie imóveis, acompanhe negociações e feche mais negócios. 14 dias grátis, sem cartão de crédito.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Domua — Plataforma CRM para corretores de imóveis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domua — A plataforma completa para corretores de imóveis",
    description:
      "Organize leads, gerencie imóveis, acompanhe negociações e feche mais negócios.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://domua.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
