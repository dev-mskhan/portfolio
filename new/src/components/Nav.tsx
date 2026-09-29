import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import { Download, Menu, Moon, Palette as PaletteIcon, Sun, X } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { palettes, usePalette } from "../hooks/usePalette";
import { profile } from "../data";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav({ projectPage = false }: { projectPage?: boolean }) {
  const [open, setOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useTheme();
  const [palette, setPalette] = usePalette();

  useEffect(() => {
    if (projectPage || !("IntersectionObserver" in window)) return;

    const sections = links
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [projectPage]);

  function closeMenu() {
    setOpen(false);
  }

  function homeHref(href: string) {
    return projectPage ? `/${href}` : href;
  }

  return (
    <header className="site-nav-shell">
      <nav
        className="site-nav"
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            closeMenu();
            setPaletteOpen(false);
          }
        }}
      >
        <a href={homeHref("#about")} className="nav-brand" onClick={closeMenu}>
          <span className="nav-monogram" aria-hidden="true">MS</span>
          <span className="hidden sm:inline">shahzaib.dev</span>
        </a>

        <ul className="nav-links nav-desktop-links">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={homeHref(link.href)}
                onClick={closeMenu}
                className={activeSection === link.href ? "is-active" : undefined}
                aria-current={activeSection === link.href ? "location" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button
            type="button"
            onClick={() => setPaletteOpen((value) => !value)}
            aria-label="Choose color theme"
            aria-expanded={paletteOpen}
            aria-controls="palette-menu"
            className="nav-icon-button palette-toggle"
          >
            <PaletteIcon size={17} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="nav-icon-button"
          >
            {theme === "dark" ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="nav-icon-button nav-menu-button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
          <a
            className="nav-desktop-cta"
            href={profile.resume}
            download
            onClick={() => {
              track("resume_download");
              closeMenu();
            }}
          >
            Download resume
            <Download size={15} aria-hidden="true" />
          </a>
        </div>

        <div
          id="palette-menu"
          className="palette-menu"
          data-open={paletteOpen}
          aria-label="Color themes"
        >
          <p>Color theme</p>
          <div className="palette-options">
            {palettes.map((option) => (
              <button
                key={option.id}
                type="button"
                className="palette-option"
                onClick={() => {
                  setPalette(option.id);
                  setPaletteOpen(false);
                }}
                aria-label={`${option.label} color theme`}
                aria-pressed={palette === option.id}
              >
                <span
                  className="palette-swatch"
                  style={{ backgroundColor: option.color }}
                  aria-hidden="true"
                />
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <ul id="mobile-navigation" className="nav-mobile-links" data-open={open}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={homeHref(link.href)}
                onClick={closeMenu}
                className={activeSection === link.href ? "is-active" : undefined}
                aria-current={activeSection === link.href ? "location" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-mobile-action">
            <a
              className="nav-mobile-cta"
              href={profile.resume}
              download
              onClick={() => {
                track("resume_download");
                closeMenu();
              }}
            >
              Download resume
              <Download size={16} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
