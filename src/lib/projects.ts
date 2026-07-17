import type { StaticImageData } from "next/image";

import memento from "@/assets/projects/memento.jpg";
import prysma from "@/assets/projects/prysma.jpg";
import samurai from "@/assets/projects/samurai.jpg";
import soonAi from "@/assets/projects/soon-ai.jpg";

/**
 * A project's maturity, not a generic "status". This drives the timeline's
 * line style (solid/dashed/dotted) — see ProjectTimeline. Don't add a value
 * here without deciding what it should look like on the curve.
 */
export type ProjectStage = "published" | "in-review" | "proposal";

export type Project = {
  slug: string;
  acronym: string;
  stage: ProjectStage;
  year: number;
  summary: string;
  /** One line, ~30 characters — longer copy wraps and breaks the pill. */
  impactTag: string;
  facts: string[];
  image: StaticImageData;
  imageAlt: string;
  href?: string;
  linkLabel?: string;
};

// Chronological AND maturity-ordered: published work first, the unrun
// proposal last. The timeline's certainty encoding depends on this order.
export const projects: Project[] = [
  {
    slug: "samurai",
    acronym: "SAMURAI",
    stage: "published",
    year: 2022,
    summary:
      "Muscular fatigue as a risk factor for spasticity during powered lower-limb exoskeleton training in spinal cord injury.",
    impactTag: "How to Use Robots in Rehabilitation",
    facts: ["Medical Sciences (MDPI)", "30 subjects", "sEMG + IMU"],
    image: samurai,
    imageAlt:
      "A clinician reviews the SAMURAI exoskeleton dashboard on a tablet while a patient walks in a powered lower-limb exoskeleton.",
    href: "https://doi.org/10.3390/medsci10040055",
    linkLabel: "Read the paper",
  },
  {
    slug: "memento",
    acronym: "MEMENTO",
    stage: "published",
    year: 2023,
    summary:
      "Predicting physical activity levels from kinematic gait data with machine learning — a ~20% accuracy gain after feature selection.",
    impactTag: "Data-driven Personalised Intervention",
    facts: ["Engineering Applications of AI", "37 subjects", "IMU + ML"],
    image: memento,
    imageAlt:
      "A physiotherapist reviews the MEMENTO patient report on a tablet while an older patient walks a marked gait path.",
    href: "https://doi.org/10.1016/j.engappai.2023.106487",
    linkLabel: "Read the paper",
  },
  {
    slug: "prysma",
    acronym: "PRYSMA",
    stage: "in-review",
    year: 2025,
    summary:
      "Complexity-based sEMG features for monitoring muscular fatigue and injury risk in multidirectional sport.",
    impactTag: "Predicting Injuries in Sports",
    facts: ["Preprint", "45 players", "Sample entropy"],
    image: prysma,
    imageAlt:
      "A coach pitchside reviews the PRYSMA injury-risk dashboard on a tablet during a floodlit football match.",
  },
  {
    slug: "soon-ai",
    acronym: "SOON.AI",
    stage: "proposal",
    year: 2026,
    summary:
      "Synchronised cross-modal signatures as a prodromal biomarker for neurodegenerative disease. EIC Pathfinder Open — proposed, not yet run.",
    impactTag: "From Subtle Signals to Prevention",
    facts: ["EIC Pathfinder Open", "Proposal"],
    image: soonAi,
    imageAlt:
      "A clinician discusses the SOON.AI multimodal assessment dashboard with a patient in a consulting room.",
  },
];
