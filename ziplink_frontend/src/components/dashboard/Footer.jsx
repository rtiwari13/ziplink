// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#5e81ac] border-t px-4 py-2 text-sm text-gray-500 text-center">
      © {new Date().getFullYear()} Ziplink — All rights reserved.
    </footer>
  );
}
