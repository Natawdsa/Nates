export interface Paper {
  type: "QP" | "MS";
  label: string;
  url: string;
}

export interface PaperSet {
  paperNumber: number;
  papers: Paper[];
}

export interface YearPapers {
  year: number;
  isNew?: boolean;
  paperSets: PaperSet[];
}

const A2_URL = "https://www.aqa.org.uk/subjects/biology/a-level/biology-7402/assessment-resources";
const AS_URL = "https://www.aqa.org.uk/subjects/biology/as/biology-7401/assessment-resources";

export const a2Papers: YearPapers[] = [
  {
    year: 2023,
    isNew: true,
    paperSets: [
      { paperNumber: 1, papers: [{ type: "QP", label: "Paper 1 QP", url: A2_URL }, { type: "MS", label: "Paper 1 MS", url: A2_URL }] },
      { paperNumber: 2, papers: [{ type: "QP", label: "Paper 2 QP", url: A2_URL }, { type: "MS", label: "Paper 2 MS", url: A2_URL }] },
      { paperNumber: 3, papers: [{ type: "QP", label: "Paper 3 QP", url: A2_URL }, { type: "MS", label: "Paper 3 MS", url: A2_URL }] },
    ],
  },
  {
    year: 2022,
    paperSets: [
      { paperNumber: 1, papers: [{ type: "QP", label: "Paper 1 QP", url: A2_URL }, { type: "MS", label: "Paper 1 MS", url: A2_URL }] },
      { paperNumber: 2, papers: [{ type: "QP", label: "Paper 2 QP", url: A2_URL }, { type: "MS", label: "Paper 2 MS", url: A2_URL }] },
      { paperNumber: 3, papers: [{ type: "QP", label: "Paper 3 QP", url: A2_URL }, { type: "MS", label: "Paper 3 MS", url: A2_URL }] },
    ],
  },
  {
    year: 2019,
    paperSets: [
      { paperNumber: 1, papers: [{ type: "QP", label: "Paper 1 QP", url: A2_URL }, { type: "MS", label: "Paper 1 MS", url: A2_URL }] },
      { paperNumber: 2, papers: [{ type: "QP", label: "Paper 2 QP", url: A2_URL }, { type: "MS", label: "Paper 2 MS", url: A2_URL }] },
      { paperNumber: 3, papers: [{ type: "QP", label: "Paper 3 QP", url: A2_URL }, { type: "MS", label: "Paper 3 MS", url: A2_URL }] },
    ],
  },
  {
    year: 2018,
    paperSets: [
      { paperNumber: 1, papers: [{ type: "QP", label: "Paper 1 QP", url: A2_URL }, { type: "MS", label: "Paper 1 MS", url: A2_URL }] },
      { paperNumber: 2, papers: [{ type: "QP", label: "Paper 2 QP", url: A2_URL }, { type: "MS", label: "Paper 2 MS", url: A2_URL }] },
      { paperNumber: 3, papers: [{ type: "QP", label: "Paper 3 QP", url: A2_URL }, { type: "MS", label: "Paper 3 MS", url: A2_URL }] },
    ],
  },
  {
    year: 2017,
    paperSets: [
      { paperNumber: 1, papers: [{ type: "QP", label: "Paper 1 QP", url: A2_URL }, { type: "MS", label: "Paper 1 MS", url: A2_URL }] },
      { paperNumber: 2, papers: [{ type: "QP", label: "Paper 2 QP", url: A2_URL }, { type: "MS", label: "Paper 2 MS", url: A2_URL }] },
      { paperNumber: 3, papers: [{ type: "QP", label: "Paper 3 QP", url: A2_URL }, { type: "MS", label: "Paper 3 MS", url: A2_URL }] },
    ],
  },
];

export const asPapers: YearPapers[] = [
  {
    year: 2023,
    isNew: true,
    paperSets: [
      { paperNumber: 1, papers: [{ type: "QP", label: "Paper 1 QP", url: AS_URL }, { type: "MS", label: "Paper 1 MS", url: AS_URL }] },
      { paperNumber: 2, papers: [{ type: "QP", label: "Paper 2 QP", url: AS_URL }, { type: "MS", label: "Paper 2 MS", url: AS_URL }] },
    ],
  },
  {
    year: 2022,
    paperSets: [
      { paperNumber: 1, papers: [{ type: "QP", label: "Paper 1 QP", url: AS_URL }, { type: "MS", label: "Paper 1 MS", url: AS_URL }] },
      { paperNumber: 2, papers: [{ type: "QP", label: "Paper 2 QP", url: AS_URL }, { type: "MS", label: "Paper 2 MS", url: AS_URL }] },
    ],
  },
  {
    year: 2019,
    paperSets: [
      { paperNumber: 1, papers: [{ type: "QP", label: "Paper 1 QP", url: AS_URL }, { type: "MS", label: "Paper 1 MS", url: AS_URL }] },
      { paperNumber: 2, papers: [{ type: "QP", label: "Paper 2 QP", url: AS_URL }, { type: "MS", label: "Paper 2 MS", url: AS_URL }] },
    ],
  },
  {
    year: 2018,
    paperSets: [
      { paperNumber: 1, papers: [{ type: "QP", label: "Paper 1 QP", url: AS_URL }, { type: "MS", label: "Paper 1 MS", url: AS_URL }] },
      { paperNumber: 2, papers: [{ type: "QP", label: "Paper 2 QP", url: AS_URL }, { type: "MS", label: "Paper 2 MS", url: AS_URL }] },
    ],
  },
  {
    year: 2017,
    paperSets: [
      { paperNumber: 1, papers: [{ type: "QP", label: "Paper 1 QP", url: AS_URL }, { type: "MS", label: "Paper 1 MS", url: AS_URL }] },
      { paperNumber: 2, papers: [{ type: "QP", label: "Paper 2 QP", url: AS_URL }, { type: "MS", label: "Paper 2 MS", url: AS_URL }] },
    ],
  },
];
