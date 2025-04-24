import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[hsl(217,69%,47%)] text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-center md:text-left text-sm">
          <p>
            Made with <span className="text-red-500">❤️</span> by ZipLink team
          </p>
          <p className="mt-1">&copy; {new Date().getFullYear()} ZipLink. All rights reserved.</p>
        </div>

        <div className="flex gap-4 text-white">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaTwitter size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
