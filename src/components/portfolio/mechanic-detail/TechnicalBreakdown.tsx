import React from "react";
import { GameplayMechanic } from "@/data/portfolio";

const breakdownItems = ["Input", "Movement", "Physics", "Animation", "Collision", "State Machine", "Camera", "Audio"];

export default function TechnicalBreakdown({ mechanic }: { mechanic: GameplayMechanic }) {
  const items = mechanic.breakdown?.length ? mechanic.breakdown : breakdownItems;
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-6">
        <div className="font-display text-xl font-bold">Technical Breakdown</div>
        <div className="mt-4 grid gap-4 sm:grid-cols-4">
          {items.map((item) => (
            <div key={item} className="rounded-sm border border-white/8 bg-[#32353D]/40 p-4 text-sm">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
