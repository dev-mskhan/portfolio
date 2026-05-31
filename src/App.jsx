import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Services from "./components/Services";

export default function Portfolio() {
  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,_#26081c_25%,_#150811_70%,_#02020a)] text-white font-sans">
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-20">
        <Header />
      </div>

      {/* Sticky Navigation */}
      <Navigation sections={sections} />

      {/* Main Content */}
      <main className="px-6 md:px-12 lg:px-20">
        {/* Hero / About Section */}
        <section
          id="about"
          className="scroll-mt-20 max-w-5xl mx-auto py-16 md:py-20"
        >
          <About />
        </section>

        {/* Divider */}
        <div className="max-w-5xl mx-auto border-t border-white/10" />

        {/* Skills Section */}
        <section
          id="skills"
          className="scroll-mt-20 max-w-5xl mx-auto py-14 md:py-18"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Skills & Expertise
          </h2>
          <div className="flex justify-center">
            <Skills />
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-5xl mx-auto border-t border-white/10" />

        {/* Services Section */}
        <section
          id="services"
          className="scroll-mt-20 max-w-5xl mx-auto py-14 md:py-18"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            What I Do
          </h2>
          <Services />
        </section>

        {/* Divider */}
        <div className="max-w-5xl mx-auto border-t border-white/10" />

        {/* Projects Section */}
        <section
          id="projects"
          className="scroll-mt-20 max-w-5xl mx-auto py-14 md:py-18"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Featured Projects
          </h2>
          <Projects />
        </section>

        {/* Divider */}
        <div className="max-w-5xl mx-auto border-t border-white/10" />

        {/* Contact Section */}
        <section
          id="contact"
          className="scroll-mt-20 max-w-5xl mx-auto py-14 md:py-18"
        >
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
