import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Research from "./components/Research"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
