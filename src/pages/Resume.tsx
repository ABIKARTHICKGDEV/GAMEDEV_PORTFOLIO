import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Download,
  ExternalLink,
  FileText,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  Gamepad2,
  Cpu,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";
import { Nav } from "@/components/portfolio/nav";
import { Footer } from "@/components/portfolio/sections";
import { portfolio } from "@/data/portfolio";
import { asset } from "@/lib/asset";
import { siteConfig } from "@/config/site";

export default function Resume() {
  const title = `Download Resumes | ${portfolio.profile.name} — Gameplay Programmer`;
  const desc = "Download specialized Unity and Unreal Engine Gameplay Programmer resumes for Abikarthick G.";
  const url = `${siteConfig.siteUrl}/resume`;

  const unityResumeUrl = asset(portfolio.resumeVariants.unity);
  const unrealResumeUrl = asset(portfolio.resumeVariants.unreal);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>

      <Nav />

      {/* Page Header */}
      <section className="relative overflow-hidden border-b border-white/8 pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="cover-img absolute inset-0 bg-gradient-to-br from-[#32353D]/40 via-background to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-sm border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Resume Downloads
            </div>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Curriculum Vitae & Resumes
            </h1>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed sm:text-lg">
              Tailored resumes structured specifically for Unity and Unreal Engine gameplay programming roles. Choose the version aligned with your tech stack.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Resume Options Section */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Unity Resume Box */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-lift flex flex-col justify-between rounded-sm border border-white/10 bg-[#2B2E35] p-6 shadow-xl sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-sm bg-emerald-500/15 text-emerald-400">
                    <Gamepad2 className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                      Engine Focus
                    </span>
                    <h2 className="font-display text-xl font-bold sm:text-2xl">
                      Unity Resume
                    </h2>
                  </div>
                </div>
                <span className="rounded-sm border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                  C# / Unity 3D
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Highlighting hands-on experience building modular C# gameplay mechanics, physics controllers, ScriptableObject architecture, and performance optimization in Unity.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80">
                  Key Technical Highlights
                </div>
                {[
                  "Unity C# Gameplay Architecture & ScriptableObjects",
                  "Physics, Player Movement & Custom Camera Systems",
                  "UI Toolkit, Animator Controllers & VFX Particles",
                  "Profiler, Memory Optimization & Multi-platform Publishing",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={unityResumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-steam inline-flex w-full sm:w-auto flex-1 items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-xs font-semibold uppercase tracking-wider"
              >
                <ExternalLink className="h-4 w-4" /> View PDF
              </a>
              <a
                href={unityResumeUrl}
                download="Abikarthick_resume_unity.pdf"
                className="btn-steam inline-flex w-full sm:w-auto flex-1 items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-xs font-semibold uppercase tracking-wider"
              >
                <Download className="h-4 w-4" /> Download Unity PDF
              </a>
            </div>
          </motion.article>

          {/* Unreal Engine Resume Box */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-lift flex flex-col justify-between rounded-sm border border-white/10 bg-[#2B2E35] p-6 shadow-xl sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-sm bg-cyan-500/15 text-cyan-400">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      Engine Focus
                    </span>
                    <h2 className="font-display text-xl font-bold sm:text-2xl">
                      Unreal Resume
                    </h2>
                  </div>
                </div>
                <span className="rounded-sm border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                  C++ / UE5
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Highlighting robust C++ and Blueprint gameplay systems in Unreal Engine 5, including Gameplay Ability Systems (GAS), Character Movement, and AI Behavior Trees.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80">
                  Key Technical Highlights
                </div>
                {[
                  "Unreal Engine 5 C++ & Blueprint System Integration",
                  "UE Gameplay Framework (GameMode, Pawn, Character)",
                  "Animation Blueprints, Motion Warping & Combat Loops",
                  "AI Behavior Trees, Perception & Engine Profiling",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={unrealResumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-steam inline-flex w-full sm:w-auto flex-1 items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-xs font-semibold uppercase tracking-wider"
              >
                <ExternalLink className="h-4 w-4" /> View PDF
              </a>
              <a
                href={unrealResumeUrl}
                download="Abikarthick_resume_unreal.pdf"
                className="btn-steam inline-flex w-full sm:w-auto flex-1 items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-xs font-semibold uppercase tracking-wider"
              >
                <Download className="h-4 w-4" /> Download Unreal PDF
              </a>
            </div>
          </motion.article>
        </div>

        {/* Contact CTA Banner */}
        <div className="mt-12 rounded-sm border border-white/8 bg-[#2B2E35]/60 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <FileText className="h-4 w-4" /> Direct Contact
              </div>
              <h3 className="mt-1 font-display text-xl font-bold">
                Have questions or need a custom resume format?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Feel free to reach out directly via email or connect on LinkedIn.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${portfolio.profile.email}`}
                className="btn-steam inline-flex items-center gap-2 rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider"
              >
                <Mail className="h-3.5 w-3.5" /> Contact Me
              </a>
              <a
                href={portfolio.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-steam inline-flex items-center gap-2 rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
              <a
                href={portfolio.profile.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-steam inline-flex items-center gap-2 rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
