import { TrendingUp, Coins, HeartHandshake, Microscope } from "lucide-react"

const highlights = [
  {
    icon: TrendingUp,
    title: "Mayor productividad",
    description: "Optimizamos el ciclo del cultivo de quinua con datos, planificación y técnicas validadas.",
  },
  {
    icon: Coins,
    title: "Reducción de costos",
    description: "Calculadoras de costos y registros que ayudan a las familias a decidir con información clara.",
  },
  {
    icon: HeartHandshake,
    title: "Saberes ancestrales",
    description: "Trabajamos junto a los productores, valorando su experiencia y cosmovisión andina.",
  },
  {
    icon: Microscope,
    title: "Ciencia aplicada",
    description: "Diagnósticos rigurosos y un modelo replicable construido desde la academia.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/50 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              ¿De qué trata?
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-5xl">
              Tecnología y ciencia al servicio de las familias productoras de quinua.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Nuestro proyecto fusiona el{" "}
              <span className="font-medium text-foreground">conocimiento tradicional</span> de las comunidades
              andinas con herramientas modernas de gestión agrícola.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border/60 sm:p-8">
              <p className="text-base leading-relaxed text-foreground sm:text-lg">
                Buscamos <span className="font-semibold text-primary">mejorar la productividad</span>,{" "}
                <span className="font-semibold text-primary">reducir los costos</span> y{" "}
                <span className="font-semibold text-primary">elevar los ingresos</span> de las familias productoras
                de quinua, fortaleciendo la economía rural sin perder la identidad cultural del altiplano.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Lo hacemos a través de un equipo multidisciplinario que diagnostica, diseña y acompaña, junto a las
                comunidades de Sica Sica y Patacamaya.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {highlights.map((h) => (
                  <div key={h.title} className="flex gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <h.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{h.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
