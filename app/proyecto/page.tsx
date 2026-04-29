import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { AboutSection } from "@/components/about-section"

export const metadata: Metadata = {
  title: "El Proyecto | Yapu Aroma",
  description:
    "Modelo Multidisciplinario de Desarrollo Comunitario Productivo: cómo fusionamos saberes ancestrales y tecnología en Sica Sica y Patacamaya.",
}

export default function ProyectoPage() {
  return (
    <>
      <PageHeader
        eyebrow="El Proyecto"
        title="¿De qué trata el Modelo Multidisciplinario?"
        description="Fusionamos conocimientos tradicionales agrícolas con tecnología e ingeniería para reducir costos y mejorar los ingresos de las familias productoras de quinua del altiplano boliviano."
      />
      <AboutSection />
    </>
  )
}
