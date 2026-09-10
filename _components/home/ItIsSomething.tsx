import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import PrimaryButton from "../ui/PrimaryButton";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";
import SmallTitle from "../ui/SmallTitle";

export default function ItIsSomething() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-black px-4 py-16 sm:py-24">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ItIsSomething.png')" }}
      />

      {/* Glass Card */}
      <div className="relative w-full max-w-3xl rounded-[22px] border border-white/20 bg-black/60 px-6 py-10 sm:px-14 sm:py-12 text-center">
        {/* Eyebrow */}
        {/* <p className="text-[10px] sm:text-xs tracking-[0.25em] text-gray-200/80 uppercase mb-4 sm:mb-5 font-light">
          The future isn&apos;t something you wait for
        </p> */}

        <SmallTitle
          children="The future isn't something you wait for"
          classNameText=""
          fontSize="16px"
        />

        {/* Heading */}
        <PrimaryTitle
          classNameText="my-4! whitespace-nowrap!"
          children="It Is something"
        />
        <SecondaryTitle
          classNameText="my-4! whitespace-nowrap!"
          children="you create."
        />

        {/* Subtext */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-200/90 font-light">
          Your choices today are writing tomorrow&apos;s story.
        </p>

        {/* CTA Button */}
        <div className="mt-7 sm:mt-9 flex justify-center">
          {/* Primary */}
          <PrimaryButton htmlContent="START MY TIME JUMP" isRightArrow={true} />
        </div>
      </div>
    </section>
  );
}
