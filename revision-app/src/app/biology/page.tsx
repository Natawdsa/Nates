"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Clock, Zap } from "lucide-react";
import { topics, type Topic } from "@/data/topics";

type Filter = "all" | "notStarted" | "inProgress" | "mastered";

const difficultyColor = { Easy: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", Medium: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", Hard: "text-red-400 bg-red-500/10 border-red-500/20" };

function masteryColor(m: number) {
  if (m >= 80) return "bg-emerald-500";
  if (m >= 60) return "bg-yellow-500";
  if (m >= 40) return "bg-orange-500";
  return "bg-red-500";
}

function TopicCard({ topic }: { topic: Topic }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-[#27272a] bg-[#18181b] overflow-hidden hover:border-zinc-600 transition-colors">
      <button className="w-full text-left p-5 cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="text-sm font-semibold text-zinc-100">{topic.name}</h3>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${difficultyColor[topic.difficulty]}`}>{topic.difficulty}</span>
            </div>
            <p className="text-xs text-zinc-500">{topic.subtopics.length} subtopics</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-right">
              <p className="text-lg font-bold text-zinc-50">{topic.mastery}%</p>
              <p className="text-[10px] text-zinc-500">mastery</p>
            </div>
            {open ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
          </div>
        </div>
        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div className={`h-full rounded-full transition-all ${masteryColor(topic.mastery)}`} style={{ width: `${topic.mastery}%` }} />
        </div>
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1.5 text-xs text-zinc-500">
            <Clock className="w-3 h-3" />
            <span>~{topic.estimatedHours}h left</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-500">
            <Zap className="w-3 h-3" />
            <span>{topic.mastery >= 80 ? "Mastered" : topic.mastery >= 40 ? "In Progress" : "Not Started"}</span>
          </div>
        </div>
      </button>

      {open && (
        <div className="border-t border-[#27272a] px-5 py-4 space-y-3">
          {topic.subtopics.map((sub) => (
            <div key={sub.name} className="flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs text-zinc-300">{sub.name}</p>
                  <span className="text-xs text-zinc-400 ml-2">{sub.mastery}%</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${masteryColor(sub.mastery)}`} style={{ width: `${sub.mastery}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BiologyPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = topics.filter((t) => {
    if (filter === "notStarted") return t.mastery < 20;
    if (filter === "inProgress") return t.mastery >= 20 && t.mastery < 80;
    if (filter === "mastered") return t.mastery >= 80;
    return true;
  });

  const overall = Math.round(topics.reduce((s, t) => s + t.mastery, 0) / topics.length);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-50">AQA A-Level Biology</h1>
        <p className="text-sm text-zinc-400 mt-0.5">Year 1 &amp; Year 2 — All 8 modules</p>
      </div>

      {/* Overall progress */}
      <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm font-semibold text-zinc-200">Overall Progress</p>
            <p className="text-xs text-zinc-500 mt-0.5">{topics.filter((t) => t.mastery >= 80).length} of {topics.length} topics mastered</p>
          </div>
          <p className="text-3xl font-bold text-zinc-50">{overall}%</p>
        </div>
        <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${overall}%` }} />
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {([["all", "All Topics"], ["notStarted", "Not Started"], ["inProgress", "In Progress"], ["mastered", "Mastered"]] as [Filter, string][]).map(([val, label]) => (
          <button
            key={val}
            onClick={() => setFilter(val)}
            className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${filter === val ? "bg-indigo-500 border-indigo-500 text-white" : "border-[#27272a] text-zinc-400 hover:text-zinc-200 hover:border-zinc-600"}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Topic grid */}
      <div className="grid lg:grid-cols-2 gap-4">
        {filtered.map((topic) => <TopicCard key={topic.id} topic={topic} />)}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-16 text-zinc-500">
          <p className="text-sm">No topics match this filter.</p>
        </div>
      )}
    </div>
  );
}
