import { useEffect, useState } from "react";

export type ParticlePalette = {
  particleColors: string[];
  alphaParticles: boolean;
};

const DARK_FALLBACK: ParticlePalette = {
  particleColors: ["#c3df8c", "#f1f3ee"],
  alphaParticles: false,
};

const LIGHT_FALLBACK_ACCENT = "#4d6637";

function readHexColor(styles: CSSStyleDeclaration, token: string, fallback: string) {
  const value = styles.getPropertyValue(token).trim();
  return /^#(?:[\da-f]{3}|[\da-f]{6})$/i.test(value) ? value : fallback;
}

function getParticlePalette(): ParticlePalette {
  if (typeof document === "undefined") return DARK_FALLBACK;

  const root = document.documentElement;
  const styles = getComputedStyle(root);
  const accent = readHexColor(styles, "--color-primary", LIGHT_FALLBACK_ACCENT);
  const isLight =
    root.classList.contains("light") || root.dataset.theme === "light";

  if (isLight) {
    return {
      particleColors: [accent],
      alphaParticles: true,
    };
  }

  return {
    particleColors: [
      accent,
      readHexColor(styles, "--color-foreground", DARK_FALLBACK.particleColors[1]),
    ],
    alphaParticles: false,
  };
}

export function useParticlePalette() {
  const [palette, setPalette] = useState(getParticlePalette);

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setPalette(getParticlePalette());
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class", "data-theme", "data-palette"],
    });
    setPalette(getParticlePalette());

    return () => observer.disconnect();
  }, []);

  return palette;
}
