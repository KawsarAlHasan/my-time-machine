import Image from "next/image";
import SmallTitle from "../ui/SmallTitle";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";

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
}: BookCardProps) {
  const s = themeStyles[theme];

  return (
    <div
      className={`relative flex-1 h-[536px] overflow-hidden rounded-2xl border ${s.border}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
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
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
        {/* Left: Book Cover Image */}
        <div className="flex w-full shrink-0 items-center justify-center sm:w-[200px] md:w-[200px]">
          <div className="[perspective:1000px]">
            <div
              className={`relative overflow-hidden rounded-r-md rounded-l-sm [transform:rotateY(-15deg)]
                ${
                  theme === "orange"
                    ? "shadow-[8px_8px_40px_rgba(249,115,22,0.5)]"
                    : "shadow-[8px_8px_40px_rgba(59,130,246,0.5)]"
                }
              `}
              style={{ width: 175, height: 290 }}
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
            className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${s.eyebrowColor}`}
          >
            {eyebrow}
          </p>
          <h2 className="mt-1 text-[2rem] font-black uppercase leading-[1.1] tracking-wide text-white sm:text-[2.2rem] md:text-[2.6rem]">
            {title}
          </h2>
          <p className="mt-4 text-[13px] font-bold uppercase leading-snug tracking-wide text-white">
            {subheading}
          </p>

          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="mt-3 text-[13px] leading-relaxed text-white/65"
            >
              {p}
            </p>
          ))}

          {quote && (
            <p
              className={`mt-4 text-[14px] font-black uppercase tracking-wide ${s.quoteText}`}
            >
              {quote}
            </p>
          )}

          <button
            type="button"
            className={`mt-6 inline-flex items-center gap-2 rounded-md border ${s.buttonBorder} bg-black/50 px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-white ${s.buttonGlow} transition-all duration-300 hover:bg-black/70`}
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
  return (
    <div className="min-h-screen w-full bg-black px-4 py-12 max-sm:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Header */}
      <div className="my-12 text-center">
        <SmallTitle children="THE SIMPLE PROCESS" classNameText="" />
        <PrimaryTitle classNameText="my-4!" children="CHOSE YOUR" />
        <SecondaryTitle classNameText="my-4!" children="JOURNEY" />
        <p className="mx-auto mt-8 max-w-[470px] text-[20px] text-[#FFFFFF]">
          Two books. Two different paths. the same machine. Your choice
          determines the future.
        </p>
      </div>

      <div className="mx-auto flex flex-col gap-6 lg:flex-row">
        <BookCard
          theme="orange"
          eyebrow="Back From the Future -"
          title="The Philosophy"
          subheading="How small daily decisions create radically different timelines"
          paragraphs={[
            "What if you could see where your current choices are taking you before you get there?",
            "Back From the Future explores the idea behind My Time Machine: make your future vivid enough to change what you do today.",
          ]}
          quote="See the future you are creating"
          ctaText="Explore the book"
          bgImage="/images/bg-philosophy.png"
          bookImage="/images/philosophy.png"
        />

        <BookCard
          theme="blue"
          eyebrow="My Time Machine"
          title="The Story"
          subheading="How small daily decisions create radically different timelines"
          paragraphs={[
            "A time-travel buddy adventure with your future self .!",
            "My Time Machine turns the philosophy into a cinematic time-travel adventure, discovering how seemingly small choices can change everything.",
          ]}
          quote="Meet the person you are becoming."
          ctaText="Explore the book"
          bgImage="/images/bg-story.png"
          bookImage="/images/story.png"
        />
      </div>
    </div>
  );
}
