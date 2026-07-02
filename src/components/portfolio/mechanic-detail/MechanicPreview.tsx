import React from "react";
import { asset } from "@/lib/asset";
import { GameplayMechanic } from "@/data/portfolio";

export default function MechanicPreview({ mechanic }: { mechanic: GameplayMechanic }) {
  const video = mechanic.media?.video;
  const gif = mechanic.media?.gif;
  const image = mechanic.media?.preview ?? mechanic.preview;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-4">
        {video ? (
          <video
            controls
            src={asset(video)}
            poster={image ? asset(image) : undefined}
            playsInline
            preload="metadata"
            className="w-full rounded-sm"
          />
        ) : gif ? (
          <img src={asset(gif)} alt={mechanic.title} className="w-full rounded-sm" />
        ) : image ? (
          <img src={asset(image)} alt={mechanic.title} className="w-full rounded-sm" />
        ) : (
          <div className="aspect-video w-full rounded-sm bg-[#24272b]" />
        )}
      </div>
    </section>
  );
}
