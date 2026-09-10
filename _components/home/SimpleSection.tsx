"use client";

import React from "react";
import { useScrollAnimation, getAnimationClasses } from "../ui/useScrollAnimation";

// ---- Types -----------------------------------------------------------------

type IconType = "gauge" | "clock" | "target";

interface StatItem {
  id: string;
  icon: IconType;
  text: string;
}

const stats: StatItem[] = [
  { id: "questions", icon: "gauge", text: "5 ADAPTIVE QUESTIONS" },
  { id: "time", icon: "clock", text: "ABOUT 2 MINUTES" },
  { id: "cta", icon: "target", text: "YOUR FUTURE STARTS NOW" },
];

export default function SimpleSection() {
  return (
    <div className="w-full">
      <div className="mx-auto flex items-center justify-center divide-x-2 divide-orange-300 px-6 py-6">
        {stats.map((stat, i) => (
          <AnimatedStat key={stat.id} stat={stat} index={i} />
        ))}
      </div>

      {/* Bottom gradient divider */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent)",
        }}
      />
    </div>
  );
}

function AnimatedStat({ stat, index }: { stat: StatItem; index: number }) {
  const anim = useScrollAnimation({ direction: "up", delay: index * 150, threshold: 0.1 });
  return (
    <div
      ref={anim.ref}
      className={`flex items-center gap-3 px-8 md:px-12 lg:px-20 xl:px-[140px] ${getAnimationClasses("up", anim.isVisible)}`}
    >
      <StatIcon type={stat.icon} />
      <span className="text-gray-300 text-sm tracking-wide font-medium whitespace-nowrap">
        {stat.text}
      </span>
    </div>
  );
}

function StatIcon({ type }: { type: IconType }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fb923c",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "gauge") {
    return (
      <svg {...common}>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 3v2" />
        <path d="M12 13l4-3" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="11" cy="13" r="8" />
      <circle cx="11" cy="13" r="3.5" />
      <path d="M17 3l2 2-4 4-2-2z" />
      <path d="M15 7l4 0" />
    </svg>
  );
}
