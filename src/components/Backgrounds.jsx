"use client";

import React, { useEffect, useState } from "react";

// Small utility to merge class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ---------- Grid Background ----------
export function GridBackground({
  className,
  children,
  gridSize = 20,
  gridColor = "#e4e4e7",
  darkGridColor = "#262626",
  showFade = true,
  fadeIntensity = 20,
  ...props
}) {
  const [currentGridColor, setCurrentGridColor] = useState(gridColor);

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkModeActive =
      document.documentElement.classList.contains("dark") || prefersDarkMode;
    setCurrentGridColor(isDarkModeActive ? darkGridColor : gridColor);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "class") {
          const updatedIsDarkModeActive =
            document.documentElement.classList.contains("dark");
          setCurrentGridColor(
            updatedIsDarkModeActive ? darkGridColor : gridColor
          );
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [gridColor, darkGridColor]);

  return (
    <div
      className={cn(
        "absolute flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black",
        className
      )}
      {...props}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundImage: `
            linear-gradient(to right, ${currentGridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${currentGridColor} 1px, transparent 1px)
          `,
        }}
      />

      {/* Optional fade effect */}
      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black"
          style={{
            maskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}

// ---------- Dot Background ----------
export function DotBackground({
  className,
  children,
  dotSize = 1,
  dotColor = "#000",
  darkDotColor = "#fff",
  spacing = 20,
  showFade = true,
  fadeIntensity = 20,
  ...props
}) {
  const [currentDotColor, setCurrentDotColor] = useState(dotColor);

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkModeActive =
      document.documentElement.classList.contains("dark") || prefersDarkMode;
    setCurrentDotColor(isDarkModeActive ? darkDotColor : dotColor);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "class") {
          const updatedIsDarkModeActive =
            document.documentElement.classList.contains("dark");
          setCurrentDotColor(
            updatedIsDarkModeActive ? darkDotColor : dotColor
          );
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [dotColor, darkDotColor]);

  return (
    <div
      className={cn(
        "absolute flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black",
        className
      )}
      {...props}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: `${spacing}px ${spacing}px`,
          backgroundImage: `radial-gradient(${currentDotColor} ${dotSize}px, transparent ${dotSize}px)`,
        }}
      />

      {/* Optional fade effect */}
      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black"
          style={{
            maskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
