import {
  Smartphone,
  FileText,
  ScrollText,
  WifiOff,
  Calculator,
  FileDown,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react"

const featuredProduct = {
  badge: "App Móvil · Producto Destacado",
  title: "Yapu Aroma",
  subtitle: "El aporte tecnológico del proyecto",
  description:
    "Aplicación pensada para el productor: planifica el cultivo, registra costos y acompaña la jornada en el campo, incluso sin conexión a internet.",
  features: [
    {
      icon: WifiOff,
      title: "Arquitectura Offline-First",
      detail:
        "Funciona sin conexión y sincroniza automáticamente cuando hay internet — ideal para zonas rurales del altiplano.",
    },
    {
      icon: Calculator,
      title: "Calculadora de Costos",
      detail:
        "Permite estimar y registrar costos de producción, insumos, mano de obra y rendimiento por hectárea.",
    },
    {
      icon: FileDown,
      title: "Reportes en PDF",
      detail:
        "Genera reportes profesionales que el productor puede compartir con autoridades, compradores o financiadores.",
    },
  ],
}

const documents = [
  {
    badge: "Documento",
    title: "Diagnóstico Integral",
    description:
      "Evaluación rigurosa que combina mirada técnica, social y agronómica del territorio, sus actores y oportunidades de mejora.",
    icon: FileText,
    items: ["Análisis territorial", "Datos de campo", "Mapeo de actores"],
  },
  {
    badge: "Documento",
    title: "Modelo Multidisciplinario",
    description:
      "Sistematización del modelo para que otras comunidades, instituciones y proyectos puedan adoptarlo y adaptarlo.",
    icon: ScrollText,
    items: ["Marco metodológico", "Guía de implementación", "Lecciones aprendidas"],
  },
]

export function ProductsSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Featured product */}
        <article className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-lg ring-1 ring-primary">
          <div
            className="pointer-events-none absolute inset-0 -z-0 opacity-40"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 90% 10%, oklch(0.74 0.14 75 / 0.7), transparent 55%), radial-gradient(circle at 10% 90%, oklch(0.74 0.14 75 / 0.35), transparent 50%)",
            }}
          />
          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center rounded-full bg-primary-foreground/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                {featuredProduct.badge}
              </span>
              <div className="mt-6 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-md">
                  <Smartphone className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  {featuredProduct.title}
                </h2>
              </div>
              <p className="mt-4 text-base font-medium text-primary-foreground/85 sm:text-lg">
                {featuredProduct.subtitle}
              </p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                {featuredProduct.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-1">
                {featuredProduct.features.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-4 rounded-2xl bg-primary-foreground/10 p-4 backdrop-blur-sm"
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <f.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-primary-foreground">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-primary-foreground/80">{f.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="overflow-hidden rounded-3xl bg-primary-foreground/5 ring-1 ring-primary-foreground/15">
                <img
                  src="/yapu-aroma-app.jpg"
                  alt="Mockup de la aplicación Yapu Aroma con interfaz agrícola"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                Producto destacado
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>
          </div>
        </article>

        {/* Document deliverables */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {documents.map((d) => (
            <article
              key={d.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-card p-7 ring-1 ring-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {d.badge}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <d.icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <h3 className="mt-7 font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
                {d.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{d.description}</p>

              <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-5">
                {d.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 flex-none text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
