import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { portfolio, type GameplayMechanic } from "@/data/portfolio";
import { Nav } from "@/components/portfolio/nav";
import { Footer } from "@/components/portfolio/sections";
import MechanicHero from "@/components/portfolio/mechanic-detail/MechanicHero";
import MechanicPreview from "@/components/portfolio/mechanic-detail/MechanicPreview";
import MechanicOverview from "@/components/portfolio/mechanic-detail/MechanicOverview";
import TechnicalBreakdown from "@/components/portfolio/mechanic-detail/TechnicalBreakdown";
import ImplementationFlow from "@/components/portfolio/mechanic-detail/ImplementationFlow";
import ImplementationSteps from "@/components/portfolio/mechanic-detail/ImplementationSteps";
import ArchitectureSection from "@/components/portfolio/mechanic-detail/ArchitectureSection";
import ChallengesSection from "@/components/portfolio/mechanic-detail/ChallengesSection";
import RelatedMechanics from "@/components/portfolio/mechanic-detail/RelatedMechanics";
import MechanicFooterCTA from "@/components/portfolio/mechanic-detail/MechanicFooterCTA";
import NotFound from "./NotFound";

export default function MechanicDetail() {
  const { id } = useParams<{ id: string }>();
  const mechanic = portfolio.gameplayMechanics.find((m) => m.id === id);

  if (!mechanic) return <NotFound />;

  const title = `${mechanic.title} — Gameplay Mechanic | ${portfolio.profile.name}`;
  const description = mechanic.description;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Nav />
      <main>
        <MechanicHero mechanic={mechanic} />
        <MechanicPreview mechanic={mechanic} />
        <MechanicOverview mechanic={mechanic} />
        <TechnicalBreakdown mechanic={mechanic} />
        <ImplementationFlow mechanic={mechanic} />
        <ImplementationSteps mechanic={mechanic} />
        <ArchitectureSection mechanic={mechanic} />
        <ChallengesSection mechanic={mechanic} />
        <RelatedMechanics mechanicId={mechanic.id} />
        <MechanicFooterCTA />
      </main>
      <Footer />
    </div>
  );
}
