"use client";

import React, { useRef, useState, useEffect } from "react";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";
import SmallTitle from "../ui/SmallTitle";
import { useScrollAnimation, getAnimationClasses } from "../ui/useScrollAnimation";

const content = {
  description:
    "Watch how My Time Machine turns a few quick questions into a real glimpse of your possible future — from your first Time Jump to the guidance that helps you act on it.",
  video: {
    thumbnail: "/images/thumbnail.png",
    src: "/time-video.mp4",
  },
};

// ── Shape: rectangle with diagonal cuts on all 4 corners ──────────────────────
const CUT = 28; // px — corner diagonal size
const outerClip = `polygon(
  ${CUT}px 0,
  calc(100% - ${CUT}px) 0,
  100% ${CUT}px,
  100% calc(100% - ${CUT}px),
  calc(100% - ${CUT}px) 100%,
  ${CUT}px 100%,
  0 calc(100% - ${CUT}px),
  0 ${CUT}px
)`;
const innerClip = `polygon(
  ${CUT + 2}px 0,
  calc(100% - ${CUT + 2}px) 0,
  100% ${CUT + 2}px,
  100% calc(100% - ${CUT + 2}px),
  calc(100% - ${CUT + 2}px) 100%,
  ${CUT + 2}px 100%,
  0 calc(100% - ${CUT + 2}px),
  0 ${CUT + 2}px
)`;

export default function VideoExplainer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoAnim = useScrollAnimation({ direction: "left", delay: 100, threshold: 0.1 });
  const textAnim = useScrollAnimation({ direction: "right", delay: 250, threshold: 0.1 });
  const wrapperAnim = useScrollAnimation({ direction: "up", delay: 0, threshold: 0.1 });

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  };

  // ── Auto-pause when section scrolls out of view ──────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.3) {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: [0, 0.3] },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-black px-6 py-20 flex items-center justify-center max-sm:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
    >
      <div
        ref={wrapperAnim.ref}
        className={`relative w-full ${getAnimationClasses("up", wrapperAnim.isVisible)}`}
        style={{ padding: 2 }}
      >
        {/* Glowing clipped border */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: outerClip,
            background:
              "linear-gradient(135deg, rgba(96,165,250,0.9), rgba(59,130,246,0.5))",
            boxShadow:
              "0 0 25px rgba(59,130,246,0.55), 0 0 60px rgba(59,130,246,0.25)",
          }}
        />

        {/* Inner black content area */}
        <div className="relative bg-black" style={{ clipPath: innerClip }}>
          <div className="flex flex-col md:flex-row items-center gap-10 px-8 py-10 md:px-10 md:py-12">
            {/* ── Video card ─────────────────────────────────────────────── */}
            <div
              ref={videoAnim.ref}
              className={`w-full md:w-[46%] flex-shrink-0 ${getAnimationClasses("left", videoAnim.isVisible)}`}
            >
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-[16/10]">
                {isPlaying ? (
                  <video
                    ref={videoRef}
                    src={content.video.src}
                    poster={content.video.thumbnail}
                    controls
                    autoPlay
                    className="w-full h-full object-cover cursor-pointer"
                    onEnded={() => setIsPlaying(false)}
                  />
                ) : (
                  <>
                    <img
                      src={content.video.thumbnail}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Play button */}
                    <div
                      onClick={handlePlay}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    >
                      <button
                        type="button"
                        aria-label="Play video"
                        className="group flex items-center justify-center w-14 h-14 rounded-full transition-all duration-200 hover:scale-110"
                        style={{
                          background: "rgba(0,0,0,0.55)",
                          border: "2px solid rgba(255,255,255,0.55)",
                          backdropFilter: "blur(6px)",
                          boxShadow:
                            "0 0 20px rgba(96,165,250,0.3), inset 0 0 12px rgba(255,255,255,0.05)",
                        }}
                      >
                        {/* Play triangle */}
                        <svg
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          fill="white"
                          className="ml-1 drop-shadow-lg"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* ── Text content ───────────────────────────────────────────── */}
            <div
              ref={textAnim.ref}
              className={`flex-1 ${getAnimationClasses("right", textAnim.isVisible)}`}
            >
              <SmallTitle children="SEE IT IN ACTION" classNameText="" fontSize="12px" />

              <PrimaryTitle classNameText="my-4! whitespace-nowrap!" children="YOUR FUTURE." />
              <PrimaryTitle classNameText="my-4! whitespace-nowrap!" children="EXPLAINED" />
              <SecondaryTitle classNameText="my-4! whitespace-nowrap!" children="IN 2 MINUTES." />

              <p className="text-gray-300 text-[15px] leading-relaxed max-w-md">
                {content.description}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative corner accents */}
        {/* Top-left */}
        <span className="absolute bg-blue-400/60" style={{ left: 0, top: CUT - 1, width: 2, height: 20 }} />
        <span className="absolute bg-blue-400/60" style={{ left: CUT - 1, top: 0, width: 20, height: 2 }} />
        {/* Bottom-right */}
        <span className="absolute bg-blue-400/60" style={{ right: 0, bottom: CUT - 1, width: 2, height: 20 }} />
        <span className="absolute bg-blue-400/60" style={{ right: CUT - 1, bottom: 0, width: 20, height: 2 }} />
      </div>
    </div>
  );
}
