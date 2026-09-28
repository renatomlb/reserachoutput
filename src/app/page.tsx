import { ProjectTimeline } from "@/components/project-timeline";
import { PublicationsList } from "@/components/publications-list";
import { ResearchStatsHero } from "@/components/research-stats-hero";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/projects";
import { publications } from "@/lib/publications";
import { researchStats } from "@/lib/research-stats";

export default function Home() {
  return (
    <main className="flex-1">
      <ResearchStatsHero stats={researchStats} />

      <div className="mx-auto w-full max-w-5xl px-6 pt-4 pb-20 md:pb-28">
        <section>
          <h2 className="text-lg font-bold tracking-wide text-gold-dim uppercase">Projects</h2>
          <p className="mt-3 max-w-2xl text-foreground/65">
            From 2022 to 2026 — from a completed exoskeleton usability study through to a
            proposal awaiting funding touching prodromal biomarker for early detection of
            neurodegenerative disease. The line traces how sure we are of each one.
          </p>
          <div className="mt-12">
            <ProjectTimeline projects={projects} />
          </div>
        </section>

        <Separator className="my-16" />

        <section id="research-outputs" className="scroll-mt-24">
          <h2 className="text-lg font-bold tracking-wide text-gold-dim uppercase">
            Research Outputs
          </h2>
          <p className="mt-3 max-w-2xl text-foreground/65">
            {researchStats.totalPublications} publications, {researchStats.firstYear}–
            {researchStats.lastYear}.
          </p>
          <div className="mt-10">
            <PublicationsList publications={publications} />
          </div>
        </section>
      </div>
    </main>
  );
}
