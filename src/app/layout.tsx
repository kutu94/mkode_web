import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://www.mkode.es"),
  title: { default: "MKode | Sistemas de Automatización e IA para Empresas", template: "%s | MKode" },
  description: "Ingeniería de automatización e IA para integrar herramientas, reducir trabajo manual y mejorar procesos operativos.",
  alternates: { canonical: "/" },
  openGraph: { title: "MKode | Automatización e IA para operaciones", description: "Sistemas de automatización e IA que conectan herramientas y reducen fricción operativa.", url: "https://www.mkode.es", type: "website", locale: "es_ES", siteName: "MKode" },
};

const LogoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="35" y="10" width="30" height="30" rx="4" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" /><rect x="10" y="30" width="30" height="30" rx="4" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" /><rect x="60" y="30" width="30" height="30" rx="4" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" /><rect x="35" y="45" width="15" height="15" rx="2" fill="currentColor" /><rect x="50" y="45" width="15" height="15" rx="2" fill="currentColor" /><rect x="35" y="65" width="30" height="30" rx="4" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" /><path d="M10 50 H30 M70 50 H90 M25 40 L10 40 M75 60 L90 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MKode",
    legalName: "MKode LLC",
    description: "Empresa de sistemas de automatización e IA para operaciones empresariales. La dirección indicada es el domicilio legal registrado y no una oficina de atención al público.",
    url: "https://www.mkode.es",
    email: "marcos.quintana@mkode.es",
    address: { "@type": "PostalAddress", name: "Registered legal address — not a customer-facing office", streetAddress: "30 N Gould St, Ste R", addressLocality: "Sheridan", addressRegion: "WY", postalCode: "82801", addressCountry: "US" },
  };
  return (
    <html lang="es" className="scroll-smooth">
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /></head>
      <body className={cn(inter.className, "antialiased selection:bg-primary-blue/30 bg-page-gradient min-h-screen")}>
        <div className="flex min-h-screen flex-col">
          <header className="fixed top-0 z-50 w-full glass-nav"><nav className="container mx-auto flex h-16 items-center justify-between px-6" aria-label="Navegación principal">
            <Link href="/" className="group flex items-center gap-3" aria-label="MKode, inicio"><LogoIcon className="h-8 w-8 text-primary-blue transition-colors group-hover:text-white" /><span className="text-xl font-bold tracking-tighter text-white">MKode</span></Link>
            <div className="hidden items-center gap-8 md:flex"><Link href="/" className="text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white">Inicio</Link><Link href="/#sistemas" className="text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white">Sistemas</Link><Link href="/cases" className="text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white">Casos</Link><Link href="/contact" className="rounded-2xl px-5 py-2 text-xs font-bold uppercase tracking-widest btn-gradient soft-shadow">Auditoría</Link></div>
          </nav></header>
          <main className="flex-grow pt-16">{children}</main>
          <footer className="border-t border-white/5 bg-deep-black/30 py-20"><div className="container mx-auto px-6">
            <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4"><div className="col-span-1 md:col-span-2"><Link href="/" className="mb-6 flex items-center gap-3"><LogoIcon className="h-6 w-6 text-primary-blue" /><span className="text-lg font-bold tracking-tighter text-white">MKode</span></Link><p className="max-w-sm text-sm leading-relaxed text-white/50">Ingeniería de sistemas inteligentes para optimizar operaciones de empresas en crecimiento.</p></div>
              <div><h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Secciones</h2><ul className="space-y-4"><li><Link href="/" className="text-sm text-white/50 hover:text-white">Inicio</Link></li><li><Link href="/#sistemas" className="text-sm text-white/50 hover:text-white">Sistemas</Link></li><li><Link href="/cases" className="text-sm text-white/50 hover:text-white">Casos</Link></li><li><Link href="/contact" className="text-sm text-white/50 hover:text-white">Contacto</Link></li></ul></div>
              <div><h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Legal</h2><ul><li><Link href="/privacidad" className="text-sm text-white/50 hover:text-white">Privacidad</Link></li></ul></div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row"><p className="text-[10px] uppercase tracking-widest text-white/40">© {new Date().getFullYear()} MKode LLC. Engineering for operations.</p><p className="text-[10px] uppercase tracking-widest text-white/40 italic">Serious Technical Excellence</p></div>
          </div></footer>
        </div>
      </body>
    </html>
  );
}
