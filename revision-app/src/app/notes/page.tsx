"use client";

import { useState } from "react";
import { BookOpen, Lock } from "lucide-react";
import { topics } from "@/data/topics";

const demoNotes = {
  "Carbohydrates": {
    content: [
      {
        heading: "Monosaccharides",
        body: "The simplest carbohydrates. Include glucose (C₆H₁₂O₆), fructose, and galactose. Glucose exists as α-glucose and β-glucose, differing in the position of the —OH group on carbon 1. This structural difference has profound effects on the polymers they form.",
        keyTerms: ["monosaccharide", "α-glucose", "β-glucose", "hexose sugar"],
      },
      {
        heading: "Disaccharides",
        body: "Formed by a condensation reaction between two monosaccharides, releasing water and forming a glycosidic bond. Examples: maltose (glucose + glucose), sucrose (glucose + fructose), lactose (glucose + galactose). Hydrolysis (adding water) breaks the glycosidic bond.",
        keyTerms: ["condensation reaction", "glycosidic bond", "hydrolysis", "maltose", "sucrose"],
      },
      {
        heading: "Polysaccharides",
        body: "Long chains of monosaccharides joined by glycosidic bonds. Starch (amylose + amylopectin) is the storage polysaccharide in plants. Glycogen is the storage polysaccharide in animals — highly branched for rapid hydrolysis. Cellulose, made of β-glucose, forms straight chains linked by hydrogen bonds into microfibrils for structural support.",
        keyTerms: ["starch", "glycogen", "cellulose", "amylose", "amylopectin", "microfibrils"],
      },
    ],
  },
  "Lipids": {
    content: [
      {
        heading: "Triglycerides",
        body: "Formed from one glycerol and three fatty acid molecules via ester bonds (condensation reactions). Saturated fatty acids have no C=C double bonds; unsaturated have one or more. Functions: energy storage, insulation, protection of organs.",
        keyTerms: ["triglyceride", "glycerol", "fatty acid", "ester bond", "saturated", "unsaturated"],
      },
      {
        heading: "Phospholipids",
        body: "Similar to triglycerides but one fatty acid is replaced by a phosphate group. The phosphate head is hydrophilic; the fatty acid tails are hydrophobic. This amphipathic nature causes spontaneous bilayer formation in water — the basis of all cell membranes.",
        keyTerms: ["phospholipid", "hydrophilic", "hydrophobic", "bilayer", "amphipathic"],
      },
    ],
  },
};

export default function NotesPage() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [selectedSubtopic, setSelectedSubtopic] = useState(topics[0].subtopics[0].name);

  const notes = demoNotes[selectedSubtopic as keyof typeof demoNotes];
  const hasNotes = !!notes;

  return (
    <div className="flex gap-6 h-[calc(100vh-8rem)]">
      {/* Topic sidebar */}
      <aside className="w-52 flex-shrink-0 overflow-y-auto">
        <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-3">Topics</p>
        <div className="space-y-1">
          {topics.map((topic) => (
            <div key={topic.id}>
              <button
                onClick={() => { setSelectedTopic(topic); setSelectedSubtopic(topic.subtopics[0].name); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${selectedTopic.id === topic.id ? "bg-indigo-500/10 text-indigo-400" : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"}`}
              >
                {topic.id}. {topic.name}
              </button>
              {selectedTopic.id === topic.id && (
                <div className="ml-3 mt-1 space-y-0.5">
                  {topic.subtopics.map((sub) => (
                    <button
                      key={sub.name}
                      onClick={() => setSelectedSubtopic(sub.name)}
                      className={`w-full text-left px-3 py-1.5 rounded-md text-[11px] transition-colors cursor-pointer ${selectedSubtopic === sub.name ? "text-zinc-100 bg-zinc-700/50" : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Notes content */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <h1 className="text-lg font-bold text-zinc-50">{selectedSubtopic}</h1>
            <span className="text-xs text-zinc-500">· {selectedTopic.name}</span>
          </div>

          {hasNotes ? (
            <div className="space-y-6">
              {notes.content.map((section) => (
                <div key={section.heading} className="rounded-xl border border-[#27272a] bg-[#18181b] p-6">
                  <h2 className="text-base font-semibold text-zinc-100 mb-3">{section.heading}</h2>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">{section.body}</p>
                  <div>
                    <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">Key Terms</p>
                    <div className="flex flex-wrap gap-1.5">
                      {section.keyTerms.map((term) => (
                        <span key={term} className="text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2 py-0.5 rounded">{term}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="rounded-xl border border-dashed border-zinc-700 p-8 text-center">
                <p className="text-sm text-zinc-500">More sections coming soon</p>
                <p className="text-xs text-zinc-600 mt-1">We&apos;re writing them now — check back soon</p>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-zinc-700 p-16 text-center">
              <Lock className="w-8 h-8 text-zinc-600 mx-auto mb-4" />
              <p className="text-sm font-medium text-zinc-400">Notes coming soon</p>
              <p className="text-xs text-zinc-600 mt-1 max-w-xs mx-auto">We&apos;re writing comprehensive spec-aligned notes for every subtopic. Check back soon.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
