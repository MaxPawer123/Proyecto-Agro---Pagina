import Link from "next/link"
import { ArrowUpRight, BookOpen, Compass, Smartphone, Users, Mountain } from "lucide-react"

export function BentoGrid() {
  return (
    <section className="border-t border-border/50 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Explora el Sitio
          </span>
          <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
            Conoce nuestro modelo, paso a paso.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cada sección documenta una parte esencial del proyecto. Empieza por donde quieras.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-6 sm:gap-5 lg:grid-cols-12">
          {/* El Proyecto - Featured large */}
          <Link
            href="/proyecto"
            className="group relative col-span-6 flex flex-col justify-between overflow-hidden rounded-3xl bg-primary p-7 text-primary-foreground shadow-md ring-1 ring-primary transition hover:-translate-y-1 hover:shadow-xl sm:p-8 lg:col-span-7 lg:row-span-2"
          >
            <div
              className="pointer-events-none absolute inset-0 -z-0 opacity-30"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 0%, oklch(0.74 0.14 75 / 0.6), transparent 55%)",
              }}
            />
            <div className="relative z-10">
              <span className="inline-flex items-center rounded-full bg-primary-foreground/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                Conoce el Proyecto
              </span>
              <h3 className="mt-6 font-serif text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
                ¿De qué trata el Modelo Multidisciplinario?
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
                Cómo fusionamos saberes ancestrales y tecnología para mejorar los ingresos de las familias
                productoras de quinua del altiplano.
              </p>
            </div>
            <div className="relative z-10 mt-10 inline-flex items-center gap-2 text-sm font-semibold">
              <span>Leer más</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </div>
          </Link>

          {/* Productos */}
          <Link
            href="/productos"
            className="group relative col-span-6 flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-6 ring-1 ring-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md lg:col-span-5"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/20 text-accent-foreground">
                <Smartphone className="h-5 w-5" aria-hidden="true" />
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
                Nuestros Productos
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                La app Yapu Aroma + dos documentos académicos que sintetizan el modelo.
              </p>
            </div>
          </Link>

          {/* Actividades */}
          <Link
            href="/actividades"
            className="group relative col-span-6 flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-6 ring-1 ring-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:col-span-3 lg:col-span-5"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Mountain className="h-5 w-5" aria-hidden="true" />
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground">
                Actividades
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Viajes, talleres y trabajo en territorio con las comunidades.
              </p>
            </div>
          </Link>

          {/* Historia */}
          <Link
            href="/historia"
            className="group relative col-span-6 flex flex-col justify-between overflow-hidden rounded-3xl bg-secondary p-6 ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-md sm:col-span-3 lg:col-span-4"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-background text-primary">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-secondary-foreground">
                Nuestra Historia
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/80">
                Línea de tiempo de los hitos del proyecto.
              </p>
            </div>
          </Link>

          {/* Quiénes somos */}
          <Link
            href="/quienes-somos"
            className="group relative col-span-6 flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-6 ring-1 ring-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:col-span-3 lg:col-span-4"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Users className="h-5 w-5" aria-hidden="true" />
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground">
                El Equipo
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Estudiantes UMSA de distintas carreras unidos por un objetivo.
              </p>
            </div>
          </Link>

          {/* Yapu Aroma highlight */}
          <Link
            href="/productos"
            className="group relative col-span-6 flex flex-col justify-between overflow-hidden rounded-3xl bg-foreground p-6 text-background ring-1 ring-foreground transition hover:-translate-y-1 hover:shadow-xl sm:col-span-3 lg:col-span-4"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-background/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-background"
                aria-hidden="true"
              />
            </div>
            <div className="mt-8">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">App Destacada</p>
              <h3 className="mt-1.5 font-serif text-2xl font-semibold leading-tight tracking-tight">
                Yapu Aroma
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-background/75">
                Offline-first, calculadora de costos y reportes PDF para el productor.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
