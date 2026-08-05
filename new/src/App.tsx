import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Showreel from "./components/Showreel"
import Research from "./components/Research"
import Process from "./components/Process"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Showreel />
        <Research />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
