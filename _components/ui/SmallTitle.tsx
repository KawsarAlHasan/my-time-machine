import React from "react";

interface SmallTitleProps {
  children: React.ReactNode;
  classNameText?: string;
  fontSize?: string;
}

export default function SmallTitle({
  children,
  classNameText = "",
  fontSize = "16px",
}: SmallTitleProps) {
  return (
    <h1
      className={`${classNameText} uppercase`}
      style={{
        fontFamily:
          "var(--font-general-sans), 'Inter', 'Helvetica Neue', sans-serif",
        fontWeight: 400,
        lineHeight: "100%",
        fontSize: fontSize,
        letterSpacing: "0em",
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
