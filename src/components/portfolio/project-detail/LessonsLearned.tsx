import React from "react";

export default function LessonsLearned({ project }: { project: any }) {
  const lessons = project.learnings ?? [];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <h3 className="font-display text-xl font-bold">Lessons Learned</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {lessons.length ? lessons.map((l: string) => (
          <div key={l} className="rounded-sm border border-white/8 bg-[#32353D]/40 p-4">{l}</div>
        )) : <div className="text-muted-foreground">No lessons documented.</div>}
      </div>
    </section>
  );
}
