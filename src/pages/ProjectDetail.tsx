import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  Home,
  Play,
  ExternalLink,
  Github,
  Linkedin,
  Cpu,
  Sparkles,
  ListChecks,
  Wrench,
  GraduationCap,
} from "lucide-react";
import { Nav } from "@/components/portfolio/nav";
import { Footer } from "@/components/portfolio/sections";
import { portfolio } from "@/data/portfolio";
import { asset } from "@/lib/asset";
import ProjectHero from "@/components/portfolio/project-detail/ProjectHero";
import ProjectPlay from "@/components/portfolio/project-detail/ProjectPlay";
import ProjectShowcase from "@/components/portfolio/project-detail/ProjectShowcase";
import ProjectGallery from "@/components/portfolio/project-detail/ProjectGallery";
import GameplayOverview from "@/components/portfolio/project-detail/GameplayOverview";
import GameplaySystems from "@/components/portfolio/project-detail/GameplaySystems";
import DevelopmentTimeline from "@/components/portfolio/project-detail/DevelopmentTimeline";
import ArchitectureSection from "@/components/portfolio/project-detail/ArchitectureSection";
import TechnicalChallenges from "@/components/portfolio/project-detail/TechnicalChallenges";
import TechStack from "@/components/portfolio/project-detail/TechStack";
import Metrics from "@/components/portfolio/project-detail/Metrics";
import LessonsLearned from "@/components/portfolio/project-detail/LessonsLearned";
import SourceCode from "@/components/portfolio/project-detail/SourceCode";
import ProjectFooterCTA from "@/components/portfolio/project-detail/ProjectFooterCTA";
import { siteConfig } from "@/config/site";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = portfolio.projects.find((p) => p.id === id);
  const [heroMedia, setHeroMedia] = useState<"cover" | "preview">("cover");

  useEffect(() => {
    setHeroMedia("cover");

    const previewMedia = project?.media?.screenshot ?? project?.media?.gif;
    if (!previewMedia) {
      return;
    }

    let active = true;
    let timeoutId: number | undefined;

    const playLoop = () => {
      if (!active) return;
      setHeroMedia("cover");
      timeoutId = window.setTimeout(() => {
        if (!active) return;
        setHeroMedia("preview");
        timeoutId = window.setTimeout(() => {
          if (!active) return;
          playLoop();
        }, 2200);
      }, 1400);
    };

    playLoop();

    return () => {
      active = false;
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [project?.id, project?.media?.screenshot, project?.media?.gif]);

  if (!project) return <NotFound />;

  const title = `${project.title} — ${project.category} | Abikarthick G`;
  const desc = project.description;
  const url = `${siteConfig.siteUrl}/projects/${project.id}`;
  const heroImage = project.media?.banner ?? project.media?.screenshot ?? project.media?.gif;
  const heroPreviewImage = project.media?.screenshot ?? project.media?.gif;
  const linkedInHref =
    project.links.linkedin && project.links.linkedin !== "ABC"
      ? project.links.linkedin
      : portfolio.profile.linkedin;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>

      <Nav />

      <ProjectHero project={project} />
      <ProjectPlay project={project} />
      <ProjectShowcase project={project} />
      <ProjectGallery project={project} />
      <GameplayOverview project={project} />
      <GameplaySystems project={project} />
      <DevelopmentTimeline project={project} />
      <ArchitectureSection project={project} />
      <TechnicalChallenges project={project} />
      <TechStack project={project} />
      <Metrics project={project} />
      <LessonsLearned project={project} />
      <SourceCode project={project} />
      <ProjectFooterCTA project={project} />

      <Footer />
    </div>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-sm border border-white/8 bg-[#2B2E35] p-5">
      <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-3">
        <span className="grid h-7 w-7 place-items-center rounded-sm bg-primary/15 text-primary">
          {icon}
        </span>
        <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em]">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-sm border border-white/5 bg-[#32353D]/40 p-3">
      <div className="text-[10px] uppercase tracking-widest text-primary">
        {label}
      </div>
      <div className="mt-1 text-sm text-foreground/90">{text}</div>
    </div>
  );
}
