// import { useState } from "react";

// export default function AuthPopup({ title }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLogin, setIsLogin] = useState(true); // true = Login, false = Sign Up
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(isLogin ? "Login data:" : "Sign up data:", form);
//     // Add API call here
//     setIsOpen(false);
//   };

//   const toggleMode = () => {
//     setIsLogin(!isLogin);
//     setForm({ name: "", email: "", password: "" });
//   };

//   return (
//     <div className=" ">
//       <button
//         onClick={() => setIsOpen(true)}
//         className="inline-block relative text-[var(--text)] border-b-3 border-transparent hover:border-[var(--text)] transition duration-500"
//       >
//         {title || "Login"}
//       </button>

//       {isOpen && (
//         <div
//           className=" inset-0 absolute h-screen backdrop-blur-lg backdrop-brightness-30 top-0 left-0  w-full   flex items-center justify-center z-[999]"
//           onClick={() => setIsOpen(false)}
//         >
//           <div
//             className=" bg-[var(--background)] text-white border border-white/20 p-6 rounded-lg shadow-lg w-full max-w-md"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold text-[var(--foreground)]">
//                 {isLogin ? "Login to your account" : "Create a new account"}
//               </h2>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className=" "
//               >
//                 &times;
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {!isLogin && (
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={form.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-3 py-2 rounded placeholder-[var(--muted-foreground)]"
//                 />
//               )}
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-3 py-2 rounded placeholder-[var(--muted-foreground)]"
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-3 py-2 rounded placeholder-[var(--muted-foreground)]"
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-[var(--primary)] text-[var(--primary-foreground)] py-2 rounded hover:bg-[var(--ring)] transition-colors duration-200"
//               >
//                 {isLogin ? "Login" : "Sign Up"}
//               </button>
//             </form>

//             <div className="mt-4 text-center text-sm text-[var(--muted-foreground)]">
//               {isLogin ? (
//                 <>
//                   Don't have an account?{" "}
//                   <button
//                     onClick={toggleMode}
//                     className="text-[var(--primary)] hover:underline"
//                   >
//                     Sign up
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   Already have an account?{" "}
//                   <button
//                     onClick={toggleMode}
//                     className="text-[var(--primary)] hover:underline"
//                   >
//                     Log in
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";

export default function AuthPopup({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // true = Login, false = Sign Up
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Login data:" : "Sign up data:", form);
    // TODO: Add API call here
    setIsOpen(false);
  };

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setForm({ name: "", email: "", password: "" });
  };

  const closePopup = () => setIsOpen(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closePopup();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-block relative text-[var(--text)] border-b-3 border-transparent hover:border-[var(--text)] transition duration-500"
      >
        {title || "Login"}
      </button>

      {isOpen && (
        <div
  className="fixed inset-0 z-[999] h-screen w-screen backdrop-blur-lg backdrop-brightness-50 flex items-center justify-center"
  onClick={closePopup}
>

          <div
            className="bg-[var(--background)] text-white border border-white/20 p-6 rounded-xl shadow-2xl w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[var(--foreground)]">
                {isLogin ? "Login to your account" : "Create a new account"}
              </h2>
              <button
                onClick={closePopup}
                className="text-2xl font-bold text-[var(--foreground)] hover:text-red-500"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-3 py-2 rounded placeholder-[var(--muted-foreground)]"
                />
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-3 py-2 rounded placeholder-[var(--muted-foreground)]"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-3 py-2 rounded placeholder-[var(--muted-foreground)]"
              />

              <button
                type="submit"
                className="w-full bg-[var(--primary)] text-[var(--primary-foreground)] py-2 rounded hover:bg-[var(--ring)] transition-colors duration-200"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-[var(--muted-foreground)]">
              {isLogin ? (
                <>
                  Don’t have an account?{" "}
                  <button
                    onClick={toggleMode}
                    className="text-[var(--primary)] hover:underline"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={toggleMode}
                    className="text-[var(--primary)] hover:underline"
                  >
                    Log in
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
