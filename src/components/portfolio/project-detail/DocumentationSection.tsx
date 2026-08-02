import { asset } from "@/lib/asset";
import { BookOpen, Download, ExternalLink, FileText } from "lucide-react";

export default function DocumentationSection({ project }: { project: any }) {
  const doc = project.documentation;
  if (!doc || !doc.pdf) return null;

  const pdfUrl = asset(doc.pdf);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="rounded-sm border border-white/8 bg-[#2B2E35] p-6">
        {/* Header */}
        <div className="mb-5 flex items-center gap-3 border-b border-white/5 pb-4">
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary/15 text-primary">
            <BookOpen className="h-4 w-4" />
          </span>
          <div>
            <div className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              Documentation
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">
              {doc.title ?? "Game Design Document"}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Description */}
          <div className="flex items-start gap-3">
            <FileText className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <div>
              <div className="text-sm font-medium text-foreground">
                {doc.title ?? "Game Design Document"} (PDF)
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                Detailed game design document covering mechanics, systems, architecture, and design decisions for this project.
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex shrink-0 flex-wrap gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-steam inline-flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View GDD
            </a>
            <a
              href={pdfUrl}
              download
              className="btn-steam inline-flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider"
            >
              <Download className="h-3.5 w-3.5" />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
