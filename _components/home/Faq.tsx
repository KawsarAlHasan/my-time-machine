"use client";

import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";
import SmallTitle from "../ui/SmallTitle";
import { useScrollAnimation, getAnimationClasses } from "../ui/useScrollAnimation";

const faqItems = [
  {
    question: "What is My Time Machine?",
    answer:
      "My Time Machine is a guided reflection experience that helps you see where your current choices may be leading—so you can make better decisions today.",
  },
  {
    question: "How does the Time Jump work?",
    answer:
      "You answer a short series of reflective questions, and My Time Machine shows you a projected picture of where today's habits and choices could lead.",
  },
  {
    question: "How does the Time Jump work?",
    answer:
      "You answer a short series of reflective questions, and My Time Machine shows you a projected picture of where today's habits and choices could lead.",
  },
  {
    question: "How does the Time Jump work?",
    answer:
      "You answer a short series of reflective questions, and My Time Machine shows you a projected picture of where today's habits and choices could lead.",
  },
  {
    question: "How does the Time Jump work?",
    answer:
      "You answer a short series of reflective questions, and My Time Machine shows you a projected picture of where today's habits and choices could lead.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const leftCol = useScrollAnimation({ direction: "left", delay: 100, threshold: 0.1 });
  const rightCol = useScrollAnimation({ direction: "right", delay: 200, threshold: 0.1 });

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="contact" className="w-full bg-black px-6 py-16 sm:py-24">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-11 gap-12 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Left column */}
        <div
          ref={leftCol.ref}
          className={`lg:col-span-6 ${getAnimationClasses("left", leftCol.isVisible)}`}
        >
          <SmallTitle children="Before your first jump" classNameText="" fontSize="16px" />

          <PrimaryTitle classNameText="my-4! whitespace-nowrap!" children="Questions before" />
          <SecondaryTitle classNameText="my-4! whitespace-nowrap!" children="your first jump?" />

          <p className="mt-6 text-sm sm:text-base text-gray-300 leading-relaxed">
            We want you to feel clear before you step into the experience.
            <br />
            Here&apos;s what we know so far.
          </p>
        </div>

        {/* Right column - Accordion */}
        <div
          ref={rightCol.ref}
          className={`border-t border-white/15 lg:col-span-5 ${getAnimationClasses("right", rightCol.isVisible)}`}
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-white/15">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left group"
                >
                  <span className="text-base sm:text-lg text-white group-hover:text-orange-300 transition-colors duration-200">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <HiChevronUp className="shrink-0 text-orange-400 text-lg sm:text-xl transition-transform duration-300" />
                  ) : (
                    <HiChevronDown className="shrink-0 text-white text-lg sm:text-xl transition-transform duration-300" />
                  )}
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5 sm:pb-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed pr-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
