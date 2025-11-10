//components\ThreeDMarqueeA.tsx

/*  */
"use client";



import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function ThreeDMarqueeA() {
  const images = [
      "/images/1.webp",
      "/images/2.webp",
      "/images/3.webp",
      "/images/4.webp",
      "/images/5.webp",
      "/images/6.webp",
      "/images/7.webp",
      "/images/8.webp",
      "/images/9.webp",
      "/images/10.webp",
      "/images/11.webp",
      "/images/12.webp",
      "/images/13.webp",
      "/images/14.webp",
      "/images/15.webp",
      "/images/16.webp",
      "/images/17.webp",
      "/images/18.webp",
      "/images/19.webp",
      "/images/20.webp",
      "/images/21.webp",
      "/images/22.webp",
      "/images/23.webp",
      "/images/24.webp",
      "/images/25.webp",
      "/images/26.webp",
      "/images/27.webp",
      "/images/28.webp",
      "/images/29.webp",
      "/images/30.webp",
      "/images/31.webp",
      "/images/32.webp",
      "/images/33.webp",
      "/images/34.webp",







   
  ];




  
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-3xl">
      
      {/* Título principal my-10 */}
      <h2 className="relative z-20 mx-auto max-w-5xl text-center text-3xl font-light tracking-wide text-white md:text-5xl lg:text-6xl leading-tight">
        <span className="bg-gradient-to-r from-gray-100 via-[#d4c6a8] to-gray-200 bg-clip-text text-transparent italic font-semibold">
          Diseño web profesional
        </span>{" "}
        que inspira confianza y genera resultados.
      </h2>

      {/* Subtítulo */}
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-base text-gray-300 md:text-lg font-light">
        Creamos sitios web atractivos y personalizados que elevan tu marca y convierten visitantes en clientes leales.
      </p>

      {/* Botones */}
      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <button className="rounded-md bg-[#c0b49f] px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#b3a58b] focus:ring-2 focus:ring-[#c0b49f] focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Solicita tu sitio web
        </button>
        <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Ver proyectos
        </button>
      </div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/60 dark:bg-black/40" />

      {/* Fondo animado con imágenes */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
//    return (
//     <div className="relative my-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-3xl">
//       {/* Título principal */}
//       <h2 className="relative z-20 mx-auto max-w-5xl text-center text-3xl font-light tracking-wide text-white md:text-5xl lg:text-6xl">
//         <span className="font-semibold italic text-[#c0b49f]">
//           Diseño web profesional
//         </span>{" "}
//         que inspira confianza y genera resultados.
//       </h2>

//       {/* Subtítulo */}
//       <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-base text-gray-300 md:text-lg font-light">
//         Creamos sitios web atractivos y personalizados que elevan tu marca y convierten visitantes en clientes leales.
//       </p>

//       {/* Botones de acción */}
//       <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
//         <button className="rounded-md bg-[#c0b49f] px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#b3a58b] focus:ring-2 focus:ring-[#c0b49f] focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
//           Solicita tu sitio web
//         </button>
//         <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
//           Ver proyectos
//         </button>
//       </div>

//       {/* Overlay oscuro */}
//       <div className="absolute inset-0 z-10 h-full w-full bg-black/60 dark:bg-black/40" />

//       {/* Fondo animado de imágenes */}
//       <ThreeDMarquee
//         className="pointer-events-none absolute inset-0 h-full w-full"
//         images={images}
//       />
//     </div>
//   );
// }
 
  /* return (
    <div className="relative my-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-3xl">
      <h2 className="relative z-20 mx-auto max-w-5xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-5xl">
        Diseño web profesional que inspira{" "}
        <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
         confianza 
        </span>{" "}
         y genera resultados.
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        Creamos sitios web atractivos y personalizados que elevan tu marca y convierten visitantes en clientes leales.
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <button className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Join the club
        </button>
        <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Read more
        </button>
      </div>

      /*  overlay 
      <div className="absolute inset-0 z-10 h-full w-full bg-black/60 dark:bg-black/40" />

      {/* Componente visual de las imágenes 
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
 */ 