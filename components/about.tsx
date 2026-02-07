import { Users, Heart, TrendingUp } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const values = [
  {
    icon: Users,
    title: "Comunidad",
    description:
      "Un espacio positivo para compartir experiencias, entrenamientos, carreras y motivacion.",
  },
  {
    icon: Heart,
    title: "Apoyo",
    description:
      "Promovemos la participacion sin miedo a juicios. Cada miembro suma energia positiva.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento",
    description:
      "El running es crecimiento personal. Juntos vamos mas lejos, mas rapido, mas fuerte.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn direction="up">
          <div className="mb-16 max-w-2xl">
            <span className="text-primary font-display text-sm uppercase tracking-[0.3em]">
              Nosotros
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
              Mas que un club
            </h2>
            <div className="mt-3 h-1 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              TRIBE nacio en Santa Barbara como un espacio donde corredores de todos los niveles pueden
              reunirse, entrenar y motivarse mutuamente. No importa tu ritmo ni tu experiencia, aqui
              todos corremos juntos.
            </p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <AnimateIn key={value.title} delay={i * 150} direction="up">
              <div className="group p-8 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors h-full">
                <div className="mb-5 inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wider text-card-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
