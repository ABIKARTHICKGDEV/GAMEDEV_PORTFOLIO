import React from "react";
import { Cpu, GitBranch, Puzzle, Zap, Layers, Music } from "lucide-react";

const ICONS = [
  <Cpu className="h-5 w-5" />,
  <Zap className="h-5 w-5" />,
  <Layers className="h-5 w-5" />,
  <Puzzle className="h-5 w-5" />,
  <Music className="h-5 w-5" />,
  <GitBranch className="h-5 w-5" />,
];

const DEFAULT_SYSTEMS = [
  { title: "Movement", description: "Player movement & controllers" },
  { title: "Doors & Switches", description: "Interactive level systems" },
  { title: "Physics", description: "Physics-driven interactions" },
  { title: "Object Pooling", description: "Reusable pooled objects" },
];

export default function GameplaySystems({ project }: { project: any }) {
  const systems: { title: string; description: string }[] =
    project.systems?.length ? project.systems : DEFAULT_SYSTEMS;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <h3 className="font-display text-xl font-bold">Gameplay Systems</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {systems.map((s, idx) => (
          <div key={s.title} className="rounded-sm border border-white/8 bg-[#32353D]/40 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded bg-[#24272b] p-2 text-primary">
                {ICONS[idx % ICONS.length]}
              </div>
              <div>
                <div className="font-semibold">{s.title}</div>
                <div className="text-sm text-muted-foreground">{s.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
