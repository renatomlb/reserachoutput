"use client";

import Image from "next/image";
import { Activity, ClipboardList, Dumbbell } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";

// Converted from Sources/lhssri_landscape.avif: Turbopack cannot decode AVIF,
// so an .avif import ships unoptimized and without intrinsic dimensions. PNG
// keeps the alpha channel; next/image re-encodes it on the way out.
import lhssriGraphic from "@/assets/brand/lhssri-landscape.png";
import { Button } from "@/components/ui/button";
import { projectStats, type ResearchStats } from "@/lib/research-stats";
import { cn } from "@/lib/utils";

const DURATION_MS = 1500;

// The figures are rendered at their true values on the server, so the page is
// correct with JS disabled. The reset to zero has to land before the browser
// paints, or the final number flashes for a frame — hence layout effect.
const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Drives every figure in the hero from one 0→1 curve, so they resolve
 * together rather than as several unrelated counters. Starts when the section
 * scrolls into view, and skips straight to the end under reduced motion.
 */
function useCountUp(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(1);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setProgress(0);

    let raf = 0;
    let start: number | null = null;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / DURATION_MS);
      setProgress(1 - (1 - p) ** 3);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.25 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [ref]);

  return progress;
}

const PROGRAMME_ICONS = [
  { label: "Physiotherapy", Icon: Activity },
  { label: "Sport and Exercise Science", Icon: Dumbbell },
  { label: "Sport Management", Icon: ClipboardList },
] as const;

export function ResearchStatsHero({ stats }: { stats: ResearchStats }) {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useCountUp(sectionRef);

  const count = (n: number) => Math.round(n * progress).toLocaleString("en-GB");

  return (
    <section ref={sectionRef} aria-labelledby="research-numbers-heading">
      {/* Navy band — full-bleed, inner content on the page's own measure. */}
      <div className="bg-foreground">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-10 px-6 py-12 md:min-h-76 md:flex-row md:items-center md:justify-between md:gap-12 md:py-14">
          <h1
            id="research-numbers-heading"
            className="text-3xl font-bold tracking-tight text-balance text-background sm:text-4xl md:text-[3.375rem] md:leading-[1.08]"
          >
            LUNEX Research
            <br />
            <span className="text-gold-light">Publications &amp; Projects</span>
          </h1>

          <Image
            src={lhssriGraphic}
            alt="A runner mid-stride on a treadmill in the LHSSRI lab, framed by the LUNEX diagonal brand pattern."
            priority
            sizes="(min-width: 1024px) 440px, (min-width: 768px) 360px, 100vw"
            className="h-auto w-full max-w-80 self-center md:max-w-90 lg:max-w-110"
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-14">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Headline total */}
          <div className="lg:w-[54%]">
            <p className="text-6xl leading-[0.86] font-bold tracking-[-0.04em] tabular-nums sm:text-7xl md:text-8xl">
              {count(stats.totalPublications)}
            </p>

            <p className="mt-5 text-lg leading-relaxed text-pretty md:text-[1.1875rem]">
              <strong className="font-semibold">research publications in total</strong>
              <span className="text-foreground/65">
                , across Physiotherapy, Sport &amp; Exercise Science, Sport
                Management, Nutrition, Education, and R&amp;D.
              </span>
            </p>

            {/* Evenly distributed across the text's measure, not the column's. */}
            <ul className="mt-8 flex w-full max-w-[31.25rem] justify-between">
              {PROGRAMME_ICONS.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="flex size-12 items-center justify-center rounded-xl bg-gold"
                >
                  <Icon className="size-6 text-foreground" strokeWidth={1.7} aria-hidden="true" />
                  <span className="sr-only">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Supporting figures */}
          <div className="border-t border-foreground/20 pt-1 lg:flex-1">
            <div className="flex items-baseline gap-5 border-b border-foreground/8 py-6">
              <p className="w-26 shrink-0 text-4xl leading-none font-bold tracking-[-0.03em] tabular-nums sm:text-5xl">
                {count(stats.journalCount)}
              </p>
              <div>
                <p className="text-base font-semibold">journals worldwide</p>
                <p className="mt-1 text-sm text-foreground/55">
                  {stats.firstYear} – {stats.lastYear}, no single house journal
                </p>
              </div>
            </div>

            <div className="flex items-baseline gap-5 pt-6">
              <p className="w-26 shrink-0 text-4xl leading-none font-bold tracking-[-0.03em] tabular-nums sm:text-5xl">
                {count(stats.q1q2Percent)}%
              </p>
              <div className="flex-1">
                <p className="text-base font-semibold">in Q1 or Q2 journals</p>
                <p className="mt-1 text-sm text-foreground/55">
                  {stats.q1q2} of {stats.totalPublications} — {stats.q1} in Q1, {stats.q2} in Q2
                </p>
                <span
                  className="mt-3.5 block h-1.5 overflow-hidden rounded-full bg-foreground/12"
                  aria-hidden="true"
                >
                  <span
                    className="block h-full rounded-full bg-gold"
                    style={{ width: `${stats.q1q2Percent * progress}%` }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-11 h-px bg-foreground/20" />

        <div className="mt-9 flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="grid flex-1 gap-9 sm:grid-cols-3">
            {projectStats.map((project, i) => (
              <div
                key={project.label}
                className={cn(i > 0 && "sm:border-l sm:border-foreground/8 sm:pl-9")}
              >
                <p className="text-5xl leading-none font-bold tracking-[-0.03em] tabular-nums">
                  {count(project.count)}
                </p>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-foreground/65">
                  <strong className="font-semibold text-foreground">{project.label}</strong>, with a
                  funded amount of {project.funded}.
                </p>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="h-11 shrink-0 px-6 text-[0.9375rem]">
            <a href="#research-outputs">Explore the outputs</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
