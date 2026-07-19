import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ejemplos de automatización",
  description: "Escenarios orientativos de automatización, integración y seguimiento con métricas que deben validarse para cada proceso.",
  alternates: { canonical: "/cases" },
  openGraph: {
    title: "Ejemplos de automatización | MKode",
    description: "Explore escenarios de automatización sin resultados atribuidos ni promesas comerciales.",
    url: "https://www.mkode.es/cases",
  },
};

export default function CasesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
