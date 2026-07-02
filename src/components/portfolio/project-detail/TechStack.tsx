import React from "react";

export default function TechStack({ project }: { project: any }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <h3 className="font-display text-xl font-bold">Tech Stack</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech?.map((t: string) => (
          <span key={t} className="rounded-sm border border-white/8 bg-[#32353D]/30 px-3 py-1 text-sm">{t}</span>
        ))}
      </div>
    </section>
  );
}
