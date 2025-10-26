// app/blog/[slug]/page.tsx

import { fetchAPI } from '../../../lib/api'; // ✅ USAMOS TRES NIVELES
import Link from 'next/link';
import Image from 'next/image'; // Importamos el componente Image

// --- Tipos de Datos para TypeScript ---
type PageProps = {
  params: Promise<{ slug: string }>; 
};

type FeaturedImageNode = {
  node: {
    sourceUrl: string;
    altText: string;
  } | null; 
} | null; 

type PostData = {
  post: {
    title: string;
    content: string; 
    featuredImage: FeaturedImageNode; // Incluimos la imagen
  };
};

// --- El Componente de la Página (Server Component) ---
export default async function PostPage(props: PageProps) {
  
  const params = await props.params;
  const { slug } = params; 

  // --- Hacemos la consulta de GraphQL (CON IMAGEN) ---
  const query = `
    query GetPostBySlug {
      post(id: "${slug}", idType: SLUG) {
        title
        content
        featuredImage { 
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  try {
    const data: PostData = await fetchAPI(query);
    const post = data.post;

    if (!post) {
      return <div>Post no encontrado (slug: {slug})</div>;
    }
    
    // Obtenemos la URL de la imagen, asegurando HTTPS
    const imageUrl = post.featuredImage?.node?.sourceUrl?.replace('http://', 'https://');

    return (
      <main style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <Link href="/">← Volver al inicio</Link>
        <hr style={{ margin: '1rem 0' }} />
        
        <h1>{post.title}</h1>

        {/* Renderiza la imagen destacada */}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={post.featuredImage?.node?.altText || post.title}
            width={800} 
            height={400}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', marginBottom: '30px' }}
            priority
          />
        )}
        
        <article dangerouslySetInnerHTML={{ __html: post.content }} />
      </main>
    );
  } catch (error) {
    // Si la API falla por sintaxis, devuelve un mensaje de error amigable
    console.error("Error al obtener el post:", error);
    return <h1>Error al cargar el contenido del post.</h1>;
  }
}