"use client";
import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";

interface PrimaryButtonProps {
  isHref?: boolean;
  hrefLink?: string;
  htmlContent: React.ReactNode;
  isRightArrow?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function PrimaryButton({
  isHref = false,
  hrefLink = "",
  htmlContent,
  isRightArrow = false,
  onClick,
  className = "",
}: PrimaryButtonProps) {
  const content = (
    <>
      {htmlContent}
      {isRightArrow && (
        <HiArrowRight className="text-orange-300 text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const baseClasses = `cursor-pointer group flex items-center justify-center gap-3 rounded-md border border-orange-400 bg-black/50 px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm tracking-widest text-white uppercase transition-all duration-300 hover:bg-orange-400/10 ${className}`;
  const style = { boxShadow: "0 0 16px rgba(251,146,60,0.55)" };

  if (isHref && hrefLink) {
    if (hrefLink.startsWith("#")) {
      return (
        <a href={hrefLink} onClick={onClick} className={baseClasses} style={style}>
          {content}
        </a>
      );
    }
    return (
      <Link href={hrefLink} onClick={onClick} className={baseClasses} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={baseClasses}
      style={style}
    >
      {content}
    </button>
  );
}
