"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useRef, useCallback } from "react";
import PrimaryButton from "./ui/PrimaryButton";

// ── Nav link definitions ─────────────────────────────────────────────────────
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

const SECTION_IDS = ["how-it-works", "the-app", "about-manny", "contact"];

function smoothScrollToHash(hash: string) {
  const el = document.getElementById(hash);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${hash}`);
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const isHomePage = pathname === "/";
  const isTheBookPage = pathname === "/the-book";

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // ── Scroll shadow ──────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Intersection Observer ──────────────────────────────────────────────────
  useEffect(() => {
    if (!isHomePage) {
      setActiveHash("");
      return;
    }
    observerRef.current?.disconnect();
    const sectionMap = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionMap.set(entry.target.id, entry.intersectionRatio);
        });
        let topId = "";
        let topRatio = 0;
        sectionMap.forEach((ratio, id) => {
          if (ratio > topRatio) { topRatio = ratio; topId = id; }
        });
        if (topId) setActiveHash(topId);
      },
      { rootMargin: "-80px 0px -40% 0px", threshold: [0, 0.1, 0.3, 0.5, 0.7, 1.0] }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [isHomePage]);

  const getActiveLabel = (): string => {
    if (isTheBookPage) return "THE BOOK";
    if (isHomePage) {
      const found = navLinks.find((l) => l.type === "hash" && l.hash === activeHash);
      return found?.label ?? "";
    }
    return "";
  };

  const activeLabel = getActiveLabel();

  const handleNavClick = useCallback(
    (e: React.MouseEvent, link: NavLink) => {
      e.preventDefault();
      setMobileOpen(false);

      if (link.type === "route") {
        router.push(link.href);
        return;
      }

      const { hash } = link;
      if (isHomePage) {
        smoothScrollToHash(hash);
      } else {
        router.push(`/#${hash}`);
      }
    },
    [isHomePage, router]
  );

  useEffect(() => {
    if (!isHomePage) return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const timer = setTimeout(() => { smoothScrollToHash(hash); }, 120);
    return () => clearTimeout(timer);
  }, [isHomePage]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-black/95 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-20 xl:px-48">
          {/* Logo */}
          <Link href="/" className="leading-none z-50 relative">
            <Image
              src="/images/nav-logo.png"
              alt="My Time Machine Logo"
              width={90}
              height={63}
              className="object-contain w-[80px] sm:w-[100px]"
            />
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => {
              const isActive = link.label === activeLabel;
              return (
                <a
                  key={link.label}
                  href={link.type === "route" ? link.href : `/#${link.hash}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`group relative pb-1 text-[11px] xl:text-[12px] font-medium tracking-widest transition-colors duration-200 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-gray-100"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-[1px] left-0 h-[2px] bg-amber-400 transition-all duration-300 ease-out ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                  {!isActive && (
                    <span className="absolute -bottom-[1px] left-0 h-[2px] w-0 bg-white/30 transition-all duration-200 ease-out group-hover:w-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <PrimaryButton htmlContent="START MY TIME JUMP" isRightArrow={false} />
          </div>

          {/* Mobile: Hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="relative z-50 flex lg:hidden h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md"
          >
            <span
              className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 origin-center ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-200 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 origin-center ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-black/98 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 pb-20 pt-24">
          {navLinks.map((link, i) => {
            const isActive = link.label === activeLabel;
            return (
              <a
                key={link.label}
                href={link.type === "route" ? link.href : `/#${link.hash}`}
                onClick={(e) => handleNavClick(e, link)}
                className={`w-full text-center py-4 text-sm font-medium tracking-[0.2em] border-b border-white/10 transition-colors duration-200 ${
                  isActive ? "text-amber-400" : "text-gray-300 hover:text-white"
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                  transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                  opacity: mobileOpen ? 1 : 0,
                  transition: `opacity 0.3s ease ${i * 50}ms, transform 0.3s ease ${i * 50}ms, color 0.2s`,
                }}
              >
                {link.label}
              </a>
            );
          })}

          <div
            className="mt-8 w-full flex justify-center"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 50}ms` : "0ms",
              transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
              opacity: mobileOpen ? 1 : 0,
              transition: `opacity 0.3s ease ${navLinks.length * 50}ms, transform 0.3s ease ${navLinks.length * 50}ms`,
            }}
          >
            <PrimaryButton htmlContent="START MY TIME JUMP" isRightArrow={true} />
          </div>
        </div>
      </div>
    </>
  );
}
