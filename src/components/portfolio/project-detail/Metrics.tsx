import React from "react";

export default function Metrics({ project }: { project: any }) {
  const metrics = project.metrics ?? {};
  const entries = Object.entries(metrics);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <h3 className="font-display text-xl font-bold">Metrics</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-4">
        {entries.map(([k, v]) => (
          <div key={k} className="rounded-sm border border-white/8 bg-[#32353D]/40 p-3 text-sm">
            <div className="text-[10px] uppercase text-muted-foreground">{k}</div>
            <div className="font-semibold">{String(v)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
