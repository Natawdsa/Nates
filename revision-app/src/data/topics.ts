export interface Subtopic {
  name: string;
  mastery: number;
}

export interface Topic {
  id: number;
  name: string;
  subtopics: Subtopic[];
  mastery: number;
  difficulty: "Easy" | "Medium" | "Hard";
  estimatedHours: number;
  color: string;
}

export const topics: Topic[] = [
  {
    id: 1,
    name: "Biological Molecules",
    subtopics: [
      { name: "Carbohydrates", mastery: 96 },
      { name: "Lipids", mastery: 91 },
      { name: "Proteins", mastery: 95 },
      { name: "Nucleic Acids", mastery: 88 },
      { name: "Water", mastery: 99 },
      { name: "Inorganic Ions", mastery: 93 },
    ],
    mastery: 94,
    difficulty: "Medium",
    estimatedHours: 1,
    color: "#22c55e",
  },
  {
    id: 2,
    name: "Cells",
    subtopics: [
      { name: "Cell Structure", mastery: 92 },
      { name: "Cell Division", mastery: 88 },
      { name: "Transport Across Membranes", mastery: 85 },
    ],
    mastery: 89,
    difficulty: "Easy",
    estimatedHours: 2,
    color: "#22c55e",
  },
  {
    id: 3,
    name: "Organisms Exchange Substances",
    subtopics: [
      { name: "Gas Exchange", mastery: 74 },
      { name: "Digestion", mastery: 71 },
      { name: "Mass Transport", mastery: 68 },
    ],
    mastery: 71,
    difficulty: "Medium",
    estimatedHours: 5,
    color: "#eab308",
  },
  {
    id: 4,
    name: "Genetic Information",
    subtopics: [
      { name: "DNA Structure", mastery: 65 },
      { name: "Genetic Code", mastery: 60 },
      { name: "Transcription", mastery: 58 },
      { name: "Translation", mastery: 54 },
      { name: "Gene Expression", mastery: 42 },
      { name: "Mutations", mastery: 50 },
    ],
    mastery: 55,
    difficulty: "Hard",
    estimatedHours: 8,
    color: "#ef4444",
  },
  {
    id: 5,
    name: "Energy Transfers",
    subtopics: [
      { name: "Photosynthesis", mastery: 62 },
      { name: "Respiration", mastery: 51 },
    ],
    mastery: 57,
    difficulty: "Hard",
    estimatedHours: 7,
    color: "#ef4444",
  },
  {
    id: 6,
    name: "Organisms Respond to Changes",
    subtopics: [
      { name: "Nervous System", mastery: 72 },
      { name: "Hormonal Communication", mastery: 58 },
      { name: "Plant Responses", mastery: 63 },
      { name: "Animal Behaviour", mastery: 69 },
    ],
    mastery: 66,
    difficulty: "Hard",
    estimatedHours: 6,
    color: "#f97316",
  },
  {
    id: 7,
    name: "Genetics, Populations, Evolution",
    subtopics: [
      { name: "Inheritance", mastery: 83 },
      { name: "Populations", mastery: 78 },
      { name: "Evolution", mastery: 75 },
      { name: "Speciation", mastery: 72 },
    ],
    mastery: 77,
    difficulty: "Medium",
    estimatedHours: 4,
    color: "#eab308",
  },
  {
    id: 8,
    name: "The Control of Gene Expression",
    subtopics: [
      { name: "Gene Expression Mechanisms", mastery: 45 },
      { name: "Recombinant DNA", mastery: 38 },
      { name: "Genome Projects", mastery: 52 },
    ],
    mastery: 45,
    difficulty: "Hard",
    estimatedHours: 9,
    color: "#ef4444",
  },
];
