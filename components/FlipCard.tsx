"use client";

import { useState, useRef, useEffect } from "react";

interface FlipCardProps {
  frontText: string;
  backText: string;
}

export default function FlipCard({ frontText, backText }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsFlipped(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => setIsFlipped(!isFlipped)}
      className="w-full md:w-1/2 h-70 perspective-1000 group cursor-pointer"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-3d md:group-hover:rotate-x-180 ${isFlipped ? "rotate-x-180" : ""}`}
      >
        {/* Front */}
        <div className="absolute inset-0 p-12 flex justify-center items-center backface-hidden">
          <h3 className="text-3xl font-semibold text-center">
            &gt;&gt; {frontText}
          </h3>
        </div>
        {/* Back */}
        <div className="absolute inset-0 p-12 flex justify-center items-center bg-blue-iest backface-hidden rotate-x-180">
          <h3 className="text-3xl font-semibold text-white text-center">
            &gt;&gt; {backText}
          </h3>
        </div>
      </div>
    </div>
  );
}
