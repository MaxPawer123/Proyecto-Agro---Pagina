import { Code2, Sprout, HeartHandshake, BarChart3, Briefcase, GraduationCap } from "lucide-react"

const areas = [
  {
    icon: Code2,
    name: "Informática",
    description: "Desarrollo de la app Yapu Aroma y arquitectura digital del proyecto.",
  },
  {
    icon: Sprout,
    name: "Agronomía",
    description: "Análisis del cultivo, suelo y prácticas productivas de la quinua.",
  },
  {
    icon: HeartHandshake,
    name: "Trabajo Social",
    description: "Vínculo con las familias y dinámicas comunitarias en territorio.",
  },
  {
    icon: BarChart3,
    name: "Economía",
    description: "Estructura de costos, mercados y viabilidad para los productores.",
  },
  {
    icon: Briefcase,
    name: "Administración",
    description: "Gestión, planificación y organización del modelo productivo.",
  },
  {
    icon: GraduationCap,
    name: "Equipo Académico",
    description: "Tutores y docentes que acompañan el rigor metodológico.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="border-t border-border/50 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              ¿Quiénes Somos?
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-5xl">
              Un equipo multidisciplinario de la UMSA.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Somos estudiantes de distintas facultades de la{" "}
              <span className="font-medium text-foreground">Universidad Mayor de San Andrés</span> que decidimos
              cruzar fronteras académicas para responder a un desafío real con todas las miradas posibles.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                UMSA
              </span>
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                Multidisciplinario
              </span>
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                Bolivia
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="group rounded-2xl bg-card p-5 ring-1 ring-border/60 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <area.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{area.name}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
