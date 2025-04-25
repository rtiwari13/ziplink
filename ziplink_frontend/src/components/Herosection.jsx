import React, { useState } from "react";
import axios from "axios";

const HeroSection = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [activeTab, setActiveTab] = useState("short");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint =
        activeTab === "short"
          ? "http://localhost:8000/api/shorten/"
          : "http://localhost:8000/api/generate-qr/";

      const response = await axios.post(endpoint, {
        long_url: longUrl,
      });

      setShortUrl(
        activeTab === "short"
          ? response.data.short_url
          : response.data.qr_code_url
      );
    } catch (error) {
      console.error("Action failed:", error);
    }
  };

  return (
    <section className="w-full min-h-screen bg-[hsl(var(--background))] text-white flex flex-col justify-center items-center px-6 py-16">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Form Area */}
        <div className="flex-1  p-6 rounded-lg shadow-lg w-full">
          {/* Toggle Tabs */}
          <div className="flex justify-center mb-6 space-x-4">
            <button
              onClick={() => setActiveTab("short")}
              className={`px-5 py-2 border-2  border-[var(--ring)]  rounded-full text-lg font-semibold ${
                activeTab === "short"
                  ? "bg-[var(--primary)] text--[var(--primary-foreground)]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              🔗 Short Link
            </button>
            <button
              onClick={() => setActiveTab("qr")}
              className={`px-5 py-2 border-2 border-[var(--ring)] rounded-full text-lg font-semibold ${
                activeTab === "qr"
                  ? "bg-[var(--primary)] text--[var(--primary-foreground)]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              📱 QR Code
            </button>
          </div>

          {/* Input + Action */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="url"
              required
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="Paste your long URL here..."
              className="px-4 py-3 rounded-lg bg-[var(--background)] border-1 border-[var(--ring)] text-[var(--foreground)] placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[var(--foreground)]"
            />
            <div className="">
            <button
              type="submit"
              className="px-5 py-2 border-2 border-[var(--ring)] rounded-[var(--radius)]  text-lg font-semibold hover:bg-[var(--primary)]"
            >
              {activeTab === "short" ? "Shorten URL" : "Generate QR Code"}
            </button>
            </div>

          </form>

          {/* Result Display */}
          {shortUrl && (
            <div className="mt-4 text-sm break-all text-center text-blue-300">
              {activeTab === "short" ? (
                <>
                  Short URL:&nbsp;
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {shortUrl}
                  </a>
                </>
              ) : (
                <img
                  src={shortUrl}
                  alt="QR Code"
                  className="mx-auto mt-2 w-40 h-40"
                />
              )}
            </div>
          )}
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Transform URLs like magic 🪄
          </h1>
          <p className="text-lg text-gray-300">
            ZipLink turns your chaotic, bulky URLs into sleek, shareable links
            or scannable QR codes in a flash.
          </p>
          <p className="italic text-accent text-cyan-400 text-lg">
            "Because short is sweet, and sweet is smart."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
