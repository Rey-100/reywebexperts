// app/blog/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { fetchAPI } from '@/lib/api'; 
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'; 
import { Button } from '@/components/ui/button'; 

// --- Tipos de Datos (ASEGÚRATE DE QUE ESTÉN COMPLETOS) ---

// Tipo para la imagen destacada
type FeaturedImageNode = {
  node: {
    sourceUrl: string;
    altText: string;
  } | null; 
} | null; 

// Tipo para un solo Post (en la lista)
type Post = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage: FeaturedImageNode; 
};

// 💡 ESTA ES LA CORRECCIÓN
// Tu tipo 'AllPostsData' debe definir la propiedad 'posts'
type AllPostsData = {
  posts: {
    nodes: Post[];
  };
};

// --- El Componente de la Página ---
export default async function BlogIndexPage() {
  
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

  // TypeScript ahora sabe que 'data' tendrá una propiedad 'posts'
  const data: AllPostsData = await fetchAPI(query, { revalidate: 60 });
  const posts = data.posts.nodes; // <-- El error desaparecerá

  return (
    // 💡 CAMBIO: Usamos clases de Tailwind en lugar de 'style'
    // 'container' centra el contenido, 'mx-auto' lo centra horizontalmente
    // 'py-12' (padding vertical) y 'px-4' (padding horizontal)
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Nuestro Blog</h1>

      {/* 💡 CAMBIO: Usamos CSS Grid de Tailwind para las tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {posts.map((post: Post) => (
          // 💡 CAMBIO: Usamos el componente <Card>
          <Card key={post.id} className="flex flex-col justify-between shadow-lg">
            <div>
              <CardHeader className="p-0">
                {post.featuredImage?.node?.sourceUrl && (
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.featuredImage.node.sourceUrl.replace('http://', 'https://')}
                      alt={post.featuredImage.node.altText || post.title}
                      width={600} 
                      height={300} 
                      className="rounded-t-lg object-cover w-full h-48" // Clases de Tailwind
                    />
                  </Link>
                )}
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="mb-2">
                  <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold hover:text-blue-700">
                    {post.title}
                  </Link>
                </CardTitle>
                <div 
                  className="text-gray-700 line-clamp-3" // 'line-clamp-3' limita el texto a 3 líneas
                  dangerouslySetInnerHTML={{ __html: post.excerpt }} 
                />
              </CardContent>
            </div>
            
            <CardFooter className="p-6 pt-0">
              <Button asChild>
                <Link href={`/blog/${post.slug}`}>Leer Más</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}

      </div>
    </main>
  );
}