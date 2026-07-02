import React from "react";
import { asset } from "@/lib/asset";

export default function GameplayOverview({ project }: { project: any }) {
  const items = project.features?.length ? project.features : [
    "Movement",
    "Puzzle",
    "AI",
    "Physics",
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <h3 className="font-display text-xl font-bold">Gameplay Overview</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {items.map((t: string, i: number) => (
          <div key={i} className="rounded-sm border border-white/8 bg-[#32353D]/40 p-4 flex gap-4">
            <div className="h-24 w-36 overflow-hidden rounded-sm bg-[#24272b]">
              <img src={asset(project.media?.screenshot ?? project.media?.banner ?? "Project_Assets/placeholder.png")} alt={t} className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="font-semibold">{t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{project.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
