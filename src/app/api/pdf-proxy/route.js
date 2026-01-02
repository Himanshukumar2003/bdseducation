// app/api/pdf-proxy/route.js (App Router)
// or pages/api/pdf-proxy.js (Pages Router)

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const pdfPath = searchParams.get("path");

    if (!pdfPath) {
      return new Response("Path required", { status: 400 });
    }

    const response = await fetch(
      `https://bdsapi.bwdemo.in/public/docs/${pdfPath}`
    );

    if (!response.ok) {
      throw new Error(`PDF fetch failed: ${response.status}`);
    }

    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline",
      },
    });
  } catch (error) {
    console.error("PDF proxy error:", error);
    return new Response("Failed to fetch PDF", { status: 500 });
  }
}
