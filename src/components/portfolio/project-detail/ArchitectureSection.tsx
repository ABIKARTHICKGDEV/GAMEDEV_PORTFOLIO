import React from "react";

export default function ArchitectureSection({ project }: { project: any }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <h3 className="font-display text-xl font-bold">Technical Architecture</h3>
      <div className="mt-4 rounded-sm border border-white/8 bg-[#32353D]/40 p-6">
        <div className="h-56 w-full rounded-sm bg-[#24272b] flex items-center justify-center text-muted-foreground">Architecture diagram placeholder</div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            "Player",
            "Input",
            "Animation",
            "Physics",
            "Triggers",
            "Game Manager",
            "UI",
            "Checkpoint",
            "Door System",
          ].map((n) => (
            <div key={n} className="rounded-sm bg-[#2b2e35] p-3 text-sm">{n}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
