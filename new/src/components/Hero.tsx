import { ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import HeroAtmosphere from "./HeroAtmosphere";
import { track } from "@vercel/analytics";
import { profile } from "../data";

export default function Hero() {
  const [firstName, ...lastNames] = profile.name.split(" ");

  return (
    <section id="about" className="hero-section">
      <HeroAtmosphere />
      <div className="hero-grid page-width">
        <div className="hero-copy" data-scroll-reveal>
          <p className="hero-role">
            {profile.roleHirer}
          </p>
          <h1 className="hero-title">
            <span>{firstName}</span>
            <span>{lastNames.join(" ")}</span>
          </h1>
          <p className="hero-summary">
            {profile.summaryClient}
          </p>
          <p className="hero-availability">Available for work</p>

          <div className="hero-actions">
            <a
              href="#work"
              className="button button-primary"
              onClick={() => track("work_section_click")}
            >
              View work
              <span className="button-arrow" aria-hidden="true"><ArrowUpRight size={16} /></span>
            </a>
            <a
              className="hero-social-link"
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("social_profile_click", { platform: "github" })}
              aria-label="Visit GitHub profile (opens in a new tab)"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
              <ArrowUpRight className="hero-social-arrow" size={13} aria-hidden="true" />
            </a>
            <a
              className="hero-social-link"
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("social_profile_click", { platform: "linkedin" })}
              aria-label="Visit LinkedIn profile (opens in a new tab)"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
              <ArrowUpRight className="hero-social-arrow" size={13} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-links">
            <span className="hero-location">
              <MapPin size={14} aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="hero-art-wrap" data-scroll-reveal>
          <div className="hero-art-shell">
            <div className="hero-art">
              <img
                src="/images/profile-pic.jpg"
                alt={`${profile.name}, ${profile.roleHirer}`}
                fetchPriority="high"
                decoding="async"
                draggable={false}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
