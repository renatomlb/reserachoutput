export type OutputKind = "Article" | "Dataset" | "Preprint" | "Report" | "Software";

export type ResearchOutput = {
  slug: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  kind: OutputKind;
  abstract: string;
  url?: string;
};

// Placeholder content — replace with the real source (CMS, JSON, or API).
export const outputs: ResearchOutput[] = [
  {
    slug: "mobility-patterns-msca",
    title: "Mobility Patterns of Early-Career Researchers in the MSCA Programme",
    authors: ["R. Baptista", "A. Fernandes"],
    venue: "Journal of Research Policy",
    year: 2026,
    kind: "Article",
    abstract:
      "A longitudinal analysis of postdoctoral mobility across European host institutions, and what it implies for talent retention.",
  },
  {
    slug: "talent-attraction-dataset",
    title: "Talent Attraction Indicators, 2015–2025",
    authors: ["R. Baptista"],
    venue: "Zenodo",
    year: 2025,
    kind: "Dataset",
    abstract:
      "An open dataset of institutional indicators used to model the attractiveness of research environments.",
  },
  {
    slug: "evaluating-fellowship-proposals",
    title: "Evaluating Fellowship Proposals at Scale",
    authors: ["M. Silva", "R. Baptista"],
    venue: "arXiv",
    year: 2025,
    kind: "Preprint",
    abstract:
      "We examine reviewer agreement in large fellowship calls and propose a calibration method for panel scoring.",
  },
];
