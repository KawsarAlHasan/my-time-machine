"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import PrimaryButton from "./ui/PrimaryButton";

const navLinks = [
  { label: "HOW IT WORKS", href: "#how-it-works", active: true },
  { label: "THE APP", href: "#the-app" },
  { label: "THE BOOK", href: "/the-book" },
  { label: "ABOUT MANNY", href: "#about-manny" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-black backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-3 lg:px-[12rem]">
        {/* Logo */}
        <a href="/" className=" leading-none">
          <Image
            src="/images/nav-logo.png"
            alt="My Time Machine Logo"
            width={100}
            height={70}
            className="object-contain"
          />
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative pb-1 text-[12px] font-medium tracking-widest transition-colors ${
                link.active ? "text-white" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {link.label}
              {link.active && (
                <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-amber-400" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <PrimaryButton htmlContent="START MY TIME JUMP" isRightArrow={false} />
        {/* <a
          href="#start"
          className="hidden px-5 py-2.5 text-[12px] font-bold tracking-widest text-amber-400 transition-all duration-200 hover:brightness-110 lg:block"
          style={{
            border: "1px solid #f5a623",
            borderRadius: "3px",
          }}
        >
          START MY TIME JUMP
        </a> */}
      </div>
    </header>
  );
}
