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
  buttonText: string;
  accent: Accent;
  featuresLeft?: string[];
  featuresRight?: string[];
  description?: string | React.ReactNode;
  features?: string[];
  footerText?: string;
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
    title: "What if nothing changes?",
    description: (
      <>
        Imagine looking back years from now<br />
        and wishing you had started today.
      </>
    ),
    features: [
      "Dreams still on hold.",
      "The same frustrations.",
      "Another year saying \"someday.\"",
    ],
    footerText: "Your next choice can start a different story.",
    buttonText: "START MY TIME JUMP",
    accent: "blue",
  },
];

const accentStyles: Record<Accent, { text: string; border: string; cardBorder: string; glow: string; check: string; checkIcon: string }> = {
  orange: {
    text: "text-orange-400",
    border: "border-orange-500/70",
    cardBorder: "border-orange-500/40",
    glow: "0 0 18px rgba(249,115,22,0.55), inset 0 0 12px rgba(249,115,22,0.08)",
    check: "text-green-400",
    checkIcon: "&#10003;",
  },
  blue: {
    text: "text-blue-400",
    border: "border-blue-500/70",
    cardBorder: "border-blue-500/40",
    glow: "0 0 18px rgba(59,130,246,0.55), inset 0 0 12px rgba(59,130,246,0.08)",
    check: "text-green-400",
    checkIcon: "&#10003;",
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
      className={`relative rounded-[32px] overflow-hidden border ${accent.cardBorder} flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] min-h-[500px] sm:min-h-[550px] ${getAnimationClasses(dir, anim.isVisible)}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-gray-900 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative px-6 sm:px-8 pt-4 pb-6 sm:pb-8 flex-1 flex flex-col justify-end z-10">
        <div className="mt-auto">
          <p className="text-gray-300 text-sm mb-1">{path.label}</p>
          <h3 className="text-white text-2xl sm:text-3xl font-mono font-medium mb-6">{path.title}</h3>

          {path.description && (
            <div className="text-gray-200 text-[15px] mb-4 leading-snug">
              {path.description}
            </div>
          )}

          {path.featuresLeft && path.featuresRight && (
            <div className="grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-2 mb-8">
              <ul className="space-y-2">
                {path.featuresLeft.map((item) => (
                  <FeatureItem key={item} text={item} checkClass={accent.check} checkIcon={accent.checkIcon} />
                ))}
              </ul>
              <ul className="space-y-2">
                {path.featuresRight.map((item) => (
                  <FeatureItem key={item} text={item} checkClass={accent.check} checkIcon={accent.checkIcon} />
                ))}
              </ul>
            </div>
          )}

          {path.features && (
            <ul className="list-disc pl-5 space-y-1.5 mb-4 text-gray-200 text-[15px] marker:text-gray-400">
              {path.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {path.footerText && (
            <div className="text-gray-200 text-[15px] mb-8">
              {path.footerText}
            </div>
          )}

          {/* Button */}
          <button
            type="button"
            className={`w-full rounded-lg border ${accent.border} bg-black/60 text-white text-sm tracking-wide font-medium py-3 sm:py-4 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:bg-white/5`}
            style={{ boxShadow: accent.glow }}
          >
            {path.buttonText.toUpperCase()}
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ text, checkClass, checkIcon }: { text: string; checkClass: string; checkIcon: string }) {
  return (
    <li className="flex items-center gap-2 text-gray-200 text-[15px]">
      <span className={`${checkClass} text-sm font-bold`} dangerouslySetInnerHTML={{ __html: checkIcon }} />
      {text}
    </li>
  );
}
