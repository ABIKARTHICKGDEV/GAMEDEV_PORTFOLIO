import React, { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

export default function ProjectGallery({ project }: { project: any }) {
  const gameplay = project.gallery?.gameplay ?? [];
  const development = project.gallery?.development ?? [];
  const editor = project.gallery?.editor ?? [];
  const images = [...gameplay, ...development, ...editor];
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") setLightbox((v) => (v === null ? null : Math.max(0, v - 1)));
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? null : Math.min(images.length - 1, v + 1)));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, images.length]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-4">
        <h3 className="font-display text-xl font-bold">Screenshot Gallery</h3>
        {images.length === 0 ? (
          <div className="mt-4 text-muted-foreground">No gallery images available.</div>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {images.map((src: string, i: number) => (
              <button key={i} onClick={() => setLightbox(i)} className="overflow-hidden rounded-sm">
                <img src={asset(src)} alt={`gallery-${i}`} className="h-48 w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox !== null ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setLightbox(null)}>
          <img src={asset(images[lightbox])} alt={`lightbox-${lightbox}`} className="max-h-[90vh] max-w-[90vw] rounded" />
        </div>
      ) : null}
    </section>
  );
}
