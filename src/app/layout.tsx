import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKode | Sistemas de Automatización e IA para Empresas",
  description: "Ingeniería que convierte tareas manuales en margen. Implementación de sistemas de IA y automatización en 14 días.",
  openGraph: {
    title: "MKode | Automatización e IA Premium",
    description: "Sistemas de Automatización e IA que eliminan cuellos de botella operativos.",
    type: "website",
    locale: "es_ES",
    siteName: "MKode",
  },
};

const LogoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
    <rect x="35" y="10" width="30" height="30" rx="4" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <rect x="10" y="30" width="30" height="30" rx="4" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <rect x="60" y="30" width="30" height="30" rx="4" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <rect x="35" y="45" width="15" height="15" rx="2" fill="currentColor" />
    <rect x="50" y="45" width="15" height="15" rx="2" fill="currentColor" />
    <rect x="35" y="65" width="30" height="30" rx="4" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <path d="M10 50 H30 M70 50 H90 M25 40 L10 40 M75 60 L90 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "MKode",
              "description": "Sistemas de Automatización e IA para PYMES y empresas medianas.",
              "url": "https://mkode.com",
              "logo": "https://mkode.com/logo-mkode.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ES"
              },
              "serviceType": "AI Automation",
              "areaServed": "ES"
            }),
          }}
        />
      </head>
      <body className={cn(inter.className, "antialiased selection:bg-primary-blue/30 bg-page-gradient min-h-screen")}>
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 w-full z-50 glass-nav">
            <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 group">
                <LogoIcon className="w-8 h-8 text-primary-blue group-hover:text-white transition-colors" />
                <span className="text-xl font-bold tracking-tighter text-white">MKode</span>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Inicio</Link>
                <Link href="/#sistemas" className="text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Sistemas</Link>
                <Link href="/cases" className="text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Casos</Link>
                <Link href="/contact" className="px-5 py-2 rounded-2xl btn-gradient text-xs font-bold uppercase tracking-widest transition-all soft-shadow">
                  Auditoría
                </Link>
              </div>
            </nav>
          </header>

          <main className="flex-grow pt-16">
            {children}
          </main>

          <footer className="py-20 border-t border-white/5 bg-deep-black/30">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                  <Link href="/" className="flex items-center gap-3 mb-6">
                    <LogoIcon className="w-6 h-6 text-primary-blue" />
                    <span className="text-lg font-bold tracking-tighter text-white">MKode</span>
                  </Link>
                  <p className="text-white/40 max-w-sm leading-relaxed text-sm">
                    Ingeniería de sistemas inteligentes para optimizar la rentabilidad de empresas en crecimiento.
                  </p>
                </div>

                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Secciones</h4>
                  <ul className="space-y-4">
                    <li><Link href="/" className="text-white/30 hover:text-white transition-colors text-sm">Inicio</Link></li>
                    <li><Link href="/#sistemas" className="text-white/30 hover:text-white transition-colors text-sm">Sistemas</Link></li>
                    <li><Link href="/cases" className="text-white/30 hover:text-white transition-colors text-sm">Casos</Link></li>
                    <li><Link href="/contact" className="text-white/30 hover:text-white transition-colors text-sm">Contacto</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
                  <ul className="space-y-4">
                    <li><Link href="/privacy" className="text-white/30 hover:text-white transition-colors text-sm">Privacidad</Link></li>
                    <li><Link href="/terms" className="text-white/30 hover:text-white transition-colors text-sm">Términos</Link></li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/20 text-[10px] uppercase tracking-widest">
                  © {new Date().getFullYear()} MKode. Engineering for operations.
                </p>
                <div className="flex gap-6">
                  <p className="text-white/20 text-[10px] uppercase tracking-widest italic">Serious Technical Excellence</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
