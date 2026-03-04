import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MKode | Ingeniería de Automatización e IA",
  description: "Infraestructura de automatización empresarial. Eliminamos tareas manuales e integramos ecosistemas SaaS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-page-gradient min-h-screen text-white/90`}>
        {children}
      </body>
    </html>
  );
}
