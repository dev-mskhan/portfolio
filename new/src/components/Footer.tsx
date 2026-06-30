import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, education } from "../data";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-8 md:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}.
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Mail size={18} />
          </a>
          <a
            href={profile.links.github}
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
