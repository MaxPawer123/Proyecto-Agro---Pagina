import { Code2, Sprout, HeartHandshake, BarChart3, Briefcase, GraduationCap, Building2 } from "lucide-react"

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
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* UMSA card */}
        <div className="mb-12 overflow-hidden rounded-3xl bg-secondary p-7 ring-1 ring-border/60 sm:p-9">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                <Building2 className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Nuestra Casa de Estudios</p>
                <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight tracking-tight text-secondary-foreground sm:text-3xl">
                  Universidad Mayor de San Andrés
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary-foreground/85 sm:text-base">
                  Somos estudiantes de distintas facultades de la UMSA que decidimos cruzar fronteras académicas
                  para responder a un desafío real con todas las miradas posibles.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground ring-1 ring-border/60">
                La Paz
              </span>
              <span className="rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground ring-1 ring-border/60">
                Bolivia
              </span>
              <span className="rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground ring-1 ring-border/60">
                2026
              </span>
            </div>
          </div>
        </div>

        {/* Discipline grid */}
        <div>
          <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Carreras que integran el equipo
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            La fuerza del modelo está en mirar el mismo problema desde ángulos distintos.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area.name}
                className="group rounded-2xl bg-card p-6 ring-1 ring-border/60 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <area.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-foreground">{area.name}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
