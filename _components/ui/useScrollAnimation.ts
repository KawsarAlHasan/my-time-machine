"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "left" | "right" | "up" | "down" | "fade";

interface UseScrollAnimationOptions {
  direction?: Direction;
  delay?: number;      // ms
  threshold?: number;  // 0..1
  once?: boolean;
}

/**
 * Returns a ref to attach to the element and a boolean `isVisible`.
 * When the element enters the viewport the boolean flips to true so the
 * caller can apply the "visible" CSS class.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>({
  direction = "up",
  delay = 0,
  threshold = 0.15,
  once = true,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use the delay before marking visible
          const timer = setTimeout(() => setIsVisible(true), delay);
          if (once) observer.disconnect();
          return () => clearTimeout(timer);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, once]);

  return { ref, isVisible, direction };
}

/** Returns a CSS class string for the initial hidden state based on direction */
export function getAnimationClasses(
  direction: Direction,
  isVisible: boolean,
  extra = ""
): string {
  const base =
    "transition-all duration-700 ease-out will-change-transform";

  const hidden: Record<Direction, string> = {
    left: "opacity-0 -translate-x-16",
    right: "opacity-0 translate-x-16",
    up: "opacity-0 translate-y-12",
    down: "opacity-0 -translate-y-12",
    fade: "opacity-0",
  };

  const visible = "opacity-100 translate-x-0 translate-y-0";

  return `${base} ${isVisible ? visible : hidden[direction]} ${extra}`;
}
