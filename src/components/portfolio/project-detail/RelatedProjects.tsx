import React from "react";
import { portfolio } from "@/data/portfolio";
import { asset } from "@/lib/asset";

export default function RelatedProjects({ projectId }: { projectId: string }) {
  const others = portfolio.projects.filter((p) => p.id !== projectId).slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <h3 className="font-display text-xl font-bold">Related Projects</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {others.map((p) => (
          <div key={p.id} className="rounded-sm border border-white/8 bg-[#32353D]/40 p-4">
            <img src={asset(p.media?.banner ?? p.media?.screenshot ?? "") } alt={p.title} className="h-36 w-full rounded-sm object-cover" />
            <div className="mt-2 font-semibold">{p.title}</div>
            <div className="text-sm text-muted-foreground">{p.category}</div>
            <div className="mt-3">
              <a href={`/projects/${p.id}`} className="btn-ghost-steam inline-flex items-center gap-2 px-3 py-1.5">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
