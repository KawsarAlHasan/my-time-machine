"use client";

import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import { useScrollAnimation, getAnimationClasses } from "../ui/useScrollAnimation";

export default function Hero() {
  const left = useScrollAnimation({ direction: "left", delay: 100 });
  const right = useScrollAnimation({ direction: "right", delay: 300 });
  const badge1 = useScrollAnimation({ direction: "up", delay: 600 });
  const badge2 = useScrollAnimation({ direction: "up", delay: 750 });

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg1.png"
          alt="Two glowing timeline portals with a silhouetted figure standing between them"
          fill
          className="h-full!"
          priority
        />
      </div>

      {/* Content grid */}
      <div
        className="relative z-10 mx-auto grid grid-cols-1 items-center lg:grid-cols-2 max-sm:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
        style={{ minHeight: "calc(100vh - 72px)" }}
      >
        {/* ── LEFT: copy ── */}
        <div
          ref={left.ref}
          className={`flex flex-col justify-center py-20 lg:py-0 ${getAnimationClasses("left", left.isVisible)}`}
        >
          {/* Headline */}
          <h1
            className="font-extrabold uppercase leading-[1.05] tracking-tight"
            style={{
              fontSize: "clamp(2.2rem, 4.2vw, 3.2rem)",
              fontFamily: "var(--font-hyperspace), 'Arial Black', sans-serif",
            }}
          >
            <span
              className="block"
              style={{
                fontFamily: "var(--font-hyperspace), 'Arial Black', sans-serif",
                fontWeight: 200,
                fontSize: "56px",
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
              SEE THE
            </span>
            <span
              className="block my-4"
              style={{
                fontFamily: "var(--font-hyperspace), 'Arial Black', sans-serif",
                fontWeight: 400,
                fontSize: "110px",
                lineHeight: 1,
                letterSpacing: "0em",
                color: "#FFFFFF",
                filter: `
          drop-shadow(2px 2px 16px rgba(236,126,28,0.5))
          drop-shadow(-2px -2px 16px rgba(236,126,28,0.5))
        `,
              }}
            >
              FUTURE
            </span>
            <span
              className="block!"
              style={{
                fontFamily: "var(--font-hyperspace), 'Arial Black', sans-serif",
                fontWeight: 200,
                fontSize: "56px",
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
              YOU<span style={{ position: "relative", top: "0.3em", fontSize: "0.7em" }}>{"\u2019"}</span>RE CREATING
            </span>
          </h1>

          {/* Body copy */}
          <p
            className="mt-6 max-w-[360px] text-[14.5px] leading-relaxed text-gray-300"
            style={{
              fontFamily: "var(--font-general-sans), 'Inter', sans-serif",
            }}
          >
            My Time Machine helps you see where your current choices may be
            leading — so you can make better decisions today.
          </p>
          <p
            className="mt-4 max-w-[360px] text-[14.5px] leading-relaxed text-gray-300"
            style={{
              fontFamily: "var(--font-general-sans), 'Inter', sans-serif",
            }}
          >
            Answer 5 adaptive questions in about 2 minutes and get a first
            glimpse of your trajectory, the future you may be creating, and the
            next move that can help{" "}
            <a
              href="#change-it"
              className="text-amber-400 underline underline-offset-2 hover:text-amber-300"
            >
              change it.
            </a>
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <div ref={badge1.ref} className={getAnimationClasses("up", badge1.isVisible)}>
              <PrimaryButton
                htmlContent="START MY TIME JUMP"
                isRightArrow={true}
              />
            </div>
            <div ref={badge2.ref} className={getAnimationClasses("up", badge2.isVisible)}>
              <SecondaryButton
                htmlContent="Watch How It Works"
                isPlayIcon={true}
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: phone mockup ── */}
        <div className="relative hidden lg:flex items-center justify-end h-full">
          <div
            ref={right.ref}
            className={`relative ${getAnimationClasses("right", right.isVisible)}`}
            style={{
              width: "400px",
              height: "700px",
              marginRight: "-50px",
              marginBottom: "-20px",
            }}
          >
            <Image
              src="/images/phone-mock.png"
              alt="My Time Machine app preview on a phone screen"
              fill
              sizes="400px"
              className="object-contain object-bottom"
              style={{
                filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.9))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
