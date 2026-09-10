"use client";

import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import PrimaryButton from "../ui/PrimaryButton";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";
import SmallTitle from "../ui/SmallTitle";
import { useScrollAnimation, getAnimationClasses } from "../ui/useScrollAnimation";

export default function ItIsSomething() {
  const card = useScrollAnimation({ direction: "up", delay: 100, threshold: 0.15 });

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-black px-4 py-16 sm:py-24">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ItIsSomething.png')" }}
      />

      {/* Glass Card */}
      <div
        ref={card.ref}
        className={`relative w-full max-w-3xl rounded-[22px] border border-white/20 bg-black/60 px-6 py-10 sm:px-14 sm:py-12 text-center ${getAnimationClasses("up", card.isVisible)}`}
      >
        <SmallTitle
          children="The future isn't something you wait for"
          classNameText=""
          fontSize="16px"
        />

        <PrimaryTitle classNameText="my-4!" children="It Is something" />
        <SecondaryTitle classNameText="my-4!" children="you create." />

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-200/90 font-light">
          Your choices today are writing tomorrow&apos;s story.
        </p>

        <div className="mt-7 sm:mt-9 flex justify-center">
          <PrimaryButton htmlContent="START MY TIME JUMP" isRightArrow={true} />
        </div>
      </div>
    </section>
  );
}
