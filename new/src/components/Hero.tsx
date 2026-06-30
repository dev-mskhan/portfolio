import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data";

export default function Hero() {
  return (
    <section id="about" className="relative border-b border-border">
      {/* grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-32">
        <p className="mb-6 inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground">
          <span className="h-2 w-2 bg-primary" />
          Available for work
        </p>

        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-5 font-mono text-base text-primary md:text-lg">
          {profile.role}
        </p>

        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
          {profile.summary}{" "}
          <span className="text-primary">Web Applications</span>.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            View Work <ArrowUpRight size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 font-mono text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Mail size={16} /> Email me
          </a>
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 font-mono text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Download size={16} /> Resume
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} className="text-primary" /> {profile.location}
          </span>
          <a
            href={profile.links.github}
            className="inline-flex items-center gap-2 hover:text-primary"
          >
            <GithubIcon size={15} className="text-primary" /> GitHub
          </a>
          <a
            href={profile.links.linkedin}
            className="inline-flex items-center gap-2 hover:text-primary"
          >
            <LinkedinIcon size={15} className="text-primary" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
