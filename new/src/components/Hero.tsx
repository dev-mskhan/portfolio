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

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 lg:items-center">
          
          {/* Left column — all the existing text content */}
          <div>
            <p className="mb-6 inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground">
              <span className="h-2 w-2 bg-primary" />
              Available for work
            </p>

            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-6 text-pretty leading-relaxed text-foreground/90 md:text-lg">
              {profile.summaryClient}
            </p>
            <p className="font-mono text-m text-primary mt-1">
              {profile.roleHirer}
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

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm text-muted-foreground">
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

          {/* Right column — stats + code-style card */}
          <div className="flex flex-col gap-4 lg:pl-8">

            {/* Code card */}
            <div className="border border-border bg-card font-mono text-xs">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5 bg-muted">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-muted-foreground text-[10px]">profile.ts</span>
              </div>
              <div className="px-5 py-4 leading-6 text-muted-foreground">
                <p><span className="text-primary">const</span> <span className="text-foreground">developer</span> = {"{"}</p>
                <p className="pl-4"><span className="text-primary/80">stack</span>: <span className="text-foreground/70">"MERN + AI"</span>,</p>
                <p className="pl-4"><span className="text-primary/80">focus</span>: <span className="text-foreground/70">"Full-Stack + Agentic AI"</span>,</p>
                <p className="pl-4"><span className="text-primary/80">available</span>: <span className="text-primary">true</span>,</p>
                <p className="pl-4"><span className="text-primary/80">location</span>: <span className="text-foreground/70">"{profile.location}"</span>,</p>
                <p>{"}"}</p>
              </div>
            </div>
            {/* Stats */}
            <div className="border border-border divide-y divide-border">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between bg-card px-5 py-4">
                  <span className="font-mono text-xs text-muted-foreground">{stat.label}</span>
                  <span className="font-semibold text-foreground text-sm">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
