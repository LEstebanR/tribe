import { Clock, MapPin } from "lucide-react"

const days = [
  {
    day: "Miercoles",
    time: "6:00 PM",
    label: "Entrenamiento",
    description: "Sesion de entrenamiento grupal para todos los niveles.",
  },
  {
    day: "Viernes",
    time: "6:00 PM",
    label: "Carrera libre",
    description: "Corremos juntos a ritmo libre. Ideal para cerrar la semana.",
  },
]

export function Schedule() {
  return (
    <section id="horarios" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-primary font-display text-sm uppercase tracking-[0.3em]">
            Horarios
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Cuando corremos
          </h2>
          <div className="mt-3 h-1 w-12 bg-primary" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {days.map((item) => (
            <div
              key={item.day}
              className="relative overflow-hidden rounded-lg border border-border bg-card p-8 md:p-10"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-display">
                {item.label}
              </span>
              <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold uppercase text-card-foreground">
                {item.day}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">{item.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Santa Barbara</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
