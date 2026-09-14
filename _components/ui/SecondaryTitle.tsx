import React from "react";

interface SecondaryTitleProps {
  children: React.ReactNode;
  classNameText?: string;
}

export default function SecondaryTitle({
  children,
  classNameText = "",
}: SecondaryTitleProps) {
  return (
    <h1
      className={`text-[24px]
        sm:text-[30px]
        md:text-[38px]
        lg:text-[46px]
        xl:text-[56px]
        leading-none
        font-extralight
        tracking-normal ${classNameText}`}
      style={{
        fontFamily: "var(--font-hyperspace), 'Arial Black', sans-serif",
        // fontWeight: 200,
        // fontSize: "clamp(2rem, 5vw, 56px)",
        // lineHeight: 1,
        // letterSpacing: "0em",
        color: "#FFFFFF",
        filter: `
          drop-shadow(2px 2px 16px rgba(236,126,28,0.5))
          drop-shadow(-2px -2px 16px rgba(236,126,28,0.5))
        `,
      }}
    >
      {children}
    </h1>
  );
}
