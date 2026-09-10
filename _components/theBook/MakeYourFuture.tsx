"use client";

import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import SmallTitle from "../ui/SmallTitle";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";
import { useScrollAnimation, getAnimationClasses } from "../ui/useScrollAnimation";

export default function MakeYourFuture() {
  const center = useScrollAnimation({ direction: "up", delay: 150, threshold: 0.15 });
  const leftImg = useScrollAnimation({ direction: "left", delay: 0, threshold: 0.1 });
  const rightImg = useScrollAnimation({ direction: "right", delay: 0, threshold: 0.1 });

  return (
    <section className="relative w-full bg-black min-h-[500px] md:min-h-[600px] lg:min-h-[659px] py-16 lg:py-0">
      {/* ── LEFT: sun/fire image ── */}
      <div
        ref={leftImg.ref}
        className={`absolute inset-y-0 left-0 z-0 ${getAnimationClasses("left", leftImg.isVisible)}`}
        style={{ width: "50%" }}
      >
        <Image
          src="/images/left-bg.png"
          alt="Fiery sun background"
          fill
          sizes="50vw"
          className="object-cover object-center"
        />
        {/* fade right into black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 60%, #000 100%)",
          }}
        />
      </div>

      {/* ── RIGHT: blue planet image ── */}
      <div
        ref={rightImg.ref}
        className={`absolute inset-y-0 right-0 z-0 ${getAnimationClasses("right", rightImg.isVisible)}`}
        style={{ width: "50%" }}
      >
        <Image
          src="/images/right-bg.png"
          alt="Blue planet background"
          fill
          sizes="50vw"
          className="object-cover object-center"
        />
        {/* fade left into black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 60%, #000 100%)",
          }}
        />
      </div>

      {/* ── CENTER content ── */}
      <div className="relative z-10 flex min-h-[inherit] items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div
          ref={center.ref}
          className={`w-full rounded-[22px] border border-white/40 bg-black/20 px-5 py-10 sm:px-10 sm:py-12 md:px-14 text-center flex flex-col justify-center items-center ${getAnimationClasses("up", center.isVisible)}`}
        >
          {/* Heading */}
          <PrimaryTitle
            classNameText="my-4! text-center!"
            children="MAKE YOUR FUTURE VIVID ENOUGH"
          />
          <SecondaryTitle
            classNameText="my-7! text-center!"
            children="TO CHANGE WHAT YOU DO TODAY."
          />

          {/* Subtext */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-200/90 font-light max-w-md">
            Book it. Read it. Experience it. Then step inside your own Time
            Machine.
          </p>

          {/* CTA Button */}
          <div className="mt-7 sm:mt-9 flex justify-center">
            <PrimaryButton htmlContent="START MY TIME JUMP" isRightArrow={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
