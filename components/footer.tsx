import { AnimateIn } from "@/components/animate-in"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn direction="up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
                TRIBE
              </span>
              <span className="text-primary font-display text-xs uppercase tracking-widest">
                Club
              </span>
            </div>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              Running club de Santa Barbara. Comunidad, apoyo y crecimiento personal.
            </p>
          </div>
        </AnimateIn>
      </div>
    </footer>
  )
}
