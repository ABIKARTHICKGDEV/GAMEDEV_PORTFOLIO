import React from "react";
import { Cpu, GitBranch, Puzzle, Zap } from "lucide-react";

const DEFAULT_SYSTEMS = [
  { icon: <Cpu className="h-5 w-5" />, title: "Movement", desc: "Player movement & controllers" },
  { icon: <Puzzle className="h-5 w-5" />, title: "Doors & Switches", desc: "Interactive level systems" },
  { icon: <Zap className="h-5 w-5" />, title: "Physics", desc: "Physics-driven interactions" },
  { icon: <GitBranch className="h-5 w-5" />, title: "Object Pooling", desc: "Reusable pooled objects" },
];

export default function GameplaySystems({ project }: { project: any }) {
  const systems = DEFAULT_SYSTEMS;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <h3 className="font-display text-xl font-bold">Gameplay Systems</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {systems.map((s) => (
          <div key={s.title} className="rounded-sm border border-white/8 bg-[#32353D]/40 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded bg-[#24272b] p-2">{s.icon}</div>
              <div>
                <div className="font-semibold">{s.title}</div>
                <div className="text-sm text-muted-foreground">{s.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
