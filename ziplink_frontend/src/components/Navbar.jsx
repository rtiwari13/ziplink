import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[var(--background)] shadow-md py-4 pt-7 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[var(--accent-foreground)] hover:text-blue-700 transition">
          ZipLink
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-[var(--accent-foreground)] hover:text-blue-600 transition">
            Home
          </Link>
          <a href="/#services" className="text-[var(--accent-foreground)] hover:text-blue-600 transition">
            Services
          </a>
          <a href="/#features" className="text-[var(--accent-foreground)]  hover:text-blue-600 transition">
            Features
          </a>
          
          <Link to="/login" className="text-[var(--accent-foreground)] hover:text-blue-600 transition">
            Login
          </Link>
          <Link to="/signup" className="text-[var(--accent-foreground)] hover:text-blue-600 transition">
            Signup
          </Link>
        </div>

        {/* Call to Action */}
        <div className="hidden md:block">
          <Link
            to="/dashboard"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
