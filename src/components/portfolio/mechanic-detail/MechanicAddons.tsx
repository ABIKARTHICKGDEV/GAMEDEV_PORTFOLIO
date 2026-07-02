import React, { useEffect, useState } from "react";
import { asset } from "@/lib/asset";
import { GameplayMechanic } from "@/data/portfolio";
import { Sparkles, Cpu, GraduationCap, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

export default function MechanicAddons({ mechanic }: { mechanic: GameplayMechanic }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const features = mechanic.features ?? [];
  const technologies = mechanic.technologies ?? [];
  const learnings = mechanic.learnings ?? [];
  
  const gameplayImgs = mechanic.gallery?.gameplay ?? [];
  const devImgs = mechanic.gallery?.development ?? [];
  const galleryImages = [...gameplayImgs, ...devImgs];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") {
        setLightbox((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
      }
      if (e.key === "ArrowRight") {
        setLightbox((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, galleryImages.length]);

  const hasContent = features.length > 0 || technologies.length > 0 || learnings.length > 0 || galleryImages.length > 0;
  if (!hasContent) return null;

  return (
    <div className="space-y-10 py-10">
      {/* Key Features Section */}
      {features.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-6">
            <div className="flex items-center gap-2 font-display text-xl font-bold">
              <Sparkles className="h-5 w-5 text-primary" />
              Key Features
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feat, index) => {
                // Split by first space to isolate emoji icon from text
                const parts = feat.split(" ");
                const emoji = parts[0];
                const text = parts.slice(1).join(" ");
                
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-sm border border-white/5 bg-[#32353D]/30 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-[#32353D]/50"
                  >
                    <span className="text-2xl shrink-0 select-none" role="img" aria-hidden="true">
                      {emoji}
                    </span>
                    <span className="text-sm font-medium text-foreground/90 mt-1">{text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack & What I Learned Side by Side */}
      {(technologies.length > 0 || learnings.length > 0) && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Tech Stack */}
            {technologies.length > 0 && (
              <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-6">
                <div className="flex items-center gap-2 font-display text-xl font-bold">
                  <Cpu className="h-5 w-5 text-primary" />
                  Technologies Used
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-sm border border-white/8 bg-[#32353D]/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/45 hover:text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* What I Learned */}
            {learnings.length > 0 && (
              <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-6">
                <div className="flex items-center gap-2 font-display text-xl font-bold">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  What I Learned
                </div>
                <ul className="mt-6 space-y-3">
                  {learnings.map((learning, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2.5 rounded-sm border border-white/5 bg-[#32353D]/20 px-3 py-2 text-sm text-foreground/80 hover:bg-[#32353D]/40"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Screenshots and Code Gallery */}
      {galleryImages.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-6">
            <div className="font-display text-xl font-bold">Media & Code Gallery</div>
            <p className="mt-1 text-xs text-muted-foreground">
              Click any image to view in high resolution (Code diagrams, setup screenshots, and gameplay).
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((src, i) => {
                const isCode = src.toLowerCase().includes("code");
                return (
                  <button
                    key={i}
                    onClick={() => setLightbox(i)}
                    className="group relative aspect-video overflow-hidden rounded-sm border border-white/5 bg-black/20"
                  >
                    <img
                      src={asset(src)}
                      alt={`gallery-item-${i}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center gap-2">
                      <Eye className="h-6 w-6 text-primary animate-pulse" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        {isCode ? "View Code Overview" : "View Gameplay Screenshot"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-all duration-300"
          onClick={() => setLightbox(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-foreground hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
            }}
            className="absolute left-4 rounded-full bg-white/10 p-2.5 text-foreground hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Large Image */}
          <div
            className="max-h-[85vh] max-w-[90vw] overflow-hidden rounded border border-white/10 bg-[#1B1D21]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={asset(galleryImages[lightbox])}
              alt={`lightbox-${lightbox}`}
              className="h-full w-full max-h-[80vh] object-contain"
            />
            <div className="bg-[#2B2E35] px-4 py-3 border-t border-white/5 flex justify-between text-xs text-muted-foreground font-semibold">
              <span>
                {galleryImages[lightbox].toLowerCase().includes("code") ? "💻 Code Overview" : "📷 Gameplay Screenshot"}
              </span>
              <span>
                {lightbox + 1} / {galleryImages.length}
              </span>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
            }}
            className="absolute right-4 rounded-full bg-white/10 p-2.5 text-foreground hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
