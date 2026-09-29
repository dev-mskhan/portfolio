import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-reveal]"),
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      targets.forEach((target) => {
        target.dataset.revealed = "true";
      });
      return;
    }

    const root = document.documentElement;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.revealed = "true";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.08 },
    );

    targets.forEach((target) => observer.observe(target));
    root.dataset.scrollMotion = "ready";

    return () => {
      observer.disconnect();
      delete root.dataset.scrollMotion;
    };
  }, []);

  return null;
}
