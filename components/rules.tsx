"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimateIn } from "@/components/animate-in"

const rules = [
  {
    title: "1. Objetivo del grupo",
    content: [
      "Crear un espacio positivo para compartir experiencias, entrenamientos, carreras, consejos y motivación relacionados con el running.",
      "Promover la participación sin miedo a juicios o críticas innecesarias.",
    ],
  },
  {
    title: "2. Publicaciones",
    content: [
      "Se permiten posts sobre entrenamientos, carreras, inscripciones, logros personales, consejos y cualquier tema vinculado al running.",
      "Cada publicación debe tener un enfoque constructivo y aportar valor a la comunidad.",
    ],
  },
  {
    title: "3. Comentarios",
    content: [
      "Apoyo y respeto primero: Los comentarios deben ser motivadores, informativos o neutrales.",
      "No se permiten comentarios pasivo-agresivos, despectivos, críticas personales sobre decisiones de otros, ni juicios sobre la capacidad económica, física o personal de los miembros.",
      "Si se permiten preguntas genuinas, felicitaciones, consejos prácticos y experiencias propias compartidas de manera respetuosa.",
    ],
  },
  {
    title: "4. Diversidad de puntos de vista",
    content: [
      "Todos tenemos opiniones distintas y está bien expresarlas, siempre que se haga con respeto y sin desmotivar a otros.",
      "Si alguien no puede participar en una carrera o actividad, se respeta su decisión sin necesidad de comentarios negativos.",
    ],
  },
  {
    title: "5. Convivencia",
    content: [
      "El grupo es un espacio de motivación, no de polémica.",
      "Evitar discusiones innecesarias que puedan generar incomodidad o inhibir la participación futura.",
      "En caso de conflicto, se recomienda resolverlo en privado y no en el grupo.",
    ],
  },
  {
    title: "6. Moderación",
    content: [
      "Los administradores podrán eliminar comentarios o publicaciones que incumplan estas normas.",
      "Reincidencias pueden llevar a la suspensión temporal o definitiva del miembro.",
    ],
  },
  {
    title: "7. Espíritu del club",
    content: [
      "Recordemos que el running es comunidad, apoyo y crecimiento personal.",
      "Cada aporte debe sumar energía positiva y motivación para que todos disfruten del grupo.",
    ],
  },
]

function RuleItem({ rule, index }: { rule: (typeof rules)[number]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <AnimateIn delay={index * 80} direction="up">
      <div className="border-b border-border">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
        >
          <span className="font-display text-lg uppercase tracking-wider text-foreground">
            {rule.title}
          </span>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-muted-foreground transition-transform duration-300",
              open && "rotate-180 text-primary"
            )}
          />
        </button>
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <ul className="flex flex-col gap-3">
              {rule.content.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimateIn>
  )
}

export function Rules() {
  return (
    <section id="reglamento" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-3xl px-6">
        <AnimateIn direction="up">
          <div className="mb-16">
            <span className="text-primary font-display text-sm uppercase tracking-[0.3em]">
              Reglamento
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
              Reglas de conducta
            </h2>
            <div className="mt-3 h-1 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Para mantener un ambiente sano y motivador, todos los miembros de TRIBE seguimos estas reglas.
            </p>
          </div>
        </AnimateIn>

        <div className="border-t border-border">
          {rules.map((rule, i) => (
            <RuleItem key={rule.title} rule={rule} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
