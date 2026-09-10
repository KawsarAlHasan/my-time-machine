import React from "react";
import Image from "next/image";
import PrimaryTitle from "../ui/PrimaryTitle";
import SmallTitle from "../ui/SmallTitle";

const steps = [
  {
    number: "01",
    image: "/images/how.png",
    title: "Answer a few questions",
    description: [
      "Tell us what matters to you",
      "where you want your life to go",
      "and what you want to avoid.",
    ],
  },
  {
    number: "02",
    image: "/images/how-2.png",
    title: "See Your Timeline",
    description: [
      "Get a personalized glimpse",
      "of where your current choices",
      "may be leading.",
    ],
  },
  {
    number: "03",
    image: "/images/how-3.png",
    title: "Get Guidance and Take Action",
    description: [
      "Hear from your Future You",
      "and get practical next steps",
      "to change the direction.",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-black px-10 py-[60px] pb-20 max-sm:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Header */}
      <div className="mb-12 text-center">
        <SmallTitle children="THE SIMPLE PROCESS" classNameText="" />

        <PrimaryTitle classNameText="my-4!" children="HOW IT WORKS" />

        <SmallTitle
          children="A SIMPLE PROCESS. A POWERFUL PERSPECTIVE."
          classNameText="mt-8!"
          fontSize="20px"
        />
      </div>

      {/* Cards */}
      <div className="mx-auto grid grid-cols-3 gap-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className={[
              "relative flex min-h-[582px] flex-col overflow-hidden rounded-2xl bg-[#0d0d0d] p-5 pb-7",
              "border border-[rgba(210,160,50,0.75)]",
              "transition-all duration-300 ease-out",
              "hover:border-[1.5px] hover:border-[rgba(250,250,249,0.75)]",
              "hover:shadow-[0_0_15px_rgba(210,160,50,0.25),0_0_30px_rgba(250,250,249,0.12)]",
            ].join(" ")}
          >
            {/* Step Number */}
            <span className="mb-2.5 block text-[13px] font-medium tracking-[0.05em] text-[#aaa]">
              {step.number}
            </span>

            {/* Image */}
            <div className="relative mb-5 min-h-[220px] w-full flex-1">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Text */}
            <div className="mt-auto">
              <h3 className="mb-2.5 text-[18px] font-semibold leading-[1.3] text-white">
                {step.title}
              </h3>
              <p className="m-0 text-[13.5px] leading-[1.65] text-[#8a8a8a]">
                {step.description.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < step.description.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
