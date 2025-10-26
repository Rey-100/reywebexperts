//lib/api.ts

/**
 * Función centralizada para hacer peticiones a la API de WPGraphQL.
 * @param query La consulta de GraphQL.
 * @param revalidate Opcional: El tiempo en segundos para la revalidación (ISR).
 */
export async function fetchAPI(query: string, { revalidate }: { revalidate?: number } = {}) {
  
  const url = process.env.WORDPRESS_API_URL;

  if (!url) {
    throw new Error("La variable WORDPRESS_API_URL no está definida en .env.local");
  }

  const headers = { 'Content-Type': 'application/json' };

  // La magia del App Router: 'next: { revalidate: ... }'
  // esto reemplaza a 'revalidate' de getStaticProps.
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query }),
    next: {
      revalidate: revalidate // Controla el caché (ISR)
    }
  });

  const json = await res.json();

  if (json.errors) {
    console.error("Error en la petición GraphQL:", json.errors);
    throw new Error('No se pudieron obtener los datos de la API');
  }

  return json.data;
}