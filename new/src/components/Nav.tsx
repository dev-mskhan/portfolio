import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "../hooks/useTheme"

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Demo", href: "#demo" },
  { label: "Writing", href: "#research" },
  { label: "Contact", href: "#contact" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-border bg-background/90 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#" className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center bg-primary text-primary-foreground">MS</span>
          <span className="hidden sm:inline">shahzaib.dev</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-9 w-9 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="#contact"
            className="hidden border border-primary bg-primary px-4 py-2 font-mono text-xs font-semibold text-primary-foreground transition-colors hover:bg-transparent hover:text-primary md:inline-block"
          >
            Get in touch
          </a>

          <button
            className="text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-4 py-2">
            {links.map((l) => (
              <li key={l.href} className="border-b border-border last:border-b-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-sm text-muted-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
