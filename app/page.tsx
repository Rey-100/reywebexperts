// app/page.tsx

import Link from 'next/link';
import Image from 'next/image'; // ¡Importación correcta para el componente!
import { fetchAPI } from '../lib/api'; // Ruta correcta si lib/ está al mismo nivel que app/

// --- Tipos de Datos para TypeScript ---
type FeaturedImageNode = {
  node: {
    sourceUrl: string;
    altText: string;
  } | null; 
} | null; 

type Post = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage: FeaturedImageNode; // Incluye la imagen destacada
};

type AllPostsData = {
  posts: {
    nodes: Post[];
  };
};

// --- El Componente de la Página (Server Component) ---
export default async function Home() {
  
  const query = `
    query GetLatestPosts {
      posts(first: 10) {
        nodes {
          id
          title
          excerpt
          slug
          featuredImage { 
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  // Revalida el caché cada 60 segundos
  const data: AllPostsData = await fetchAPI(query, { revalidate: 60 });
  const posts = data.posts.nodes;

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Mis Posts desde WordPress</h1>
      <hr />

      {posts.map((post: Post) => (
        <article key={post.id} style={{ marginBottom: '40px' }}>
          
          {/* Muestra la imagen destacada si existe */}
          {post.featuredImage?.node?.sourceUrl && (
            <Image
              src={post.featuredImage.node.sourceUrl.replace('http://', 'https://')} // 💡 Fuerza HTTPS por seguridad
              alt={post.featuredImage.node.altText || post.title}
              width={600} // Necesario para la optimización de Next/Image
              height={300} // Necesario para la optimización de Next/Image
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              priority
            />
          )}

          <Link href={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
          
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          
        </article>
      ))}
    </main>
  );
}



// // app/page.tsx

// import Link from 'next/link';
// import Image from 'next/image'; // ¡Importante para las imágenes!
// import { fetchAPI } from '../lib/api'; 

// // --- Tipos de Datos para TypeScript ---
// type FeaturedImageNode = {
//   node: {
//     sourceUrl: string;
//     altText: string;
//   } | null; 
// } | null; 

// type Post = {
//   id: string;
//   title: string;
//   excerpt: string;
//   slug: string;
//   featuredImage: FeaturedImageNode; // Incluye la imagen destacada
// };

// type AllPostsData = {
//   posts: {
//     nodes: Post[];
//   };
// };

// // --- El Componente de la Página (Server Component) ---
// export default async function Home() {
  
//   const query = `
//     query GetLatestPosts {
//       posts(first: 10) {
//         nodes {
//           id
//           title
//           excerpt
//           slug
//           featuredImage { 
//             node {
//               sourceUrl
//               altText
//             }
//           }
//         }
//       }
//     }
//   `;

//   // Revalida el caché cada 60 segundos
//   const data: AllPostsData = await fetchAPI(query, { revalidate: 60 });
//   const posts = data.posts.nodes;

//   return (
//     <main style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
//       <h1>Mis Posts desde WordPress</h1>
//       <hr />

//       {posts.map((post: Post) => (
//         <article key={post.id} style={{ marginBottom: '40px' }}>
          
//           {/* Muestra la imagen destacada si existe */}
//           {post.featuredImage?.node?.sourceUrl && (
//             <Image
//               src={post.featuredImage.node.sourceUrl}
//               alt={post.featuredImage.node.altText || post.title}
//               width={600} 
//               height={300}
//               style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
//               priority
//             />
//           )}

//           <Link href={`/blog/${post.slug}`}>
//             <h2>{post.title}</h2>
//           </Link>
          
//           <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          
//         </article>
//       ))}
//     </main>
//   );
// }