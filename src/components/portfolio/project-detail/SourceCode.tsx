import React from "react";

const SAMPLES = [
  { title: "Player Controller", file: "PlayerController.cs" },
  { title: "Game Manager", file: "GameManager.cs" },
  { title: "Checkpoint", file: "Checkpoint.cs" },
  { title: "Door Trigger", file: "DoorTrigger.cs" },
  { title: "Enemy AI", file: "EnemyAI.cs" },
];

export default function SourceCode({ project }: { project: any }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <h3 className="font-display text-xl font-bold">Source Code</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {SAMPLES.map((s) => (
          <div key={s.title} className="rounded-sm border border-white/8 bg-[#32353D]/40 p-4">
            <div className="font-semibold">{s.title}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.file}</div>
            <div className="mt-3">
              <a href={project.links?.github ?? "#"} target="_blank" rel="noreferrer" className={`btn-ghost-steam inline-flex items-center gap-2 px-3 py-1.5 ${project.links?.github ? "" : "opacity-50 pointer-events-none"}`}>
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
