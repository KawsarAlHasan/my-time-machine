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
      className="relative w-full overflow-hidden bg-black flex flex-col"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      {/* Full-bleed background image - Desktop */}
      <div className="absolute inset-0 z-0 1hidden md:1block">
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

      {/* Full-bleed background image - Mobile */}
      {/* <div className="absolute inset-0 z-0 1block md:1hidden">
        <Image
          src="/images/phone-book-hero.png"
          alt="Futuristic cityscape with glowing timelines"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div> */}

      {/* Content wrapper */}
      <div
        className="relative z-10 mx-auto w-full flex flex-col lg:grid lg:grid-cols-2 items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
        style={{ minHeight: "calc(100vh - 72px)" }}
      >
        {/* ── LEFT: copy ── */}
        <div
          ref={left.ref}
          className={`w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left pt-[10vh] pb-4 lg:pt-0 lg:pb-0 ${getAnimationClasses("left", left.isVisible)}`}
        >
          {/* Line 1: TWO BOOKS. */}
          <h1
            className="block! text-[28px] sm:text-[46px] md:text-[60px] lg:text-[70px] xl:text-[90px]"
            style={{
              fontFamily: "var(--font-hyperspace), 'Arial Black', sans-serif",
              fontWeight: 200,
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

          {/* Line 2: ONE TIME MACHINE. */}
          <h1
            className="mt-2 mb-3 uppercase text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[80px]"
            style={{
              fontFamily: "var(--font-hyperspace), 'Arial Black', sans-serif",
              fontWeight: 200,
              lineHeight: 1,
              letterSpacing: "0em",
              color: "#FFFFFF",
              filter: `
          drop-shadow(2px 2px 16px rgba(236,126,28,0.5))
          drop-shadow(-2px -2px 16px rgba(236,126,28,0.5))
        `,
            }}
          >
            ONE TIME MACHINE.
          </h1>

          {/* Body copy */}
          <div className="mt-3 sm:mt-5 w-full max-w-[340px] lg:max-w-none">
            <p
              className="text-[15px] md:text-[18px] leading-relaxed text-gray-100"
              style={{
                fontFamily: "var(--font-general-sans), 'Inter', sans-serif",
              }}
            >
              One explains the philosophy.
            </p>
            <p
              className="text-[15px] md:text-[18px] leading-relaxed text-gray-100"
              style={{
                fontFamily: "var(--font-general-sans), 'Inter', sans-serif",
              }}
            >
              One takes you on the adventure.
            </p>
          </div>

          {/* CTA button (Desktop) */}
          <div className="mt-8 hidden lg:block">
            <PrimaryButton
              htmlContent="EXPLORE THE BOOKS"
              isRightArrow={true}
            />
          </div>
        </div>

        {/* ── RIGHT: book covers ── */}
        <div className="w-full flex-1 flex flex-col items-center justify-center lg:justify-end pb-8 lg:pb-0 relative -mt-24 min-[425px]:-mt-20 sm:mt-0">
          <div
            ref={right.ref}
            className={`relative w-full h-[45vh] min-h-[220px] min-[425px]:min-h-[300px] lg:h-auto lg:aspect-square max-w-[500px] lg:max-w-[700px] mb-6 lg:mb-10 ${getAnimationClasses("right", right.isVisible)}`}
          >
            <Image
              src="/images/Two-Books-Transparent-Hero.png"
              alt="My Time Machine app preview on a phone screen"
              fill
              className="object-contain object-bottom"
              style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.9))" }}
            />
          </div>

          {/* CTA button (Mobile) */}
          <div className="flex lg:hidden w-full justify-center">
            <PrimaryButton
              htmlContent="EXPLORE THE BOOKS"
              isRightArrow={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
