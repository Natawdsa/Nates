export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
  keywords: string[];
  topic: string;
  xp: number;
}

export const sampleQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which of the following correctly describes the structure of ATP?",
    options: [
      { id: "A", text: "Adenine + deoxyribose + 2 phosphate groups" },
      { id: "B", text: "Adenine + ribose + 3 phosphate groups" },
      { id: "C", text: "Guanine + ribose + 3 phosphate groups" },
      { id: "D", text: "Adenine + ribose + 2 phosphate groups" },
    ],
    correctAnswer: "B",
    explanation:
      "ATP (adenosine triphosphate) consists of the nitrogenous base adenine, the pentose sugar ribose, and three phosphate groups. It is a ribonucleotide, so it contains ribose (not deoxyribose). The hydrolysis of the terminal phosphate bond releases approximately 30.5 kJ/mol of energy.",
    keywords: ["adenine", "ribose", "phosphate", "ATP", "adenosine"],
    topic: "Biological Molecules",
    xp: 10,
  },
  {
    id: 2,
    question: "What is the role of helicase in DNA replication?",
    options: [
      { id: "A", text: "Joins Okazaki fragments on the lagging strand" },
      { id: "B", text: "Adds complementary nucleotides to the template strand" },
      { id: "C", text: "Unwinds the double helix by breaking hydrogen bonds between base pairs" },
      { id: "D", text: "Synthesises a short RNA primer to initiate replication" },
    ],
    correctAnswer: "C",
    explanation:
      "Helicase is the enzyme responsible for unwinding the DNA double helix during replication. It breaks the hydrogen bonds between complementary base pairs, separating the two strands to create two template strands. This creates a replication fork. DNA polymerase then adds nucleotides to each template strand.",
    keywords: ["helicase", "hydrogen bonds", "double helix", "replication fork", "unwind"],
    topic: "Genetic Information",
    xp: 10,
  },
  {
    id: 3,
    question: "During the light-independent reaction (Calvin cycle), what molecule accepts CO₂?",
    options: [
      { id: "A", text: "GP (glycerate-3-phosphate)" },
      { id: "B", text: "NADPH" },
      { id: "C", text: "RuBP (ribulose bisphosphate)" },
      { id: "D", text: "G3P (glyceraldehyde-3-phosphate)" },
    ],
    correctAnswer: "C",
    explanation:
      "RuBP (ribulose bisphosphate) is the 5-carbon CO₂ acceptor molecule in the Calvin cycle. The enzyme RuBisCO catalyses the carboxylation of RuBP with CO₂ to form an unstable 6-carbon intermediate, which immediately splits into two 3-carbon molecules of GP (glycerate-3-phosphate).",
    keywords: ["RuBP", "Calvin cycle", "CO₂ fixation", "RuBisCO", "light-independent"],
    topic: "Energy Transfers",
    xp: 10,
  },
  {
    id: 4,
    question: "Which type of bond is responsible for the secondary structure of proteins?",
    options: [
      { id: "A", text: "Disulfide bonds between cysteine residues" },
      { id: "B", text: "Ionic bonds between R groups" },
      { id: "C", text: "Hydrogen bonds between peptide bonds along the polypeptide backbone" },
      { id: "D", text: "Van der Waals forces between hydrophobic R groups" },
    ],
    correctAnswer: "C",
    explanation:
      "Secondary structure (alpha helices and beta pleated sheets) is maintained by hydrogen bonds between the NH and C=O groups of the peptide backbone — not between R groups. These regular repeating structures are formed when the polypeptide chain folds or coils due to these hydrogen bonds.",
    keywords: ["hydrogen bonds", "alpha helix", "beta pleated sheet", "peptide bond", "secondary structure"],
    topic: "Biological Molecules",
    xp: 10,
  },
  {
    id: 5,
    question: "What is the net gain of ATP from the complete oxidation of one glucose molecule during aerobic respiration?",
    options: [
      { id: "A", text: "2 ATP" },
      { id: "B", text: "36–38 ATP" },
      { id: "C", text: "10 ATP" },
      { id: "D", text: "4 ATP" },
    ],
    correctAnswer: "B",
    explanation:
      "The complete aerobic oxidation of one glucose molecule yields approximately 36–38 ATP. This comes from glycolysis (net 2 ATP + 2 NADH), the link reaction (2 NADH), the Krebs cycle (2 ATP + 6 NADH + 2 FADH₂), and oxidative phosphorylation via the electron transport chain (~32–34 ATP from NADH and FADH₂).",
    keywords: ["ATP yield", "glycolysis", "Krebs cycle", "oxidative phosphorylation", "NADH"],
    topic: "Energy Transfers",
    xp: 10,
  },
  {
    id: 6,
    question: "In the Hardy-Weinberg equation, if the frequency of the dominant allele (p) is 0.7, what is the frequency of homozygous recessive individuals (q²)?",
    options: [
      { id: "A", text: "0.09" },
      { id: "B", text: "0.49" },
      { id: "C", text: "0.30" },
      { id: "D", text: "0.42" },
    ],
    correctAnswer: "A",
    explanation:
      "Using Hardy-Weinberg: p + q = 1, so q = 1 − 0.7 = 0.3. The frequency of homozygous recessive individuals = q² = 0.3² = 0.09 (9%). The Hardy-Weinberg principle assumes no mutation, no selection, random mating, no genetic drift, and no gene flow.",
    keywords: ["Hardy-Weinberg", "allele frequency", "homozygous recessive", "q²", "population genetics"],
    topic: "Genetics, Populations, Evolution",
    xp: 10,
  },
  {
    id: 7,
    question: "Which of the following correctly describes the process of transcription?",
    options: [
      { id: "A", text: "mRNA is used as a template to produce a polypeptide at the ribosome" },
      { id: "B", text: "The antisense strand of DNA is used as a template to synthesise an mRNA molecule" },
      { id: "C", text: "tRNA anticodons pair with mRNA codons to add amino acids" },
      { id: "D", text: "DNA polymerase synthesises a complementary DNA strand during replication" },
    ],
    correctAnswer: "B",
    explanation:
      "During transcription, RNA polymerase binds to the promoter region and uses the antisense (template) strand of DNA as a template. Free RNA nucleotides align by complementary base pairing (A-U, T-A, G-C) and are joined by phosphodiester bonds, producing a pre-mRNA molecule which is then processed (splicing of introns) to form mature mRNA.",
    keywords: ["antisense strand", "RNA polymerase", "transcription", "mRNA", "complementary base pairing"],
    topic: "Genetic Information",
    xp: 10,
  },
  {
    id: 8,
    question: "What is the role of the sodium-potassium pump in maintaining the resting potential of a neurone?",
    options: [
      { id: "A", text: "It moves 3 Na⁺ out and 2 K⁺ in, maintaining a negative internal charge" },
      { id: "B", text: "It moves 2 Na⁺ out and 3 K⁺ in, depolarising the membrane" },
      { id: "C", text: "It opens voltage-gated Na⁺ channels during an action potential" },
      { id: "D", text: "It synthesises ATP to power nerve impulse transmission" },
    ],
    correctAnswer: "A",
    explanation:
      "The sodium-potassium pump actively transports 3 Na⁺ ions out of and 2 K⁺ ions into the neurone per cycle, using one ATP molecule. This electrochemical gradient, along with K⁺ leaking out through K⁺ leak channels, maintains the resting potential of approximately −70 mV (negative inside relative to outside).",
    keywords: ["sodium-potassium pump", "resting potential", "Na⁺", "K⁺", "active transport", "−70 mV"],
    topic: "Organisms Respond to Changes",
    xp: 10,
  },
  {
    id: 9,
    question: "Which of the following is NOT a function of water in living organisms?",
    options: [
      { id: "A", text: "Acts as a solvent for metabolic reactions" },
      { id: "B", text: "Provides structural support via hydrogen bonding in cell walls" },
      { id: "C", text: "Acts as a reactant in hydrolysis reactions" },
      { id: "D", text: "High specific heat capacity buffers temperature changes" },
    ],
    correctAnswer: "B",
    explanation:
      "Water does not provide structural support in cell walls — this is the role of cellulose (in plant cell walls) or chitin. Water's properties include being a solvent (polar molecule dissolves ionic/polar substances), a reactant in hydrolysis and photosynthesis, and a transport medium. Its high specific heat capacity and latent heat of vaporisation also aid thermoregulation.",
    keywords: ["water", "solvent", "hydrolysis", "specific heat capacity", "hydrogen bonds"],
    topic: "Biological Molecules",
    xp: 10,
  },
  {
    id: 10,
    question: "What is the function of telomeres in eukaryotic chromosomes?",
    options: [
      { id: "A", text: "They act as origins of replication for DNA polymerase" },
      { id: "B", text: "They protect coding sequences from shortening during DNA replication" },
      { id: "C", text: "They encode for ribosomal RNA subunits" },
      { id: "D", text: "They contain promoter sequences for RNA polymerase binding" },
    ],
    correctAnswer: "B",
    explanation:
      "Telomeres are repetitive non-coding DNA sequences (TTAGGG in humans) at the ends of chromosomes. Because DNA polymerase cannot replicate the very ends of linear chromosomes, chromosomes shorten with each cell division. Telomeres act as 'buffer' sequences so coding DNA is not lost. Telomerase (active in stem cells and cancer cells) can restore telomere length.",
    keywords: ["telomeres", "chromosome shortening", "non-coding DNA", "replication", "telomerase"],
    topic: "Genetic Information",
    xp: 10,
  },
];
