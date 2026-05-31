import { useState, useEffect } from "react";

export default function Navigation({ sections }) {
  const [activeSection, setActiveSection] = useState("about");

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observers = [];
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // triggers when section is in the top-middle part of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return (
    <div className="w-full sticky top-0 z-50 flex justify-center py-3 backdrop-blur-md bg-[#0a0a0a]/40 px-4">
      <div className="max-w-full overflow-x-auto no-scrollbar rounded-full border border-white/15 bg-white/5 backdrop-blur-lg shadow-lg">
        <nav className="inline-flex items-center md:gap-3 px-1 py-1.5 md:px-3 md:py-2 whitespace-nowrap">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 cursor-pointer ${
                activeSection === section.id
                  ? "bg-[#ddcecd] text-[#26081c] shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}