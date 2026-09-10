"use client";

import React from "react";
import SecondaryTitle from "../ui/SecondaryTitle";
import PrimaryTitle from "../ui/PrimaryTitle";
import SmallTitle from "../ui/SmallTitle";
import { useScrollAnimation, getAnimationClasses } from "../ui/useScrollAnimation";

// ---- Types -----------------------------------------------------------------

type Accent = "orange" | "blue";

interface PathData {
  id: string;
  image: string;
  label: string;
  title: string;
  featuresLeft: string[];
  featuresRight: string[];
  buttonText: string;
  accent: Accent;
}

const paths: PathData[] = [
  {
    id: "future-you-want",
    image: "/images/path-1.png",
    label: "THE FUTURE YOU WANT",
    title: "A life that feels like yours.",
    featuresLeft: ["More freedom", "Greater success", "A healthier, stronger you"],
    featuresRight: ["Deeper relationships", "A life you're proud of"],
    buttonText: "Choose This Future",
    accent: "orange",
  },
  {
    id: "future-to-avoid",
    image: "/images/path-2.png",
    label: "The Future You Want to Avoid",
    title: "A life that feels like yours.",
    featuresLeft: ["More freedom", "Greater success", "A healthier, stronger you"],
    featuresRight: ["Deeper relationships", "A life you're proud of"],
    buttonText: "Stay Aware",
    accent: "blue",
  },
];

const accentStyles: Record<Accent, { text: string; border: string; glow: string; check: string }> = {
  orange: {
    text: "text-orange-400",
    border: "border-orange-500/70",
    glow: "0 0 18px rgba(249,115,22,0.55), inset 0 0 12px rgba(249,115,22,0.08)",
    check: "text-green-400",
  },
  blue: {
    text: "text-blue-400",
    border: "border-blue-500/70",
    glow: "0 0 18px rgba(59,130,246,0.55), inset 0 0 12px rgba(59,130,246,0.08)",
    check: "text-green-400",
  },
};

export default function TwoPaths() {
  const header = useScrollAnimation({ direction: "up", delay: 0, threshold: 0.1 });

  return (
    <div className="min-h-screen w-full py-16 max-sm:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Heading */}
      <div
        ref={header.ref}
        className={`text-center mb-14 ${getAnimationClasses("up", header.isVisible)}`}
      >
        <SmallTitle children="THE CHOICE IS STILL YOURS" classNameText="" fontSize="16px" />
        <PrimaryTitle classNameText="my-4!" children="Two paths." />
        <SecondaryTitle classNameText="my-4!" children="Two possible futures." />
      </div>

      {/* Cards */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {paths.map((path, i) => (
          <PathCard key={path.id} path={path} index={i} />
        ))}
      </div>
    </div>
  );
}

function PathCard({ path, index }: { path: PathData; index: number }) {
  const accent = accentStyles[path.accent];
  const dir = index === 0 ? "left" : "right" as const;
  const anim = useScrollAnimation({ direction: dir, delay: index * 150, threshold: 0.1 });

  return (
    <div
      ref={anim.ref}
      className={`rounded-2xl overflow-hidden border bg-black flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${getAnimationClasses(dir, anim.isVisible)}`}
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      {/* Image */}
      <div className="relative h-72 sm:h-80 w-full bg-gray-900 overflow-hidden">
        {path.image ? (
          <img
            src={path.image}
            alt={path.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
            Image placeholder
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="px-6 pt-4 pb-6 flex-1 flex flex-col">
        <p className="text-gray-300 text-sm mb-2">{path.label}</p>
        <h3 className="text-white text-2xl font-mono font-medium mb-4">{path.title}</h3>

        <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
          <ul className="space-y-2">
            {path.featuresLeft.map((item) => (
              <FeatureItem key={item} text={item} checkClass={accent.check} />
            ))}
          </ul>
          <ul className="space-y-2">
            {path.featuresRight.map((item) => (
              <FeatureItem key={item} text={item} checkClass={accent.check} />
            ))}
          </ul>
        </div>

        {/* Button */}
        <button
          type="button"
          className={`mt-auto w-full rounded-lg border ${accent.border} bg-black/60 text-white text-sm tracking-wide font-medium py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:bg-white/5`}
          style={{ boxShadow: accent.glow }}
        >
          {path.buttonText.toUpperCase()}
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

function FeatureItem({ text, checkClass }: { text: string; checkClass: string }) {
  return (
    <li className="flex items-center gap-2 text-gray-200 text-[15px]">
      <span className={`${checkClass} text-sm`}>&#10003;</span>
      {text}
    </li>
  );
}
