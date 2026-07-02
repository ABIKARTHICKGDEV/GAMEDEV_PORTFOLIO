import React from "react";

const STAGES = ["Planning", "Prototype", "Core Gameplay", "Level Design", "Optimization", "Testing", "Release"];

export default function DevelopmentTimeline({ project }: { project: any }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <h3 className="font-display text-xl font-bold">Development Timeline</h3>
      <div className="mt-4 overflow-x-auto">
        <div className="flex gap-6 py-4">
          {STAGES.map((s, i) => (
            <div key={s} className="min-w-[160px] rounded-sm border border-white/8 bg-[#32353D]/40 p-4 text-center">
              <div className="text-sm font-semibold">{s}</div>
              <div className="mt-2 text-xs text-muted-foreground">{i === 0 ? "Jan 2024" : ""}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
