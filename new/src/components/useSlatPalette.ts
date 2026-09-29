import { useEffect, useState } from "react";

export type SlatPalette = {
  color: string;
  glintColor: string;
  backgroundColor: string;
};

const FALLBACK_ACCENT = "#c3df8c";
const DARK_PALETTE: SlatPalette = {
  color: FALLBACK_ACCENT,
  glintColor: FALLBACK_ACCENT,
  backgroundColor: "transparent",
};

function isConcreteColor(value: string) {
  return (
    /^#[\da-f]{3,8}$/i.test(value) ||
    /^rgba?\([\d\s.,%+\-/]+\)$/i.test(value)
  );
}

function getSlatPalette(): SlatPalette {
  if (typeof document === "undefined") return DARK_PALETTE;

  const root = document.documentElement;
  const accent = getComputedStyle(root)
    .getPropertyValue("--color-primary")
    .trim();

  return {
    color: isConcreteColor(accent) ? accent : DARK_PALETTE.color,
    glintColor: isConcreteColor(accent) ? accent : DARK_PALETTE.glintColor,
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
      attributeFilter: ["class", "data-theme", "data-palette"],
    });
    setPalette(getSlatPalette());

    return () => observer.disconnect();
  }, []);

  return palette;
}
