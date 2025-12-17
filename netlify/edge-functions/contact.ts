export default async (request: Request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const data = await request.json();
    console.log("Formulário recebido na Edge:", data);

    // Aqui você integraria com Resend, SendGrid ou Twilio.
    // Como exemplo, retornamos sucesso imediato.
    
    return new Response(JSON.stringify({
      success: true,
      message: "Recebido pela Netlify Edge!",
      receivedAt: new Date().toISOString()
    }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }
};