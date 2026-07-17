import { ProjectTimeline } from "@/components/project-timeline";
import { PublicationsList } from "@/components/publications-list";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/projects";
import { publications } from "@/lib/publications";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-20 md:py-28">
      <section className="max-w-2xl">
        <p className="text-sm font-medium tracking-widest text-gold-dim uppercase">
          Research Outputs
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
          Publications, datasets and software from our work.
        </h1>
        <p className="mt-5 text-lg text-foreground/65 text-pretty">
          A running record of what we have produced — peer-reviewed articles, open
          datasets and the tools built along the way.
        </p>
      </section>

      <Separator className="my-16" />

      <section>
        <h2 className="text-lg font-bold tracking-wide text-gold-dim uppercase">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-foreground/65">
          From 2022 to 2026 — from a completed exoskeleton usability study through to
          a proposal awaiting funding touching prodromal biomarker for early detection of neurodegenerative disease. The line traces how sure we are of each one.
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
          {publications.length} publications, {Math.min(...publications.map((p) => p.year))}–
          {Math.max(...publications.map((p) => p.year))}.
        </p>
        <div className="mt-10">
          <PublicationsList publications={publications} />
        </div>
      </section>
    </main>
  );
}
