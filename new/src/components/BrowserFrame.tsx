import { useState } from "react";
import { ImageOff } from "lucide-react";

export default function BrowserFrame({
  src,
  alt,
  fallbackTitle,
  fallbackLabel,
  ratio = "",
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  fallbackTitle?: string;
  fallbackLabel?: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className={`relative w-full overflow-hidden bg-muted ${ratio} ${className}`}>
      {!imageFailed && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          draggable={false}
          onError={() => setImageFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      )}
      {imageFailed && (
        <div
          role="img"
          aria-label={fallbackTitle ? `${fallbackTitle} project artwork` : alt}
          className="project-preview-fallback absolute inset-0 grid place-items-center px-6 text-center"
        >
          <div className="project-preview-fallback-content">
            <ImageOff size={20} strokeWidth={1.5} aria-hidden="true" />
            {fallbackLabel && <span>{fallbackLabel}</span>}
            {fallbackTitle && <strong>{fallbackTitle}</strong>}
          </div>
        </div>
      )}
    </div>
  );
}
