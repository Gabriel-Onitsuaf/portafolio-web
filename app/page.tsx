import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Technologies } from "@/components/technologies"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
