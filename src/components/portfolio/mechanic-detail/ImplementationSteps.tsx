import React from "react";
import { GameplayMechanic } from "@/data/portfolio";

export default function ImplementationSteps({ mechanic }: { mechanic: GameplayMechanic }) {
  const steps = mechanic.steps?.length
    ? mechanic.steps
    : ["Receive Input", "Calculate", "Execute Logic", "Update Animation", "Apply Physics", "Finish"];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-6">
        <div className="font-display text-xl font-bold">Implementation Steps</div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {steps.map((step) => (
            <div key={step} className="rounded-sm border border-white/8 bg-[#32353D]/40 p-4">
              <div className="font-semibold">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
