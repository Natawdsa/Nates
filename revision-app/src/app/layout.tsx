import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar, MobileNav } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { AdSidebar } from "@/components/AdSidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ReviseIQ — AQA Biology Revision",
  description: "Free A-Level AQA Biology revision platform with quizzes, past papers, and spaced repetition.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-[#09090b] text-zinc-100 antialiased min-h-screen">
        <Sidebar />
        <MobileNav />
        <TopBar />
        <div className="lg:pl-60 pt-16 pb-20 lg:pb-0 min-h-screen">
          <div className="flex gap-6 p-4 lg:p-6 max-w-[1400px] mx-auto">
            <main className="flex-1 min-w-0">{children}</main>
            <AdSidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
