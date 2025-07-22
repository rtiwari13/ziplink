// import React, { useState } from "react";
// import axios from "axios";

// const HeroSection = () => {
//   const [longUrl, setLongUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");
//   const [activeTab, setActiveTab] = useState("short");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint =
//         activeTab === "short"
//           ? "http://localhost:8000/shorten/"
//           : "http://localhost:8000/qrcode/create/";

//       const response = await axios.post(endpoint, {
//         original_url: longUrl,
//         link: longUrl,
//       });

//       setShortUrl(
//         activeTab === "short"
//           ? response.data.short_url
//           : response.data.qr_code_url
//       );
//     } catch (error) {
//       console.error("Action failed:", error);
//     }
//   };

//   return (
//     <section className="w-full min-h-screen bg-[(var(--bg))] text-white flex flex-col justify-center items-center px-6 py-16">
//       <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
//         {/* Left Form Area */}
//         <div className="flex-1 p-8 rounded-3xl shadow-xl w-full max-w-xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 text-white">
//           {/* Toggle Tabs */}
//           <div className="flex justify-center mb-6 space-x-6">
//             <button
//               onClick={() => setActiveTab("short")}
//               className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
//                 activeTab === "short"
//                   ? "bg-black"
//                   : "bg-white/10 text-gray-300 hover:text-white hover:bg-white/20"
//               }`}
//             >
//               <span className="text-2xl">🔗</span> Short Link
//             </button>
//             <button
//               onClick={() => setActiveTab("qr")}
//               className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
//                 activeTab === "qr"
//                   ? "bg-black "
//                   : "bg-white/10 text-gray-300 hover:text-white hover:bg-white/20"
//               }`}
//             >
//               <span className="text-2xl">📱</span> QR Code
//             </button>
//           </div>

//           {/* Input + Action */}
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <input
//               type="url"
//               required
//               value={longUrl}
//               onChange={(e) => setLongUrl(e.target.value)}
//               placeholder="Paste your long URL here..."
//               className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 "
//             />
//             <div>
//               <button
//                 type="submit"
//                 className=" text-white w-full px-6 py-3 rounded-xl border-1  font-semibold  hover:bg-[var(--big-button)] hover:text-black"
//               >
//                 {activeTab === "short"
//                   ? "Get your Shorten URL"
//                   : "🎯 Generate QR Code"}
//               </button>
//             </div>
//           </form>

//           {/* Result Display */}
//           {shortUrl && (
//             <div className="mt-6 text-center">
//               {activeTab === "short" ? (
//                 <div className="text-sm text-blue-300 break-all">
//                   Short URL:&nbsp;
//                   <a
//                     href={shortUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="underline hover:text-blue-400"
//                   >
//                     {shortUrl}
//                   </a>
//                 </div>
//               ) : (
//                 <img
//                   src={shortUrl}
//                   alt="QR Code"
//                   className="mx-auto mt-4 w-40 h-40 rounded-lg shadow-lg"
//                 />
//               )}
//             </div>
//           )}
//         </div>

//         {/* Right Content */}
//         <div className="flex-1 space-y-6 text-center md:text-left">
//           <h1 className="text-5xl font-extrabold leading-tight bg-clip-text ">
           
//             Transform URLs like magic 🪄
//           </h1>
//           <p className="text-lg text-gray-300">
//             ZipLink turns your chaotic, bulky URLs into sleek, shareable links
//             or scannable QR codes in a flash.
//           </p>
//           <p className="italic text-accent  text-lg">
//             "Because short is sweet, and sweet is smart."
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

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
          ? "http://localhost:8000/shorten/"
          : "http://localhost:8000/qrcode/create/";

      const response = await axios.post(endpoint, {
        original_url: longUrl,
        link: longUrl,
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
    <section className="w-full min-h-screen bg-[#2e3440] text-white flex flex-col justify-center items-center px-6 py-16"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Form Area */}
        <div className="flex-1 p-8 rounded-3xl shadow-2xl w-full max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 text-white">
          {/* Toggle Tabs */}
          <div className="flex justify-center mb-6 space-x-6">
            <button
              onClick={() => setActiveTab("short")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeTab === "short"
                  ? "bg-white text-black shadow"
                  : "bg-white/10 text-[#ffffff] border-1 hover:bg-white/20 "
              }`}
            >
              🔗 Short Link
            </button>
            <button
              onClick={() => setActiveTab("qr")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeTab === "qr"
                  ? "bg-white text-black shadow"
                  : "bg-white/10 border-1 text-[#ffffff] hover:bg-white/20"
              }`}
            >
              📱 QR Code
            </button>
          </div>
          <p className="px-2 mb-3 text-xl font-medium">Enter your long url here </p>
          {/* Input + Action */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="url"
              required
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="https://example.com/long-url/"
              className="px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-6 py-3 rounded-xl transition hover:bg-[#88c0d0]"
            >
              {activeTab === "short"
                ? "Get your Shorten URL"
                : "🎯 Generate QR Code"}
            </button>
          </form>

          {/* Result Display */}
          {shortUrl && (
            <div className="mt-6 text-center">
              {activeTab === "short" ? (
                <div className="text-sm text-blue-300 break-all">
                  Short URL:&nbsp;
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-400"
                  >
                    {shortUrl}
                  </a>
                </div>
              ) : (
                <img
                  src={shortUrl}
                  alt="QR Code"
                  className="mx-auto mt-4 w-40 h-40 rounded-lg shadow-lg"
                />
              )}
            </div>
          )}
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight text-white">
            Transform URLs like magic 🪄
          </h1>
          <p className="text-lg text-gray-300">
            ZipLink turns your chaotic, bulky URLs into sleek, shareable links
            or scannable QR codes in a flash.
          </p>
          <p className="italic text-[var(--accent-foreground)] text-lg">
            "Because short is sweet, and sweet is smart."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
