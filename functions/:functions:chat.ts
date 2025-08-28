export async function onRequestPost({ request }) {
return new Response(JSON.stringify({ message: "Chatbot backend coming soon" }), {
headers: { 'content-type': 'application/json' }
});
}