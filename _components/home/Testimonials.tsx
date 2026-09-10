import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";
import SmallTitle from "../ui/SmallTitle";

const stats = [
  { value: "10K+", label: "Future Explorers" },
  { value: "50K+", label: "Futures Generated" },
  { value: "5.0", label: "App Rating" },
];

const testimonials = [
  {
    quote:
      "My Time Jump made a decision I had been avoiding feel surprisingly clear.",
    name: "Aisha R.",
    location: "Brooklyn, NY",
  },
  {
    quote:
      "My Time Jump made a decision I had been avoiding feel surprisingly clear.",
    name: "Aisha R.",
    location: "Brooklyn, NY",
  },
  {
    quote:
      "My Time Jump made a decision I had been avoiding feel surprisingly clear.",
    name: "Aisha R.",
    location: "Brooklyn, NY",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black py-16 sm:py-24">
      <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-[12rem]">
        {/* Heading */}
        <div className="text-center">
          {/* <p className="text-[10px] sm:text-xs tracking-[0.25em] text-orange-200/80 uppercase mb-4">
            A growing community
          </p> */}

          <SmallTitle
            children="A growing community"
            classNameText=""
            fontSize="16px"
          />

          <PrimaryTitle classNameText="my-4!" children="People are changing" />

          <SecondaryTitle
            classNameText="my-4!"
            children="the way they see tomorrow."
          />
        </div>

        {/* Stats */}
        <div className="mt-14 sm:mt-16 grid grid-cols-3 border-y border-[#423116]">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center py-6 sm:py-8 px-2 ${
                index !== stats.length - 1 ? "border-r border-[#423116]" : ""
              }`}
            >
              <p className="font-mono text-2xl sm:text-4xl text-white">
                {stat.value}
              </p>
              <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="rounded-2xl border border-orange-400/40 bg-black px-6 py-7 sm:px-8 sm:py-8"
            >
              <RiDoubleQuotesL className="text-3xl sm:text-4xl text-white" />

              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white leading-relaxed">
                “{t.quote}”
              </p>

              <div className="mt-6 sm:mt-8">
                <p className="text-sm text-orange-200/90 font-medium">
                  {t.name}
                </p>
                <p className="text-sm text-gray-400">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
