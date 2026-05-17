"use client";

import { Search, Flame, Zap } from "lucide-react";
import { student } from "@/data/student";

export function TopBar() {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-60 z-30 h-16 bg-[#09090b]/95 backdrop-blur-sm border-b border-[#27272a] flex items-center px-4 lg:px-6 gap-4">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="search"
            placeholder="Search topics, questions..."
            className="w-full bg-[#18181b] border border-[#27272a] rounded-lg pl-9 pr-4 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Streak */}
        <div className="hidden sm:flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1.5">
          <Flame className="w-3.5 h-3.5 text-orange-400" />
          <span className="text-xs font-semibold text-orange-300">{student.streak} days</span>
        </div>

        {/* XP */}
        <div className="hidden sm:flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1.5">
          <Zap className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-xs font-semibold text-indigo-300">{student.xp.toLocaleString()} XP</span>
        </div>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white cursor-pointer hover:opacity-90 transition-opacity flex-shrink-0">
          {student.avatarInitials}
        </div>
      </div>
    </header>
  );
}
