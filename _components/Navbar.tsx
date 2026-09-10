"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useRef, useCallback } from "react";
import PrimaryButton from "./ui/PrimaryButton";

// ── Nav link definitions ─────────────────────────────────────────────────────
// type: "hash" = same-page anchor scroll | "route" = Next.js route navigation
type NavLink =
  | { label: string; type: "hash"; hash: string }
  | { label: string; type: "route"; href: string };

const navLinks: NavLink[] = [
  { label: "HOW IT WORKS", type: "hash", hash: "how-it-works" },
  { label: "THE APP", type: "hash", hash: "the-app" },
  { label: "THE BOOK", type: "route", href: "/the-book" },
  { label: "ABOUT MANNY", type: "hash", hash: "about-manny" },
  { label: "CONTACT", type: "hash", hash: "contact" },
];

// Section IDs used by Intersection Observer (same-page only)
const SECTION_IDS = ["how-it-works", "the-app", "about-manny", "contact"];

// ── Smooth scroll helper ──────────────────────────────────────────────────────
function smoothScrollToHash(hash: string) {
  const el = document.getElementById(hash);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  // Update URL hash without reloading
  window.history.pushState(null, "", `#${hash}`);
}

// ── Navbar ────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const isHomePage = pathname === "/";
  const isTheBookPage = pathname === "/the-book";

  // ── Scroll shadow ──────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Intersection Observer: track active section (home page only) ───────────
  useEffect(() => {
    if (!isHomePage) {
      setActiveHash("");
      return;
    }

    // Disconnect previous observer
    observerRef.current?.disconnect();

    const sectionMap = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionMap.set(entry.target.id, entry.intersectionRatio);
        });

        // Pick section with highest visibility
        let topId = "";
        let topRatio = 0;
        sectionMap.forEach((ratio, id) => {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id;
          }
        });

        if (topId) setActiveHash(topId);
      },
      {
        rootMargin: "-80px 0px -40% 0px",
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 1.0],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [isHomePage]);

  // ── Determine active nav label ─────────────────────────────────────────────
  const getActiveLabel = (): string => {
    if (isTheBookPage) return "THE BOOK";

    if (isHomePage) {
      const found = navLinks.find(
        (l) => l.type === "hash" && l.hash === activeHash
      );
      return found?.label ?? "";
    }

    return "";
  };

  const activeLabel = getActiveLabel();

  // ── Click handler ──────────────────────────────────────────────────────────
  const handleNavClick = useCallback(
    (e: React.MouseEvent, link: NavLink) => {
      e.preventDefault();

      if (link.type === "route") {
        router.push(link.href);
        return;
      }

      // hash link
      const { hash } = link;

      if (isHomePage) {
        // Already on home → just smooth scroll
        smoothScrollToHash(hash);
      } else {
        // On another page → navigate home, then scroll after page load
        router.push(`/#${hash}`);
      }
    },
    [isHomePage, router]
  );

  // ── After navigation to home, scroll to the hash if present ───────────────
  useEffect(() => {
    if (!isHomePage) return;

    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    // Wait a tick for DOM to fully paint sections
    const timer = setTimeout(() => {
      smoothScrollToHash(hash);
    }, 120);

    return () => clearTimeout(timer);
  }, [isHomePage]);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-black/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-3 lg:px-[12rem]">
        {/* Logo */}
        <Link href="/" className="leading-none">
          <Image
            src="/images/nav-logo.png"
            alt="My Time Machine Logo"
            width={100}
            height={70}
            className="object-contain"
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.label === activeLabel;
            return (
              <a
                key={link.label}
                href={
                  link.type === "route" ? link.href : `/#${link.hash}`
                }
                onClick={(e) => handleNavClick(e, link)}
                className={`group relative pb-1 text-[12px] font-medium tracking-widest transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-100"
                }`}
              >
                {link.label}

                {/* Active underline — slides in from left */}
                <span
                  className={`absolute -bottom-[1px] left-0 h-[2px] bg-amber-400 transition-all duration-300 ease-out ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />

                {/* Hover underline (only when not active) */}
                {!isActive && (
                  <span className="absolute -bottom-[1px] left-0 h-[2px] w-0 bg-white/30 transition-all duration-200 ease-out group-hover:w-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <PrimaryButton htmlContent="START MY TIME JUMP" isRightArrow={false} />
      </div>
    </header>
  );
}
