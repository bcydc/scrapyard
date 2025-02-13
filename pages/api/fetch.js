export const runtime = 'edge';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://scrapyard.hackclub.com/api/locations');

    if (!response.ok) {
      return new Response(JSON.stringify({ message: 'Failed to fetch data' }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
