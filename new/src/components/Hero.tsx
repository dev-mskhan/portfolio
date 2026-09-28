import { ArrowUpRight, Download, MapPin } from "lucide-react";
import HeroAtmosphere from "./HeroAtmosphere";
import { profile } from "../data";

export default function Hero() {
  const [firstName, ...lastNames] = profile.name.split(" ");

  return (
    <section id="about" className="hero-section">
      <HeroAtmosphere />
      <div className="hero-grid page-width">
        <div className="hero-copy">
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
            <a href="#work" className="button button-primary">
              View work
              <span className="button-arrow" aria-hidden="true"><ArrowUpRight size={16} /></span>
            </a>
            <a href={profile.resume} download className="button button-secondary">
              Download resume
              <span className="button-arrow" aria-hidden="true"><Download size={15} /></span>
            </a>
          </div>

          <div className="hero-links">
            <span className="hero-location">
              <MapPin size={14} aria-hidden="true" />
              {profile.location}
            </span>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="hero-art-wrap">
          <div className="hero-art-shell">
            <div className="hero-art">
              <img
                src="/images/profile-pic.png"
                alt={`${profile.name}, ${profile.roleHirer}`}
                fetchPriority="high"
                decoding="async"
                draggable={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
