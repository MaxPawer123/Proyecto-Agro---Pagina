import {
  Smartphone,
  FileText,
  ScrollText,
  WifiOff,
  Calculator,
  FileDown,
  ArrowUpRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  {
    badge: "App Móvil",
    title: "Yapu Aroma",
    subtitle: "El aporte tecnológico del proyecto",
    description:
      "Aplicación pensada para el productor: planifica el cultivo, registra costos y acompaña la jornada en el campo, incluso sin conexión.",
    icon: Smartphone,
    featured: true,
    features: [
      { icon: WifiOff, label: "Arquitectura Offline-First" },
      { icon: Calculator, label: "Calculadora de Costos" },
      { icon: FileDown, label: "Reportes en PDF" },
    ],
  },
  {
    badge: "Documento",
    title: "Diagnóstico Multidisciplinario",
    subtitle: "Estado actual del sistema productivo",
    description:
      "Evaluación rigurosa que combina mirada técnica, social y agronómica del territorio, sus actores y oportunidades de mejora.",
    icon: FileText,
    featured: false,
    features: [
      { icon: FileText, label: "Análisis territorial" },
      { icon: FileText, label: "Datos de campo" },
    ],
  },
  {
    badge: "Documento",
    title: "Modelo Multidisciplinario",
    subtitle: "Propuesta replicable de desarrollo",
    description:
      "Sistematización del modelo para que otras comunidades, instituciones y proyectos puedan adoptarlo y adaptarlo.",
    icon: ScrollText,
    featured: false,
    features: [
      { icon: ScrollText, label: "Marco metodológico" },
      { icon: ScrollText, label: "Guía de implementación" },
    ],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="relative overflow-hidden border-t border-border/50 bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            Nuestros Productos
          </span>
          <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
            Entregables que quedan en el territorio.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tres productos core que fusionan ciencia, tecnología y trabajo comunitario.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.title}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl p-7 ring-1 transition hover:-translate-y-1",
                p.featured
                  ? "bg-primary text-primary-foreground ring-primary shadow-lg lg:row-span-1"
                  : "bg-card text-card-foreground ring-border/60 shadow-sm hover:shadow-md",
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
                    p.featured
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : "bg-primary/10 text-primary",
                  )}
                >
                  {p.badge}
                </span>
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-2xl",
                    p.featured
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : "bg-primary/10 text-primary",
                  )}
                >
                  <p.icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <div className="mt-8">
                <h3
                  className={cn(
                    "font-serif text-3xl font-semibold leading-tight tracking-tight",
                    p.featured ? "text-primary-foreground" : "text-foreground",
                  )}
                >
                  {p.title}
                </h3>
                <p
                  className={cn(
                    "mt-1 text-sm font-medium",
                    p.featured ? "text-primary-foreground/80" : "text-muted-foreground",
                  )}
                >
                  {p.subtitle}
                </p>
                <p
                  className={cn(
                    "mt-4 text-sm leading-relaxed",
                    p.featured ? "text-primary-foreground/85" : "text-muted-foreground",
                  )}
                >
                  {p.description}
                </p>
              </div>

              <ul
                className={cn(
                  "mt-7 space-y-2.5 border-t pt-5",
                  p.featured ? "border-primary-foreground/20" : "border-border/60",
                )}
              >
                {p.features.map((f) => (
                  <li
                    key={f.label}
                    className={cn(
                      "flex items-center gap-2.5 text-sm",
                      p.featured ? "text-primary-foreground/90" : "text-foreground",
                    )}
                  >
                    <f.icon
                      className={cn("h-4 w-4 flex-none", p.featured ? "text-accent" : "text-primary")}
                      aria-hidden="true"
                    />
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>

              {p.featured && (
                <div className="mt-7 inline-flex items-center gap-1.5 self-start rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                  Producto destacado
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
