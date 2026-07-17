"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { Project, ProjectStage } from "@/lib/projects";

import styles from "./project-timeline.module.css";

const STAGE_LABEL: Record<ProjectStage, string> = {
  published: "Published",
  "in-review": "In review",
  proposal: "Proposal",
};

const STAGE_NODE_CLASS: Record<ProjectStage, string> = {
  published: styles.tlNodePublished,
  "in-review": styles.tlNodeInReview,
  proposal: styles.tlNodeProposal,
};

const STAGE_STATUS_CLASS: Record<ProjectStage, string> = {
  published: styles.tlStatusPublished,
  "in-review": styles.tlStatusInReview,
  proposal: styles.tlStatusProposal,
};

const STAGE_SEG_CLASS: Record<ProjectStage, string> = {
  published: styles.tlSegPublished,
  "in-review": styles.tlSegInReview,
  proposal: styles.tlSegProposal,
};

type Point = { x: number; y: number };

function segmentPath(a: Point, b: Point) {
  const dy = (b.y - a.y) * 0.5;
  return `M ${a.x} ${a.y} C ${a.x} ${a.y + dy}, ${b.x} ${b.y - dy}, ${b.x} ${b.y}`;
}

export function ProjectTimeline({ projects }: { projects: Project[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const revealedRef = useRef(false);

  const [viewBox, setViewBox] = useState("0 0 1 1");
  const [segments, setSegments] = useState<string[]>([]);

  // Build the curve from the nodes' real rendered positions, so it always
  // threads through the spine regardless of how tall each card ends up.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const build = () => {
      const box = root.getBoundingClientRect();
      if (!box.width || !box.height) return;

      const points = nodeRefs.current.map((node): Point => {
        if (!node) return { x: 0, y: 0 };
        const r = node.getBoundingClientRect();
        return { x: r.left - box.left + r.width / 2, y: r.top - box.top + r.height / 2 };
      });

      setViewBox(`0 0 ${box.width} ${box.height}`);
      setSegments(points.slice(0, -1).map((p, i) => segmentPath(p, points[i + 1])));
    };

    build();

    const ro = new ResizeObserver(build);
    ro.observe(root);
    document.fonts?.ready.then(build).catch(() => {});

    return () => ro.disconnect();
  }, [projects.length]);

  // Draw the line on once it scrolls into view: the solid segment traces in,
  // the dashed/dotted segments that follow fade in with a short stagger.
  useEffect(() => {
    if (segments.length === 0) return;
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const applyHiddenState = () => {
      const first = pathRefs.current[0];
      if (first) {
        const length = first.getTotalLength();
        first.style.transition = "none";
        first.style.strokeDasharray = `${length}`;
        first.style.strokeDashoffset = `${length}`;
      }
      pathRefs.current.slice(1).forEach((path) => {
        if (!path) return;
        path.style.transition = "none";
        path.style.opacity = "0";
      });
    };

    const reveal = () => {
      if (revealedRef.current) return;
      revealedRef.current = true;

      const first = pathRefs.current[0];
      if (first) {
        first.style.transition = reduceMotion ? "none" : "stroke-dashoffset 1.1s ease-out";
        requestAnimationFrame(() => {
          first.style.strokeDashoffset = "0";
        });
      }

      pathRefs.current.slice(1).forEach((path, i) => {
        if (!path) return;
        const isProposal = path.dataset.stage === "proposal";
        path.style.transition = reduceMotion
          ? "none"
          : `opacity 0.7s ease-out ${0.75 + i * 0.28}s`;
        path.style.opacity = isProposal ? "0.75" : "1";
      });
    };

    if (revealedRef.current) {
      // Geometry changed (resize/reflow) after the reveal already played —
      // snap back to fully drawn without replaying the animation.
      const first = pathRefs.current[0];
      if (first) {
        first.style.transition = "none";
        first.style.strokeDasharray = `${first.getTotalLength()}`;
        first.style.strokeDashoffset = "0";
      }
      return;
    }

    if (reduceMotion) {
      applyHiddenState();
      reveal();
      return;
    }

    applyHiddenState();

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(root);

    return () => io.disconnect();
  }, [segments]);

  return (
    <div ref={rootRef} className={styles.tlRoot}>
      <svg className={styles.tlSvg} viewBox={viewBox} preserveAspectRatio="none" aria-hidden="true">
        {projects.slice(0, -1).map((project, i) => {
          const target = projects[i + 1];
          return (
            <path
              key={project.slug}
              ref={(el) => {
                pathRefs.current[i] = el;
              }}
              className={`${styles.tlSeg} ${STAGE_SEG_CLASS[target.stage]}`}
              data-stage={target.stage}
              d={segments[i] ?? ""}
            />
          );
        })}
      </svg>

      {projects.map((project, i) => (
        <article
          className={`${styles.tlRow} scroll-mt-24`}
          id={project.slug}
          key={project.slug}
        >
          <div className={styles.tlSpine}>
            <span
              ref={(el) => {
                nodeRefs.current[i] = el;
              }}
              className={`${styles.tlNode} ${STAGE_NODE_CLASS[project.stage]}`}
              aria-hidden="true"
            />
            <span className={styles.tlYear}>{project.year}</span>
          </div>

          <div className={styles.tlCard}>
            <span className={`${styles.tlStatus} ${STAGE_STATUS_CLASS[project.stage]}`}>
              {STAGE_LABEL[project.stage]}
            </span>
            <h3 className={styles.tlAcronym}>{project.acronym}</h3>
            <p className={styles.tlLede}>{project.summary}</p>
            <span className={styles.tlImpact}>{project.impactTag}</span>
            {project.facts.length > 0 && (
              <ul className={styles.tlFacts}>
                {project.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            )}
            <figure className={styles.tlFigure}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                className={styles.tlImage}
                sizes="(min-width: 820px) 414px, 100vw"
                placeholder="blur"
                priority={i === 0}
              />
            </figure>
            {project.href ? (
              <a className={styles.tlLink} href={project.href} target="_blank" rel="noreferrer">
                {project.linkLabel ?? "Read more"} →
              </a>
            ) : project.linkLabel ? (
              <span className={styles.tlLinkStatic}>{project.linkLabel}</span>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
