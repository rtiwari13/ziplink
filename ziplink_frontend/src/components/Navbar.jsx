import { Link } from "react-router-dom";
import AuthPopup from "./AuthPopup";

export default function Navbar() {
  return (
    <nav className="backdrop-blur-2xl  shadow-md  py-4 px-6 fixed top-0 left-0 right-0 z-20">
      <div className=" text-[1.125em] max-w-7xl h-16 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="/logo.png"
            alt="ZipLink Logo"
            title="ZipLink"
            className="h-10 w-auto hover:opacity-80 transition"
            loading="lazy"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-9 items-center">
          <Link
            to="/"
            className="inline-block relative text-[var(--text)] border-b-3 border-transparent hover:border-[var(--text)] transition duration-500"
          >
            Home
          </Link>
          {/* <a
            href="/#services"
            className=" inline-block realtive text-[var(--text)]  hover:border-b-3  "
  
          > */}
          <a
            href="/#services"
            className="inline-block relative text-[var(--text)] border-b-3 border-transparent hover:border-[var(--text)] transition duration-500"
          >
            Services
          </a>
          <a
            href="/#features"
            className="inline-block relative text-[var(--text)] border-b-3 border-transparent hover:border-[var(--text)] transition duration-500"
          >
            Features
          </a>

          <AuthPopup />
        </div>

        <Link
          to="/dashboard"
          className="bg-white text-black shadow font-semibold  px-4 py-2 hover:bg-[var(--accent-foreground)] rounded-full "
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
