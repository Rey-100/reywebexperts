//components\MarqueeShowcase.tsx


"use client";

import Image from "next/image";
import { motion } from "framer-motion";


interface MarqueeShowcaseProps {
  images?: string[];
  speed?: number;
}

export default function MarqueeShowcase({
  images = [
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/world-map.webp",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
  ],
  speed = 25,
}: MarqueeShowcaseProps) {
  return (
    <div className="relative flex w-full overflow-hidden bg-black py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:scale-105 transition-transform"
          >
            <Image
              src={src}
              alt={`marquee-image-${index}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
