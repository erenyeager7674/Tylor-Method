"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Laptop,
  BookOpen,
  Users,
  Award,
  Sparkles,
  Globe,
  TrendingUp,
  Compass,
  DollarSign,
  Briefcase,
  Target,
  Coffee,
  GraduationCap,
  Play,
  ChevronDown,
  Calendar,
} from "lucide-react";

// Icon mapping to prevent dynamic runtime lookups
const iconMap: Record<string, React.ComponentType<any>> = {
  Laptop,
  BookOpen,
  Users,
  Award,
  Sparkles,
  Globe,
  TrendingUp,
  Compass,
  DollarSign,
  Briefcase,
  Target,
  Coffee,
  GraduationCap,
  Play,
  Calendar,
};
import { journeyData } from '../lib/constants'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";


export default function JourneyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    tabRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);
  // Offset calculations for scroll pinning
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Avoid double trigger or math range errors
    const index = Math.min(
      journeyData.length - 1,
      Math.floor(latest * journeyData.length)
    );
    setActiveIndex(index);
  });

  const scrollToIndex = (index: number) => {
    if (!ref.current) return;
    const container = ref.current;
    const rect = container.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;

    // Each section is 100vh on desktop.
    const targetScroll = absoluteTop + index * window.innerHeight + 10;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const handlePhaseSelect = (phase: string) => {
    setIsDropdownOpen(false);
    const targetIndex = journeyData.findIndex((item) => item.phase === phase);
    if (targetIndex !== -1) {
      scrollToIndex(targetIndex);
    }
  };

  const active = journeyData[activeIndex];
  const phases = Array.from(new Set(journeyData.map((item) => item.phase)));

  if (!isMounted) return null;

  return (
    <section
      ref={ref}
      className="relative  text-neutral-900 transition-colors duration-300"
      style={{
        height: `${journeyData.length * 100}vh`,
      }}
    >
      {/* STICKY CONTAINER */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-10 lg:py-14">
        <h2 className="text-5xl font-bold text-center">My Journey</h2>
        {/* THREE COLUMN GRID - DESKTOP */}
        <div className="hidden lg:grid mx-auto w-full max-w-7xl grid-cols-[1.1fr_120px_1.3fr] items-center gap-12 px-8 flex-1 my-4">

          {/* LEFT COLUMN: YEAR + OVERVIEW */}
          <div className="flex flex-col h-full justify-center pr-4">

            {/* Phase Dropdown */}
            <div className="relative z-40 mb-8 self-start">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="border border-neutral-200 bg-white hover:bg-neutral-50 shadow-2xs px-5 py-2.5 rounded-2xl flex items-center gap-2 text-sm text-neutral-700 font-semibold transition cursor-pointer dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                <span>{active.phase}</span>
                <ChevronDown
                  className={`size-4 text-neutral-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-30"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-48 bg-white border border-neutral-100 rounded-2xl shadow-xl z-40 py-2 overflow-hidden dark:bg-neutral-900 dark:border-neutral-800"
                    >
                      {phases.map((phase) => (
                        <button
                          key={phase}
                          onClick={() => handlePhaseSelect(phase)}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${active.phase === phase
                            ? "bg-[var(--secondary)] text-[var(--primary)] font-semibold dark:bg-neutral-800 dark:text-white"
                            : "text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-800 font-medium"
                            }`}
                        >
                          {phase}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Giant Year Indicator with AnimatePresence */}
            <div className="h-44 flex items-end">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={active.year}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-[10rem] leading-none font-bold text-neutral-900 dark:text-white tracking-tighter flex items-start"
                >
                  {active.year}
                  <span className="text-xl font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 ml-4 mt-6">
                    {active.suffix}
                  </span>
                </motion.h3>
              </AnimatePresence>
            </div>

            {/* Title / Slogan */}
            <div className="h-28 mt-4">
              <AnimatePresence mode="wait">
                <motion.h4
                  key={active.year}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl lg:text-3xl font-bold text-neutral-800 dark:text-neutral-200 leading-tight"
                >
                  {active.headline}
                </motion.h4>
              </AnimatePresence>
            </div>

            <div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-800/80 my-5" />

            {/* Subheading / Supporting Info */}
            <div className="h-20">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.year}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-neutral-500 dark:text-neutral-400 text-sm lg:text-base leading-relaxed"
                >
                  {active.subheadline}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* CENTER TIMELINE SLIDER (5-SLOT VERTICAL STACK) */}
          <div className="relative flex h-[460px] flex-col items-center justify-between w-full">
            {Array.from({ length: 5 }).map((_, slot) => {
              const diff = slot - 2; // -2, -1, 0, 1, 2
              const index = activeIndex + diff;
              const item = journeyData[index];
              const isActive = diff === 0;
              const isNeighbor = Math.abs(diff) === 1;

              if (!item) {
                // Empty slot (near the start/end of the list) keeps spacing consistent
                return <div key={`empty-${slot}`} className="h-11 w-32" />;
              }

              return (
                <motion.div
                  key={item.year}
                  onClick={() => scrollToIndex(index)}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isActive ? 1 : isNeighbor ? 0.6 : 0.3,
                    scale: isActive ? 1.25 : isNeighbor ? 1 : 0.85,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`flex h-11 w-32 items-center justify-center cursor-pointer select-none px-4 rounded-full border transition-colors duration-300 ${isActive
                    ? "bg-[var(--primary)] border-[var(--primary)] text-white shadow-[0_8px_24px_rgba(255,90,121,0.25)]"
                    : isNeighbor
                      ? "bg-white border-neutral-200/50 text-neutral-500 shadow-2xs dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400"
                      : "bg-transparent border-transparent text-neutral-400 dark:text-neutral-600"
                    }`}
                >
                  <span className="text-xs font-bold tracking-wide">
                    {item.year}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: DETAILS + IMAGE + FACTS CAROUSEL */}
          <div className="flex flex-col h-full justify-center pl-4">

            {/* Quote and text info */}
            <div className="mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold mb-1 block">
                    Milestone Quote
                  </span>
                  <p className="text-xs italic text-neutral-500 dark:text-neutral-400 font-medium mb-3">
                    &ldquo;{active.quote}&rdquo;
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    {active.title}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs lg:text-sm mt-1.5 leading-relaxed">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>



            {/* Main Picture Wrapper */}
            <div className="relative overflow-hidden rounded-[32px] border border-neutral-200/80 bg-white shadow-lg aspect-[4/3] w-full group dark:border-neutral-800 dark:bg-neutral-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.year}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-950/15 transition-opacity duration-300 group-hover:bg-neutral-950/25" />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>



        <div className="lg:hidden flex flex-col flex-1 overflow-y-auto px-6 mt-6 pb-8 gap-6 scrollbar-none">

          {/* Phase and Year Selection (Static indicator or taps to scroll) */}
          <div className="flex items-center justify-between gap-4 py-2 border-b border-neutral-200/60 dark:border-neutral-800">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
              {active.phase}
            </span>
            <div className="flex gap-2.5 overflow-x-auto max-w-[200px] scrollbar-none">
              {journeyData.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={item.year}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    onClick={() => scrollToIndex(index)}
                    className={`text-xs font-bold px-2 py-1 rounded-full transition-colors cursor-pointer ${isActive
                      ? "bg-[var(--primary)] text-white"
                      : "text-neutral-400 dark:text-neutral-600"
                      }`}
                  >
                    {item.year}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Giant Year representation */}
          <div className="flex items-baseline justify-between gap-2 mt-2">
            <h3 className="text-7xl font-extrabold text-neutral-900 dark:text-white tracking-tighter leading-none">
              {active.year}
            </h3>
            <span className="text-sm font-bold uppercase tracking-widest text-neutral-400">
              {active.suffix}
            </span>
          </div>

          {/* Active content details */}
          <div>
            <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 leading-tight">
              {active.headline}
            </h4>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-3 leading-relaxed">
              {active.description}
            </p>
            {active.quote && (
              <p className="text-xs italic text-neutral-400 mt-4 border-l-2 border-[var(--primary)] pl-3">
                &ldquo;{active.quote}&rdquo;
              </p>
            )}
          </div>


          <Dialog>
            <DialogTrigger asChild>
              <div className="relative overflow-hidden rounded-[24px] border border-neutral-200/80 bg-white shadow-md w-full aspect-video group dark:border-neutral-800 dark:bg-neutral-950 cursor-zoom-in transition-transform hover:scale-[1.01]">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover"
                />
                {/* Visual Indicator Hint for User */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 dark:bg-neutral-900/90 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm text-neutral-800 dark:text-neutral-200">
                    Click to expand
                  </span>
                </div>
              </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-neutral-950 border-neutral-800 rounded-[24px]">
              <DialogHeader className="p-6 pb-4 text-left">
                <DialogTitle className="text-lg font-bold text-white leading-tight">
                  {active.headline}
                </DialogTitle>
                <DialogDescription className="text-xs text-neutral-400 mt-1">
                  {active.year} {active.suffix} — {active.phase}
                </DialogDescription>
              </DialogHeader>

              {/* Full resolution / complete picture container inside popup */}
              <div className="relative w-full h-[400px] bg-neutral-900 border-t border-neutral-800">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-contain" // Uses contain so the entire wide picture displays safely
                />
              </div>

              {active.description && (
                <div className="p-6 pt-4 bg-neutral-950">
                  <p className="text-neutral-300 text-xs leading-relaxed">
                    {active.description}
                  </p>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>

      </div>
    </section>
  );
}