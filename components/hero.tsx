import { MapPin, Calendar } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/tribe-hero.png"
          alt="TRIBE Running Club logo pattern with runner silhouette"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <AnimateIn delay={200} direction="none">
          <div className="mb-6 inline-block">
            <span className="text-primary font-display text-sm uppercase tracking-[0.3em]">
              Running Club
            </span>
          </div>
        </AnimateIn>

        <AnimateIn delay={400} direction="up">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-foreground leading-none">
            TRIBE
          </h1>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto" />
        </AnimateIn>

        <AnimateIn delay={600} direction="up">
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Comunidad de running en Santa Barbara. Corremos juntos, crecemos juntos.
          </p>
        </AnimateIn>

        <AnimateIn delay={800} direction="up">
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm uppercase tracking-wider">Santa Barbara</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm uppercase tracking-wider">{"Miércoles & Viernes"}</span>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={1000} direction="up">
          <a
            href="#nosotros"
            className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
          >
            Conoce mas
            <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </AnimateIn>
      </div>
    </section>
  )
}
