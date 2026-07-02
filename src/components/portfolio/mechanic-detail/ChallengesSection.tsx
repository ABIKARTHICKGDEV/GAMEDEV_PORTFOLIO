import React from "react";
import { GameplayMechanic } from "@/data/portfolio";

export default function ChallengesSection({ mechanic }: { mechanic: GameplayMechanic }) {
  const challenges = mechanic.challenges ?? [];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-6">
        <div className="font-display text-xl font-bold">Technical Challenges</div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {challenges.length ? (
            challenges.map((challenge, index) => (
              <div key={index} className="rounded-sm border border-white/8 bg-[#32353D]/40 p-4">
                <div className="font-semibold">{challenge.challenge}</div>
                <div className="mt-3 text-sm text-muted-foreground">↓</div>
                <div className="mt-3 text-sm text-foreground/90">{challenge.solution}</div>
              </div>
            ))
          ) : (
            <div className="rounded-sm border border-white/8 bg-[#32353D]/40 p-4 text-sm text-muted-foreground">
              No challenges documented for this mechanic yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
