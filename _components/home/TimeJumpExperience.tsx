"use client";

import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import PrimaryButton from "../ui/PrimaryButton";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";
import SmallTitle from "../ui/SmallTitle";
import { useScrollAnimation, getAnimationClasses } from "../ui/useScrollAnimation";

function ArrowLine() {
  return (
    <div className="mx-3 flex flex-1 items-center sm:mx-5">
      <span className="h-px w-full bg-white/60" />
      <HiArrowRight className="-ml-1 h-4 w-4 shrink-0 text-white/80" />
    </div>
  );
}

export default function TimeJumpExperience() {
  const left = useScrollAnimation({ direction: "left", delay: 150, threshold: 0.1 });
  const bottom = useScrollAnimation({ direction: "up", delay: 400, threshold: 0.05 });

  return (
    <section id="the-app" className="relative w-full overflow-hidden bg-black min-h-[550px] md:min-h-[600px] lg:h-[70vh] lg:min-h-[650px] border-y border-[#423116]">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/TimeJumpExperience.png"
          alt="Two glowing timeline portals with a silhouetted figure standing between them"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content grid */}
      <div className="relative z-10 mx-auto grid h-full grid-cols-1 items-center px-6 lg:grid-cols-2 lg:px-48">
        {/* ── LEFT: copy ── */}
        <div
          ref={left.ref}
          className={`flex flex-col justify-center py-20 lg:py-0 ${getAnimationClasses("left", left.isVisible)}`}
        >
          <div className="max-w-xl w-full">
            <SmallTitle children="YOUR FUTURE IS WAITING" classNameText="" fontSize="12px" />

            <PrimaryTitle classNameText="my-4! whitespace-nowrap!" children="Start your" />
            <SecondaryTitle classNameText="my-4! whitespace-nowrap!" children="Time Jump." />

            <p className="text-gray-300/90 text-lg mt-8 max-w-md">
              Take your first Time Jump and discover where your choices could lead.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <PrimaryButton htmlContent="START MY TIME JUMP" isRightArrow={true} />
            </div>
          </div>
        </div>

        {/* Right column kept empty so the background image (portal) shows through */}
        <div className="hidden h-full lg:block" />
      </div>

      {/* ── BOTTOM: Your Past → Your Choices → Your Future ── */}
      <div
        ref={bottom.ref}
        className={`absolute inset-x-0 bottom-6 z-20 sm:bottom-10 max-sm:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ${getAnimationClasses("up", bottom.isVisible)}`}
      >
        <div className="flex items-center justify-end gap-2 px-6 sm:px-10 lg:pl-[46%] lg:pr-16">
          <span className="shrink-0 text-xs font-bold uppercase tracking-widest text-white/90 sm:text-sm">
            Your Past
          </span>

          <ArrowLine />

          <span className="shrink-0 text-xs font-bold uppercase tracking-widest text-white/90 sm:text-sm">
            Your Choices
          </span>

          <ArrowLine />

          <span className="shrink-0 text-xs font-bold uppercase tracking-widest text-blue-400 sm:text-sm">
            Your Future
          </span>
        </div>
      </div>
    </section>
  );
}
