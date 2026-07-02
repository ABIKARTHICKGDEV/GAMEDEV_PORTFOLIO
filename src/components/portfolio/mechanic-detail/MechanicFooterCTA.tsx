import React from "react";
import { Link } from "react-router-dom";
import { portfolio } from "@/data/portfolio";

export default function MechanicFooterCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="rounded-sm border border-white/8 bg-[#181A1E] p-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Gameplay Engineering</p>
        <h2 className="mt-4 text-3xl font-bold">Designing resilient systems for gameplay interaction</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          I design gameplay systems with clarity, performance, and player feel in mind. Explore more case studies or reach out for technical collaboration.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
            Back to portfolio
          </Link>
          <a href={`mailto:${portfolio.profile.email}`} className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
