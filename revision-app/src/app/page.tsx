"use client";

import Link from "next/link";
import { Flame, Zap, Target, Trophy, BookOpen, ChevronRight, Play, TrendingUp, TrendingDown, Calendar } from "lucide-react";
import { student, recentActivity } from "@/data/student";
import { topics } from "@/data/topics";

const weakTopics = topics.filter((t) => t.mastery < 60).sort((a, b) => a.mastery - b.mastery).slice(0, 3);
const inProgress = topics.find((t) => t.mastery > 30 && t.mastery < 70);

function HeatmapCard() {
  const weeks = 16;
  const days = 7;
  const cells = Array.from({ length: weeks * days }, (_, i) => {
    const r = Math.random();
    if (i > weeks * days - 14) return r > 0.3 ? Math.floor(r * 4) + 1 : 0;
    return r > 0.55 ? Math.floor(r * 3) + 1 : 0;
  });
  const intensityClass = (v: number) => {
    if (v === 0) return "bg-zinc-800";
    if (v === 1) return "bg-indigo-900/70";
    if (v === 2) return "bg-indigo-700/80";
    if (v === 3) return "bg-indigo-500";
    return "bg-indigo-400";
  };
  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }}>
      {Array.from({ length: weeks }, (_, w) =>
        Array.from({ length: days }, (_, d) => (
          <div key={`${w}-${d}`} className={`w-full aspect-square rounded-sm ${intensityClass(cells[w * days + d])}`} title={`Week ${w + 1}`} />
        ))
      )}
    </div>
  );
}

export default function Dashboard() {
  const daysUntilExam = 47;
  const xpPercent = Math.round((student.dailyXP / student.dailyXPGoal) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-50">Good afternoon, {student.firstName} 👋</h1>
          <p className="text-sm text-zinc-400 mt-0.5">You&apos;re on a {student.streak}-day streak. Keep it going.</p>
        </div>
        <Link href="/quiz" className="hidden sm:flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer flex-shrink-0">
          <Play className="w-4 h-4" /> Quick Quiz
        </Link>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Current Streak", value: `${student.streak} days`, icon: Flame, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
          { label: "Total XP", value: student.xp.toLocaleString(), icon: Zap, color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
          { label: "Accuracy", value: `${student.accuracy}%`, icon: Target, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
          { label: "Global Rank", value: `#${student.rank}`, icon: Trophy, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
        ].map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className={`rounded-xl border p-4 ${bg} bg-[#18181b]`}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-medium text-zinc-400">{label}</p>
              <Icon className={`w-4 h-4 ${color}`} />
            </div>
            <p className="text-xl font-bold text-zinc-50">{value}</p>
          </div>
        ))}
      </div>

      {/* Daily XP + Exam countdown */}
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-zinc-200">Daily XP Goal</p>
            <span className="text-xs text-zinc-400">{student.dailyXP} / {student.dailyXPGoal} XP</span>
          </div>
          <div className="h-2.5 bg-zinc-800 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-indigo-500 rounded-full transition-all" style={{ width: `${xpPercent}%` }} />
          </div>
          <p className="text-xs text-zinc-500">{student.dailyXPGoal - student.dailyXP} XP to hit today&apos;s goal</p>
        </div>
        <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-400 mb-1">Upcoming Exam</p>
            <p className="text-sm font-semibold text-zinc-100">AQA Biology Paper 1</p>
            <p className="text-2xl font-bold text-red-400 mt-0.5">{daysUntilExam} <span className="text-sm font-normal text-zinc-400">days away</span></p>
          </div>
        </div>
      </div>

      {/* Continue + Weak topics */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Continue studying */}
        <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-5">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Continue Studying</p>
          {inProgress && (
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-zinc-100 truncate">{inProgress.name}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${inProgress.mastery}%` }} />
                  </div>
                  <span className="text-xs text-zinc-400 flex-shrink-0">{inProgress.mastery}%</span>
                </div>
              </div>
              <Link href="/quiz" className="flex-shrink-0 text-xs font-semibold bg-indigo-500 hover:bg-indigo-400 text-white px-3 py-1.5 rounded-md transition-colors cursor-pointer">Resume</Link>
            </div>
          )}
        </div>

        {/* Weak topics */}
        <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-5">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Needs Attention</p>
          <div className="space-y-3">
            {weakTopics.map((topic) => (
              <div key={topic.id} className="flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-medium text-zinc-300 truncate">{topic.name}</p>
                    <span className="text-xs text-red-400 ml-2 flex-shrink-0">{topic.mastery}%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: `${topic.mastery}%` }} />
                  </div>
                </div>
                <Link href="/quiz" className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer flex-shrink-0">Practice</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Heatmap */}
      <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Revision Activity</p>
          <div className="flex items-center gap-2 text-[10px] text-zinc-500">
            <span>Less</span>
            {["bg-zinc-800", "bg-indigo-900/70", "bg-indigo-700/80", "bg-indigo-500", "bg-indigo-400"].map((c) => (
              <div key={c} className={`w-3 h-3 rounded-sm ${c}`} />
            ))}
            <span>More</span>
          </div>
        </div>
        <HeatmapCard />
      </div>

      {/* Recent activity */}
      <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Recent Activity</p>
          <Link href="/profile" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 cursor-pointer">View all <ChevronRight className="w-3 h-3" /></Link>
        </div>
        <div className="space-y-3">
          {recentActivity.map((a, i) => (
            <div key={i} className="flex items-center gap-4 py-2 border-b border-[#27272a] last:border-0">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold ${a.score / a.total >= 0.7 ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>
                {a.score}/{a.total}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-zinc-200 truncate">{a.topic}</p>
                <p className="text-xs text-zinc-500">{a.date}</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-indigo-400 flex-shrink-0">
                {a.score / a.total >= 0.7 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3 text-red-400" />}
                +{a.xp} XP
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
