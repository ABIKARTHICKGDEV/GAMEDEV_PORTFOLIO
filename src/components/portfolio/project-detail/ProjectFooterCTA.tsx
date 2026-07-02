import React from "react";
import { Play, Github, Linkedin } from "lucide-react";

export default function ProjectFooterCTA({ project }: { project: any }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
      <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-6 text-center">
        <h3 className="font-display text-2xl font-bold">Interested in this project?</h3>
        <div className="mt-4 flex items-center justify-center gap-3">
          <a href={project.links?.github} target="_blank" rel="noreferrer" className="btn-ghost-steam inline-flex items-center gap-2 px-4 py-2">
            <Github className="h-4 w-4" /> GitHub
          </a>
          {project.links?.itch ? (
            <a href={project.links.itch} target="_blank" rel="noreferrer" className="btn-steam inline-flex items-center gap-2 px-4 py-2">
              <Play className="h-4 w-4" /> Play
            </a>
          ) : null}
          <a href={project.links?.linkedin} target="_blank" rel="noreferrer" className="btn-ghost-steam inline-flex items-center gap-2 px-4 py-2">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
