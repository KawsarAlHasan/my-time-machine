"use client";

import React from "react";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";
import SmallTitle from "../ui/SmallTitle";
import { useScrollAnimation, getAnimationClasses } from "../ui/useScrollAnimation";

function AppleIcon({ className }: any) {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" className={className}>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 0 184.8 0 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-57.7-90-57.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayIcon({ className }: any) {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <path fill="#00d9ff" d="M99 47.6c-6 6.3-9.5 16-9.5 28.6v359.6c0 12.6 3.5 22.3 9.5 28.6l1.5 1.4L311 245.3v-4.6L100.5 46.2 99 47.6z" />
      <path fill="#00f076" d="M381 315.9l-70-70v-4.6l70-70 1.6.9 82.9 47.1c23.7 13.5 23.7 35.5 0 49l-83 47.1-1.5.5z" />
      <path fill="#ff3a44" d="M382.5 315.4L311 243.9 99 456c7.8 8.2 20.6 9.2 35.1 1L382.5 315.4" />
      <path fill="#ffcf00" d="M382.5 172.6L134.1 30.9C119.6 22.7 106.8 23.7 99 32l212 212 71.5-71.4z" />
    </svg>
  );
}

export default function StartYourTimeJump() {
  const left = useScrollAnimation({ direction: "left", delay: 100, threshold: 0.1 });
  const right = useScrollAnimation({ direction: "right", delay: 200, threshold: 0.1 });
  const btn1 = useScrollAnimation({ direction: "up", delay: 400, threshold: 0.1 });
  const btn2 = useScrollAnimation({ direction: "up", delay: 550, threshold: 0.1 });

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-[#000000] border-y border-[#423116]">
      {/* Left: Text Content */}
      <div className="px-4 py-12 sm:px-8 md:px-12 lg:px-20 xl:pl-48 text-amber-50 flex items-center">
        <div
          ref={left.ref}
          className={`max-w-xl w-full ${getAnimationClasses("left", left.isVisible)}`}
        >
          <SmallTitle children="YOUR FUTURE IS WAITING" classNameText="" fontSize="16px" />
          <PrimaryTitle classNameText="my-4!" children="Start your" />
          <SecondaryTitle classNameText="my-4!" children="Time Jump" />

          <p className="text-gray-300/90 text-base sm:text-lg mt-6 sm:mt-8 max-w-md">
            Take your first Time Jump and discover where your choices could lead.
          </p>

          {/* Store badges */}
          <div className="flex flex-wrap gap-4 mt-8 sm:mt-10">
            {/* App Store */}
            <div ref={btn1.ref} className={getAnimationClasses("up", btn1.isVisible)}>
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl border px-5 py-3 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(251,146,60,0.5)]"
                style={{
                  borderColor: "rgba(251,146,60,0.7)",
                  boxShadow: "0 0 10px rgba(251,146,60,0.35), inset 0 0 10px rgba(251,146,60,0.05)",
                  background: "rgba(0,0,0,0.4)",
                }}
              >
                <AppleIcon className="w-7 h-7 text-sky-400" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[11px] text-gray-300">Download on the</span>
                  <span className="text-white text-base font-semibold">App Store</span>
                </span>
              </a>
            </div>

            {/* Google Play */}
            <div ref={btn2.ref} className={getAnimationClasses("up", btn2.isVisible)}>
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl border px-5 py-3 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(96,165,250,0.5)]"
                style={{
                  borderColor: "rgba(96,165,250,0.7)",
                  boxShadow: "0 0 10px rgba(96,165,250,0.35), inset 0 0 10px rgba(96,165,250,0.05)",
                  background: "rgba(0,0,0,0.4)",
                }}
              >
                <PlayIcon className="w-7 h-7" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[11px] text-gray-300">Get it on</span>
                  <span className="text-white text-base font-semibold">Google Play</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div
        ref={right.ref}
        className={`flex items-center justify-center overflow-hidden ${getAnimationClasses("right", right.isVisible)}`}
      >
        <img
          src="/images/TimeJump.png"
          alt="start-time"
          className="w-full h-auto max-h-[500px] object-contain md:max-h-none"
        />
      </div>
    </div>
  );
}
