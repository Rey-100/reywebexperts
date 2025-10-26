// app/services/page.tsx

import { fetchAPI } from '../../lib/api'; 
import Link from 'next/link';

// Definimos el tipo de la data que esperamos
type PageData = {
  page: {
    title: string;
    content: string;
  };
};

// --- El Componente de la Página (Server Component) ---
export default async function ServicesPage() {

  // Buscamos la PÁGINA de WordPress con el slug "servicios"
  const query = `
    query GetServicesPage {
      page(id: "services", idType: URI) {
        title
        content
      }
    }
  `;

  // Revalida el caché cada 1 hora (3600 segundos)
  const data: PageData = await fetchAPI(query, { revalidate: 3600 });
  const page = data.page;

  if (!page) {
    return <div>Página de Servicios no encontrada.</div>;
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <Link href="/">← Volver al inicio</Link>
      <hr style={{ margin: '1rem 0' }} />
      
      <h1>{page.title}</h1>
      
      <article dangerouslySetInnerHTML={{ __html: page.content }} />
    </main>
  );
}


// // app/services/page.tsx

// import { fetchAPI } from '../../lib/api'; // Subimos un nivel (../)
// import Link from 'next/link';

// // Definimos el tipo de la data que esperamos
// type PageData = {
//   page: {
//     title: string;
//     content: string;
//   };
// };

// // --- El Componente de la Página ---
// // No necesita 'props' porque sabemos exactamente qué página buscar
// export default async function ServicesPage() {

//   // --- Hacemos la consulta de GraphQL ---
//   // Buscamos una PÁGINA (page) específica por su slug ("servicios")
//   const query = `
//     query GetServicesPage {
//       page(id: "services", idType: URI) {
//         title
//         content
//       }
//     }
//   `;

//   // Llamamos a la API
//   // Le damos un 'revalidate' alto (1 hora) porque esta página no cambia mucho
//   const data: PageData = await fetchAPI(query, { revalidate: 3600 });
//   const page = data.page;

//   if (!page) {
//     return <div>Página no encontrada. ¿La creaste en WordPress?</div>;
//   }

//   return (
//     <main style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
//       <Link href="/">← Volver al inicio</Link>
//       <hr style={{ margin: '1rem 0' }} />
      
//       <h1>{page.title}</h1>
      
//       {/* Mostramos el contenido de la página */}
//       <article dangerouslySetInnerHTML={{ __html: page.content }} />
//     </main>
//   );
// }