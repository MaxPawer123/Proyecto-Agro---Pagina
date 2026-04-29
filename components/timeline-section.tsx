import { Users, ClipboardList, Rocket } from "lucide-react"

const milestones = [
  {
    icon: Users,
    label: "Hito 01",
    title: "El Inicio: Primera Reunión Multidisciplinaria",
    description:
      "Estudiantes de distintas carreras de la UMSA se encuentran para trazar un objetivo común: aportar al desarrollo de las comunidades productoras de quinua.",
  },
  {
    icon: ClipboardList,
    label: "Hito 02",
    title: "Diagnóstico en Terreno",
    description:
      "Visitas a las comunidades para escuchar, observar y documentar las necesidades reales de las familias productoras y de su sistema productivo.",
  },
  {
    icon: Rocket,
    label: "Hito 03",
    title: "Desarrollo y Ejecución",
    description:
      "Implementación del modelo multidisciplinario: talleres, herramientas digitales y entregables al servicio de las comunidades.",
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="border-t border-border/50 bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            Nuestra Historia
          </span>
          <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
            El camino que recorrimos juntos.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Una línea de tiempo de los hitos que dieron forma a este proyecto.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <ol className="relative mt-16 hidden gap-8 md:grid md:grid-cols-3">
          {milestones.map((m, i) => (
            <li key={m.title} className="relative">
              <div className="flex w-full items-center">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md ring-4 ring-background">
                  <m.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {i < milestones.length - 1 && (
                  <div
                    className="ml-3 h-px flex-1 bg-gradient-to-r from-primary/40 to-border"
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className="mt-6 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border/60 transition hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{m.label}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Mobile vertical timeline */}
        <ol className="relative mt-12 space-y-8 md:hidden">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border" aria-hidden="true" />
          {milestones.map((m) => (
            <li key={m.title} className="relative pl-16">
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md ring-4 ring-muted/40">
                <m.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border/60">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">{m.label}</p>
                <h3 className="mt-1.5 text-base font-semibold leading-snug text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
