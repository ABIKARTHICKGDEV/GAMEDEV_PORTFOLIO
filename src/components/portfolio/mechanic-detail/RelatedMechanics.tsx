import React from "react";
import { Link } from "react-router-dom";
import { asset } from "@/lib/asset";
import { portfolio, type GameplayMechanic } from "@/data/portfolio";

export default function RelatedMechanics({ mechanicId }: { mechanicId: string }) {
  const related = portfolio.gameplayMechanics.filter((mechanic) => mechanic.id !== mechanicId).slice(0, 3);
  if (!related.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="font-display text-xl font-bold">Other mechanics</div>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {related.map((mechanic) => (
          <Link
            key={mechanic.id}
            to={`/mechanics/${mechanic.id}`}
            className="group rounded-sm border border-white/8 bg-[#32353D]/40 p-4 transition hover:border-primary/50"
          >
            <div className="overflow-hidden rounded-sm bg-[#1D1F24]">
              {mechanic.media?.preview || mechanic.media?.gif ? (
                <img
                  src={asset(mechanic.media.preview ?? mechanic.media.gif ?? "")}
                  alt={mechanic.title}
                  className="h-36 w-full object-cover"
                />
              ) : (
                <div className="flex h-36 items-center justify-center bg-[#24272b] text-sm text-muted-foreground">
                  Preview unavailable
                </div>
              )}
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 text-sm">
              <div>
                <div className="font-semibold text-foreground">{mechanic.title}</div>
                <div className="text-muted-foreground">{mechanic.engine}</div>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition group-hover:border-primary/50 group-hover:text-primary">
                View
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
