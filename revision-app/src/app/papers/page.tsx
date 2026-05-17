"use client";

import { useState } from "react";
import { ExternalLink, FileText, BookOpen } from "lucide-react";
import { a2Papers, asPapers } from "@/data/papers";

type Tab = "a2" | "as";

export default function PapersPage() {
  const [tab, setTab] = useState<Tab>("a2");
  const papers = tab === "a2" ? a2Papers : asPapers;

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-zinc-50">Past Papers</h1>
        <p className="text-sm text-zinc-400 mt-0.5">AQA Biology — all question papers and mark schemes</p>
      </div>

      <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 flex items-start gap-3">
        <BookOpen className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-indigo-300">Papers open on the AQA website. You may need to create a free AQA account to download PDFs.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-zinc-800/50 p-1 rounded-lg w-fit">
        {([["a2", "A-Level (A2)"], ["as", "AS Level"]] as [Tab, string][]).map(([val, label]) => (
          <button key={val} onClick={() => setTab(val)} className={`text-xs font-medium px-5 py-2 rounded-md transition-colors cursor-pointer ${tab === val ? "bg-[#18181b] text-zinc-100 shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}>
            {label}
          </button>
        ))}
      </div>

      {tab === "a2" && (
        <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-4 text-sm text-zinc-400">
          <strong className="text-zinc-300">A-Level (7402):</strong> 3 papers — Paper 1 (Biological processes), Paper 2 (Biological diversity), Paper 3 (Practical skills &amp; data analysis). 2 hours each.
        </div>
      )}
      {tab === "as" && (
        <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-4 text-sm text-zinc-400">
          <strong className="text-zinc-300">AS Level (7401):</strong> 2 papers — Paper 1 (Biological processes), Paper 2 (Biological diversity). 1h 30m each.
        </div>
      )}

      <div className="space-y-4">
        {papers.map((year) => (
          <div key={year.year} className="rounded-xl border border-[#27272a] bg-[#18181b] overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[#27272a]">
              <h3 className="text-sm font-bold text-zinc-100">{year.year}</h3>
              {year.isNew && <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">NEW</span>}
            </div>
            <div className="divide-y divide-[#27272a]">
              {year.paperSets.map((set) => (
                <div key={set.paperNumber} className="flex items-center gap-4 px-5 py-3.5 flex-wrap">
                  <p className="text-xs font-semibold text-zinc-400 w-16 flex-shrink-0">Paper {set.paperNumber}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {set.papers.map((paper) => (
                      <a
                        key={paper.label}
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all cursor-pointer hover:scale-[1.02] ${paper.type === "QP" ? "border-blue-500/30 bg-blue-500/5 text-blue-400 hover:bg-blue-500/10" : "border-zinc-600/50 bg-zinc-700/20 text-zinc-300 hover:bg-zinc-700/40"}`}
                      >
                        <FileText className="w-3 h-3" />
                        {paper.label}
                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-zinc-600 text-center pb-4">
        All papers link to the official AQA assessment resources page. 2020 &amp; 2021 papers are not available due to COVID exam cancellations.
      </p>
    </div>
  );
}
