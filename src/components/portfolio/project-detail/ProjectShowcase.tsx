import React from "react";
import { asset } from "@/lib/asset";

export default function ProjectShowcase({ project }: { project: any }) {
  const video = project.media?.video;
  const poster = project.media?.poster ?? project.media?.banner ?? project.media?.screenshot;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-4">
        {video ? (
          <video
            controls
            poster={poster ? asset(poster) : undefined}
            src={asset(video)}
            playsInline
            preload="metadata"
            className="w-full rounded-sm"
          />
        ) : poster ? (
          <img src={asset(poster)} alt="Showcase" className="w-full rounded-sm" />
        ) : (
          <div className="aspect-video w-full rounded-sm bg-[#24272b]" />
        )}
      </div>
    </section>
  );
}
