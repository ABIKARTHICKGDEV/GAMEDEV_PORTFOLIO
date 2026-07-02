import React from "react";
import { GameplayMechanic } from "@/data/portfolio";

export default function MechanicOverview({ mechanic }: { mechanic: GameplayMechanic }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-6">
        <div className="font-display text-xl font-bold">Mechanic Overview</div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <OverviewCard label="Purpose" value={mechanic.purpose ?? mechanic.description} />
          <OverviewCard label="Where it is used" value={mechanic.usedIn ?? "Gameplay systems and level interactions."} />
          <OverviewCard label="Gameplay benefit" value={mechanic.benefit ?? "Improves responsiveness, control, and feel."} />
          <OverviewCard label="Player experience" value={mechanic.experience ?? "Delivers a polished gameplay moment."} />
        </div>
      </div>
    </section>
  );
}

function OverviewCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-sm border border-white/8 bg-[#32353D]/40 p-4">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-2 text-sm text-foreground/90">{value}</div>
    </div>
  );
}
