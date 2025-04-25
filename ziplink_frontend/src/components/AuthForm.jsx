import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"

const AuthForm = ({ type = "login", onSubmit }) => {
  const isLogin = type === "login";
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
   

    <div className="max-w-md w-full mx-auto bg-[var(--card)] p-8 rounded-lg shadow-lg text-[var(--foreground)]">
       <Navbar/>
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isLogin ? "Login to ZipLink" : "Create your ZipLink account"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="w-full p-3 rounded bg-[var(--input)] text-[var(--foreground)] placeholder:text-gray-400 outline-none"
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          className="w-full p-3 rounded bg-[var(--input)] text-[var(--foreground)] placeholder:text-gray-400 outline-none"
        />

        {!isLogin && (
          <>
          <label>Full Name</label>
            <input
              type="text"
              name="Full Name"
              placeholder="John Doe"
              required
              onChange={handleChange}
              className="w-full p-3 rounded bg-[var(--input)] text-[var(--foreground)] placeholder:text-gray-400 outline-none"
            />

<label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="johndoe@123"
              required
              onChange={handleChange}
              className="w-full p-3 rounded bg-[var(--input)] text-[var(--foreground)] placeholder:text-gray-400 outline-none"
            />
          </>
        )}

        <button
          type="submit"
          className="w-full py-3 bg-[hsl(var(--primary))] text-white rounded hover:opacity-90 transition"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-400">
        {isLogin ? (
          <>
            Don’t have an account?{" "}
            <Link to="/signup" className="text-[hsl(var(--primary))] underline">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link to="/login" className="text-[hsl(var(--primary))] underline">
              Login
            </Link>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthForm;
