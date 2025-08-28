export async function onRequestPost({ request }) {
  return new Response(JSON.stringify({ message: "Feedback API coming soon" }), { headers: { 'content-type': 'application/json' } });
}
