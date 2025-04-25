// import React from "react";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[hsl(217,69%,47%)] text-white py-6 mt-12">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
//         <div className="text-center md:text-left text-sm">
//           <p>
//             Made with <span className="text-red-500">❤️</span> by ZipLink team
//           </p>
//           <p className="mt-1">&copy; {new Date().getFullYear()} ZipLink. All rights reserved.</p>
//         </div>

//         <div className="flex gap-4 text-white">
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
//             <FaGithub size={20} />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
//             <FaLinkedin size={20} />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
//             <FaTwitter size={20} />
//           </a>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Left section */}
        <div>
          <p className="mb-4">
            <strong>ZipLink</strong> is a modern URL shortening tool built for
            developers, marketers, and everyday users. Clean, secure, and easy
            to use.
          </p>
          <a href="mailto:support@ziplink.com" className="underline">
            Say hi.
          </a>
          <p className="mt-6 text-muted-foreground">
            © 2025 ZipLink. All rights reserved.
          </p>
        </div>

        {/* Column 1 */}
        <div className="flex flex-col space-y-2">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Docs</a>
          <a href="#">Use Cases</a>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-2">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Newsletter</a>
          <a href="#">URL Safety Check</a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-2">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
