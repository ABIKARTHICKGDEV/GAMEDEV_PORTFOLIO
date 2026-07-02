import React from "react";
import { GameplayMechanic } from "@/data/portfolio";

export default function ImplementationFlow({ mechanic }: { mechanic: GameplayMechanic }) {
  const flow = mechanic.flow?.split("\n") ?? ["Input", "Validation", "Gameplay Logic", "Animation", "Physics", "Result"];
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-6">
        <div className="font-display text-xl font-bold">Implementation Flow</div>
        <div className="mt-6 flex flex-col gap-4">
          {flow.map((step, index) => (
            <div key={step} className="rounded-sm border border-white/8 bg-[#32353D]/40 p-4">
              <div className="font-semibold">{step}</div>
              {index < flow.length - 1 ? <div className="mt-2 text-sm text-muted-foreground">↓</div> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
