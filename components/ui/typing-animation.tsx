"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 25,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text]);

  const parts = displayedText.split(" ");

  return (
    <span>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part === "tech" && <br />}
          <span
            className={`transition-all duration-1000 ${
              part === "Developer" || part === "Enthusiast"
                ? "animated-gradient text-[2.5rem] font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm"
                : "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm"
            }`}
          >
            {part}{" "}
          </span>
        </React.Fragment>
      ))}
    </span>
  );
}
