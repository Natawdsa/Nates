"use client";

import { useState } from "react";
import { Flame, Zap, Target, Clock, Trophy, Star, CheckCircle, Lock } from "lucide-react";
import { student, recentActivity, achievements } from "@/data/student";
import { topics } from "@/data/topics";

const AVATARS = [
  { id: 1, emoji: "🦁", bg: "bg-yellow-500/20" },
  { id: 2, emoji: "🐯", bg: "bg-orange-500/20" },
  { id: 3, emoji: "🦊", bg: "bg-orange-400/20" },
  { id: 4, emoji: "🐺", bg: "bg-zinc-500/20" },
  { id: 5, emoji: "🦅", bg: "bg-blue-500/20" },
  { id: 6, emoji: "🐉", bg: "bg-emerald-500/20" },
  { id: 7, emoji: "🦋", bg: "bg-purple-500/20" },
  { id: 8, emoji: "🐬", bg: "bg-cyan-500/20" },
  { id: 9, emoji: "🦉", bg: "bg-indigo-500/20" },
  { id: 10, emoji: "🐻‍❄️", bg: "bg-sky-500/20" },
  { id: 11, emoji: "🦄", bg: "bg-pink-500/20" },
  { id: 12, emoji: "🐲", bg: "bg-green-500/20" },
  { id: 13, emoji: "🦈", bg: "bg-blue-700/20" },
  { id: 14, emoji: "🐙", bg: "bg-red-500/20" },
  { id: 15, emoji: "🦚", bg: "bg-teal-500/20" },
  { id: 16, emoji: "🐦‍🔥", bg: "bg-red-600/20" },
  { id: 17, emoji: "🧠", bg: "bg-pink-600/20" },
  { id: 18, emoji: "⚗️", bg: "bg-indigo-600/20" },
  { id: 19, emoji: "🔭", bg: "bg-blue-800/20" },
  { id: 20, emoji: "🎯", bg: "bg-red-400/20" },
];

const achievementIcon: Record<string, React.ReactNode> = {
  star: <Star className="w-4 h-4" />,
  flame: <Flame className="w-4 h-4" />,
  trophy: <Trophy className="w-4 h-4" />,
  zap: <Zap className="w-4 h-4" />,
  "check-circle": <CheckCircle className="w-4 h-4" />,
  moon: <span className="text-sm">🌙</span>,
  award: <Trophy className="w-4 h-4" />,
};

function BarChart() {
  const sorted = [...topics].sort((a, b) => b.mastery - a.mastery);
  return (
    <div className="space-y-2.5">
      {sorted.map((t) => (
        <div key={t.id} className="flex items-center gap-3">
          <p className="text-xs text-zinc-400 w-44 truncate flex-shrink-0">{t.name}</p>
          <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${t.mastery >= 80 ? "bg-emerald-500" : t.mastery >= 60 ? "bg-yellow-500" : t.mastery >= 40 ? "bg-orange-500" : "bg-red-500"}`} style={{ width: `${t.mastery}%` }} />
          </div>
          <span className="text-xs text-zinc-400 w-8 text-right">{t.mastery}%</span>
        </div>
      ))}
    </div>
  );
}

export default function ProfilePage() {
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[8]);

  const stats = [
    { label: "Total XP", value: student.xp.toLocaleString(), icon: Zap, color: "text-indigo-400" },
    { label: "Questions", value: student.totalQuestions.toLocaleString(), icon: Target, color: "text-emerald-400" },
    { label: "Accuracy", value: `${student.accuracy}%`, icon: CheckCircle, color: "text-blue-400" },
    { label: "Study Hours", value: `${student.studyHoursThisMonth}h`, icon: Clock, color: "text-purple-400" },
    { label: "Streak", value: `${student.streak} days`, icon: Flame, color: "text-orange-400" },
    { label: "Best Streak", value: `${student.bestStreak} days`, icon: Star, color: "text-yellow-400" },
  ];

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Profile header */}
      <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-6 flex items-start gap-5">
        <div className="relative flex-shrink-0">
          <button
            onClick={() => setShowAvatarPicker(true)}
            className={`w-16 h-16 rounded-full ${selectedAvatar.bg} border-2 border-indigo-500/40 flex items-center justify-center text-3xl cursor-pointer hover:border-indigo-500 transition-colors`}
          >
            {selectedAvatar.emoji}
          </button>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-indigo-500 border-2 border-[#18181b] flex items-center justify-center cursor-pointer" onClick={() => setShowAvatarPicker(true)}>
            <span className="text-[8px] text-white font-bold">✏</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-xl font-bold text-zinc-50">{student.name}</h1>
            <span className="text-xs font-semibold text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-full">{student.league}</span>
          </div>
          <p className="text-sm text-zinc-400 mt-0.5">{student.year} · {student.school}</p>
          <p className="text-xs text-zinc-500 mt-1">Member since {student.joinDate}</p>
          <div className="flex items-center gap-1.5 mt-3">
            <span className="text-xs text-zinc-400">Lvl {student.level}</span>
            <div className="flex-1 max-w-32 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: "64%" }} />
            </div>
            <span className="text-xs text-zinc-400">Lvl {student.level + 1}</span>
          </div>
        </div>
        <button onClick={() => setShowAvatarPicker(true)} className="text-xs font-medium text-indigo-400 hover:text-indigo-300 border border-indigo-500/30 px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex-shrink-0">Customise</button>
      </div>

      {/* Avatar picker modal */}
      {showAvatarPicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-semibold text-zinc-100">Choose your avatar</h3>
              <button onClick={() => setShowAvatarPicker(false)} className="text-zinc-500 hover:text-zinc-300 text-lg cursor-pointer">✕</button>
            </div>
            <div className="grid grid-cols-5 gap-2 mb-5">
              {AVATARS.map((av) => (
                <button
                  key={av.id}
                  onClick={() => setSelectedAvatar(av)}
                  className={`w-full aspect-square rounded-xl ${av.bg} flex items-center justify-center text-2xl cursor-pointer border-2 transition-all hover:scale-105 ${selectedAvatar.id === av.id ? "border-indigo-500 ring-2 ring-indigo-500/30" : "border-transparent"}`}
                >
                  {av.emoji}
                </button>
              ))}
            </div>
            <button onClick={() => setShowAvatarPicker(false)} className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-2.5 rounded-lg transition-colors cursor-pointer">Save</button>
          </div>
        </div>
      )}

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="rounded-xl border border-[#27272a] bg-[#18181b] p-4">
            <Icon className={`w-4 h-4 ${color} mb-3`} />
            <p className="text-xl font-bold text-zinc-50">{value}</p>
            <p className="text-xs text-zinc-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Topic mastery chart */}
      <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-5">
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-5">Topic Mastery</p>
        <BarChart />
      </div>

      {/* Achievements */}
      <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-5">
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Achievements</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {achievements.map((ach) => (
            <div key={ach.name} className={`rounded-xl border p-3.5 text-center ${ach.earned ? "border-indigo-500/20 bg-indigo-500/5" : "border-zinc-800 bg-zinc-800/20 opacity-50"}`}>
              <div className={`w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center ${ach.earned ? "bg-indigo-500/20 text-indigo-400" : "bg-zinc-700 text-zinc-500"}`}>
                {ach.earned ? achievementIcon[ach.icon] : <Lock className="w-4 h-4" />}
              </div>
              <p className="text-xs font-semibold text-zinc-200">{ach.name}</p>
              <p className="text-[10px] text-zinc-500 mt-0.5 leading-tight">{ach.description}</p>
              {ach.earned && ach.date && <p className="text-[9px] text-indigo-400 mt-1.5">{ach.date}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Recent quiz history */}
      <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-5">
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Recent Quizzes</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-[#27272a]">
                <th className="pb-2.5 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Topic</th>
                <th className="pb-2.5 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Score</th>
                <th className="pb-2.5 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">XP</th>
                <th className="pb-2.5 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#27272a]">
              {recentActivity.map((a, i) => {
                const pct = Math.round((a.score / a.total) * 100);
                return (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 text-zinc-200 font-medium">{a.topic}</td>
                    <td className="py-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${pct >= 70 ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>{a.score}/{a.total} ({pct}%)</span>
                    </td>
                    <td className="py-3 text-indigo-400 text-xs font-semibold">+{a.xp}</td>
                    <td className="py-3 text-zinc-500 text-xs">{a.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
