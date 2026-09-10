import React from "react";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";
import SmallTitle from "../ui/SmallTitle";

const content = {
  description:
    "Watch how My Time Machine turns a few quick questions into a real glimpse of your possible future — from your first Time Jump to the guidance that helps you act on it.",
  video: {
    thumbnail: "",
    src: "",
  },
};

// Corner-cut hexagonal border shape (px based so it stays consistent at any size)
const outerClip =
  "polygon(28px 0, calc(100% - 90px) 0, 100% 50%, calc(100% - 90px) 100%, 28px 100%, 0 calc(100% - 28px), 0 28px)";
const innerClip =
  "polygon(26px 0, calc(100% - 88px) 0, 100% 50%, calc(100% - 88px) 100%, 26px 100%, 0 calc(100% - 26px), 0 26px)";

export default function VideoExplainer() {
  return (
    <div className="w-full bg-black px-6 py-20 flex items-center justify-center max-sm:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="relative w-full" style={{ padding: 2 }}>
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
            {/* Video card */}
            <div className="w-full md:w-[46%] flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden border border-blue-400/30 bg-gray-900 aspect-[16/10]">
                {content.video.thumbnail ? (
                  <img
                    src={content.video.thumbnail}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
                    Video thumbnail
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    aria-label="Play video"
                    className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="black"
                      className="ml-1"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1">
              <SmallTitle
                children="SEE IT IN ACTION"
                classNameText=""
                fontSize="12px"
              />

              {/* Heading */}
              <PrimaryTitle
                classNameText="my-4! whitespace-nowrap!"
                children="Your Future."
              />
              <PrimaryTitle
                classNameText="my-4! whitespace-nowrap!"
                children="EXPLAINED"
              />
              <SecondaryTitle
                classNameText="my-4! whitespace-nowrap!"
                children="IN 2 MINUTES."
              />

              <p className="text-gray-300 text-[15px] leading-relaxed max-w-md">
                {content.description}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative accents */}
        <span
          className="absolute bg-white"
          style={{ left: 20, bottom: -1, width: 60, height: 2 }}
        />
        <span
          className="absolute bg-white"
          style={{ right: -1, top: "calc(50% - 14px)", width: 2, height: 28 }}
        />
      </div>
    </div>
  );
}
