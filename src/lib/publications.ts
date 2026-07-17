export type Programme = "PT" | "ISM" | "SES" | "R&D" | "FNH" | "ED";

export type Publication = {
  id: number;
  year: number;
  authors: string;
  title: string;
  journal: string | null;
  programmes: Programme[];
  quartile: string | null;
  doi: string | null;
};

/**
 * Colors are derived only from --foreground (navy) and --gold at varying
 * fills/opacities — no new hues, per the site's design system. Six
 * programmes, six distinguishable combinations: two solid fills, two
 * tints, one light fill, one outline.
 */
export const PROGRAMME_META: Record<Programme, { label: string; className: string }> = {
  PT: { label: "Physiotherapy", className: "bg-gold text-foreground" },
  ISM: { label: "International Sport Management", className: "bg-foreground text-background" },
  SES: {
    label: "Sport and Exercise Science",
    className: "bg-gold/20 border border-gold/50 text-foreground",
  },
  "R&D": {
    label: "Research and Development",
    className: "bg-foreground/10 border border-foreground/35 text-foreground",
  },
  FNH: { label: "Nutrition, Fitness and Health", className: "bg-gold-light text-foreground" },
  ED: { label: "Education", className: "border border-foreground/50 text-foreground/80" },
};

// Generated from Sources/LUNEX_ResearchOutcomes.xlsx — see AGENTS.md, Sources/ is gitignored.
// Title/journal parsed from the sheet's free-text citation column. All rows flagged during that
// pass have since been corrected and confirmed by hand against the source.
// A handful of ALL-CAPS journal names from the sheet were normalized to standard title case.
export const publications: Publication[] = [
  {
    "id": 167,
    "year": 2026,
    "authors": "Raphael Martins de Abreu",
    "title": "Complexity of Cardiovascular Regulation and Its Association with Physical and Cardiorespiratory Fitness in Men with Type 2 Diabetes Mellitus",
    "journal": "Healthcare",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/healthcare14070940"
  },
  {
    "id": 168,
    "year": 2026,
    "authors": "Raphael Martins de Abreu, Camilo Corbellini, Roberto Meroni",
    "title": "The impact of the menstrual cycle phases on performance of female soccer players: A systematic review",
    "journal": "The Journal of Women's & Pelvic Health Physical Therapy",
    "programmes": [
      "PT"
    ],
    "quartile": null,
    "doi": null
  },
  {
    "id": 169,
    "year": 2026,
    "authors": "Raphael Martins de Abreu, Roberto Meroni",
    "title": "Editorial: Optimizing women's health through exercise prescription and physiological assessments across life stages",
    "journal": "Frontiers in Sports and Active Living",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": null
  },
  {
    "id": 170,
    "year": 2026,
    "authors": "Raphael Martins de Abreu",
    "title": "Association of physical activity with cardiovascular autonomic modulation and the serum metabolome in healthy men",
    "journal": "Scientific Reports",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1038/s41598-026-59112-7"
  },
  {
    "id": 256,
    "year": 2026,
    "authors": "Fraser Carson",
    "title": "Exploring the challenges of female high-performance football coaches in Africa",
    "journal": "Sports Coaching Review",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1080/21640629.2026.2613567"
  },
  {
    "id": 257,
    "year": 2026,
    "authors": "Fraser Carson",
    "title": "Impact of concussion on rugby players’ physical attributes and risk of re-injury: A scoping review",
    "journal": "Performance Enhancement and Health",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.1016/j.peh.2026.100428"
  },
  {
    "id": 258,
    "year": 2026,
    "authors": "Fraser Carson",
    "title": "The effect of motor imagery on corticospinal excitability and inhibition in healthy adults: A systematic review",
    "journal": "Brain and Cognition",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.bandc.2026.106428"
  },
  {
    "id": 259,
    "year": 2026,
    "authors": "Fraser Carson",
    "title": "Reflections from female high-performance coaches working in male-dominated football clubs in Africa",
    "journal": "International Sport Coaching Journal",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.1123/iscj.2025-0088"
  },
  {
    "id": 260,
    "year": 2026,
    "authors": "Fraser Carson",
    "title": "Challenges for high-performance women sport coaches: A systematic review",
    "journal": "German Journal of Exercise and Sport Research",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.1007/s12662-026-01122-8"
  },
  {
    "id": 30,
    "year": 2025,
    "authors": "Sophia Harith, Mathieu Marlier",
    "title": "The dark side of social innovation: integrating a digital application for sport-for-development programmes",
    "journal": "Sport Management Review",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q1",
    "doi": "10.1080/14413523.2025.2497598"
  },
  {
    "id": 31,
    "year": 2025,
    "authors": "Sophia Harith, Mathieu Marlier",
    "title": "The power of intangible resources for cause champions in sport‐for‐development: A Singapore case study",
    "journal": "Social Inclusion",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q2",
    "doi": null
  },
  {
    "id": 141,
    "year": 2025,
    "authors": "Raphael Martins de Abreu",
    "title": "Editorial: Innovative approaches to exercise assessment and prescription in non-communicable disease",
    "journal": "Frontiers in Sports and Active Living",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3389/fspor.2025.1560372"
  },
  {
    "id": 142,
    "year": 2025,
    "authors": "Raphael Martins de Abreu",
    "title": "Effects of physical exercise on cardiometabolic health in individuals with autism spectrum disorder: A systematic review",
    "journal": "Healthcare",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/healthcare13040439"
  },
  {
    "id": 143,
    "year": 2025,
    "authors": "Raphael Martins de Abreu",
    "title": "The effectiveness of Mulligan's techniques in non-specific neck pain: a systematic review and meta-analysis",
    "journal": "Physiotherapy Research International",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1002/pri.70045"
  },
  {
    "id": 144,
    "year": 2025,
    "authors": "Raphael Martins de Abreu",
    "title": "Heart rate variability and overtraining in soccer players: A systematic review",
    "journal": "Physiological Reports",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.14814/phy2.70357"
  },
  {
    "id": 145,
    "year": 2025,
    "authors": "Raphael Martins de Abreu, Camilo Corbellini, Khatija Bahdur",
    "title": "Beyond sport to combat childhood obesity: educating, engaging, and preventing through an integrated school-based campaign grounded in the values of Olympism",
    "journal": "Frontiers in Endocrinology",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3389/fendo.2025.1636728"
  },
  {
    "id": 146,
    "year": 2025,
    "authors": "Firas Mourad",
    "title": "Clinimetric analysis of the numeric pain rating scale, patient-rated tennis elbow evaluation, and tennis elbow function scale in patients with lateral elbow tendinopathy",
    "journal": "Physiother Theory Pract",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1080/09593985.2025.2450090"
  },
  {
    "id": 147,
    "year": 2025,
    "authors": "Firas Mourad",
    "title": "Clinimetric analysis of the visual analogue scale and pain free mouth opening in patients with muscular temporomandibular disorder",
    "journal": "Cranio",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1080/08869634.2025.2464227"
  },
  {
    "id": 148,
    "year": 2025,
    "authors": "Firas Mourad, Raphael Martins de Abreu",
    "title": "Effects of Breathing Exercises on Neck Pain Management: A Systematic Review with Meta-Analysis",
    "journal": "J Clin Med",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3390/jcm14030709"
  },
  {
    "id": 149,
    "year": 2025,
    "authors": "Firas Mourad",
    "title": "Understanding degenerative cervical myelopathy in musculoskeletal practice",
    "journal": "J Man Manip Ther",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1080/10669817.2025.2465728"
  },
  {
    "id": 150,
    "year": 2025,
    "authors": "Firas Mourad",
    "title": "Neurological examination for cervical radiculopathy: a scoping review",
    "journal": "BMC Musculoskelet Disord",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1186/s12891-025-08560-9"
  },
  {
    "id": 151,
    "year": 2025,
    "authors": "Firas Mourad",
    "title": "Anterior Cruciate Ligament Return to Play: \"A Framework for Decision Making\"",
    "journal": "J Clin Med",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3390/jcm14072146"
  },
  {
    "id": 152,
    "year": 2025,
    "authors": "Firas Mourad",
    "title": "C1-C2 fixation: Effects on cervical range of motion and quality of life",
    "journal": "Orthop Traumatol Surg Res",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.otsr.2025.104246"
  },
  {
    "id": 153,
    "year": 2025,
    "authors": "Firas Mourad",
    "title": "Implementation of the International IFOMPT Cervical Framework: A survey among IFOMPT organisations",
    "journal": "J Bodyw Mov Ther",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.jbmt.2025.01.060"
  },
  {
    "id": 154,
    "year": 2025,
    "authors": "Firas Mourad",
    "title": "Knowledge, Attitude and Practice of Italian Physiotherapists When Prescribing Exercise for People With Non-Specific Neck Pain: A National Survey",
    "journal": "Musculoskeletal Care",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1002/msc.70115"
  },
  {
    "id": 155,
    "year": 2025,
    "authors": "Firas Mourad",
    "title": "Effectiveness of Resistance Training of Masticatory Muscles for Patients With Temporomandibular Disorders: A Systematic Review",
    "journal": "J Oral Rehabil",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1111/joor.14021"
  },
  {
    "id": 156,
    "year": 2025,
    "authors": "Firas Mourad",
    "title": "Standardized Definition of Red Flags in Musculoskeletal Care: A Comprehensive Review of Clinical Practice Guidelines",
    "journal": "Medicina (Kaunas)",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/medicina61061002"
  },
  {
    "id": 157,
    "year": 2025,
    "authors": "Kim Buchholtz",
    "title": "Assessing the relationship between training load and injury inultramarathon runners: a novel approach using GeneralisedAdditive Models",
    "journal": "SAJSM",
    "programmes": [
      "PT"
    ],
    "quartile": "Q3",
    "doi": "10.17159/2078-516x/2025/v37i1a20747"
  },
  {
    "id": 158,
    "year": 2025,
    "authors": "Firas Mourad",
    "title": "Reliability, construct validity, responsiveness and minimum clinically important difference of the numeric pain rating scale and shoulder pain and disability index in patients with subacromial pain syndrome",
    "journal": "Musculoskelet Sci Pract",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.msksp.2025.103372"
  },
  {
    "id": 159,
    "year": 2025,
    "authors": "Firas Mourad",
    "title": "\"I'm Not the Same as I Was Before\": A Qualitative Evidence Synthesis Exploring the Experiences and Perceptions of Patients Living With Whiplash-Associated Disorders",
    "journal": "J Orthop Sports Phys Ther",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.2519/jospt.2025.13156"
  },
  {
    "id": 160,
    "year": 2025,
    "authors": "Kim Buchholtz",
    "title": "The effectiveness of physiotherapy for chronic headaches in patients with temporomandibular disorders: a systematic review",
    "journal": "Front. Rehabil. Sci.",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3389/fresc.2025.1647927"
  },
  {
    "id": 161,
    "year": 2025,
    "authors": "Raphael Martins de Abreu",
    "title": "ASSOBRAFIR clinical practice guidelines in respiratory physical therapy: Exercise-based interventions in people with chronic obstructive pulmonary disease (COPD)",
    "journal": "Brazilian Journal of Physical Therapy",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.bjpt.2025.101539"
  },
  {
    "id": 162,
    "year": 2025,
    "authors": "Raphael Martins de Abreu, Camilo Corbellini",
    "title": "Pulmonary Telerehabilitation in COPD Patients: A Systematic Review to Analyse Patients’ Adherence",
    "journal": "Healthcare",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/healthcare13151818"
  },
  {
    "id": 163,
    "year": 2025,
    "authors": "Raphael Martins de Abreu",
    "title": "Does Covid-19 impact cardiac autonomic modulation and vascular endothelial function in patients with systemic arterial hypertension?",
    "journal": "Brazilian Journal of Respiratory, Cardiovascular and Critical Care Physiotherapy",
    "programmes": [
      "PT"
    ],
    "quartile": null,
    "doi": "10.47066/2966-4837.e00462025en"
  },
  {
    "id": 164,
    "year": 2025,
    "authors": "Raphael Martins de Abreu, Camilo Corbellini",
    "title": "Feasibility and safety of passive orthostatic positioning in mechanically ventilated ICU patients: A prospective observational study",
    "journal": "MEDICINE",
    "programmes": [
      "PT"
    ],
    "quartile": "Q3",
    "doi": "10.1097/md.0000000000044476"
  },
  {
    "id": 165,
    "year": 2025,
    "authors": "Raphael Martins de Abreu, Camilo Corbellini",
    "title": "MicroRNA and DNA Methylation Adaptation Mechanism forto Endurance Training in Cardiovascular Disease: A Systematic Review",
    "journal": "Cardiogenetics",
    "programmes": [
      "PT"
    ],
    "quartile": "Q3",
    "doi": "10.3390/cardiogenetics15040028"
  },
  {
    "id": 166,
    "year": 2025,
    "authors": "Roberto Meroni",
    "title": "Cross-cultural translation and psychometric properties of the Italian version of the Back Beliefs Questionnaire (BBQ) in patients with low back pain",
    "journal": "Disability and Rehabilitation",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1080/09638288.2025.2570851"
  },
  {
    "id": 235,
    "year": 2025,
    "authors": "Khatija Bahdur and Camillo Corebellini",
    "title": "PODiaCarD: a prototype of a digital twin platform for the management of pediatric obesity and related cardiometabolic complications",
    "journal": null,
    "programmes": [
      "SES",
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1007/s00431-025-06708-2"
  },
  {
    "id": 236,
    "year": 2025,
    "authors": "Khatija Bahdur",
    "title": "Growing snow volleyball in snow-restricted countries: A pilot study",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q3",
    "doi": "10.6018/sportk.610851"
  },
  {
    "id": 243,
    "year": 2025,
    "authors": "Fraser Carson",
    "title": "Being a team captain in professional soccer: Perceptions and experiences from the head coach perspective",
    "journal": "Journal of Sport Psychology in Action",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.1080/21520704.2025.2455156"
  },
  {
    "id": 244,
    "year": 2025,
    "authors": "Fraser Carson, Khatija Bahdur",
    "title": "Insights into coaching a women's national futsal team",
    "journal": "Frontiers in Sports and Active Living",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.3389/fspor.2025.1533224"
  },
  {
    "id": 245,
    "year": 2025,
    "authors": "Fraser Carson",
    "title": "Drivers for women to become high-performance football coaches in Africa",
    "journal": "International Sport Coaching Journal",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.1123/iscj.2024-0104"
  },
  {
    "id": 246,
    "year": 2025,
    "authors": "Renato Baptista",
    "title": "Analysis of Body Fluid Distribution, Phase Angle and Its Association With Maximal Oxygen Consumption in Facioscapulohumeral Dystrophy: An Observational Study",
    "journal": "Health Science Reports",
    "programmes": [
      "R&D"
    ],
    "quartile": "Q2",
    "doi": "10.1002/hsr2.70335"
  },
  {
    "id": 247,
    "year": 2025,
    "authors": "Renato Baptista",
    "title": "Unraveling the link between resting metabolic rate and phase angle in facioscapulohumeral dystrophy: a comparative and associative analysis",
    "journal": "European Journal of Applied Physiology",
    "programmes": [
      "R&D"
    ],
    "quartile": "Q1",
    "doi": "10.1007/s00421-025-05853-8"
  },
  {
    "id": 249,
    "year": 2025,
    "authors": "Thorben Hülsdünker",
    "title": "Active motor-cognitive recovery supports reactive agility performance in trained athletes",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1002/ejsc.12231"
  },
  {
    "id": 250,
    "year": 2025,
    "authors": "Thorben Hülsdünker",
    "title": "Cortical activation and functional connectivity in visual-cognitive-motor networks during motor-cognitive exercise",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.1016/j.bbr.2025.115491"
  },
  {
    "id": 251,
    "year": 2025,
    "authors": "Thorben Hülsdünker",
    "title": "Cognitive costs in motor-cognitive performance assessments depend on movement complexity and cognitive task design",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.3389/fspor.2025.1482976"
  },
  {
    "id": 254,
    "year": 2025,
    "authors": "Renato Baptista\nSerena Pizzocaro\nAlessandro De Nunzio",
    "title": "Deep Learning Models Optimization for Gait Phase Identification from EMG Data During Exoskeleton-Assisted Walking",
    "journal": "Biomimetics",
    "programmes": [
      "R&D"
    ],
    "quartile": "Q2",
    "doi": "10.3390/biomimetics10090617"
  },
  {
    "id": 255,
    "year": 2025,
    "authors": "Khatija Bahdur, Fraser Carson",
    "title": "Editorial: Coaching female athletes",
    "journal": "Frontiers in Sports and Active Living",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.3389/fspor.2025.1690341"
  },
  {
    "id": 25,
    "year": 2024,
    "authors": "Mathieu Winand",
    "title": "Health promoting sports federations: theoretical foundations and guidelines",
    "journal": "Frontiers in Public Health",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q1",
    "doi": "10.3389/fpubh.2023.1147899"
  },
  {
    "id": 26,
    "year": 2024,
    "authors": "Igor Perechuda",
    "title": "Managing sport transformation for good",
    "journal": "Sport, Business and Management",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q2",
    "doi": "10.1108/SBM-03-2024-150"
  },
  {
    "id": 27,
    "year": 2024,
    "authors": "Mathieu Winand",
    "title": "Stakeholders’ perspectives on the effectiveness of the Chinese anti-doping education policy",
    "journal": "International Journal of Sport Policy and Politics",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q1",
    "doi": "10.1080/19406940.2023.2271926"
  },
  {
    "id": 28,
    "year": 2024,
    "authors": "Mathieu Winand",
    "title": "Assessing the perceived importance and difficulty of implementing good governance principles in national sport federations",
    "journal": "Managing Sport and Leisure",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q2",
    "doi": "10.1080/23750472.2024.2387064"
  },
  {
    "id": 29,
    "year": 2024,
    "authors": "Sebastian Merten, Mathieu Winand",
    "title": "Unlocking value: exploring digital transformation's influence on knowledge management of national football associations",
    "journal": "European Sport Management Quarterly",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q1",
    "doi": "10.1080/16184742.2024.2400142"
  },
  {
    "id": 115,
    "year": 2024,
    "authors": "Raphael Martins de Abreu",
    "title": "Editorial: Measurements of Cardiorespiratory Coupling Applied to Sports and Rehabilitation Medicine: Insights, Implications and Perspectives",
    "journal": "Frontiers in Network Physiology",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3389/fnetp.2024.1370452"
  },
  {
    "id": 116,
    "year": 2024,
    "authors": "Raphael Martins de Abreu, Michela Bernini, Camilo Corbellini",
    "title": "Inspiratory Muscle Training Intensity in Patients Living with Cardiovascular Diseases: A Systematic Review",
    "journal": "HEARTS",
    "programmes": [
      "PT"
    ],
    "quartile": null,
    "doi": "10.3390/hearts5010006"
  },
  {
    "id": 117,
    "year": 2024,
    "authors": "Firas Mourad",
    "title": "Ewing's sarcoma in a young man mimicking lateral elbow pain: A case report with 2 years follow-up",
    "journal": "Physiotherapy Research International",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1002/pri.2063"
  },
  {
    "id": 118,
    "year": 2024,
    "authors": "Firas Mourad",
    "title": "Correspondence re: de Best et al.",
    "journal": "J Physiother",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.jphys.2023.11.008"
  },
  {
    "id": 119,
    "year": 2024,
    "authors": "Firas Mourad",
    "title": "Spinal manipulation and electrical dry needling as an adjunct to conventional physical therapy in patients with lumbar spinal stenosis: a multi-center randomized clinical trial",
    "journal": "Spine J",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.spinee.2023.12.002"
  },
  {
    "id": 120,
    "year": 2024,
    "authors": "Raphael Martins de Abreu",
    "title": "Pelvic floor muscles contraction may stimulate the cardiac autonomic control of heart rate in postmenopausal women: a cross-sectional study",
    "journal": "Brazilian Journal of Physical Therapy",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.bjpt.2024.100800"
  },
  {
    "id": 121,
    "year": 2024,
    "authors": "Raphael Martins de Abreu",
    "title": "On the validity of the state space correspondence strategy based on k-nearest neighbor cross-predictability in assessing directionality in stochastic systems: application to cardiorespiratory coupling estimation",
    "journal": "CHAOS",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1063/5.0192645"
  },
  {
    "id": 126,
    "year": 2024,
    "authors": "Firas Mourad",
    "title": "Spinal manipulation does not improve short-term pain and function in persons with painful shoulder: a systematic review with meta-analysis",
    "journal": "Disabil Rehabil",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1080/09638288.2024.2322025"
  },
  {
    "id": 127,
    "year": 2024,
    "authors": "Firas Mourad",
    "title": "Percutaneous tendon dry needling and thrust manipulation as an adjunct to multimodal physical therapy in patients with lateral elbow tendinopathy: A multicenter randomized clinical trial",
    "journal": "Clin Rehabil",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1177/02692155241249968"
  },
  {
    "id": 128,
    "year": 2024,
    "authors": "Firas Mourad",
    "title": "Dry needling in the management of chronic tension-type headache associated with levator scapulae syndrome: A case report",
    "journal": "Clin Case Rep",
    "programmes": [
      "PT"
    ],
    "quartile": "Q3",
    "doi": "10.1002/ccr3.8858"
  },
  {
    "id": 129,
    "year": 2024,
    "authors": "Firas Mourad",
    "title": "Recognition of a patient with neck autonomic dysfunction: findings from a rare case report of harlequin syndrome in direct access physiotherapy",
    "journal": "J Man Manip Ther",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1080/10669817.2024.2349338"
  },
  {
    "id": 130,
    "year": 2024,
    "authors": "Firas Mourad",
    "title": "A modern way to teach and practice manual therapy",
    "journal": "Chiropr Man Therap",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1186/s12998-024-00537-0"
  },
  {
    "id": 131,
    "year": 2024,
    "authors": "Raphael Martins de Abreu, Roberto Meroni, Camilo Corbellini",
    "title": "Active commuting as a factor of cardiovascular disease prevention: A systematic review",
    "journal": "Journal of Functional Morphology and Kinesiology",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3390/jfmk9030125"
  },
  {
    "id": 132,
    "year": 2024,
    "authors": "Raphael Martins de Abreu",
    "title": "Role of sex and training characteristics on exercise effects on cardiovascular aging: protocol for a systematic review with meta-analysis of randomized trials",
    "journal": "Systematic Reviews",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1186/s13643-024-02644-8"
  },
  {
    "id": 133,
    "year": 2024,
    "authors": "Raphael Martins de Abreu",
    "title": "Exploring the efficacy of artificial intelligence: a comprehensive analysis of CHAT-GPT'S accuracy and completeness in addressing urinary incontinence queries",
    "journal": "Neurourology and Urodynamics",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1002/nau.25603"
  },
  {
    "id": 134,
    "year": 2024,
    "authors": "Raphael Martins de Abreu, Camilo Corbellini",
    "title": "Effects of respiratory muscle training pre- and post- cardiac surgery in adults: A scoping review",
    "journal": "Journal of Cardiovascular Development and Disease",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3390/jcdd11110351"
  },
  {
    "id": 135,
    "year": 2024,
    "authors": "Raphael Martins de Abreu",
    "title": "REPLY TO THE COMMENT ON 'A COMPREHENSIVE ANALYSIS OF CHATGPT'S ACCURACY AND COMPLETENESS IN ADDRESSING URINARY INCONTINENCE'",
    "journal": "Neurourology and Urodynamics",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1002/nau.25632"
  },
  {
    "id": 136,
    "year": 2024,
    "authors": "Raphael Martins de Abreu",
    "title": "Acute and chronic effects of inspiratory muscle training in patients with type 2 diabetes mellitus: A systematic review of randomized controlled trials",
    "journal": "Frontiers in Sports and Active Living",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3389/fspor.2024.1423308"
  },
  {
    "id": 137,
    "year": 2024,
    "authors": "Firas Mourad",
    "title": "Effectiveness of resistance training of masticatory muscles for patients with temporomandibular disorders: protocol for a systematic review",
    "journal": "BMJ Open",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1136/bmjopen-2023-083133"
  },
  {
    "id": 138,
    "year": 2024,
    "authors": "Firas Mourad",
    "title": "Comment on \"Which Portion of Physiotherapy Treatments' Effect Is Not Attributable to the Specific Effects in People With Musculoskeletal Pain? A Meta-analysis of Randomized Placebo-Controlled Trials\" by Ezzatvar et al.",
    "journal": "J Orthop Sports Phys Ther",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.2519/jospt.2024.0201"
  },
  {
    "id": 139,
    "year": 2024,
    "authors": "Firas Mourad",
    "title": "Red flags for potential serious pathologies in people with neck pain: a systematic review of clinical practice guidelines",
    "journal": "Arch Physiother",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.33393/aop.2024.3245"
  },
  {
    "id": 140,
    "year": 2024,
    "authors": "Firas Mourad",
    "title": "Hands-On Versus Hands-Off Treatment of Hip-Related Nonspecific Musculoskeletal Diseases: A Systematic Review",
    "journal": "J Funct Morphol Kinesiol",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3390/jfmk9040262"
  },
  {
    "id": 221,
    "year": 2024,
    "authors": "Fraser Carson, Mathilde Jeanne, Felippe Toledo",
    "title": "Neuroanatomical correlates of anxiety disorders and their implications in manifestations of cognitive and behavioural symptoms",
    "journal": "Psych",
    "programmes": [
      "SES"
    ],
    "quartile": null,
    "doi": "10.3390/psych6010003"
  },
  {
    "id": 233,
    "year": 2024,
    "authors": "Thorben Hülsdünker",
    "title": "Validity of a motor-cognitive dual-task agility test in elite youth football players",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1002/ejsc.12153"
  },
  {
    "id": 234,
    "year": 2024,
    "authors": "Thorben Hülsdünker",
    "title": "Effects of 6-Week Motor-Cognitive Agility Training on Football Test Performance in Adult Amateur Players - A Three-Armed Randomized Controlled Trial",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.52082/jssm.2024.276"
  },
  {
    "id": 238,
    "year": 2024,
    "authors": "Pizzocaro Serena",
    "title": "Adopting BiLSTM for Gait Phase Recognition in Exoskeleton Control via sEMG Signals",
    "journal": "2024 IEEE International Symposium on Medical Measurements and Applications (MeMeA)",
    "programmes": [
      "R&D"
    ],
    "quartile": null,
    "doi": "10.1109/MeMeA60663.2024.10596737"
  },
  {
    "id": 239,
    "year": 2024,
    "authors": "Khatija Bahdur",
    "title": "Migration Trends of Female African Footballers who Competed at the Women’s African Cup of Nations over the Last Decade (2012-2022)",
    "journal": "African Journal of Gender, Society and Development",
    "programmes": [],
    "quartile": null,
    "doi": "10.31920/2634-3622/2024/v13n1a2"
  },
  {
    "id": 242,
    "year": 2024,
    "authors": "Khatija Bahdur, Miguel Martins, Fraser Carson",
    "title": "Physical activity promotion: A cross-sectional study exploring the practice, attitudes, and barriers amongst Luxembourg’s healthcare professionals",
    "journal": "Health Promotion & Physical Activity",
    "programmes": [
      "SES"
    ],
    "quartile": null,
    "doi": "10.55225/hppa.585"
  },
  {
    "id": 248,
    "year": 2024,
    "authors": "Thorben Hülsdünker",
    "title": "Modulation of physical exercise intensity in motor-cognitive training of adults using the SKILLCOURT technology",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.14814/phy2.70136"
  },
  {
    "id": 252,
    "year": 2024,
    "authors": "Sylven Masoga",
    "title": "Nutritional practices of aerobic dance athletes in Limpopo province: Should we be concerned?",
    "journal": "Discobolul – Physical Education, Sport, and Kinetotherapy Journal",
    "programmes": [
      "FNH"
    ],
    "quartile": null,
    "doi": "10.35189/dpeskj.2024.63.3.4"
  },
  {
    "id": 253,
    "year": 2024,
    "authors": "Sylven Masoga",
    "title": "DIETARY PRACTICES OF AEROBIC DANCERS AND BODYBUILDERS IN VHEMBE DISTRICT, LIMPOPO PROVINCE: ASSESSING THE NEED FOR NUTRITION INTERVENTION STRATEGIES",
    "journal": "Global Journal of Public Health Medicine",
    "programmes": [
      "FNH"
    ],
    "quartile": "Q1",
    "doi": "10.37557/gjphm.v7i1.305"
  },
  {
    "id": 23,
    "year": 2023,
    "authors": "Mathieu Winand",
    "title": "A longitudinal analysis of organisational capacity determinants of the perceived need for change, adoption of ‘light’sports initiatives and organisational growth in voluntary sports clubs",
    "journal": "European Journal for Sport and Society",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q2",
    "doi": "10.1080/16138171.2023.2182496"
  },
  {
    "id": 24,
    "year": 2023,
    "authors": "Sebastian Merten, Mathieu Winand, Mathieu Marlier",
    "title": "Fan identification in football: professional football players and clubs competing for fan loyalty",
    "journal": "Sport, Business and Management: An International Journal",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q2",
    "doi": "10.1108/sbm-05-2023-0063"
  },
  {
    "id": 95,
    "year": 2023,
    "authors": "Raphael Martins de Abreu",
    "title": "On the Significance of Estimating Cardiorespiratory Coupling Strength in Sports Medicine",
    "journal": "Frontiers in Network in Physiology",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3389/fnetp.2022.1114733"
  },
  {
    "id": 96,
    "year": 2023,
    "authors": "Kim Buchholtz",
    "title": "Assessing calf exercise fidelity among people with Achilles tendinopathy using videos recorded via Zoom®: an observational study",
    "journal": "Disability and Rehabilitation",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1080/09638288.2023.2174604"
  },
  {
    "id": 98,
    "year": 2023,
    "authors": "Victor Alonge",
    "title": "Developing tailored intervention strategies for implementation of stratified care to low back pain with physiotherapists in Nigeria: a Delphi study",
    "journal": null,
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1186/s12913-023-09123-1"
  },
  {
    "id": 99,
    "year": 2023,
    "authors": "Raphael Martins de Abreu",
    "title": "Cardiorespiratory Coupling as an Early Marker of Cardiac Autonomic Dysfunction in Type 2 Diabetes Mellitus Patients",
    "journal": "Respiratory Physiology & Neurobiology",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1016/j.resp.2023.104042"
  },
  {
    "id": 100,
    "year": 2023,
    "authors": "Firas Mourad",
    "title": "A guide to identify cervical autonomic dysfunctions (and associated conditions) in patients with musculoskeletal disorders in physical therapy practice",
    "journal": "Braz J Phys Ther",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.bjpt.2023.100495"
  },
  {
    "id": 101,
    "year": 2023,
    "authors": "Firas Mourad",
    "title": "Vascular flow limitations affecting the cervico-cranial region: Understanding ischaemia",
    "journal": "Braz J Phys Ther",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.bjpt.2023.100493"
  },
  {
    "id": 102,
    "year": 2023,
    "authors": "Firas Mourad",
    "title": "Physiotherapy Screening for Referral of a Patient with Patent Foramen Ovale Presenting with Neck Pain as Primary Complaint: A Case Report",
    "journal": "Healthcare (Basel)",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/healthcare11081165"
  },
  {
    "id": 103,
    "year": 2023,
    "authors": "Firas Mourad",
    "title": "Headache, Loss of Smell, and Visual Disturbances: Symptoms of SARS-CoV-2 Infection? A Case Report",
    "journal": "Phys Ther",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1093/ptj/pzad017"
  },
  {
    "id": 104,
    "year": 2023,
    "authors": "Firas Mourad",
    "title": "Recognition of Prodromal Hypoglossal Nerve Palsy Presenting with Neck Pain as Primary Complaint: Findings from a Rare Case Report in Direct Access Physiotherapy during the COVID-19 Pandemic",
    "journal": "Healthcare (Basel)",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/healthcare11091342"
  },
  {
    "id": 105,
    "year": 2023,
    "authors": "Firas Mourad",
    "title": "Physiotherapy Screening for Referral of a Patient with Peripheral Arterial Disease Masquerading as Sciatica: A Case Report",
    "journal": "Healthcare (Basel)",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/healthcare11111527"
  },
  {
    "id": 106,
    "year": 2023,
    "authors": "Raphael Martins de Abreu",
    "title": "Cardiac Autonomic Function and Functional Capacity in Post-COVID-19 Individuals with Systemic Arterial Hypertension",
    "journal": "Journal of Peronalised Medicine",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/jpm13091391"
  },
  {
    "id": 107,
    "year": 2023,
    "authors": "Raphael Martins de Abreu",
    "title": "Effects of Exercise Training on Heart Rate Variability in Individuals with Lower Extremity Arterial Disease and Claudication: A Systematic Review",
    "journal": "Journal of Vascular Nursing",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1016/j.jvn.2023.09.002"
  },
  {
    "id": 108,
    "year": 2023,
    "authors": "Raphael Martins de Abreu",
    "title": "Cardiorespiratory Coupling is Associated with Exercise Capacity in Athletes: A Cross-Sectional Study",
    "journal": "Respiratory Physiology & Neurobiology",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1016/j.resp.2023.104198"
  },
  {
    "id": 109,
    "year": 2023,
    "authors": "Firas Mourad",
    "title": "Benefits and Harms of Spinal Manipulative Therapy for Treating Recent and Persistent Nonspecific Neck Pain: A Systematic Review With Meta-analysis",
    "journal": "The Journal of orthopaedic and sports physical therapy",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.2519/jospt.2023.11708"
  },
  {
    "id": 110,
    "year": 2023,
    "authors": "Firas Mourad",
    "title": "Periosteal Dry Needling for Carpometacarpal Osteoarthritis: A Prospective Case Series",
    "journal": "Journal of clinical medicine",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3390/jcm12175678"
  },
  {
    "id": 111,
    "year": 2023,
    "authors": "Firas Mourad",
    "title": "Effectiveness and Consequences of Direct Access in Physiotherapy: A Systematic Review",
    "journal": "Journal of clinical medicine",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3390/jcm12185832"
  },
  {
    "id": 112,
    "year": 2023,
    "authors": "Raphael Martins de Abreu",
    "title": "Insights into the Serum Metabolic Adaptations in Response to Inspiratory Muscle Training: A Metabolomics Approach Based on 1H NMR and UHPLC-HRMS/MS",
    "journal": "International Journal of Molecular Sciences",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3390/ijms242316764"
  },
  {
    "id": 113,
    "year": 2023,
    "authors": "Raphael Martins de Abreu",
    "title": "Effects of different physical exercise protocols on body composition, anthropometric and cardiometabolic indices in individuals with obesity: a systematic review",
    "journal": "Society of Cardiology of the State of São Paulo Journal",
    "programmes": [
      "PT"
    ],
    "quartile": null,
    "doi": "10.29381/0103-8559/20233304463-72"
  },
  {
    "id": 114,
    "year": 2023,
    "authors": "Raphael Martins de Abreu",
    "title": "Applicability of heart rate variability for cardiac autonomic assessment in long-term covid patients: a systematic review",
    "journal": "Journal of Electrocardiology",
    "programmes": [
      "PT"
    ],
    "quartile": "Q3",
    "doi": "10.1016/j.jelectrocard.2023.12.002"
  },
  {
    "id": 122,
    "year": 2023,
    "authors": "Mishael Adje",
    "title": "Knowledge, attitude and adherence to standard precautions among frontline clinical physiotherapists during the COVID-19 pandemic: a cross-sectional survey",
    "journal": null,
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1080/21679169.2021.2020898"
  },
  {
    "id": 123,
    "year": 2023,
    "authors": "Mishael Adje",
    "title": "Evaluation of a blended learning approach on stratified care for physiotherapy bachelor students",
    "journal": null,
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1186/S12909-023-04517-5"
  },
  {
    "id": 124,
    "year": 2023,
    "authors": "Mishael Adje",
    "title": "Developing tailored intervention strategies for implementation of stratified care to low back pain with physiotherapists in Nigeria: a Delphi study",
    "journal": null,
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1186/S12913-023-09123-1"
  },
  {
    "id": 125,
    "year": 2023,
    "authors": "Mishael Adje",
    "title": "Determinants of outcomes for patients with chronic low back pain and fear-avoidance beliefs following treatment with specific stabilisation exercises",
    "journal": null,
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3233/BMR-230312"
  },
  {
    "id": 215,
    "year": 2023,
    "authors": "Thorben Hülsdünker",
    "title": "Reliability and usefullness of the SKILLCOURT as a computerized agility and motor-cognitive testing tool",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1249/mss.0000000000003153"
  },
  {
    "id": 216,
    "year": 2023,
    "authors": "Fraser Carson",
    "title": "The coach’s role during an athlete’s rehabilitation following sports injury: A scoping review",
    "journal": "International Journal of Sports Science & Coaching",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1177/17479541221150694"
  },
  {
    "id": 217,
    "year": 2023,
    "authors": "Thorben Hülsdünker",
    "title": "Validity of the SKILLCOURT® technology for agility and cognitive performance assessment in healthy active adults",
    "journal": "Journal of Exercise Science & Fitness",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.1016/j.jesf.2023.04.003"
  },
  {
    "id": 218,
    "year": 2023,
    "authors": "Fraser Carson, Felippe Toledo",
    "title": "Neurocircuitry of personality traits and intent in decision-making",
    "journal": "Behavioral Sciences",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.3390/bs13050351"
  },
  {
    "id": 219,
    "year": 2023,
    "authors": "Fraser Carson",
    "title": "Editorial: Performance enhancement in rugby",
    "journal": "Frontiers in Sport and Active Living",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.3389/fspor.2023.1212390"
  },
  {
    "id": 220,
    "year": 2023,
    "authors": "Fraser Carson",
    "title": "Coaching athletes with an intellectual disability at a National Championship",
    "journal": "International Journal of Sport Science and Coaching",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1177/17479541231174093"
  },
  {
    "id": 223,
    "year": 2023,
    "authors": "Caterina Cavallo",
    "title": "Physical fitness trend after COVID-19 restrictions in Italian school-aged children: a cross-sectional study",
    "journal": "J Sports Med Phys Fitness",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.23736/s0022-4707.23.14943-7"
  },
  {
    "id": 224,
    "year": 2023,
    "authors": "Caterina Cavallo",
    "title": "Exergames to Limit Weight Gain and to Fight Sedentarism in Children and Adolescents with Obesity",
    "journal": "Children",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.3390/children10060928"
  },
  {
    "id": 225,
    "year": 2023,
    "authors": "Caterina Cavallo",
    "title": "Pneumatic Compression Combined with Standard Treatment after Total Hip Arthroplasty and Its Effects on Edema of the Operated Limb and on Physical Outcomes: A Pilot Clinical Randomized Controlled Study",
    "journal": "J. Clin. Med.",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.3390/jcm12124164"
  },
  {
    "id": 226,
    "year": 2023,
    "authors": "Caterina Cavallo",
    "title": "International fitness scale (IFIS): association with motor performance in children with obesity",
    "journal": "PeerJ",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.7717/peerj.15765"
  },
  {
    "id": 227,
    "year": 2023,
    "authors": "Thorben Hülsdünker, Andreas Mierau",
    "title": "Stroboscopic Eyewear Applied During Warm-Up Does Not Provide Additional Benefits to the Sport-Specific Reaction Speed in Highly Trained Table Tennis Athletes",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1123/ijspp.2022-0426"
  },
  {
    "id": 228,
    "year": 2023,
    "authors": "Alessandro M De Nunzio",
    "title": "High-density surface electromyography allows to identify risk conditions and people with and without low back pain during fatiguing frequency-dependent lifting activities",
    "journal": "J Electromyogr Kinesiol",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.1016/j.jelekin.2023.102839"
  },
  {
    "id": 229,
    "year": 2023,
    "authors": "Alessandro M De Nunzio",
    "title": "Gait Analysis in Neurorehabilitation: From Research to Clinical Practice",
    "journal": "Bioengineering (Basel)",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.3390/bioengineering10070785"
  },
  {
    "id": 232,
    "year": 2023,
    "authors": "Alessandro M De Nunzio",
    "title": "Trunk stability in fatiguing frequency-dependent lifting activities",
    "journal": "Gait Posture",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.gaitpost.2023.03.001"
  },
  {
    "id": 237,
    "year": 2023,
    "authors": "Svonko Galasso",
    "title": "Predicting physical activity levels from kinematic gait data using machine learning techniques",
    "journal": "Engineering Applications of Artificial Intelligence",
    "programmes": [
      "R&D"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.engappai.2023.106487"
  },
  {
    "id": 17,
    "year": 2022,
    "authors": "Mathieu Winand",
    "title": "Managing sport and leisure in the era of Covid-19",
    "journal": "Managing Sport and Leisure",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q3",
    "doi": "10.1080/23750472.2022.2035963"
  },
  {
    "id": 18,
    "year": 2022,
    "authors": "Mathieu Marlier",
    "title": "Stuck between medals and participation: an institutional theory perspective on why sport federations struggle to reach Sport-for-All goals",
    "journal": "BMC Public Health",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q1",
    "doi": "10.1186/s12889-022-14230-5"
  },
  {
    "id": 19,
    "year": 2022,
    "authors": "Mathieu Winand",
    "title": "\"It’s not Just a Job, It’s a Passion”: Passions and Motivations of Sport Entrepreneurs",
    "journal": "Sport Business & Management",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q2",
    "doi": "10.1108/sbm-08-2021-0096"
  },
  {
    "id": 20,
    "year": 2022,
    "authors": "Sebastian Merten & Mathieu Winand",
    "title": "Organisational capabilities for successful digital transformation: a global analysis of national football associations in the digital age",
    "journal": "Journal of Strategy and Management",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q1",
    "doi": "10.1108/jsma-02-2022-0039"
  },
  {
    "id": 21,
    "year": 2022,
    "authors": "Sophia Harith",
    "title": "Effectiveness of digital mental health interventions for university students: an umbrella review",
    "journal": "PeerJ",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q1",
    "doi": "10.7717/peerj.13111"
  },
  {
    "id": 22,
    "year": 2022,
    "authors": "Sophia Harith",
    "title": "Sport for development programs contributing to Sustainable Development Goal 5: A review",
    "journal": "Sustainability",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q1",
    "doi": "10.3390/su14116828"
  },
  {
    "id": 69,
    "year": 2022,
    "authors": "Firas Mourad",
    "title": "Direct Access to Physical Therapy: Should Italy Move Forward?",
    "journal": "International journal of environmental research and public health",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/ijerph19010555"
  },
  {
    "id": 70,
    "year": 2022,
    "authors": "Firas Mourad",
    "title": "Spontaneous spleen rupture mimicking non-specific thoracic pain: A rare case in physiotherapy practice",
    "journal": "Physiotherapy Theory and Practice",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1080/09593985.2021.2021578"
  },
  {
    "id": 71,
    "year": 2022,
    "authors": "Firas Mourad",
    "title": "Osteoid Osteoma in an Adult Wheelchair Basketball Player Mimicking Musculoskeletal Shoulder Pain: Red Flag or a Red Herring?",
    "journal": "Tomography",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/tomography8010032"
  },
  {
    "id": 72,
    "year": 2022,
    "authors": "Roberto Meroni",
    "title": "Combined Motor and Cognitive Rehabilitation: The Impact on Motor Performance in Patients with Mild Cognitive Impairment. Systematic Review and Meta-Analysis",
    "journal": "Journal of Personalized Medicine",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3390/jpm12020276"
  },
  {
    "id": 73,
    "year": 2022,
    "authors": "Roberto Meroni",
    "title": "Balance control in unstable sitting in individuals with an acute episode of low back pain",
    "journal": "Gait & Posture",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.gaitpost.2022.03.014"
  },
  {
    "id": 74,
    "year": 2022,
    "authors": "Kim Buchholtz",
    "title": "A Masterclass on developing clinical tools in sport and exercise medicine using principles of clinimetrics",
    "journal": "Physical Therapy in Sport",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.ptsp.2022.04.003"
  },
  {
    "id": 75,
    "year": 2022,
    "authors": "Kim Buchholtz",
    "title": "Gastrocnemius muscle architecture in distance runners with and without Achilles tendinopathy",
    "journal": "South African Journal of Sports Medicine",
    "programmes": [
      "PT"
    ],
    "quartile": "Q3",
    "doi": "10.17159/2078-516X/2022/v34i1a12576"
  },
  {
    "id": 76,
    "year": 2022,
    "authors": "Firas Mourad",
    "title": "Reply to Moretti et al. Would Moving Forward Mean Going Back? Comment on \"Maselli et al. Direct Access to Physical Therapy: Should Italy Move Forward? Int. J. Environ. Res. Public Health 2022, 19, 555\"",
    "journal": "Int J Environ Res Public Health",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/ijerph19084620"
  },
  {
    "id": 77,
    "year": 2022,
    "authors": "Victor Alonge",
    "title": "A systematic review of how adherence to caregiver facilitated therapeutic activities for children are assessed and reported in published research",
    "journal": "Journal of Pediatric Rehabilitation Medicine",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3233/prm-210043"
  },
  {
    "id": 78,
    "year": 2022,
    "authors": "Kim Buchholtz",
    "title": "Injury and Illness Incidence in 2017 Super Rugby Tournament: A Surveillance Study on a Single South African Team",
    "journal": "International Journal of Sports Physical Therapy",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.26603/001c.35581"
  },
  {
    "id": 79,
    "year": 2022,
    "authors": "Roberto Meroni",
    "title": "More than one third of clinical practice guidelines on low back pain overlap in AGREE II appraisals. Research wasted?",
    "journal": "BMC medical research methodology",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1186/s12874-022-01621-w"
  },
  {
    "id": 80,
    "year": 2022,
    "authors": "Firas Mourad, Roberto Meroni",
    "title": "Knowledge, beliefs, and attitudes of spinal manipulation: a cross-sectional survey of Italian physiotherapists",
    "journal": "Chiropractic & manual therapies",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1186/s12998-022-00449-x"
  },
  {
    "id": 81,
    "year": 2022,
    "authors": "Raphael Martins de Abreu",
    "title": "Cardiac Changes Related to COVID-19 in Athletes: A Brief Review",
    "journal": "Current emergency and hospital medicine reports",
    "programmes": [
      "PT"
    ],
    "quartile": null,
    "doi": "10.1007/s40138-022-00252-1"
  },
  {
    "id": 82,
    "year": 2022,
    "authors": "Raphael Martins de Abreu",
    "title": "Acute high-intensity interval exercise versus moderate-intensity continuous exercise in heated water-based on hemodynamic, cardiac autonomic, and vascular responses in older individuals with hypertension",
    "journal": "Clinical and Experimental Hypertension",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1080/10641963.2022.2065288"
  },
  {
    "id": 83,
    "year": 2022,
    "authors": "Raphael Martins de Abreu",
    "title": "Cardiorespiratory coupling strength in athletes and non-athletes",
    "journal": "Respiratory Physiology & Neurobiology",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1016/j.resp.2022.103943"
  },
  {
    "id": 84,
    "year": 2022,
    "authors": "Firas Mourad",
    "title": "Assessing cardiovascular parameters and risk factors in physical therapy practice: findings from a cross-sectional national survey and implication for clinical practice",
    "journal": "BMC Musculoskelet Disord",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1186/s12891-022-05696-w"
  },
  {
    "id": 85,
    "year": 2022,
    "authors": "Firas Mourad",
    "title": "Identifying peripheral arterial diseases or flow limitations of the lower limb: Important aspects for cardiovascular screening for referral in physiotherapy",
    "journal": "Musculoskelet Sci Pract",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1016/j.msksp.2022.102611"
  },
  {
    "id": 86,
    "year": 2022,
    "authors": "Firas Mourad",
    "title": "Patient Concerns and Beliefs Related to Audible Popping Sound and the Effectiveness of Manipulation: Findings From an Online Survey",
    "journal": "J Manipulative Physiol Ther",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.jmpt.2022.03.021"
  },
  {
    "id": 87,
    "year": 2022,
    "authors": "Firas Mourad",
    "title": "Implementation of the International IFOMPT Cervical Framework: A survey among educational programmes",
    "journal": "Musculoskelet Sci Pract",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1016/j.msksp.2022.102619"
  },
  {
    "id": 88,
    "year": 2022,
    "authors": "Firas Mourad",
    "title": "Management of whiplash-associated disorder in the Italian emergency department: the feasibility of an evidence-based continuous professional development course provided by physiotherapists",
    "journal": "Disabil Rehabil",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1080/09638288.2020.1806936"
  },
  {
    "id": 89,
    "year": 2022,
    "authors": "Firas Mourad",
    "title": "Resilience and Experience of the COVID-19 Pandemic among Italian University Students: A Mixed-Method Study",
    "journal": "Int. J. Environ. Res. Public Health",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3390/ijerph191811714"
  },
  {
    "id": 90,
    "year": 2022,
    "authors": "Roberto Meroni",
    "title": "Exercise countermeasure preferences of three male astronauts, a preliminary qualitative study",
    "journal": "Acta Astronautica",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.actaastro.2022.09.012"
  },
  {
    "id": 91,
    "year": 2022,
    "authors": "Kim Buchholtz",
    "title": "The ecological validity of traditional standing and novel bicycle balance and agility tests for predicting performance in mountain bikers",
    "journal": "Sports medicine and health science",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1016/j.smhs.2022.10.003"
  },
  {
    "id": 92,
    "year": 2022,
    "authors": "Firas Mourad",
    "title": "Intracranial Epidermoid Cyst Mimics Musculoskeletal Shoulder Disease: Findings from a Case Report in Physiotherapy Clinical Practice",
    "journal": "Int J Environ Res Public Health",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3390/ijerph192013590"
  },
  {
    "id": 93,
    "year": 2022,
    "authors": "Firas Mourad",
    "title": "What to look out for, what to do, and when: 3 key messages for safely treating neck pain, headache and/or orofacial symptoms in musculoskeletal rehabilitation settings",
    "journal": "J Orthop Sports Phys Ther",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.2519/jospt.2022.11568"
  },
  {
    "id": 94,
    "year": 2022,
    "authors": "Johanna Johannsson, Michael Philippe, Alessandro De Nunzio",
    "title": "Acceptability and satisfaction perception of exergames for elderly adults to prevent risk of falls",
    "journal": "La Revue Kinesitherapie",
    "programmes": [
      "PT"
    ],
    "quartile": "Q4",
    "doi": null
  },
  {
    "id": 97,
    "year": 2022,
    "authors": "Firas Mourad",
    "title": "Effectiveness of Vestibular Rehabilitation after Concussion: A Systematic Review of Randomised Controlled Trial",
    "journal": "Healthcare (Basel, Switzerland)",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/healthcare11010090"
  },
  {
    "id": 172,
    "year": 2022,
    "authors": "Renato Baptista",
    "title": "Training-Induced Muscle Fatigue with a Powered Lower-Limb Exoskeleton: A Preliminary Study on Healthy Subjects",
    "journal": "Med. Sci.",
    "programmes": [
      "R&D"
    ],
    "quartile": null,
    "doi": "10.3390/medsci10040055"
  },
  {
    "id": 173,
    "year": 2022,
    "authors": "Alessandro M De Nunzo",
    "title": "Trunk Muscle Coactivation in People with and without Low Back Pain during Fatiguing Frequency-Dependent Lifting Activities",
    "journal": "Sensors (Basel)",
    "programmes": [
      "R&D"
    ],
    "quartile": "Q1",
    "doi": "10.3390/s22041417"
  },
  {
    "id": 174,
    "year": 2022,
    "authors": "Alessandro M De Nunzo",
    "title": "Centre of pressure parameters for the assessment of biomechanical risk in fatiguing frequency-dependent lifting activities",
    "journal": "PLoS One",
    "programmes": [
      "R&D"
    ],
    "quartile": "Q1",
    "doi": "10.1371/journal.pone.0266731"
  },
  {
    "id": 206,
    "year": 2022,
    "authors": "Fraser Carson, Thorben Hülsdünker",
    "title": "The impact of the Covid-19 lockdown on European students’ negative emotional symptoms: A systematic review and meta-analysis",
    "journal": "Behavioral Sciences",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.3390/bs12010003"
  },
  {
    "id": 207,
    "year": 2022,
    "authors": "Fraser Carson",
    "title": "The Experiences of High-Performance Female Coaches in Luxembourg",
    "journal": "Women in Sport and Physical Activity Journal",
    "programmes": [
      "SES"
    ],
    "quartile": "Q3",
    "doi": "10.1123/wspaj.2021-0061"
  },
  {
    "id": 208,
    "year": 2022,
    "authors": "Fraser Carson, Felippe Toledo",
    "title": "Neurobiological features of posttraumatic stress disorder (PTSD) and their role in understanding adaptive behavior and stress resilience",
    "journal": "International Journal of Environmental Research and Public Health",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.3390/ijerph191610258"
  },
  {
    "id": 209,
    "year": 2022,
    "authors": "Alessandro M De Nunzio",
    "title": "The relationship between hip strength and knee valgus during dynamic tasks among male and female adults with and without symptomatic knee pain: a systematic review",
    "journal": "Sport Sciences for Health",
    "programmes": [
      "SES"
    ],
    "quartile": "Q3",
    "doi": "10.1007/s11332-022-01010-2"
  },
  {
    "id": 211,
    "year": 2022,
    "authors": "Thorben Hülsdünker",
    "title": "Editorial: Neural Mechanisms of Perceptual-Cognitive Expertise in Elite Performers",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.3389/fnhum.2022.923816"
  },
  {
    "id": 212,
    "year": 2022,
    "authors": "Thorben Hülsdünker, Fraser Carson",
    "title": "Low prevalence of relative age effects in Luxembourg's male and female youth football",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1371/journal.pone.0273019"
  },
  {
    "id": 213,
    "year": 2022,
    "authors": "Thorben Hülsdünker, Andreas Mierau",
    "title": "Stroboscopic vision prolongs visual motion perception in the central nervous system",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1111/sms.14239"
  },
  {
    "id": 214,
    "year": 2022,
    "authors": "Alessandro M De Nunzio",
    "title": "Innovative Technologies in the Neurorehabilitation of Traumatic Brain Injury: A Systematic Review",
    "journal": "Brain Sci",
    "programmes": [
      "SES"
    ],
    "quartile": "Q3",
    "doi": "10.3390/brainsci12121678"
  },
  {
    "id": 222,
    "year": 2022,
    "authors": "Caterina Cavallo",
    "title": "The Effect of Healthy Lifestyle Strategies on the Management of Insulin Resistance in Children and Adolescents with Obesity: A Narrative Review",
    "journal": "Nutrients",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.3390/nu14214692"
  },
  {
    "id": 2,
    "year": 2021,
    "authors": "Tamsin Waterkeyn",
    "title": "Sociocultural Impacts of English and Globalisation on Women in Higher Education in Saudi Arabia",
    "journal": "Doctoral thesis — Open University (UK)",
    "programmes": [
      "ED"
    ],
    "quartile": null,
    "doi": null
  },
  {
    "id": 12,
    "year": 2021,
    "authors": "Mathieu Winand",
    "title": "COVID-19 impacts on sport governance and management: a global, critical realist perspective",
    "journal": "Managing Sport and Leisure",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q3",
    "doi": "10.1080/23750472.2020.1867002"
  },
  {
    "id": 13,
    "year": 2021,
    "authors": "Mathieu Winand",
    "title": "Performance Management Practices in the Sport Sector: An Examination of 32 Scottish National Sport Organizations",
    "journal": "Journal of Global Sport Management",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q3",
    "doi": "10.1080/24704067.2021.1899765"
  },
  {
    "id": 14,
    "year": 2021,
    "authors": "Mathieu Winand",
    "title": "Anti-doping in China: an analysis of the policy implementation processes through stakeholders’ perspectives",
    "journal": "Sport Management Review",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q1",
    "doi": "10.1080/14413523.2021.1917247"
  },
  {
    "id": 15,
    "year": 2021,
    "authors": "Mathieu Winand",
    "title": "A three-dimensional model of innovation within Flemish non-profit sports organisations",
    "journal": "European Sport Management Quarterly",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q1",
    "doi": "10.1080/16184742.2021.1936115"
  },
  {
    "id": 16,
    "year": 2021,
    "authors": "Mathieu Winand, Mathieu Marlier and Sebastian Merten",
    "title": "Sports fans and innovation: An analysis of football fans’ satisfaction with video assistant refereeing through social identity and argumentative theories",
    "journal": "Journal of Business Research",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.jbusres.2021.07.029"
  },
  {
    "id": 53,
    "year": 2021,
    "authors": "Tiago Neto",
    "title": "Regional Differences in BicepsFemoris Long Head Stiffness during Isometric Knee Flexion",
    "journal": "J. Funct.Morphol. Kinesiol.",
    "programmes": [
      "PT"
    ],
    "quartile": "Q3",
    "doi": "10.3390/jfmk6010018"
  },
  {
    "id": 54,
    "year": 2021,
    "authors": "Roberto Meroni",
    "title": "Developing, Implementing, and Applying Novel Techniques During Systematic Reviews of Primary Space Medicine Data",
    "journal": "Aerospace medicine and human performance",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3357/AMHP.5803.2021"
  },
  {
    "id": 55,
    "year": 2021,
    "authors": "Roberto Meroni",
    "title": "The Spread of COVID-19 Among 15,000 Physical Therapists in Italy: A Cross-Sectional Study",
    "journal": "Physical therapy",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1093/ptj/pzab123"
  },
  {
    "id": 56,
    "year": 2021,
    "authors": "Kim Buchholtz",
    "title": "Motivation and behaviour change in parkrun participants in the Western Cape Province, South Africa",
    "journal": "International Journal of Environmental Research and Public Health",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/ijerph18158102"
  },
  {
    "id": 58,
    "year": 2021,
    "authors": "Firas Mourad",
    "title": "A guide to cranial nerve testing for musculoskeletal clinicians",
    "journal": "The Journal of manual & manipulative therapy",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1080/10669817.2021.1937813"
  },
  {
    "id": 59,
    "year": 2021,
    "authors": "Firas Mourad",
    "title": "Assessing Vascular Function in Patients With Neck Pain, Headache, and/or Orofacial Pain: Part of the Job Description of All Physical Therapists",
    "journal": "The Journal of orthopaedic and sports physical therapy",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.2519/jospt.2021.10408"
  },
  {
    "id": 60,
    "year": 2021,
    "authors": "Firas Mourad",
    "title": "Can Haglund's Syndrome Be Misdiagnosed as Low Back Pain? Findings from a Case Report in Physical Therapy Direct Access",
    "journal": "Healthcare (Basel, Switzerland)",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/healthcare9050508"
  },
  {
    "id": 61,
    "year": 2021,
    "authors": "Firas Mourad",
    "title": "Elastofibroma presented as shoulder pain in an amateur swimmer: screening for referral in physiotherapy. A case report",
    "journal": "Physiotherapy theory and practice",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1080/09593985.2021.1920077"
  },
  {
    "id": 62,
    "year": 2021,
    "authors": "Firas Mourad",
    "title": "Short-Term Morphological Changes in Asymptomatic Perimandibular Muscles after Dry Needling Assessed with Rehabilitative Ultrasound Imaging: A Proof-of-Concept Study",
    "journal": "Journal of clinical medicine",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.3390/jcm10020209"
  },
  {
    "id": 63,
    "year": 2021,
    "authors": "Firas Mourad",
    "title": "A Thoracic Outlet Syndrome That Concealed a Glioblastoma. Findings from a Case Report",
    "journal": "Medicina",
    "programmes": [
      "PT"
    ],
    "quartile": "Q3",
    "doi": "10.3390/medicina57090908"
  },
  {
    "id": 64,
    "year": 2021,
    "authors": "Firas Mourad",
    "title": "Use of Soft Cervical Collar among Whiplash Patients in Two Italian Emergency Departments Is Associated with Persistence of Symptoms: A Propensity Score Matching Analysis",
    "journal": "Healthcare (Basel)",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/healthcare9101363"
  },
  {
    "id": 65,
    "year": 2021,
    "authors": "Firas Mourad",
    "title": "Assessing Cranial Nerves in Physical Therapy Practice: Findings from a Cross-Sectional Survey and Implication for Clinical Practice",
    "journal": "Healthcare (Basel)",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/healthcare9101262"
  },
  {
    "id": 66,
    "year": 2021,
    "authors": "Kim Buchholtz",
    "title": "Incidence of Injuries, Illness and Related RiskFactors in Cross‑Country Marathon MountainBiking Events: A Systematic Search and Review",
    "journal": "Sports Medicine - Open",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1186/s40798-021-00357-z"
  },
  {
    "id": 67,
    "year": 2021,
    "authors": "Roberto Meroni",
    "title": "Prevalence and associated factors of COVID-19 across Italian regions: a secondary analysis from a national survey on physiotherapists",
    "journal": "Arch Physiother",
    "programmes": [
      "PT"
    ],
    "quartile": null,
    "doi": "10.1186/s40945-021-00125-y"
  },
  {
    "id": 68,
    "year": 2021,
    "authors": "Roberto Meroni",
    "title": "Feasibility of a standardized protocol for respiratory training with Intermitted Positive Pressure Breathing ventilator application in dysphonia and dysarthria",
    "journal": "European journal of physical and rehabilitation medicine",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.23736/S1973-9087.21.06946-X"
  },
  {
    "id": 194,
    "year": 2021,
    "authors": "Thorben Hülsdünker",
    "title": "Visual Perception and Visuomotor Reaction Speed Are Independent of the Individual Alpha Frequency",
    "journal": "Frontiers in Neuroscience",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.3389/fnins.2021.620266"
  },
  {
    "id": 197,
    "year": 2021,
    "authors": "Fraser Carson",
    "title": "Coach like a woman: Learnings from a pilot coach education program",
    "journal": "Women in Sport and Physical Activity Journal",
    "programmes": [
      "SES"
    ],
    "quartile": "Q3",
    "doi": "10.1123/wspaj.2020-0047"
  },
  {
    "id": 198,
    "year": 2021,
    "authors": "Fraser Carson",
    "title": "Identifying the habitual needs of novice strength and conditioning coaches",
    "journal": "Journal of Hospitality, Leisure, Sport and Tourism Education",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.1016/j.jhlste.2021.100313"
  },
  {
    "id": 199,
    "year": 2021,
    "authors": "Fraser Carson",
    "title": "Are we there yet? A signature pedagogy for sports coaching",
    "journal": "Annals of Leisure Research",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.1080/11745398.2019.1672570"
  },
  {
    "id": 200,
    "year": 2021,
    "authors": "Fraser Carson",
    "title": "Behaviours and actions of the strength and conditioning coach in fostering a positive coach-athlete relationship: A systematic review of the literature",
    "journal": "Journal of Strength and Conditioning Research",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1519/JSC.0000000000004073"
  },
  {
    "id": 201,
    "year": 2021,
    "authors": "Alessadro M De Nunzio",
    "title": "Bipolar versus high-density surface electromyography for evaluating risk in fatiguing frequency-dependent lifting activities",
    "journal": "Appl Ergon",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.apergo.2021.103456"
  },
  {
    "id": 202,
    "year": 2021,
    "authors": "Alessadro M De Nunzio",
    "title": "A novel metric of reliability in pressure pain threshold measurement",
    "journal": "Sci Rep",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1038/s41598-021-86344-6"
  },
  {
    "id": 203,
    "year": 2021,
    "authors": "Alessadro M De Nunzio",
    "title": "Trunk control during repetitive sagittal movements following a real-time tracking task in people with chronic low back pain",
    "journal": "J Electromyogr Kinesiol",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.1016/j.jelekin.2021.102533"
  },
  {
    "id": 204,
    "year": 2021,
    "authors": "Fraser Carson",
    "title": "Motivation and behaviour change in parkrun participants in the Western Cape Province, South Africa",
    "journal": "International Journal of Environmental Research and Public Health",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.3390/ijerph18158102"
  },
  {
    "id": 205,
    "year": 2021,
    "authors": "Thorben Hülsdünker, Andreas Mierau",
    "title": "The ability to increase the base of support and recover stability is limited in its generalisation for different balance perturbation tasks",
    "journal": "European review of aging and physical activity",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.1186/s11556-021-00274-w"
  },
  {
    "id": 210,
    "year": 2021,
    "authors": "Thorben Hülsdünker, Andreas Mierau",
    "title": "Auditory Information Accelerates the Visuomotor Reaction Speed of Elite Badminton Players in Multisensory Environments",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.3389/fnhum.2021.779343"
  },
  {
    "id": 6,
    "year": 2020,
    "authors": "Mathieu Winand",
    "title": "Organisational factors for corporate social responsibility implementation in sport federations: a qualitative comparative analysis",
    "journal": "European Sport Management Quarterly",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q1",
    "doi": "10.1080/16184742.2020.1731838"
  },
  {
    "id": 7,
    "year": 2020,
    "authors": "Mathieu Winand",
    "title": "The impact of knowledge management on performance in nonprofit sports clubs: the mediating role of attitude toward innovation, open innovation, and innovativeness",
    "journal": "European Sport Management Quarterly",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q1",
    "doi": "10.1080/16184742.2020.1768572"
  },
  {
    "id": 8,
    "year": 2020,
    "authors": "Mathieu Winand",
    "title": "Connecting Customer Knowledge Management and Intention to Use Sport Services Through Psychological Involvement, Commitment, and Customer Perceived Value",
    "journal": "Journal of Sport Management",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q1",
    "doi": "10.1123/jsm.2020-0033"
  },
  {
    "id": 9,
    "year": 2020,
    "authors": "Mathieu Marlier, Mathieu Winand",
    "title": "Bridge over Troubled Water: Linking Capacities of Sport and Non-Sport Organizations",
    "journal": "Social Inclusion",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q2",
    "doi": "10.17645/si.v8i3.2465"
  },
  {
    "id": 10,
    "year": 2020,
    "authors": "Mathieu Winand",
    "title": "Pokémon ‘Go’ but for how long?: A qualitative analysis of motivation to play and sustainability of physical activity behaviour in young adults using mobile augmented reality",
    "journal": "Managing Sport and Leisure",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q3",
    "doi": "10.1080/23750472.2020.1810107"
  },
  {
    "id": 11,
    "year": 2020,
    "authors": "Mathieu Marlier",
    "title": "A stakeholder perspective on ethical leadership in sport: Bridging the gap between the normative and descriptive lines of inquiry",
    "journal": "Psychologica Belgica",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q2",
    "doi": "10.5334/pb.543"
  },
  {
    "id": 38,
    "year": 2020,
    "authors": "Roberto Meroni",
    "title": "Differences in Rehabilitation Needs after Stroke: A Similarity Analysis on the ICF Core Set for Stroke",
    "journal": "International journal of environmental research and public health",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/ijerph17124291"
  },
  {
    "id": 39,
    "year": 2020,
    "authors": "Tiago Neto",
    "title": "Is there a relationship between back squat depth, ankle flexibility, and Achilles tendon stiffness?",
    "journal": "Sports Biomech",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1080/14763141.2019.1690569"
  },
  {
    "id": 40,
    "year": 2020,
    "authors": "Roberto Meroni",
    "title": "Physiological Profile Assessment of Posture in Children and Adolescents with Autism Spectrum Disorder and Typically Developing Peers",
    "journal": "Brain sciences",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3390/brainsci10100681"
  },
  {
    "id": 41,
    "year": 2020,
    "authors": "Kim Buchholtz",
    "title": "An evaluation of bicycle-specific agility and reaction times in mountain bikers and road cyclists",
    "journal": "South African Journal of Sports Medicine",
    "programmes": [
      "PT"
    ],
    "quartile": "Q3",
    "doi": "10.17159/2078-516X/2020/v32i1a8576"
  },
  {
    "id": 42,
    "year": 2020,
    "authors": "Kim Buchholtz",
    "title": "Does a greater training load increase the risk of injury and illness in ultramarathon runners?: A prospective, descriptive, longitudinal design",
    "journal": "South African Journal of Sports Medicine",
    "programmes": [
      "PT"
    ],
    "quartile": "Q3",
    "doi": "10.17159/2078-516X/2020/v32i1a8559"
  },
  {
    "id": 43,
    "year": 2020,
    "authors": "Roberto Meroni",
    "title": "Cohort profile: why do people keep hurting their back?",
    "journal": "BMC research notes",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1186/s13104-020-05356-z"
  },
  {
    "id": 44,
    "year": 2020,
    "authors": "Roberto Meroni",
    "title": "Non-invasive current stimulation in vision recovery: a review of the literature",
    "journal": "Restorative neurology and neuroscience",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3233/RNN-190948"
  },
  {
    "id": 45,
    "year": 2020,
    "authors": "Camilo Corbellini",
    "title": "Italian Physical Therapists' Response to the Novel COVID-19 Emergency",
    "journal": "Physical therapy",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1093/ptj/pzaa060"
  },
  {
    "id": 46,
    "year": 2020,
    "authors": "Victor Alonge",
    "title": "Proposing Transmalleolar Axis Bisector (TMAB) as a Geometrically Accurate Alternative to the Heel Bisector Line for the Clinical Assessment of Metatarsus Adductus",
    "journal": "International Journal of Foot and Ankle",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.23937/2643-3885/1710041"
  },
  {
    "id": 47,
    "year": 2020,
    "authors": "Felippe Toledo",
    "title": "Gamma frequencies as a predictor for the accomplishment of a motor task guided through the action observation network",
    "journal": "NeuroRehabilitation",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.3233/NRE-201508"
  },
  {
    "id": 48,
    "year": 2020,
    "authors": "Tiago Neto",
    "title": "Effects of knee flexor submaximal isometric contraction until exhaustion on semitendinosus and biceps femoris long head shear modulus in healthy individuals",
    "journal": "Scientific reports",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1038/s41598-020-73433-1"
  },
  {
    "id": 49,
    "year": 2020,
    "authors": "Camilo Corbellini",
    "title": "Spanish Experience of Pulmonary Rehabilitation Efficacy for Patients Affected by the Novel SARS-CoV-2 (COVID-19) A Case Report",
    "journal": "Topics in Geriatric Rehabilitation",
    "programmes": [
      "PT"
    ],
    "quartile": "Q4",
    "doi": "10.1097/tgr.0000000000000283"
  },
  {
    "id": 50,
    "year": 2020,
    "authors": "Camilo Corbellini",
    "title": "Late Breaking Abstract - Early ICU physiotherapy on SARS-CoV-2 patients: A Spanish experience case series",
    "journal": "European Respiratory Journal",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1183/13993003.congress-2020.334"
  },
  {
    "id": 51,
    "year": 2020,
    "authors": "Camilo Corbellini",
    "title": "DIAPHRAGMATIC MOBILITY IMPROVEMENT IS CORRELATED TO THE INCREASE IN INSPIRATORY CAPACITY IN MODERATE TO VERY SEVERE COPD SUBJECTS DURING INPATIENT PULMONARY REHABILITATION",
    "journal": "Chest",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.chest.2020.05.433"
  },
  {
    "id": 52,
    "year": 2020,
    "authors": "Camilo Corbellini",
    "title": "COVID-19 Pandemic: A Physiotherapy Update",
    "journal": "Electronic Journal of General Medicine",
    "programmes": [
      "PT"
    ],
    "quartile": "Q4",
    "doi": "10.29333/ejgm/8574"
  },
  {
    "id": 57,
    "year": 2020,
    "authors": "Kim Buchholtz, Roberto Meroni, Fraser Carson",
    "title": "Responding to COVID-19: LUNEX University’s decisions and actions to continue physiotherapy education",
    "journal": "OpenPhysio",
    "programmes": [
      "PT"
    ],
    "quartile": null,
    "doi": "10.14426/art/1564"
  },
  {
    "id": 183,
    "year": 2020,
    "authors": "Alessadro M De Nunzio",
    "title": "Interpretable machine learning models for classifying low back pain status using functional physiological variables",
    "journal": "Eur Spine J",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1007/s00586-020-06356-0"
  },
  {
    "id": 184,
    "year": 2020,
    "authors": "Alessadro M De Nunzio",
    "title": "Individuals with patellofemoral pain syndrome have altered inter-leg force coordination",
    "journal": "Gait & Posture",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.gaitpost.2020.04.006"
  },
  {
    "id": 185,
    "year": 2020,
    "authors": "Alessadro M De Nunzio",
    "title": "Variability of Neck and Trunk Movement During Single- And Dual-Task Gait in People With Chronic Neck Pain",
    "journal": "Clin Biomech (Bristol, Avon)",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.1016/j.clinbiomech.2019.11.019"
  },
  {
    "id": 186,
    "year": 2020,
    "authors": "Thorben Hülsdünker, Andreas Mierau",
    "title": "Motion-Onset Visual Potentials Evoked in a Sport-Specific Visuomotor Reaction Task",
    "journal": "Journal of Sport and Exercise Psychology",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1123/jsep.2019-0255"
  },
  {
    "id": 187,
    "year": 2020,
    "authors": "Alessadro M De Nunzio",
    "title": "Controlled manual loading of body tissues: towards the next generation of pressure algometer",
    "journal": "Chiropractic & Manual Therapies",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1186/s12998-020-00340-7"
  },
  {
    "id": 188,
    "year": 2020,
    "authors": "Fraser Carson",
    "title": "Examining negative emotional symptoms and psychological wellbeing of Australian sport officials",
    "journal": "International Journal of Environmental Research and Public Health",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.3390/ijerph17218265"
  },
  {
    "id": 189,
    "year": 2020,
    "authors": "Fraser Carson",
    "title": "Psychological well-being in performance coaches: A theoretical perspective",
    "journal": "Journal of Physical Education and Sport",
    "programmes": [
      "SES"
    ],
    "quartile": "Q3",
    "doi": "10.7752/jpes.2020.s5391"
  },
  {
    "id": 190,
    "year": 2020,
    "authors": "Thorben Hülsdünker, Andreas Mierau",
    "title": "Short- and Long-Term Stroboscopic Training Effects on Visuomotor Performance in Elite Youth Sports. Part 1: Reaction and Behavior",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1249/mss.0000000000002541"
  },
  {
    "id": 191,
    "year": 2020,
    "authors": "Thorben Hülsdünker, Andreas Mierau",
    "title": "Short- and Long-Term Stroboscopic Training Effects on Visuomotor Performance in Elite Youth Sports. Part 2: Brain-Behavior Mechanisms",
    "journal": null,
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1249/mss.0000000000002543"
  },
  {
    "id": 192,
    "year": 2020,
    "authors": "Alessadro M De Nunzio",
    "title": "Influence of low back pain and its remission on motor abundance in a low-load lifting task",
    "journal": "Sci Rep",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1038/s41598-020-74707-4"
  },
  {
    "id": 193,
    "year": 2020,
    "authors": "Alessadro M De Nunzio",
    "title": "Kinematic Biomarkers of Chronic Neck Pain During Curvilinear Walking: A Data-driven Differential Diagnosis Approach",
    "journal": "Annu Int Conf IEEE Eng Med Biol Soc",
    "programmes": [
      "SES"
    ],
    "quartile": "Q3",
    "doi": "10.1109/EMBC44109.2020.9176457"
  },
  {
    "id": 195,
    "year": 2020,
    "authors": "Alessadro M De Nunzio",
    "title": "Classifying individuals with and without patellofemoral pain syndrome using ground force profiles - Development of a method using functional data boosting",
    "journal": "Gait Posture",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.gaitpost.2020.05.034"
  },
  {
    "id": 196,
    "year": 2020,
    "authors": "Alessadro M De Nunzio",
    "title": "Classifying neck pain status using scalar and functional biomechanical variables - development of a method using functional data boosting",
    "journal": "Gait Posture",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.gaitpost.2019.12.008"
  },
  {
    "id": 3,
    "year": 2019,
    "authors": "Mathieu Winand",
    "title": "Analyzing the influence of employee values on knowledge management in sport organizations",
    "journal": "Journal of Science and Technology Policy Management",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q3",
    "doi": "10.1108/JSTPM-04-2018-0039"
  },
  {
    "id": 4,
    "year": 2019,
    "authors": "Mathieu Winand",
    "title": "A Stakeholder Approach to Performance Management in Botswana National Sport Organisations",
    "journal": "Managing Sport and Leisure",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q3",
    "doi": "10.1080/23750472.2019.1612269"
  },
  {
    "id": 5,
    "year": 2019,
    "authors": "Mathieu Winand and Sebastian Merten",
    "title": "International Sport Federations’ Social Media Communication: A Content Analysis of FIFA’s Twitter Account",
    "journal": "International Journal of Sport Communication",
    "programmes": [
      "ISM"
    ],
    "quartile": "Q2",
    "doi": "10.1123/ijsc.2018-0173"
  },
  {
    "id": 32,
    "year": 2019,
    "authors": "Roberto Meroni",
    "title": "Evidence for managing chronic low back pain in primary care: a review of recommendations from high-quality clinical practice guidelines",
    "journal": "Disability and rehabilitation",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1080/09638288.2019.1645888"
  },
  {
    "id": 33,
    "year": 2019,
    "authors": "Tiago Neto",
    "title": "Shear Wave Elastographic Investigation of the Immediate Effects of Slump Neurodynamics in People With Sciatica",
    "journal": "J Ultrasound Med",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1002/jum.15144"
  },
  {
    "id": 34,
    "year": 2019,
    "authors": "Tiago Neto",
    "title": "Noninvasive Measurement of Sciatic Nerve Stiffness in Patients With Chronic Low Back Related Leg Pain Using Shear Wave Elastography",
    "journal": "J Ultrasound Med",
    "programmes": [
      "PT"
    ],
    "quartile": "Q2",
    "doi": "10.1002/jum.14679"
  },
  {
    "id": 35,
    "year": 2019,
    "authors": "Tiago Neto",
    "title": "Functional Brain Plasticity Associated with ACL Injury: A Scoping Review of Current Evidence",
    "journal": "Neural Plasticity",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1155/2019/3480512"
  },
  {
    "id": 36,
    "year": 2019,
    "authors": "Matthias Loeckx",
    "title": "Health status deterioration in subjects with mild to moderate airflow obstruction, a six years observational study",
    "journal": "Respiratory Research",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1186/s12931-019-1061-7"
  },
  {
    "id": 37,
    "year": 2019,
    "authors": "Johanna Johannsson",
    "title": "Modulation of the Hoffmann reflex in soleus and medial gastrocnemius during stair ascent and descent in young and older adults",
    "journal": "Gait & posture",
    "programmes": [
      "PT"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.gaitpost.2018.11.018"
  },
  {
    "id": 175,
    "year": 2019,
    "authors": "Thorben Hülsdünker, Andreas Mierau",
    "title": "Standardised computer-based reaction tests predict the sport-specific visuomotor speed and performance of young elite table tennis athletes",
    "journal": "Journal of Performance Analysis in Sports",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.1080/24748668.2019.1688071"
  },
  {
    "id": 176,
    "year": 2019,
    "authors": "Thorben Hülsdünker, Andreas Mierau",
    "title": "The Speed of Neural Visual Motion Perception and Processing Determines the Visuomotor Reaction Time of Young Elite Table Tennis Athletes",
    "journal": "Frontiers in behavioral neuroscience",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.3389/fnbeh.2019.00165"
  },
  {
    "id": 177,
    "year": 2019,
    "authors": "Alessandro M De Nunzio",
    "title": "Classifying neck pain status using scalar and functional biomechanical variables – development of a method using functional data boosting",
    "journal": "Gait & Posture",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1016/j.gaitpost.2019.12.008"
  },
  {
    "id": 178,
    "year": 2019,
    "authors": "Bettina Karsten",
    "title": "A Review of Countermovement and Squat Jump Testing Methods in the Context of Public Health Examination in Adolescence: Reliability and Feasibility of Current Testing Procedures",
    "journal": "Front Physiol",
    "programmes": [
      "SES"
    ],
    "quartile": "Q2",
    "doi": "10.3389/fphys.2019.01384"
  },
  {
    "id": 179,
    "year": 2019,
    "authors": "Bettina Karsten",
    "title": "Effectiveness of combining microcurrent with resistance training in trained males",
    "journal": "Eur J Appl Physiol",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1007/s00421-019-04243-1"
  },
  {
    "id": 180,
    "year": 2019,
    "authors": "Bettina Karsten",
    "title": "Impact of Two High-Volume Set Configuration Workouts on Resistance Training Outcomes in Recreationally Trained Men",
    "journal": "J Strength Cond Res",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1519/JSC.0000000000003163"
  },
  {
    "id": 181,
    "year": 2019,
    "authors": "Bettina Karsten",
    "title": "Physical activity and quality of life in people living with HIV",
    "journal": "AIDS Care",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1080/09540121.2019.1576848"
  },
  {
    "id": 182,
    "year": 2019,
    "authors": "Bettina Karsten",
    "title": "Methodological Approaches and Related Challenges Associated With the Determination of Critical Power and Curvature Constant",
    "journal": "J Strength Cond Res",
    "programmes": [
      "SES"
    ],
    "quartile": "Q1",
    "doi": "10.1519/JSC.0000000000002977"
  }
];
