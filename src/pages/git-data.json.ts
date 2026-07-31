import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const response = await fetch('https://api.github.com/repos/oswwwaldo/portfolio/commits');

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: `GitHub API responded with status: ${response.status}` }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const gitData = await response.json();
    return new Response(
      JSON.stringify(gitData), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {

    return new Response(
      JSON.stringify({ error: 'Internal Server Error or Network Failure' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};