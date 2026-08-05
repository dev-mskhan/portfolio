const DOTS = [
  { label: "close", color: "#ff5f57" },
  { label: "minimize", color: "#febc2e" },
  { label: "maximize", color: "#28c840" },
];

export default function BrowserFrame({
  src,
  alt,
  ratio = "",
  className = "",
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-muted ${ratio} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div
        className="absolute inset-x-0 top-0 z-10 flex h-7 items-center gap-2 px-3"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        {DOTS.map((dot) => (
          <span
            key={dot.label}
            aria-hidden="true"
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: dot.color }}
          />
        ))}
      </div>
    </div>
  );
}
