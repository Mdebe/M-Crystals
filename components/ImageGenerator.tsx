"use client";

import { useState } from "react";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateImages = async () => {
    if (!prompt) return;
    setLoading(true);

    const res = await fetch("/api/gen-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    // Poll for output
    let url = data.url ?? data.output?.[0];
    if (data.status === "processing") {
      // wait & refetch until complete
      await new Promise((r) => setTimeout(r, 3000));
      const result = await fetch(data.url).then((r) => r.json());
      url = result.output?.[0];
    }

    if (url) setImages((prev) => [url, ...prev]);
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center text-[#121429] mb-4">
        Event & Decoration Image Generator
      </h2>

      <textarea
        className="w-full p-3 border rounded-lg"
        placeholder="Describe wedding, party or event decoration (e.g., “Elegant wedding arch with roses and candles”)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generateImages}
        disabled={loading}
        className="mt-4 w-full bg-[#f9e28e] text-[#121429] font-semibold py-2 rounded-xl hover:opacity-90 transition"
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {images.map((src, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-md">
            <img src={src} alt={`gen-${i}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}