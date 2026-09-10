"use client";

import React from "react";
import {
  FiBriefcase,
  FiHeart,
  FiUsers,
  FiHeadphones,
  FiTarget,
  FiEdit3,
} from "react-icons/fi";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";
import SmallTitle from "../ui/SmallTitle";
import { useScrollAnimation, getAnimationClasses } from "../ui/useScrollAnimation";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay?: number;
}

function FeatureCard({ icon, title, subtitle, delay = 0 }: FeatureCardProps) {
  const anim = useScrollAnimation({ direction: "up", delay, threshold: 0.1 });
  return (
    <div
      ref={anim.ref}
      className={`rounded-xl border border-[#3a2e1f] bg-black/40 p-5 transition-all duration-300 hover:border-[#8a6a3a] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(216,185,120,0.15)] ${getAnimationClasses("up", anim.isVisible)}`}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#4a3a26] text-[#d8b978]">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
    </div>
  );
}

export default function MeetFutureTime() {
  const leftCol = useScrollAnimation({ direction: "left", delay: 100, threshold: 0.1 });
  const rightCol = useScrollAnimation({ direction: "right", delay: 200, threshold: 0.1 });

  const features: Omit<FeatureCardProps, "delay">[] = [
    { icon: <FiBriefcase size={18} />, title: "Career & money", subtitle: "Stronger than ever" },
    { icon: <FiHeart size={18} />, title: "Health & Energy", subtitle: "At your peak" },
    { icon: <FiUsers size={18} />, title: "Relationships", subtitle: "Fulfilled" },
    { icon: <FiHeadphones size={18} />, title: "Lifestyle", subtitle: "The life you designed" },
    { icon: <FiTarget size={18} />, title: "Goals & Purpose", subtitle: "Bigger impact" },
    { icon: <FiEdit3 size={18} />, title: "The Headline", subtitle: "You can change it." },
  ];

  return (
    <div id="about-manny" className="min-h-[90vh] w-full bg-black py-16 lg:py-24 max-sm:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-9">
        {/* Left: Newspaper image card */}
        <div
          ref={leftCol.ref}
          className={`flex items-center justify-center rounded-2xl border border-[#3a2e1f] bg-black p-10 h-full w-full col-span-4 ${getAnimationClasses("left", leftCol.isVisible)}`}
        >
          <div className="relative">
            <img
              src="/images/MeetFutureTime.png"
              alt="Future Times newspaper front page"
              className="relative w-72 rounded-sm shadow-2xl md:w-80 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right: Copy + features */}
        <div
          ref={rightCol.ref}
          className={`col-span-5 ${getAnimationClasses("right", rightCol.isVisible)}`}
        >
          <SmallTitle children="FUTURE TIMES" classNameText="" fontSize="12px" />

          <PrimaryTitle classNameText="my-4!" children="Meet your" />
          <SecondaryTitle classNameText="my-4!" children="Future Times." />

          <p className="mt-6 max-w-md text-gray-300">
            Your Future Times transforms your current trajectory into a
            personalized glimpse of a possible future. As your actions change,
            your trajectory can change.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={300 + i * 100} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
