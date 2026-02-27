import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Briefcase, Info, MessageSquare, Search, ShieldCheck } from "lucide-react";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MKode | Ingeniería de Recuperación de Margen",
  description: "Recuperamos el margen operativo de tu empresa mediante sistemas de automatización e IA en 14 días.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-page-gradient min-h-screen text-white/90`}>
        {/* Apple Style Glass Navigation */}
        <nav className="glass-nav sticky top-0 z-[100] h-16 sm:h-20 flex items-center transition-all duration-500">
          <div className="container mx-auto px-6 max-w-[1240px] flex justify-between items-center w-full">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="MKode Logo"
                  className="h-8 w-auto brightness-0 invert transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute -inset-2 blur-2xl bg-primary-blue/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">MKode</span>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              <NavLink href="/">Inicio</NavLink>
              <NavLink href="/#sistemas">Sistemas</NavLink>
              <NavLink href="/cases">Casos</NavLink>
              <NavLink href="/contact">Auditoría</NavLink>
            </div>

            <Link href="/contact" className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              Reservar Auditoría
            </Link>
          </div>
        </nav>

        <main className="relative">{children}</main>

        <footer className="py-32 border-t border-white/[0.04] bg-white/[0.01]">
          <div className="container mx-auto px-6 max-w-[1240px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
              <div className="col-span-1 md:col-span-2 space-y-8">
                <Link href="/" className="flex items-center gap-4 group">
                  <img
                    src="/logo.png"
                    alt="MKode Logo"
                    className="h-8 w-auto brightness-0 invert"
                  />
                  <span className="text-2xl font-bold tracking-tighter text-white">MKode</span>
                </Link>
                <p className="text-white/30 text-base leading-relaxed max-w-sm font-light">
                  Ingeniería de procesos aplicada a la recuperación de margen operativo. Sistemas implementados en producción en 14 días.
                </p>
                <div className="flex gap-4">
                  <SocialLink href="#" label="LinkedIn" />
                  <SocialLink href="#" label="Twitter" />
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-8">Navegación</h4>
                <div className="flex flex-col gap-4">
                  <FooterLink href="/">Inicio</FooterLink>
                  <FooterLink href="/#sistemas">Sistemas</FooterLink>
                  <FooterLink href="/cases">Casos</FooterLink>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-8">Contacto</h4>
                <div className="flex flex-col gap-4">
                  <FooterLink href="/contact">Auditoría Estratégica</FooterLink>
                  <p className="text-white/30 text-sm font-light">hi@mkode.es</p>
                  <p className="text-white/20 text-[10px] italic">Madrid / Remoto</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/[0.04]">
              <p className="text-white/20 text-[10px] uppercase tracking-widest font-medium mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} MKode SYSTEMS. Todos los derechos reservados.
              </p>
              <div className="flex gap-8 text-white/20 text-[10px] uppercase tracking-widest font-medium">
                <Link href="#" className="hover:text-primary-blue transition-colors">Privacidad</Link>
                <Link href="#" className="hover:text-primary-blue transition-colors">Cookies</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[11px] font-bold text-white/40 uppercase tracking-[0.25em] hover:text-white transition-all duration-300 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary-blue transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white/40 hover:text-primary-blue transition-all duration-300 text-sm font-light">
      {children}
    </Link>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-white hover:border-white/10 transition-all duration-300">
      <span className="sr-only">{label}</span>
      <div className="w-4 h-4 rounded-full bg-current opacity-20" />
    </Link>
  );
}
