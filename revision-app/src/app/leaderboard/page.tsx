"use client";

import { useState } from "react";
import { Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { globalLeaderboard, schoolLeaderboard, friendsLeaderboard, leagueTiers } from "@/data/leaderboard";

type Tab = "global" | "school" | "friends";

const leagueColor: Record<string, string> = {
  Bronze: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  Silver: "text-zinc-300 bg-zinc-500/10 border-zinc-500/20",
  Gold: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  Platinum: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  Scholar: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  Legend: "text-orange-400 bg-orange-500/10 border-orange-500/20",
};

const medalColors = ["text-yellow-400", "text-zinc-400", "text-orange-600"];

export default function LeaderboardPage() {
  const [tab, setTab] = useState<Tab>("global");

  const data = tab === "global" ? globalLeaderboard : tab === "school" ? schoolLeaderboard : friendsLeaderboard;

  // weekly reset: next Monday
  const now = new Date();
  const daysUntilMonday = (8 - now.getDay()) % 7 || 7;
  const hoursLeft = daysUntilMonday * 24 - now.getHours();

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-zinc-50">Leaderboard</h1>
        <p className="text-sm text-zinc-400 mt-0.5">Resets weekly — keep climbing</p>
      </div>

      {/* League tiers */}
      <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-5">
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">League Tiers</p>
        <div className="flex items-center gap-0 overflow-x-auto pb-1">
          {leagueTiers.map((tier, i) => (
            <div key={tier.name} className="flex items-center gap-0 flex-shrink-0">
              <div className="text-center px-4 py-2 rounded-lg">
                <div className="w-8 h-8 rounded-full mx-auto mb-1.5 flex items-center justify-center border-2" style={{ borderColor: tier.color, backgroundColor: `${tier.color}15` }}>
                  <Trophy className="w-3.5 h-3.5" style={{ color: tier.color }} />
                </div>
                <p className="text-[10px] font-semibold" style={{ color: tier.color }}>{tier.name}</p>
                <p className="text-[9px] text-zinc-500 mt-0.5">{tier.minXP.toLocaleString()}+ XP</p>
              </div>
              {i < leagueTiers.length - 1 && <div className="w-6 h-px bg-zinc-700 flex-shrink-0" />}
            </div>
          ))}
        </div>
      </div>

      {/* Reset countdown */}
      <div className="flex items-center gap-3 text-sm text-zinc-400">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Weekly reset in <span className="font-semibold text-zinc-200">{hoursLeft}h</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-zinc-800/50 p-1 rounded-lg w-fit">
        {(["global", "school", "friends"] as Tab[]).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`text-xs font-medium px-4 py-2 rounded-md capitalize transition-colors cursor-pointer ${tab === t ? "bg-[#18181b] text-zinc-100 shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}>
            {t === "school" ? "My School" : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Top 3 */}
      <div className="grid grid-cols-3 gap-3">
        {data.slice(0, 3).map((entry, i) => (
          <div key={entry.rank} className={`rounded-xl border p-4 text-center ${entry.isCurrentUser ? "border-indigo-500/40 bg-indigo-500/5" : "border-[#27272a] bg-[#18181b]"}`}>
            <p className={`text-2xl font-bold mb-2 ${medalColors[i] ?? "text-zinc-400"}`}>{i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}</p>
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold text-white mx-auto mb-2">
              {entry.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <p className="text-xs font-semibold text-zinc-100 truncate">{entry.name}</p>
            <p className="text-[10px] text-zinc-500 truncate">{entry.school}</p>
            <p className="text-sm font-bold text-indigo-400 mt-2">{entry.xp.toLocaleString()} XP</p>
            <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full border mt-1.5 ${leagueColor[entry.league] ?? ""}`}>{entry.league}</span>
          </div>
        ))}
      </div>

      {/* Full table */}
      <div className="rounded-xl border border-[#27272a] bg-[#18181b] overflow-hidden">
        <div className="divide-y divide-[#27272a]">
          {data.map((entry) => (
            <div key={entry.rank} className={`flex items-center gap-4 px-5 py-3.5 hover:bg-white/[0.02] transition-colors ${entry.isCurrentUser ? "bg-indigo-500/5 border-l-2 border-l-indigo-500" : ""}`}>
              <span className={`text-sm font-bold w-6 flex-shrink-0 ${entry.rank <= 3 ? medalColors[entry.rank - 1] : "text-zinc-500"}`}>#{entry.rank}</span>
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                {entry.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${entry.isCurrentUser ? "text-indigo-300" : "text-zinc-200"}`}>{entry.name} {entry.isCurrentUser && <span className="text-[10px] text-indigo-400">(you)</span>}</p>
                <p className="text-xs text-zinc-500 truncate">{entry.school}</p>
              </div>
              <span className={`hidden sm:inline text-[10px] font-semibold px-2 py-0.5 rounded-full border ${leagueColor[entry.league] ?? ""}`}>{entry.league}</span>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {entry.weeklyChange > 0 && <TrendingUp className="w-3 h-3 text-emerald-400" />}
                {entry.weeklyChange < 0 && <TrendingDown className="w-3 h-3 text-red-400" />}
                {entry.weeklyChange === 0 && <Minus className="w-3 h-3 text-zinc-500" />}
                <span className={`text-xs font-medium ${entry.weeklyChange > 0 ? "text-emerald-400" : entry.weeklyChange < 0 ? "text-red-400" : "text-zinc-500"}`}>
                  {entry.weeklyChange > 0 ? `+${entry.weeklyChange}` : entry.weeklyChange === 0 ? "—" : entry.weeklyChange}
                </span>
              </div>
              <p className="text-sm font-bold text-zinc-200 w-20 text-right flex-shrink-0">{entry.xp.toLocaleString()}<span className="text-[10px] font-normal text-zinc-500 ml-0.5">XP</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
