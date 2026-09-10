import React from "react";

interface PrimaryTitleProps {
  children: React.ReactNode;
  classNameText?: string;
}

/**
 * PrimaryTitle — Hero heading component
 *
 * Figma specs:
 *  Font    : FONTSPRING DEMO – Hyperspace Race Extended Light
 *  Weight  : 200
 *  Size    : 56px
 *  Leading : 100%  (line-height: 1)
 *  Tracking: 0%
 *  Color   : #FFFFFF
 *  Shadow  : drop-shadow(2px 2px 16px rgba(23,66,239,0.5))
 *            drop-shadow(-2px -2px 16px rgba(23,66,239,0.5))
 *  filter  : "drop-shadow(2px 2px 16px rgba(23,66,239,0.5)) drop-shadow(-2px -2px 16px rgba(23,66,239,0.5))",
 */
export default function PrimaryTitle({
  children,
  classNameText = "",
}: PrimaryTitleProps) {
  return (
    <h1
      className={`${classNameText}`}
      style={{
        fontFamily: "var(--font-hyperspace), 'Arial Black', sans-serif",
        fontWeight: 200,
        fontSize: "clamp(2rem, 5vw, 56px)",
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
      {children}
    </h1>
  );
}
