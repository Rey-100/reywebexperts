// app/blog/[slug]/page.tsx

import { fetchAPI } from '@/lib/api'; 
import Link from 'next/link';
import Image from 'next/image';

// --- Tipos de Datos para TypeScript ---
type PageProps = {
  params: Promise<{ slug: string }>; 
};

// 💡 NUEVO: Definimos el tipo para la imagen destacada
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
    featuredImage: FeaturedImageNode; // 💡 NUEVO: Incluimos la imagen en el tipo
  };
};

export default async function PostPage(props: PageProps) {
  
  const params = await props.params;
  const { slug } = params; 

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
    
    const imageUrl = post.featuredImage?.node?.sourceUrl?.replace('http://', 'https://');

    return (
      // 💡 CAMBIO: Usamos clases de Tailwind
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto"> {/* Centramos el contenido del post */}
          
          <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Volver al blog
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
            {post.title}
          </h1>

          {/* Renderiza la imagen destacada */}
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={post.featuredImage?.node?.altText || post.title}
              width={800} 
              height={400}
              className="rounded-lg object-cover w-full h-auto mb-8 shadow-lg" // Clases de Tailwind
              priority
            />
          )}
          
          {/* 💡 CAMBIO: Aquí usamos el plugin de tipografía 'prose' */}
          <article 
            className="prose prose-lg lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          {/* 'prose' aplica estilos a los <p>, <h2>, <ul>, etc.
            'prose-lg' (o 'xl') ajusta el tamaño de fuente.
            'max-w-none' elimina el límite de ancho de 'prose'.
          */}
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error al obtener el post:", error);
    return <h1 className="text-center text-red-500 mt-10">Error al cargar el contenido del post.</h1>;
  }
}