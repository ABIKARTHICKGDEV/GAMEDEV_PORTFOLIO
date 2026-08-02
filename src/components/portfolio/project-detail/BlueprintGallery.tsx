import React, { useEffect, useState } from "react";
import { asset } from "@/lib/asset";
import { X, ChevronLeft, ChevronRight, Code2, ZoomIn } from "lucide-react";

// Helper: derive a human-readable label from a file path
function labelFromPath(path: string): string {
  const filename = path.split("/").pop() ?? path;
  return filename.replace(/\.(png|jpg|jpeg|webp)$/i, "").replace(/-/g, " ").replace(/_/g, " ");
}

export default function BlueprintGallery({ project }: { project: any }) {
  const bp = project.blueprintGallery;
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft")
        setLightbox((v) => (v === null ? null : Math.max(0, v - 1)));
      if (e.key === "ArrowRight")
        setLightbox((v) =>
          v === null ? null : Math.min(bp.images.length - 1, v + 1)
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, bp?.images?.length]);

  if (!bp || !bp.images || bp.images.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Section header */}
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-sm bg-[#7B68EE]/15 text-[#7B68EE]">
          <Code2 className="h-4 w-4" />
        </span>
        <div>
          <div className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-[#7B68EE]">
            Blueprint Visual Scripting
          </div>
          <h2 className="font-display text-xl font-bold text-foreground">
            {bp.title}
          </h2>
        </div>
      </div>

      <p className="mb-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        {bp.description}
      </p>

      {/* Blueprint grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bp.images.map((src: string, i: number) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="group relative overflow-hidden rounded-sm border border-white/8 bg-[#2B2E35] text-left transition hover:border-[#7B68EE]/40 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#1B1B1F]">
              <img
                src={asset(src)}
                alt={labelFromPath(src)}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <ZoomIn className="h-6 w-6 text-white" />
              </div>
            </div>
            {/* Label */}
            <div className="border-t border-white/5 px-3 py-2">
              <div className="truncate text-[11px] font-medium uppercase tracking-wider text-[#7B68EE]/80">
                {labelFromPath(src)}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          {/* Prev button */}
          {lightbox > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/60 text-foreground transition hover:bg-black/80 hover:text-[#7B68EE]"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((v) => (v === null ? null : Math.max(0, v - 1)));
              }}
              aria-label="Previous blueprint"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Image container */}
          <div
            className="relative mx-16 flex max-h-[90vh] max-w-[90vw] flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={asset(bp.images[lightbox])}
              alt={labelFromPath(bp.images[lightbox])}
              className="max-h-[80vh] w-auto rounded-sm object-contain shadow-2xl"
            />
            <div className="mt-2 text-center text-sm font-medium text-[#7B68EE]/80 uppercase tracking-wider">
              {labelFromPath(bp.images[lightbox])}
            </div>
            <div className="mt-1 text-center text-xs text-muted-foreground">
              {lightbox + 1} / {bp.images.length}
            </div>
          </div>

          {/* Next button */}
          {lightbox < bp.images.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/60 text-foreground transition hover:bg-black/80 hover:text-[#7B68EE]"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((v) =>
                  v === null ? null : Math.min(bp.images.length - 1, v + 1)
                );
              }}
              aria-label="Next blueprint"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          {/* Close button */}
          <button
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/60 text-foreground transition hover:bg-black/80 hover:text-primary"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </section>
  );
}
