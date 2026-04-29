import { Mountain, Wrench, MessagesSquare, BookOpenCheck } from "lucide-react"

const activities = [
  {
    icon: Mountain,
    title: "Viajes a Milla Milla y Viscachani",
    description:
      "Nos trasladamos a las comunidades para vivir su realidad, recorrer las parcelas y construir confianza con las familias productoras.",
    image: "/activity-fieldtrip.jpg",
    alt: "Estudiantes recorriendo una comunidad rural del altiplano boliviano",
  },
  {
    icon: Wrench,
    title: "Talleres prácticos",
    description:
      "Bajo la metodología 'Aprender Haciendo', desarrollamos sesiones en campo donde el conocimiento se construye en conjunto.",
    image: "/activity-workshop.jpg",
    alt: "Taller agrícola práctico con productores y estudiantes",
  },
  {
    icon: MessagesSquare,
    title: "Socialización con las comunidades",
    description:
      "Espacios de diálogo y devolución para validar resultados, escuchar inquietudes y co-diseñar las herramientas del proyecto.",
    image: "/activity-community.jpg",
    alt: "Reunión comunitaria entre familias productoras y estudiantes",
  },
  {
    icon: BookOpenCheck,
    title: "Investigación aplicada",
    description:
      "Levantamiento de datos, sistematización de saberes y revisión científica para sustentar cada decisión del modelo.",
    image: null,
    alt: "",
  },
]

export function ActivitiesSection() {
  return (
    <section id="activities" className="border-t border-border/50 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Actividades en Campo
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
              Aprender haciendo, junto a las comunidades.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cada actividad refuerza el vínculo entre la academia y los productores de quinua del altiplano.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-md"
            >
              {a.image ? (
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={a.image || "/placeholder.svg"}
                    alt={a.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-primary/10 via-accent/15 to-secondary/40">
                  <a.icon className="h-12 w-12 text-primary/70" aria-hidden="true" />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <a.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold leading-snug text-foreground">{a.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
