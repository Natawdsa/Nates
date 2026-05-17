"use client";

import { useState, useEffect, useCallback } from "react";
import { CheckCircle, XCircle, Zap, Clock, ChevronRight } from "lucide-react";
import { sampleQuestions } from "@/data/quiz";

type Confidence = "unsure" | "quite" | "very";
type Phase = "question" | "feedback" | "done";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("question");
  const [confidence, setConfidence] = useState<Confidence | null>(null);
  const [timeLeft, setTimeLeft] = useState(90);
  const [totalXP, setTotalXP] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showXP, setShowXP] = useState(false);

  const question = sampleQuestions[current];
  const isCorrect = selected === question?.correctAnswer;
  const progress = ((current) / sampleQuestions.length) * 100;

  const handleAnswer = (id: string) => {
    if (phase !== "question") return;
    setSelected(id);
    setPhase("feedback");
    if (id === question.correctAnswer) {
      setCorrectCount((c) => c + 1);
      setTotalXP((x) => x + question.xp);
      setShowXP(true);
      setTimeout(() => setShowXP(false), 1200);
    }
  };

  const next = useCallback(() => {
    if (current + 1 >= sampleQuestions.length) {
      setPhase("done");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setPhase("question");
      setConfidence(null);
      setTimeLeft(90);
    }
  }, [current]);

  useEffect(() => {
    if (phase !== "question") return;
    if (timeLeft <= 0) { handleAnswer(""); return; }
    const t = setTimeout(() => setTimeLeft((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, phase]);

  if (phase === "done") {
    const acc = Math.round((correctCount / sampleQuestions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto">
        <div className="rounded-2xl border border-[#27272a] bg-[#18181b] p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-50 mb-2">Quiz Complete!</h2>
          <p className="text-zinc-400 mb-8">Here&apos;s how you did</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="rounded-xl bg-zinc-800/50 border border-zinc-700 p-4">
              <p className="text-2xl font-bold text-zinc-50">{correctCount}/{sampleQuestions.length}</p>
              <p className="text-xs text-zinc-400 mt-1">Correct</p>
            </div>
            <div className="rounded-xl bg-zinc-800/50 border border-zinc-700 p-4">
              <p className="text-2xl font-bold text-indigo-400">+{totalXP}</p>
              <p className="text-xs text-zinc-400 mt-1">XP Earned</p>
            </div>
            <div className="rounded-xl bg-zinc-800/50 border border-zinc-700 p-4">
              <p className={`text-2xl font-bold ${acc >= 70 ? "text-emerald-400" : "text-red-400"}`}>{acc}%</p>
              <p className="text-xs text-zinc-400 mt-1">Accuracy</p>
            </div>
          </div>
          <button onClick={() => { setCurrent(0); setSelected(null); setPhase("question"); setConfidence(null); setTimeLeft(90); setTotalXP(0); setCorrectCount(0); }} className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors cursor-pointer">Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      {/* Header bar */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex items-center gap-1.5 text-sm font-medium text-zinc-400">
          <Clock className={`w-4 h-4 ${timeLeft <= 15 ? "text-red-400" : "text-zinc-500"}`} />
          <span className={timeLeft <= 15 ? "text-red-400 font-bold" : ""}>{timeLeft}s</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
          <Zap className="w-3 h-3" />+{totalXP} XP
        </div>
      </div>

      {/* Question counter */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-zinc-500">Question {current + 1} of {sampleQuestions.length}</p>
        <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider border border-zinc-700 px-2 py-1 rounded">{question.topic}</span>
      </div>

      {/* Question card */}
      <div className="rounded-2xl border border-[#27272a] bg-[#18181b] p-6 space-y-5">
        <p className="text-base font-medium text-zinc-100 leading-relaxed">{question.question}</p>

        <div className="space-y-2.5">
          {question.options.map((opt) => {
            const isSelected = selected === opt.id;
            const correct = opt.id === question.correctAnswer;
            let cls = "border border-[#27272a] bg-zinc-800/30 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800";
            if (phase === "feedback") {
              if (correct) cls = "border-emerald-500 bg-emerald-500/10 text-emerald-300";
              else if (isSelected && !correct) cls = "border-red-500 bg-red-500/10 text-red-300";
              else cls = "border-[#27272a] bg-zinc-800/20 text-zinc-500 opacity-60";
            }
            return (
              <button
                key={opt.id}
                onClick={() => handleAnswer(opt.id)}
                disabled={phase === "feedback"}
                className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-150 cursor-pointer disabled:cursor-default ${cls}`}
              >
                <span className="w-6 h-6 rounded-md border border-current flex items-center justify-center text-xs font-bold flex-shrink-0">{opt.id}</span>
                <span className="text-sm">{opt.text}</span>
                {phase === "feedback" && correct && <CheckCircle className="w-4 h-4 text-emerald-400 ml-auto flex-shrink-0" />}
                {phase === "feedback" && isSelected && !correct && <XCircle className="w-4 h-4 text-red-400 ml-auto flex-shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* XP pop */}
      {showXP && (
        <div className="fixed top-24 right-8 z-50 bg-indigo-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
          +{question.xp} XP ⚡
        </div>
      )}

      {/* Feedback panel */}
      {phase === "feedback" && (
        <div className={`rounded-xl border p-5 space-y-4 ${isCorrect ? "border-emerald-500/30 bg-emerald-500/5" : "border-red-500/30 bg-red-500/5"}`}>
          <div className="flex items-center gap-2">
            {isCorrect ? <CheckCircle className="w-5 h-5 text-emerald-400" /> : <XCircle className="w-5 h-5 text-red-400" />}
            <p className={`font-semibold text-sm ${isCorrect ? "text-emerald-400" : "text-red-400"}`}>{isCorrect ? "Correct!" : "Not quite."}</p>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed">{question.explanation}</p>
          <div>
            <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">Key Terms</p>
            <div className="flex flex-wrap gap-1.5">
              {question.keywords.map((kw) => (
                <span key={kw} className="text-xs bg-yellow-400/10 text-yellow-300 border border-yellow-400/20 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">How confident were you?</p>
            <div className="flex gap-2">
              {(["unsure", "quite", "very"] as Confidence[]).map((c) => (
                <button key={c} onClick={() => setConfidence(c)} className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors cursor-pointer capitalize ${confidence === c ? "bg-indigo-500 border-indigo-500 text-white" : "border-zinc-700 text-zinc-400 hover:border-zinc-500"}`}>
                  {c === "unsure" ? "Not sure" : c === "quite" ? "Quite sure" : "Very sure"}
                </button>
              ))}
            </div>
          </div>
          <button onClick={next} className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer ml-auto">
            {current + 1 >= sampleQuestions.length ? "See Results" : "Next Question"} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
