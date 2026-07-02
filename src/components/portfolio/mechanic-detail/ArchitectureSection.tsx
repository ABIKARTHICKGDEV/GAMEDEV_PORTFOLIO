import React from "react";
import { GameplayMechanic } from "@/data/portfolio";

const architectureItems = [
  "PlayerController",
  "MovementSystem",
  "StateMachine",
  "AnimationController",
  "PhysicsHandler",
  "InputManager",
];

export default function ArchitectureSection({ mechanic }: { mechanic: GameplayMechanic }) {
  const items = mechanic.architecture ? [mechanic.architecture] : architectureItems;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-6">
        <div className="font-display text-xl font-bold">Code Architecture</div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
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
