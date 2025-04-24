import React, { useState } from "react";
import axios from "axios";

const HeroSection = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/shorten/", {
        long_url: longUrl,
      });
      setShortUrl(response.data.short_url);
    } catch (error) {
      console.error("Shortening failed", error);
    }
  };

  return (
    <section className="w-full min-h-screen px-6 py-16 bg-[hsl(var(--background))] text-white  flex flex-col md:flex-row items-center justify-center gap-12">
      
      {/* Left: Shorten Form */}
      <div className="flex-1 max-w-xl  w-full">
        <h2 className="text-4xl font-bold mb-6">Paste your long URL</h2>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 ">
          <input
            type="url"
            required
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="https://example.com/very/long/url"
            className="w-full px-4 py-3 bg-[var(--accent-foreground)] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Shorten
          </button>
        </form>
        {shortUrl && (
          <div className="mt-4 text-lg">
            Short URL: <a href={shortUrl} target="_blank" className="underline text-blue-300">{shortUrl}</a>
          </div>
        )}
      </div>

      {/* Right: Promo Text */}
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h1 className="text-5xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-400">
          Transform URLs like magic 🪄
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          ZipLink turns your chaotic, bulky URLs into sleek, shareable links in a flash.
        </p>
        <p className="italic text-lg text-accent-foreground">
          "Because short is sweet, and sweet is smart."
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
