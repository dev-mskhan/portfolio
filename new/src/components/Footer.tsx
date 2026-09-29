import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, education } from "../data";

export default function Footer() {
  return (
    <footer className="content-section">
      <div className="page-width site-footer">
        <div className="footer-main" data-scroll-reveal>
          <div>
            <p className="footer-copy">&copy; {new Date().getFullYear()} {profile.name}.</p>
            <p className="footer-education">
              {education.degree}, {education.school}, {education.period}
            </p>
          </div>
          <div className="footer-socials">
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={17} aria-hidden="true" />
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={17} />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
