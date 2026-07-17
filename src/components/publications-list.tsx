import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { PROGRAMME_META, type Publication } from "@/lib/publications";

function groupByYear(pubs: Publication[]) {
  const years = [...new Set(pubs.map((p) => p.year))].sort((a, b) => b - a);
  return years.map((year) => ({
    year,
    pubs: pubs.filter((p) => p.year === year),
  }));
}

function Tags({ pub }: { pub: Publication }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {pub.programmes.map((code) => {
        const meta = PROGRAMME_META[code];
        return (
          <HoverCard key={code} openDelay={150} closeDelay={50}>
            <HoverCardTrigger asChild>
              <span
                className={`cursor-default rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  meta?.className ?? "border border-border text-foreground/70"
                }`}
              >
                {code}
              </span>
            </HoverCardTrigger>
            <HoverCardContent className="w-fit px-3 py-1.5 text-sm font-semibold text-foreground">
              {meta?.label ?? code}
            </HoverCardContent>
          </HoverCard>
        );
      })}
      {pub.quartile && (
        <span className="rounded-full border border-foreground/25 px-2.5 py-0.5 text-xs font-semibold text-foreground/70 tabular-nums">
          {pub.quartile}
        </span>
      )}
    </div>
  );
}

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <p className="text-sm font-semibold text-foreground/65">{pub.authors}</p>
      <h4 className="mt-1 text-lg leading-snug font-bold text-balance">{pub.title}</h4>
      {pub.journal && (
        <p className="mt-1 text-sm font-semibold text-foreground/65 italic">{pub.journal}</p>
      )}
      <Tags pub={pub} />
      {pub.doi && (
        <a
          href={`https://doi.org/${pub.doi}`}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-gold hover:text-gold-dim"
        >
          View publication →
        </a>
      )}
    </article>
  );
}

export function PublicationsList({ publications }: { publications: Publication[] }) {
  const grouped = groupByYear(publications);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-[96px_1fr] sm:gap-10">
      <nav
        aria-label="Jump to year"
        className="sticky top-16 z-30 -mx-6 flex flex-row flex-wrap gap-1.5 self-start border-b border-border bg-background px-6 py-3 sm:sticky sm:top-20 sm:mx-0 sm:flex-col sm:flex-nowrap sm:gap-0.5 sm:border-b-0 sm:border-l sm:border-border sm:bg-transparent sm:px-0 sm:py-0 sm:pl-4"
      >
        {grouped.map((g) => (
          <a
            key={g.year}
            href={`#pub-year-${g.year}`}
            className="flex items-baseline gap-1.5 rounded-lg px-2 py-1.5 text-sm font-semibold text-foreground/50 hover:bg-foreground/8 hover:text-foreground"
          >
            {g.year}
            <span className="text-xs font-normal text-foreground/40">{g.pubs.length}</span>
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-12">
        {grouped.map((g) => (
          <div key={g.year}>
            <div
              id={`pub-year-${g.year}`}
              className="mb-4 flex scroll-mt-24 items-baseline gap-3"
            >
              <h3 className="text-3xl font-bold">{g.year}</h3>
              <span className="text-sm text-foreground/40">
                {g.pubs.length} publication{g.pubs.length === 1 ? "" : "s"}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {g.pubs.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
