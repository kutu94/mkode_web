import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
type NavigationItem = { href: string; label: string; cta?: boolean };
const navigationItems: readonly NavigationItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/#sistemas", label: "Sistemas" },
  { href: "/cases", label: "Casos" },
  { href: "/contact", label: "Revisión de encaje", cta: true },
];

// Fixed header: 112px on mobile (64px brand row + 48px links), 64px on desktop.
const contentHeaderOffset = "pt-28 md:pt-16";
const navLinkClass =
  "rounded-md text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020208]";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mkode.es"),
  title: {
    default: "MKode | Sistemas de Automatización e IA para Empresas",
    template: "%s | MKode",
  },
  description:
    "Ingeniería de automatización e IA para integrar herramientas, reducir trabajo manual y mejorar procesos operativos.",
  openGraph: {
    title: "MKode | Automatización e IA para operaciones",
    description:
      "Sistemas de automatización e IA que conectan herramientas y reducen fricción operativa.",
    url: "https://www.mkode.es",
    type: "website",
    locale: "es_ES",
    siteName: "MKode",
  },
};

const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={cn("fill-current", className)}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="35" y="10" width="30" height="30" rx="4" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <rect x="10" y="30" width="30" height="30" rx="4" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <rect x="60" y="30" width="30" height="30" rx="4" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <rect x="35" y="45" width="15" height="15" rx="2" fill="currentColor" />
    <rect x="50" y="45" width="15" height="15" rx="2" fill="currentColor" />
    <rect x="35" y="65" width="30" height="30" rx="4" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <path d="M10 50 H30 M70 50 H90 M25 40 L10 40 M75 60 L90 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.mkode.es/#organization",
    name: "MKode",
    legalName: "MKode LLC",
    description: "Empresa de sistemas de automatización e IA para operaciones empresariales.",
    url: "https://www.mkode.es",
    email: "marcos.quintana@mkode.es",
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </head>
      <body
        className={cn(
          inter.className,
          "antialiased selection:bg-primary-blue/30 bg-page-gradient min-h-screen",
        )}
      >
        <div className="flex min-h-screen flex-col">
          <header className="fixed top-0 z-50 w-full glass-nav">
            <nav className="container mx-auto px-4 sm:px-6" aria-label="Navegación principal">
              <div className="flex h-16 items-center justify-between">
                <Link
                  href="/"
                  className="group flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  aria-label="MKode, inicio"
                >
                  <LogoIcon className="h-8 w-8 text-primary-blue transition-colors group-hover:text-white" />
                  <span className="text-xl font-bold tracking-tighter text-white">MKode</span>
                </Link>
                <div className="hidden items-center gap-8 md:flex">
                  {navigationItems.map((item) =>
                    item.cta ? (
                      <Link key={item.href} href={item.href} className="rounded-2xl px-5 py-2 text-xs font-bold uppercase tracking-widest btn-gradient soft-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
                        {item.label}
                      </Link>
                    ) : (
                      <Link key={item.href} href={item.href} className={navLinkClass}>
                        {item.label}
                      </Link>
                    ),
                  )}
                </div>
              </div>
              <div className="grid h-12 grid-cols-4 items-stretch gap-1 border-t border-white/10 md:hidden" aria-label="Navegación móvil">
                {navigationItems.map((item) => (
                  <MobileLink key={item.href} href={item.href}>{item.label}</MobileLink>
                ))}
              </div>
            </nav>
          </header>

          <main className={cn("flex-grow", contentHeaderOffset)}>{children}</main>

          <footer className="border-t border-white/5 bg-deep-black/30 py-14 md:py-20">
            <div className="container mx-auto px-6">
              <div className="mb-12 grid grid-cols-1 gap-10 md:mb-16 md:grid-cols-4 md:gap-12">
                <div className="col-span-1 md:col-span-2">
                  <Link href="/" className="mb-6 flex items-center gap-3">
                    <LogoIcon className="h-6 w-6 text-primary-blue" />
                    <span className="text-lg font-bold tracking-tighter text-white">MKode</span>
                  </Link>
                  <p className="max-w-sm text-sm leading-relaxed text-white/70">
                    Ingeniería de sistemas inteligentes para optimizar operaciones de empresas en crecimiento.
                  </p>
                  <Link href="/consultoras-mexico" className="mt-4 inline-flex rounded-sm text-sm text-blue-300 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
                    Conozca el sprint para consultoras en México
                  </Link>
                </div>
                <div>
                  <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Secciones</h2>
                  <ul className="space-y-4">
                    {navigationItems.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="text-sm text-white/70 hover:text-white">{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Legal</h2>
                  <Link href="/privacidad" className="text-sm text-white/70 hover:text-white">Privacidad</Link>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
                <p className="text-[11px] uppercase tracking-widest text-white/60">© {new Date().getFullYear()} MKode LLC. Engineering for operations.</p>
                <p className="text-[11px] uppercase tracking-widest text-white/60 italic">Serious Technical Excellence</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="flex min-w-0 items-center justify-center rounded-md px-1 text-center text-[10px] font-semibold uppercase leading-tight tracking-wide text-white/80 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-300">
      {children}
    </Link>
  );
}
