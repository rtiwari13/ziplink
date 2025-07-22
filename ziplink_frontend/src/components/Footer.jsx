// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#434c5e] text-white py-12 px-6 md:px-20">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
//         {/* Left section */}
//         <div>
//           <p className="mb-4">
//             <strong>ZipLink</strong> is a modern URL shortening tool built for
//             developers, marketers, and everyday users. Clean, secure, and easy
//             to use.
//           </p>
//           <a href="mailto:support@ziplink.com" className="underline">
//             Say hi.❤️
//           </a>
          
//           <p className="mt-6 text-muted-foreground">
//             © 2025 ZipLink. All rights reserved.
//           </p>
//         </div>

//         {/* Column 1 */}
//         <div className="flex flex-col space-y-2">
//           <a href="#">Features</a>
//           <a href="#">Pricing</a>
//           <a href="#">Blog</a>
//           <a href="#">Docs</a>
//           <a href="#">Use Cases</a>
//         </div>

//         {/* Column 2 */}
//         <div className="flex flex-col space-y-2">
//           <a href="#">Terms</a>
//           <a href="#">Privacy</a>
//           <a href="#">Newsletter</a>
//           <a href="#">URL Safety Check</a>
//         </div>

//         {/* Column 3 */}
//         <div className="flex flex-col space-y-2">
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             LinkedIn
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             Twitter
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//             GitHub
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
    <footer className="bg-[#434c5e] text-white py-12 px-6 md:px-20">
      <div className=" max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 text-sm">
        {/* Brand & Info */}
        <div>
          <h2 className="text-lg font-bold mb-3">ZipLink</h2>
          <p className="mb-4 text-gray-300">
            A modern URL shortening tool built for developers, marketers, and
            everyday users. Clean, secure, and easy to use.
          </p>
         
          <p className="mt-6 text-gray-400 text-xs">
            © 2025 ZipLink. All rights reserved.
          </p>
        </div>

        {/* Product */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-base font-semibold mb-2">Product</h3>
          <a href="#" className="hover:underline text-gray-300 hover:text-white">Features</a>
          <a href="#" className="hover:underline text-gray-300 hover:text-white">Pricing</a>
          <a href="#" className="hover:underline text-gray-300 hover:text-white">Blog</a>
        </div>

        {/* Resources */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-base font-semibold mb-2">Resources</h3>
          <a href="#" className="hover:underline text-gray-300 hover:text-white">Docs</a>
          <a href="#" className="hover:underline text-gray-300 hover:text-white">Use Cases</a>
          <a href="#" className="hover:underline text-gray-300 hover:text-white">Terms</a>
        </div>

        {/* Connect */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-base font-semibold mb-2">Connect</h3>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gray-300 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gray-300 hover:text-white"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gray-300 hover:text-white"
          >
            GitHub
          </a>
          
        </div>

         {/* Resources */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-base font-semibold mb-2">Legal</h3>
          <a href="#" className="hover:underline text-gray-300 hover:text-white">Privacy</a>
          <a href="#" className="hover:underline text-gray-300 hover:text-white">Terms</a>
          <a href="#" className="hover:underline text-gray-300 hover:text-white"> URL Safety Check</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
