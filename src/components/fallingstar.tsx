"use client";

import React, { useEffect, useState } from "react";

const LINE_COUNT = 20;
const MIN_DURATION = 2;
const MAX_DURATION = 5;

interface Line {
  id: number;
  left: string;
  width: number;
  height: number;
  animationDuration: string;
  delay: string;
}

export default function FallingLines() {
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const newLines = Array.from({ length: LINE_COUNT }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      width: 1 + Math.random() * 3,
      height: 50 + Math.random() * 10,
      animationDuration: `${MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION)}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setLines(newLines);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute bg-gradient-to-b from-blue-400 to-transparent opacity-70 animate-fall-slant"
          style={{
            left: line.left,
            width: `${line.width}px`,
            height: "0",
            animationDuration: line.animationDuration,
            animationDelay: line.delay,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes fall-slant {
          0% {
            transform: translateY(-100px) translateX(0) rotate(45deg);
            height: 0;
            opacity: 1;
          }
          20% {
            height: 100px; /* Gradually grow to a line */
          }
          70% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(calc(100vh + 200px)) translateX(calc(-100vh - 200px)) rotate(45deg);
            opacity: 0;
          }
        }
        .animate-fall-slant {
          animation-name: fall-slant;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
