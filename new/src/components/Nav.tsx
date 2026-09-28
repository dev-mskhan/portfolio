import { useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { profile, showreel } from "../data";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Demo", href: "#demo" },
  { label: "Writing", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Nav({ projectPage = false }: { projectPage?: boolean }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useTheme();
  const visibleLinks = links.filter(
    (link) => link.href !== "#demo" || Boolean(showreel.id),
  );

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
          if (event.key === "Escape") closeMenu();
        }}
      >
        <a href={homeHref("#about")} className="nav-brand" onClick={closeMenu}>
          <span className="nav-monogram" aria-hidden="true">MS</span>
          <span className="hidden sm:inline">shahzaib.dev</span>
        </a>

        <ul className="nav-links nav-desktop-links">
          {visibleLinks.map((link) => (
            <li key={link.href}>
              <a href={homeHref(link.href)} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
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
            href={homeHref("#contact")}
            onClick={closeMenu}
          >
            Get in touch
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <ul id="mobile-navigation" className="nav-mobile-links" data-open={open}>
          {visibleLinks.map((link) => (
            <li key={link.href}>
              <a href={homeHref(link.href)} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
          <li className="nav-mobile-action">
            <a className="nav-mobile-cta" href={profile.resume} download onClick={closeMenu}>
              Download resume
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
