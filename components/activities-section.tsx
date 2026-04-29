import { Mountain, Wrench, MessagesSquare, BookOpenCheck } from "lucide-react"

const activities = [
  {
    icon: Mountain,
    title: "Viajes de campo a comunidades",
    description:
      "Nos trasladamos a Milla Milla, Viscachani y otras comunidades de Sica Sica y Patacamaya para vivir su realidad, recorrer las parcelas y construir confianza con las familias productoras.",
    image: "/activity-fieldtrip.jpg",
    alt: "Estudiantes recorriendo una comunidad rural del altiplano boliviano",
    tag: "Viajes",
  },
  {
    icon: Wrench,
    title: "Talleres de capacitación",
    description:
      "Bajo el principio de 'Aprender Haciendo', desarrollamos sesiones prácticas en campo donde el conocimiento se construye en conjunto con los productores y sus familias.",
    image: "/activity-workshop.jpg",
    alt: "Taller agrícola práctico con productores y estudiantes",
    tag: "Talleres",
  },
  {
    icon: MessagesSquare,
    title: "Socialización y acuerdos",
    description:
      "Espacios de diálogo y devolución con autoridades locales y comunidades para validar resultados, escuchar inquietudes y co-diseñar las herramientas del proyecto.",
    image: "/activity-community.jpg",
    alt: "Reunión comunitaria entre familias productoras y estudiantes",
    tag: "Comunidad",
  },
  {
    icon: BookOpenCheck,
    title: "Investigación aplicada",
    description:
      "Levantamiento de datos, sistematización de saberes y revisión científica para sustentar cada decisión metodológica del modelo multidisciplinario.",
    image: "/activity-diagnosis.jpg",
    alt: "Estudiantes haciendo trabajo de investigación en el campo",
    tag: "Investigación",
  },
]

export function ActivitiesSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {activities.map((a) => (
            <article
              key={a.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={a.image || "/placeholder.svg"}
                  alt={a.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  <a.icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {a.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                <h3 className="font-serif text-2xl font-semibold leading-snug text-foreground">{a.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{a.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
