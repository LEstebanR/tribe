import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Schedule } from "@/components/schedule"
import { Rules } from "@/components/rules"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Rules />
      <Footer />
    </main>
  )
}
