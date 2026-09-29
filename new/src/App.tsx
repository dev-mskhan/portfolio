import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Research from "./components/Research"
import Process from "./components/Process"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ProjectDetail from "./components/ProjectDetail"
import Chatbot from "./components/Chatbot"
import SiteParticles from "./components/SiteParticles"
import ScrollMotion from "./components/ScrollMotion"
import { projects } from "./data"

const routeParts = window.location.pathname.split("/").filter(Boolean)
const project = routeParts[0] === "work" && routeParts.length === 2
  ? projects.find((entry) => entry.slug === routeParts[1])
  : undefined
const isProjectRoute = routeParts[0] === "work"

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav projectPage={isProjectRoute} />
      <SiteParticles />
      <ScrollMotion />
      {isProjectRoute ? (
        <main id="main" tabIndex={-1}>
          {project ? <ProjectDetail project={project} /> : <ProjectDetail />}
        </main>
      ) : (
        <main id="main" tabIndex={-1}>
          <Hero />
          <Projects />
          <Experience />
          <Services />
          <Skills />
          <Research />
          <Process />
          <Contact />
        </main>
      )}
      <Footer />
      <Chatbot />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}
