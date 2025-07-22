import React, { useState } from "react";
import axios from "axios";

const QRCodeGenerator = () => {
  const [formData, setFormData] = useState({
    original_url: "",
    foreground_color: "#000000",
    background_color: "#ffffff",
    style: "square",
    watermark_text: "",
    expires_at: "",
  });
  const [qrImage, setQrImage] = useState(null);
  const [base64Image, setBase64Image] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await axios.post("http://localhost:8000/qrcode/create/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setQrImage(response.data.image_url);
      setBase64Image(response.data.base64);
    } catch (err) {
      setError("An error occurred while generating the QR code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-xl font-bold text-center">QR Code Generator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="url"
            name="original_url"
            value={formData.original_url}
            onChange={handleChange}
            placeholder="Enter URL"
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div className="flex space-x-2">
          <div>
            <label>Foreground</label>
            <input
              type="color"
              name="foreground_color"
              value={formData.foreground_color}
              onChange={handleChange}
              className="p-2 border rounded-lg"
            />
          </div>
          <div>
            <label>Background</label>
            <input
              type="color"
              name="background_color"
              value={formData.background_color}
              onChange={handleChange}
              className="p-2 border rounded-lg"
            />
          </div>
        </div>

        <div>
          <label>Style</label>
          <select
            name="style"
            value={formData.style}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="square">Square</option>
            <option value="rounded">Rounded</option>
            <option value="circle">Circle</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            name="watermark_text"
            value={formData.watermark_text}
            onChange={handleChange}
            placeholder="Watermark (optional)"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <input
            type="datetime-local"
            name="expires_at"
            value={formData.expires_at}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Generating..." : "Generate QR Code"}
        </button>
      </form>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {qrImage && (
        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold">Preview</h2>
          <img
            src={qrImage}
            alt="QR Code"
            className="mx-auto border rounded-lg mt-2"
          />
          <a
            href={`data:image/png;base64,${base64Image}`}
            download="qr_code.png"
            className="block mt-4 text-blue-600 underline text-center"
          >
            Download QR Code
          </a>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
