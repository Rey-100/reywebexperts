// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Remote patterns: permite imágenes desde hosts externos y subrutas.
    remotePatterns: [
      // Host que ya tenías
      {
        protocol: "https",
        hostname: "forestgreen-mink-585034.hostingersite.com",
        port: "",
        pathname: "/**",
      },
      // Imágenes usadas en tus componentes (3D marquee / assets)
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
      // Otro host que aparece en tu código
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        port: "",
        pathname: "/**",
      },
      // Añade aquí otros hosts que uses en el futuro
      // {
      //   protocol: "https",
      //   hostname: "otro-host-ejemplo.com",
      //   port: "",
      //   pathname: "/**",
      // },
    ],
    // Opcional: si prefieres permitir dominios simples en vez de patterns,
    // puedes usar `domains: ['assets.aceternity.com', 'ext.same-assets.com']`
    // en lugar de remotePatterns. remotePatterns es más flexible.
  },

  // Otros ajustes Next.js que tengas pueden ir debajo
  // reactStrictMode: true,
  // experimental: { ... },
};

module.exports = nextConfig;


