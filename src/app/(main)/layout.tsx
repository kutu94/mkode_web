import Link from "next/link";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <nav className="glass-nav sticky top-0 z-[100] h-20 sm:h-24 flex items-center transition-all duration-500">
                <div className="container mx-auto px-6 max-w-[1240px] flex justify-between items-center w-full">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="relative">
                            <img
                                src="/logo.png"
                                alt="MKode Logo"
                                className="h-11 w-auto brightness-0 invert transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute -inset-2 blur-3xl bg-primary-blue/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-xl font-bold tracking-tighter text-white">MKode</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-12">
                        <NavLink href="/">Inicio</NavLink>
                        <NavLink href="/#sistemas">Ingeniería</NavLink>
                        <NavLink href="/cases">Casos</NavLink>
                        <NavLink href="/contact">Auditoría</NavLink>
                    </div>

                    <Link href="/contact" className="px-8 py-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                        Reservar Auditoría
                    </Link>
                </div>
            </nav>

            <main className="relative">{children}</main>

            <footer className="py-40 border-t border-white/[0.04] bg-white/[0.01]">
                <div className="container mx-auto px-6 max-w-[1240px]">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
                        <div className="col-span-1 md:col-span-2 space-y-12">
                            <Link href="/" className="flex items-center gap-5 group">
                                <img
                                    src="/logo.png"
                                    alt="MKode Logo"
                                    className="h-11 w-auto brightness-0 invert"
                                />
                                <span className="text-2xl font-bold tracking-tighter text-white">MKode</span>
                            </Link>
                            <p className="text-white/30 text-lg leading-relaxed max-w-sm font-light">
                                Ingeniería de procesos aplicada a la recuperación de margen operativo. <br />
                                Sistemas implementados en 14 días.
                            </p>
                            <div className="text-white/40 font-medium">
                                f. <Link href="mailto:contacto@mkode.es" className="hover:text-primary-blue transition-colors">contacto@mkode.es</Link>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Acceso</h4>
                            <div className="flex flex-col gap-5">
                                <FooterLink href="/">Inicio</FooterLink>
                                <FooterLink href="/#sistemas">Ingeniería</FooterLink>
                                <FooterLink href="/cases">Casos de Impacto</FooterLink>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Cualificación</h4>
                            <div className="flex flex-col gap-5">
                                <FooterLink href="/contact">Auditoría ROI</FooterLink>
                                <p className="text-white/20 text-[10px] italic leading-tight">
                                    Madrid / Remoto <br />
                                    Solo implementaciones con ROI medible.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/[0.04]">
                        <p className="text-white/20 text-[10px] uppercase tracking-widest font-medium mb-6 md:mb-0">
                            &copy; {new Date().getFullYear()} MKode SYSTEMS. Ingeniería de procesos aplicada.
                        </p>
                        <div className="flex gap-10 text-white/20 text-[10px] uppercase tracking-widest font-medium">
                            <Link href="#" className="hover:text-primary-blue transition-colors">Privacidad</Link>
                            <Link href="#" className="hover:text-primary-blue transition-colors">Aviso Legal</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-[11px] font-bold text-white/30 uppercase tracking-[0.25em] hover:text-white transition-all duration-300 relative group"
        >
            {children}
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary-blue transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
        </Link>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-white/30 hover:text-primary-blue transition-all duration-300 text-base font-light">
            {children}
        </Link>
    );
}
