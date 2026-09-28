import { publications } from "./publications";

/**
 * The headline figures shown above the page.
 *
 * Everything here is DERIVED from `publications` at build time, on purpose:
 * the hero sits directly above the list it describes, so a hand-typed total
 * would eventually contradict the rows underneath it. Add a publication and
 * these numbers move by themselves.
 */

const years = publications.map((p) => p.year);
const q1 = publications.filter((p) => p.quartile === "Q1").length;
const q2 = publications.filter((p) => p.quartile === "Q2").length;

export type ResearchStats = {
  totalPublications: number;
  firstYear: number;
  lastYear: number;
  /** Distinct journal titles — a few publications have no journal recorded. */
  journalCount: number;
  q1: number;
  q2: number;
  q1q2: number;
  /** Share of ALL publications in Q1/Q2, not just the ranked ones. */
  q1q2Percent: number;
};

export const researchStats: ResearchStats = {
  totalPublications: publications.length,
  firstYear: Math.min(...years),
  lastYear: Math.max(...years),
  journalCount: new Set(publications.map((p) => p.journal).filter(Boolean)).size,
  q1,
  q2,
  q1q2: q1 + q2,
  q1q2Percent: Math.round(((q1 + q2) / publications.length) * 100),
};

/**
 * Projects and funding are NOT in this repo — there is no project dataset to
 * derive them from. These are transcribed by hand from the LUNEX Annual
 * Report page and will go stale on their own; update them when a new report
 * lands. Amounts are strings because they are shown in the report's own
 * formatting (dot thousands separators), not computed.
 *
 * Note: the source page labels the €579.508 row "international" twice — that
 * is a typo in the report; it is the national figure.
 */
export const projectStats = [
  {
    count: 46,
    label: "total projects",
    funded: "€2.698.221",
  },
  {
    count: 28,
    label: "international projects",
    funded: "€2.118.713",
  },
  {
    count: 18,
    label: "national projects",
    funded: "€579.508",
  },
] as const;
