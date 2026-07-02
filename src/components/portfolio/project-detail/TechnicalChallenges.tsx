import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function TechnicalChallenges({ project }: { project: any }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <h3 className="font-display text-xl font-bold">Technical Challenges</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {project.challenges?.length ? (
          project.challenges.map((c: any, i: number) => (
            <div key={i} className="rounded-sm border border-white/8 bg-[#32353D]/40 p-4">
              <div className="flex items-start gap-3">
                <div className="text-primary mt-1"><XCircle className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold">{c.challenge}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{c.solution}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-muted-foreground">No challenges documented.</div>
        )}
      </div>
    </section>
  );
}
