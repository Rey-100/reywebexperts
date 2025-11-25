
// components/ThreeDMarqueeA.tsx

// components/ThreeDMarqueeA.tsx



"use client";

import { motion } from "motion/react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export default function ThreeDMarqueeA() {
  const images = Array.from({ length: 34 }, (_, i) => `/images/${i + 1}.webp`);

  const flipWords = ["resultados", "ventas", "impacto", "crecimiento"];

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-3xl">
      
      {/* === HERO TITLE === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center leading-tight"
      >
        {/* Línea fija 1 */}
        <h2 className="font-playfair text-white block text-4xl md:text-6xl lg:text-[55px] font-bold">
          Diseño web profesional
        </h2>

        {/* Línea fija 2 */}
        <h2 className="font-playfair text-white block text-4xl md:text-6xl lg:text-[55px] font-light mt-2">
          que inspira confianza y genera
        </h2>

        {/* === FLIP WORD IN ITS OWN LINE (correcto para evitar romper el layout) === */}
        <div className="mt-4 flex justify-center">
          <ContainerTextFlip words={flipWords} className="text-[45px] md:text-[60px] text-white font-playfair" />
        </div>
      </motion.div>

      {/* === Subtítulo === */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-20 mx-auto max-w-2xl py-6 text-center text-white text-[16px] md:text-lg font-lato"
      >
        Creamos sitios web atractivos y personalizados que elevan tu marca y convierten visitantes en clientes leales.
      </motion.span>

      {/* === Botones === */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4"
      >
        <button className="rounded-md bg-[#c0b49f] px-6 py-2.5 text-sm font-medium text-black font-poppins transition-all duration-300 hover:bg-[#b3a58b] focus:ring-2 focus:ring-[#c0b49f] focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Solicita tu sitio web
        </button>

        <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white font-poppins backdrop-blur-sm transition-all duration-300 hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Ver proyectos
        </button>
      </motion.span>

      {/* === Overlay oscuro === */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/50 dark:bg-black/40" />

      {/* === Fondo animado === */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
