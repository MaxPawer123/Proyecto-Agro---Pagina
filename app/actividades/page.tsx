import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ActivitiesSection } from "@/components/activities-section"

export const metadata: Metadata = {
  title: "Actividades | Yapu Aroma",
  description:
    "Galería de actividades en campo: viajes a Milla Milla y Viscachani, talleres de capacitación bajo el principio de aprender haciendo, y socialización con autoridades locales.",
}

export default function ActividadesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Actividades"
        title="Aprender haciendo, junto a las comunidades."
        description="Cada actividad refuerza el vínculo entre la academia y los productores de quinua del altiplano boliviano."
      />
      <ActivitiesSection />
    </>
  )
}
