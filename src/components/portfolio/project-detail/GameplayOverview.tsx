import React from "react";
import { asset } from "@/lib/asset";

export default function GameplayOverview({ project }: { project: any }) {
  // Use per-feature cards when available, otherwise fall back to feature strings
  const cards: { title: string; description: string }[] = project.gameplay?.length
    ? project.gameplay
    : (project.features ?? ["Movement", "Puzzle", "AI", "Physics"]).map((f: string) => ({
        title: f,
        description: project.description,
      }));

  const poster = project.media?.screenshot ?? project.media?.banner;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <h3 className="font-display text-xl font-bold">Gameplay Overview</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {cards.map((card, i) => (
          <div key={i} className="rounded-sm border border-white/8 bg-[#32353D]/40 p-4 flex gap-4">
            {poster ? (
              <div className="h-24 w-36 shrink-0 overflow-hidden rounded-sm bg-[#24272b]">
                <img
                  src={asset(poster)}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}
            <div>
              <div className="font-semibold">{card.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
