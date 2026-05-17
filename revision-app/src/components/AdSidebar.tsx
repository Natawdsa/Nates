import { Sparkles, ExternalLink } from "lucide-react";

export function AdSidebar() {
  return (
    <aside className="hidden xl:flex flex-col w-44 flex-shrink-0 gap-4">
      {/* Ad unit */}
      <div className="rounded-xl border border-[#27272a] bg-[#18181b] overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#27272a]/50">
          <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">Sponsored</span>
        </div>
        <div className="p-3">
          <div className="w-full h-20 rounded-lg bg-gradient-to-br from-blue-900/50 to-blue-800/30 border border-blue-700/20 flex items-center justify-center mb-3">
            <span className="text-2xl">🎓</span>
          </div>
          <p className="text-xs font-semibold text-zinc-200 mb-1">Uni Compare</p>
          <p className="text-[11px] text-zinc-400 leading-relaxed mb-2.5">
            Find your perfect university match
          </p>
          <a
            href="https://www.unicompare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-medium text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
          >
            Explore now <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Second ad */}
      <div className="rounded-xl border border-[#27272a] bg-[#18181b] overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#27272a]/50">
          <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">Sponsored</span>
        </div>
        <div className="p-3">
          <div className="w-full h-20 rounded-lg bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 border border-emerald-700/20 flex items-center justify-center mb-3">
            <span className="text-2xl">📚</span>
          </div>
          <p className="text-xs font-semibold text-zinc-200 mb-1">CGP Books</p>
          <p className="text-[11px] text-zinc-400 leading-relaxed mb-2.5">
            AQA Biology revision guides
          </p>
          <a
            href="https://www.cgpbooks.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-medium text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
          >
            Shop now <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Upgrade CTA */}
      <div className="rounded-xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/10 to-indigo-600/5 p-3">
        <div className="flex items-center gap-1.5 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-xs font-semibold text-indigo-300">Go Premium</span>
        </div>
        <ul className="space-y-1 mb-3">
          {["Remove all ads", "Unlimited quizzes", "Full notes access", "Priority support"].map((item) => (
            <li key={item} className="flex items-center gap-1.5 text-[11px] text-zinc-400">
              <span className="w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <button className="w-full text-[11px] font-semibold bg-indigo-500 hover:bg-indigo-400 text-white py-2 rounded-md transition-colors cursor-pointer">
          £3.99/month
        </button>
      </div>
    </aside>
  );
}
