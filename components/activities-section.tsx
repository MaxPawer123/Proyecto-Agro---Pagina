import { activities } from "@/lib/activities-data"

export function ActivitiesSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <article
              key={a.id}
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
