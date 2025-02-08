export async function GET() {
  const robots = `User-agent: *\nAllow: /`;

  return new Response(robots, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
