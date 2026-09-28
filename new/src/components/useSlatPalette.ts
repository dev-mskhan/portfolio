import { useEffect, useState } from "react";

export type SlatPalette = {
  color: string;
  glintColor: string;
  backgroundColor: string;
};

const DARK_PALETTE: SlatPalette = {
  color: "#c3df8c",
  glintColor: "#c3df8c",
  backgroundColor: "transparent",
};

const LIGHT_ACCENT_FALLBACK = "#4d6637";

function isConcreteColor(value: string) {
  return (
    /^#[\da-f]{3,8}$/i.test(value) ||
    /^rgba?\([\d\s.,%+\-/]+\)$/i.test(value)
  );
}

function getSlatPalette(): SlatPalette {
  if (typeof document === "undefined") return DARK_PALETTE;

  const root = document.documentElement;
  const isLight =
    root.classList.contains("light") || root.dataset.theme === "light";

  if (!isLight) return DARK_PALETTE;

  const accent = getComputedStyle(root)
    .getPropertyValue("--color-primary")
    .trim();

  return {
    color: isConcreteColor(accent) ? accent : LIGHT_ACCENT_FALLBACK,
    glintColor: DARK_PALETTE.glintColor,
    backgroundColor: "transparent",
  };
}

export function useSlatPalette() {
  const [palette, setPalette] = useState(getSlatPalette);

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setPalette(getSlatPalette());
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });
    setPalette(getSlatPalette());

    return () => observer.disconnect();
  }, []);

  return palette;
}
