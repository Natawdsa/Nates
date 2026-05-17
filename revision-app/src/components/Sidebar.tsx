"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FlaskConical,
  HelpCircle,
  FileText,
  BookOpen,
  Trophy,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/biology", label: "Biology", icon: FlaskConical },
  { href: "/quiz", label: "Quiz", icon: HelpCircle },
  { href: "/papers", label: "Past Papers", icon: FileText },
  { href: "/notes", label: "Notes", icon: BookOpen },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { href: "/profile", label: "Profile", icon: User },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-60 bg-[#0f0f12] border-r border-[#27272a] z-40">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 h-16 border-b border-[#27272a]">
        <div className="w-7 h-7 rounded-md bg-indigo-500 flex items-center justify-center flex-shrink-0">
          <FlaskConical className="w-4 h-4 text-white" />
        </div>
        <span className="text-[15px] font-semibold text-white tracking-tight">ReviseIQ</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest px-2 mb-2">
          Navigation
        </p>
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 cursor-pointer",
                active
                  ? "bg-indigo-500/10 text-indigo-400"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
              )}
            >
              <Icon className={cn("w-4 h-4 flex-shrink-0", active ? "text-indigo-400" : "")} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom CTA */}
      <div className="p-3 border-t border-[#27272a]">
        <div className="rounded-lg bg-indigo-500/10 border border-indigo-500/20 p-3">
          <p className="text-xs font-semibold text-indigo-300 mb-0.5">Go Premium</p>
          <p className="text-[11px] text-zinc-400 mb-2.5 leading-relaxed">
            Remove ads &amp; unlock unlimited quizzes
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white">£3.99/mo</span>
            <button className="text-[11px] font-semibold bg-indigo-500 hover:bg-indigo-400 text-white px-2.5 py-1 rounded-md transition-colors cursor-pointer">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0f0f12] border-t border-[#27272a] px-2 py-1.5">
      <div className="flex items-center justify-around">
        {navItems.slice(0, 5).map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-2 py-1 rounded-md transition-colors cursor-pointer",
                active ? "text-indigo-400" : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
