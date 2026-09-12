"use client";

import Image from "next/image";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";
import { useScrollAnimation, getAnimationClasses } from "../ui/useScrollAnimation";

type Theme = "orange" | "blue";

interface BookCardProps {
  theme: Theme;
  eyebrow: string;
  title: string;
  subheading: string;
  paragraphs: string[];
  quote?: string;
  ctaText: string;
  bgImage: string;
  bookImage: string;
  index: number;
}

const themeStyles: Record<
  Theme,
  {
    border: string;
    buttonBorder: string;
    buttonGlow: string;
    quoteText: string;
    eyebrowColor: string;
  }
> = {
  orange: {
    border: "border-[#953200]",
    buttonBorder: "border-orange-400/70",
    buttonGlow:
      "shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]",
    quoteText: "text-orange-400",
    eyebrowColor: "text-white/60",
  },
  blue: {
    border: "border-[#1590F5]",
    buttonBorder: "border-blue-400/70",
    buttonGlow:
      "shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]",
    quoteText: "text-blue-400",
    eyebrowColor: "text-white/60",
  },
};

function BookCard({
  theme,
  eyebrow,
  title,
  subheading,
  paragraphs,
  quote,
  ctaText,
  bgImage,
  bookImage,
  index,
}: BookCardProps) {
  const s = themeStyles[theme];
  const dir = index === 0 ? "left" : "right" as const;
  const anim = useScrollAnimation({ direction: dir, delay: index * 200, threshold: 0.1 });

  return (
    <div
      ref={anim.ref}
      className={`relative flex-1 min-h-[480px] overflow-visible rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] ${getAnimationClasses(dir, anim.isVisible)}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <Image
          src={bgImage}
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Border overlay */}
      <div className={`pointer-events-none absolute inset-0 rounded-2xl border ${s.border}`} />
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
        {/* Left: Book Cover Image */}
        <div className="flex w-full shrink-0 items-center justify-center sm:w-[180px] md:w-[180px]">
          <div className="[perspective:1000px]">
            <div
              className={`relative overflow-hidden rounded-r-md rounded-l-sm [transform:rotateY(-15deg)] transition-transform duration-500 hover:[transform:rotateY(0deg)]
                ${
                  theme === "orange"
                    ? "shadow-[8px_8px_40px_rgba(249,115,22,0.5)]"
                    : "shadow-[8px_8px_40px_rgba(59,130,246,0.5)]"
                }
              `}
              style={{ width: 155, height: 260 }}
            >
              <Image
                src={bookImage}
                alt={title}
                fill
                className="object-cover object-top"
                sizes="180px"
              />
              {/* Spine shadow overlay */}
              <div className="absolute left-0 top-0 h-full w-5 bg-gradient-to-r from-black/70 to-transparent" />
              {/* Page edge */}
              <div className="absolute -right-[7px] top-[3px] h-[calc(100%-6px)] w-[7px] rounded-r-sm bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-200 opacity-90" />
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full text-left">
          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${s.eyebrowColor}`}
          >
            {eyebrow}
          </p>
          <h2 className="mt-1 text-[1.6rem] font-black uppercase leading-[1.1] tracking-wide text-white sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]">
            {title}
          </h2>
          <p className="mt-3 text-[12px] font-bold uppercase leading-snug tracking-wide text-white">
            {subheading}
          </p>

          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="mt-2 text-[12px] leading-relaxed text-white/65"
            >
              {p}
            </p>
          ))}

          {quote && (
            <p
              className={`mt-3 text-[13px] font-black uppercase tracking-wide ${s.quoteText}`}
            >
              {quote}
            </p>
          )}

          <button
            type="button"
            className={`mt-5 inline-flex items-center gap-2 rounded-md border ${s.buttonBorder} bg-black/50 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-widest text-white ${s.buttonGlow} transition-all duration-300 hover:bg-black/70 hover:scale-105`}
          >
            {ctaText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ChoseJourney() {
  const header = useScrollAnimation({ direction: "up", delay: 0, threshold: 0.1 });

  return (
    <div className="min-h-screen w-full bg-black px-4 py-12 max-sm:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Header */}
      <div
        ref={header.ref}
        className={`my-12 text-center ${getAnimationClasses("up", header.isVisible)}`}
      >
        <PrimaryTitle classNameText="my-4!" children="CHOOSE YOUR" />
        <SecondaryTitle classNameText="my-4!" children="JOURNEY" />
        <p className="mx-auto mt-8 max-w-[470px] text-[20px] text-[#FFFFFF]">
          Two books. Two different paths. the same machine. Your choice
          determines the future.
        </p>
      </div>

      <div className="mx-auto flex flex-col gap-6 lg:flex-row">
        <BookCard
          theme="orange"
          eyebrow="Back From the Future —"
          title="The Philosophy"
          subheading="Where is your timeline heading?"
          paragraphs={[
            "What if you could see where your current choices are taking you before you get there?",
            "Back From the Future explores the idea behind My Time Machine: make your future vivid enough to change what you do today.",
          ]}
          ctaText="Explore the book"
          bgImage="/images/bg-philosophy.png"
          bookImage="/images/philosophy.png"
          index={0}
        />

        <BookCard
          theme="blue"
          eyebrow="My Time Machine —"
          title="The Story"
          subheading="Meet the person you&apos;re becoming."
          paragraphs={[
            "A time-travel buddy adventure with your future self.",
            "My Time Machine turns the philosophy into a cinematic time-travel adventure, discovering how seemingly small choices can change everything.",
          ]}
          ctaText="Explore the book"
          bgImage="/images/bg-story.png"
          bookImage="/images/story.png"
          index={1}
        />
      </div>
    </div>
  );
}
