import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revisión de encaje",
  description: "Solicite una revisión de encaje para identificar fricciones operativas, tareas manuales y oportunidades de automatización con alcance medible.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Revisión de encaje | MKode",
    description: "Revise con MKode un proceso operativo y sus oportunidades de automatización.",
    url: "https://www.mkode.es/contact",
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
