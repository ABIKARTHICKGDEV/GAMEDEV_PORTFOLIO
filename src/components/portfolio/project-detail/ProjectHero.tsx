import React from "react";
import { asset } from "@/lib/asset";
import { Play, Github, Linkedin } from "lucide-react";

export default function ProjectHero({ project }: { project: any }) {
  const bgVideo = project.media?.video;
  const bgImage = project.media?.banner ?? project.media?.screenshot;

  return (
    <section className="relative w-full overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 -z-10">
        {bgVideo ? (
          <video
            src={asset(bgVideo)}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : bgImage ? (
          <img src={asset(bgImage)} alt={project.title} className="h-full w-full object-cover" />
        ) : (
          <div className="h-72 w-full bg-gradient-to-b from-[#2b2e35] to-[#1b1b1f]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:py-40 sm:px-6">
        <div className="max-w-4xl">
          <div className="text-sm font-semibold uppercase tracking-widest text-primary">
            {project.category}
          </div>
          <h1 className="mt-3 font-display text-5xl font-extrabold leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.links?.itchEmbedUrl ? (
              <a href="#play" className="btn-steam inline-flex items-center gap-2 px-4 py-2">
                <Play className="h-4 w-4" /> Play Game
              </a>
            ) : project.links?.itch ? (
              <a
                href={project.links.itch}
                target="_blank"
                rel="noreferrer"
                className="btn-steam inline-flex items-center gap-2 px-4 py-2"
              >
                <Play className="h-4 w-4" /> Play Game
              </a>
            ) : (
              <button className="btn-steam inline-flex items-center gap-2 px-4 py-2" disabled>
                <Play className="h-4 w-4" /> Play Game
              </button>
            )}

            {project.links?.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-steam inline-flex items-center gap-2 px-4 py-2"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            ) : null}

            <a
              href={project.links?.linkedin ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-steam inline-flex items-center gap-2 px-4 py-2"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>

            <div className="ml-auto flex gap-3 text-sm">
              <div className="rounded-sm bg-[#32353D]/40 px-3 py-2">
                <div className="text-[10px] uppercase text-muted-foreground">Engine</div>
                <div className="font-semibold">{project.metrics?.engine ?? "—"}</div>
              </div>
              <div className="rounded-sm bg-[#32353D]/40 px-3 py-2">
                <div className="text-[10px] uppercase text-muted-foreground">Platform</div>
                <div className="font-semibold">{project.metrics?.platform ?? "—"}</div>
              </div>
              <div className="rounded-sm bg-[#32353D]/40 px-3 py-2">
                <div className="text-[10px] uppercase text-muted-foreground">Status</div>
                <div className="font-semibold">{project.metrics?.status ?? "—"}</div>
              </div>
              <div className="rounded-sm bg-[#32353D]/40 px-3 py-2">
                <div className="text-[10px] uppercase text-muted-foreground">Team</div>
                <div className="font-semibold">{project.metrics?.teamSize ?? "—"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
