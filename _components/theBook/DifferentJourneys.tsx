import React from "react";
import {
  PiBrainLight,
  PiBookOpenLight,
  PiDeviceMobileLight,
} from "react-icons/pi";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";

/* single neon-white glow applied to every icon */
const neonIcon = "text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] drop-shadow-[0_0_18px_rgba(255,210,120,0.7)]";

interface JourneyItem {
  icon: React.ElementType;
  title: string;
  lines: string[];
}

const items: JourneyItem[] = [
  {
    icon: PiBrainLight,
    title: "The Philosophy",
    lines: ["Back From the Future", "explains the idea."],
  },
  {
    icon: PiBookOpenLight,
    title: "The Story",
    lines: ["My Time Machine", "tells the story."],
  },
  {
    icon: PiDeviceMobileLight,
    title: "The Experience",
    lines: ["The My Time Machine app", "lets you do it for yourself."],
  },
];

export default function DifferentJourneys() {
  return (
    <div className="w-full bg-black py-16 max-sm:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Heading */}
      <PrimaryTitle
        classNameText="my-4! whitespace-nowrap! text-center!"
        children="TWO DIFFERENT JOURNEYS."
      />
      <SecondaryTitle
        classNameText="my-4! whitespace-nowrap! text-center!"
        children="ONE BIG IDEA."
      />

      <div className="relative mx-auto mt-16">
        {/* top glowing line — warm amber neon */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/80 to-transparent shadow-[0_0_10px_rgba(251,191,36,0.6)]" />

        <div className="grid grid-cols-1 sm:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`relative flex flex-col items-center px-8 pb-12 pt-12 text-center ${
                  i !== 0
                    ? "sm:border-l sm:border-amber-500/30"
                    : ""
                }`}
              >
                <Icon
                  className={`h-16 w-16 ${neonIcon}`}
                />
                <h3 className="mt-6 text-base font-bold uppercase tracking-widest text-white">
                  {item.title}
                </h3>
                <div className="mt-3 space-y-0.5">
                  {item.lines.map((line, li) => (
                    <p key={li} className="text-sm text-white/55">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
