"use client";

import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";
import SmallTitle from "../ui/SmallTitle";
import { useScrollAnimation, getAnimationClasses } from "../ui/useScrollAnimation";

const stats = [
  { value: "10K+", label: "Future Explorers" },
  { value: "50K+", label: "Futures Generated" },
  { value: "5.0", label: "App Rating" },
];

const testimonials = [
  {
    quote:
      "My Time Jump made a decision I had been avoiding feel surprisingly clear.",
    name: "Aisha R.",
    location: "Brooklyn, NY",
  },
  {
    quote:
      "My Time Jump made a decision I had been avoiding feel surprisingly clear.",
    name: "Aisha R.",
    location: "Brooklyn, NY",
  },
  {
    quote:
      "My Time Jump made a decision I had been avoiding feel surprisingly clear.",
    name: "Aisha R.",
    location: "Brooklyn, NY",
  },
];

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const anim = useScrollAnimation({ direction: "up", delay: index * 120, threshold: 0.1 });
  return (
    <div
      ref={anim.ref}
      className={`text-center py-6 sm:py-8 px-2 ${
        index !== stats.length - 1 ? "border-r border-[#423116]" : ""
      } ${getAnimationClasses("up", anim.isVisible)}`}
    >
      <p className="font-mono text-2xl sm:text-4xl text-white">{stat.value}</p>
      <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm text-gray-400">{stat.label}</p>
    </div>
  );
}

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const directions = ["left", "up", "right"] as const;
  const dir = directions[index];
  const anim = useScrollAnimation({ direction: dir, delay: index * 150, threshold: 0.1 });

  return (
    <div
      ref={anim.ref}
      className={`rounded-2xl border border-orange-400/40 bg-black px-6 py-7 sm:px-8 sm:py-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-400/70 hover:shadow-[0_0_30px_rgba(251,146,60,0.15)] ${getAnimationClasses(dir, anim.isVisible)}`}
    >
      <RiDoubleQuotesL className="text-3xl sm:text-4xl text-white" />
      <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white leading-relaxed">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-6 sm:mt-8">
        <p className="text-sm text-orange-200/90 font-medium">{t.name}</p>
        <p className="text-sm text-gray-400">{t.location}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const header = useScrollAnimation({ direction: "up", delay: 0, threshold: 0.1 });

  return (
    <section className="w-full bg-black py-16 sm:py-24">
      <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-[12rem]">
        {/* Heading */}
        <div
          ref={header.ref}
          className={`text-center ${getAnimationClasses("up", header.isVisible)}`}
        >
          <SmallTitle children="A growing community" classNameText="" fontSize="16px" />
          <PrimaryTitle classNameText="my-4!" children="People are changing" />
          <SecondaryTitle classNameText="my-4!" children="the way they see tomorrow." />
        </div>

        {/* Stats */}
        <div className="mt-14 sm:mt-16 grid grid-cols-3 border-y border-[#423116]">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} t={t} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
