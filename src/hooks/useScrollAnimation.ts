"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

interface UseScrollAnimationReturn<T extends Element> {
  ref: React.RefObject<T | null>;
  isVisible: boolean;
}

export function useScrollAnimation<T extends Element = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn<T> {
  const { threshold = 0.15, rootMargin = "0px" } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
