"use client";

import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import {
  useScrollAnimation,
  getAnimationClasses,
} from "../ui/useScrollAnimation";

export default function Hero() {
  const left = useScrollAnimation({ direction: "left", delay: 100 });
  const right = useScrollAnimation({ direction: "right", delay: 300 });

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/book-hero.png"
          alt="Futuristic cityscape with glowing timelines"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Content grid */}
      <div
        className="relative z-10 mx-auto grid grid-cols-1 items-center px-4 sm:px-8 md:px-12 lg:grid-cols-2 lg:px-20 xl:px-48"
        style={{ minHeight: "calc(100vh - 72px)" }}
      >
        {/* ── LEFT: copy ── */}
        <div
          ref={left.ref}
          className={`flex flex-col justify-center py-16 sm:py-20 lg:py-0 ${getAnimationClasses("left", left.isVisible)}`}
        >
          {/* Line 1: TWO BOOKS. */}
          <h1
            className="block!"
            style={{
              fontFamily: "var(--font-hyperspace), 'Arial Black', sans-serif",
              fontWeight: 200,
              fontSize: "clamp(2.2rem, 8vw, 90px)",
              lineHeight: 1,
              letterSpacing: "0em",
              color: "#FFFFFF",
              filter: `
                drop-shadow(0px 0px 8px rgba(23,66,239,0.8))
                drop-shadow(0px 0px 20px rgba(23,66,239,0.6))
                drop-shadow(0px 0px 40px rgba(23,66,239,0.4))
                drop-shadow(0px 0px 60px rgba(23,66,239,0.3))
                `,
            }}
          >
            TWO BOOKS.
          </h1>

          {/* Line 2: ONE TIME */}
          <h1
            className="my-3 uppercase"
            style={{
              fontFamily: "var(--font-hyperspace), 'Arial Black', sans-serif",
              fontWeight: 200,
              fontSize: "clamp(2.2rem, 8vw, 90px)",
              lineHeight: 1,
              letterSpacing: "0em",
              color: "#FFFFFF",
              filter: `
          drop-shadow(2px 2px 16px rgba(236,126,28,0.5))
          drop-shadow(-2px -2px 16px rgba(236,126,28,0.5))
        `,
            }}
          >
            One Time
          </h1>

          {/* Line 3: MACHINE */}
          <h1
            className="uppercase"
            style={{
              fontFamily: "var(--font-hyperspace), 'Arial Black', sans-serif",
              fontWeight: 200,
              fontSize: "clamp(2.2rem, 8vw, 90px)",
              lineHeight: 1,
              letterSpacing: "0em",
              color: "#FFFFFF",
              filter: `
          drop-shadow(2px 2px 16px rgba(236,126,28,0.5))
          drop-shadow(-2px -2px 16px rgba(236,126,28,0.5))
        `,
            }}
          >
            MACHINE
          </h1>

          {/* Body copy */}
          <div className="mt-5 sm:mt-6 max-w-[340px]">
            <p
              className="text-[14px] leading-relaxed text-gray-300"
              style={{
                fontFamily: "var(--font-general-sans), 'Inter', sans-serif",
              }}
            >
              One explains the philosophy.
            </p>
            <p
              className="text-[14px] leading-relaxed text-gray-300"
              style={{
                fontFamily: "var(--font-general-sans), 'Inter', sans-serif",
              }}
            >
              One takes you on the adventure.
            </p>
          </div>

          {/* CTA button */}
          <div className="mt-7 sm:mt-8">
            <PrimaryButton htmlContent="EXPLORE THE BOOK" isRightArrow={true} />
          </div>
        </div>

        {/* ── RIGHT: book covers (desktop only) ── */}
        <div className="relative hidden lg:flex items-center justify-center h-full">
          <div
            ref={right.ref}
            className={`relative flex items-end justify-center gap-8 ${getAnimationClasses("right", right.isVisible)}`}
          >
            {/* Back From the Future — left book */}
            <div className="relative shrink-0 w-full h-[500px]">
              <Image
                src="/images/philosophy.png"
                alt="Back From the Future book cover"
                fill
                // sizes="220px"
                // className="object-cover object-center"
              />

              <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-widest text-orange-400">
                Back From the Future
              </p>
            </div>

            {/* My Time Machine — right book */}
            <div
              className="relative shrink-0 w-full h-[500px]"
              // style={{
              //   width: 220,
              //   height: 340,
              // }}
            >
              <Image
                src="/images/story.png"
                alt="My Time Machine book cover"
                fill
                // sizes="220px"
                // className="object-cover object-center"
              />
              {/* Label below */}
              <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-widest text-blue-400">
                My Time Machine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
