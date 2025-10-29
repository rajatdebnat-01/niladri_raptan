// src/components/providers/SmoothScrollProvider.jsx

import { createContext, useContext, useRef, useEffect } from "react";

const SmoothScrollContext = createContext();

export const SmoothScrollProvider = ({ children }) => {
  const scrollingRef = useRef(false);
  const rafRef = useRef(null);

  // Smooth scroll with easing function
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const scrollTo = (element, offset = 80) => {
    if (!element || scrollingRef.current) return;

    scrollingRef.current = true;

    const startPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second smooth scroll
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        rafRef.current = requestAnimationFrame(animation);
      } else {
        scrollingRef.current = false;
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(animation);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Smooth scroll behavior for all anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute("href");
      if (href === "#") return;

      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        scrollTo(element);
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScrolling = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error(
      "useSmoothScrolling must be used within SmoothScrollProvider"
    );
  }
  return context;
};