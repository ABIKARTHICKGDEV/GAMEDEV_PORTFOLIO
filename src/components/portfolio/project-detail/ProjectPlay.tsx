import React from "react";
import { ExternalLink } from "lucide-react";
import { asset } from "@/lib/asset";

export default function ProjectPlay({ project }: { project: any }) {
  const embed = project.links?.itchEmbedUrl;

  return (
    <section id="play" className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-4">
        {embed ? (
          <iframe src={embed} title={project.title} className="aspect-video w-full rounded-sm" allow="autoplay; fullscreen; gamepad" />
        ) : (
          <div className="flex flex-col items-start gap-4">
            <div className="text-lg font-semibold">Playable build coming soon</div>
            <p className="text-sm text-muted-foreground">I will update this with an embedded build when available.</p>
            {project.links?.itch ? (
              <a href={project.links.itch} target="_blank" rel="noreferrer" className="btn-steam inline-flex items-center gap-2 px-4 py-2">
                Play on itch.io <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
