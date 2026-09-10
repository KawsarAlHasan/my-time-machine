"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation, getAnimationClasses } from "./ui/useScrollAnimation";

export default function Footer() {
  const navLinks = [
    { label: "HOW IT WORKS", href: "#how-it-works" },
    { label: "THE APP", href: "#the-app" },
    { label: "THE BOOK", href: "#the-book" },
    { label: "ABOUT MANNY", href: "#about-manny" },
    { label: "CONTACT", href: "#contact" },
  ];

  const logo = useScrollAnimation({ direction: "up", delay: 0, threshold: 0.1 });
  const nav = useScrollAnimation({ direction: "up", delay: 150, threshold: 0.1 });
  const bottom = useScrollAnimation({ direction: "up", delay: 300, threshold: 0.1 });

  return (
    <footer className="w-full bg-black">
      <div className="mx-auto px-6 pt-16 pb-6 sm:pt-20 sm:px-8 md:px-12 lg:px-20 xl:px-[12rem]">
        {/* Logo */}
        <div
          ref={logo.ref}
          className={`flex justify-center ${getAnimationClasses("up", logo.isVisible)}`}
        >
          <Image
            src="/images/nav-logo.png"
            alt="My Time Machine"
            width={220}
            height={110}
            className="w-auto h-24 sm:h-28 object-contain"
            priority={false}
          />
        </div>

        {/* Nav Links */}
        <nav
          ref={nav.ref}
          className={`mt-10 sm:mt-12 ${getAnimationClasses("up", nav.isVisible)}`}
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs sm:text-sm tracking-widest text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="mt-10 sm:mt-12 border-t border-[#423116] mx-[-8rem] sm:mx-[-8rem] md:mx-[-8rem] lg:mx-[-8rem] xl:mx-[-12rem]" />

        {/* Bottom Row */}
        <div
          ref={bottom.ref}
          className={`mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-400 ${getAnimationClasses("up", bottom.isVisible)}`}
        >
          <p>© 2025 My Time Machine. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors duration-200">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
