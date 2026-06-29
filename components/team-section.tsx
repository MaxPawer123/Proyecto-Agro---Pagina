"use client"

import { useState } from "react"
import Image from "next/image"
import { Building2, X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { coordinators, teamAreas } from "@/lib/team-data"
import { cn } from "@/lib/utils"

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<any>(null)
  const [selectedArea, setSelectedArea] = useState<string | null>(null)

  const displayAreas = selectedArea ? teamAreas.filter((a) => a.id === selectedArea) : teamAreas

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

        {/* Coordinators Section */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Coordinadores
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Líderes académicos que guían la visión multidisciplinaria del proyecto.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {coordinators.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-card p-6 ring-1 ring-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md text-left"
              >
                <div className="relative h-32 w-32 overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="mt-4 font-semibold text-foreground">{member.name}</h4>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.department}</p>
              </button>
            ))}
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
            {teamAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
                className={cn(
                  "group rounded-2xl p-6 ring-1 transition hover:-translate-y-0.5 hover:shadow-md text-left",
                  selectedArea === area.id
                    ? "bg-primary text-primary-foreground ring-primary shadow-md"
                    : "bg-card ring-border/60",
                )}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "flex h-11 w-11 flex-none items-center justify-center rounded-xl transition-colors",
                      selectedArea === area.id ? "bg-primary-foreground/20" : "bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground",
                      selectedArea === area.id ? "text-primary-foreground" : "text-primary",
                    )}
                  >
                    <area.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className={cn("text-base font-semibold", selectedArea === area.id ? "text-primary-foreground" : "text-foreground")}>
                      {area.name}
                    </h4>
                    <p
                      className={cn(
                        "mt-1.5 text-sm leading-relaxed",
                        selectedArea === area.id ? "text-primary-foreground/90" : "text-muted-foreground",
                      )}
                    >
                      {area.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Team Members Grid */}
        {displayAreas.map((area) => (
          <div key={area.id} className="mt-12">
            <h4 className="mb-6 font-serif text-xl font-semibold text-foreground">Integrantes de {area.name}</h4>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {area.members.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-card p-6 ring-1 ring-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md text-left"
              >
                  <div className="relative h-32 w-32 overflow-hidden rounded-xl bg-primary/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="mt-4 font-semibold text-foreground">{member.name}</h4>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.department}</p>
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{member.bio}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedMember?.name}</DialogTitle>
          </DialogHeader>

          {selectedMember && (
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <div className="relative h-40 w-40 flex-none overflow-hidden rounded-xl">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">{selectedMember.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{selectedMember.department}</p>
                  <p className="mt-4 leading-relaxed text-foreground">{selectedMember.bio}</p>
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-foreground">Trayectoria y Logros</h4>
                <ul className="space-y-2">
                  {selectedMember.achievements.map((achievement: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden="true" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
