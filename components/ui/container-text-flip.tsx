"use client";

import React, { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["mejor", "moderno", "bonito"],
  interval = 2500,
  className = "",
  textClassName = "",
  animationDuration = 600,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);

  // 👇 Tipo correcto para evitar "never"
  const textRef = React.useRef<HTMLSpanElement>(null);

  // 👇 Cambia palabras
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  // 👇 Ajusta ancho
  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.scrollWidth + 20);
    }
  }, [currentWordIndex]);

  return (
    <motion.div
      layout
      layoutId={`flip-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 1000 }}
      className={cn(
        "inline-block rounded-xl px-4 py-2 text-center border border-blue-400 shadow-[0_0_12px_rgba(56,189,248,0.4)]",
        className
      )}
      key={currentWordIndex}
    >
      <motion.span
        ref={textRef}
        className={cn("inline-block font-bold", textClassName)}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {words[currentWordIndex]}
      </motion.span>
    </motion.div>
  );
}
