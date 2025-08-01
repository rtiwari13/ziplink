import React from "react";
import {
  FaThumbsUp,
  FaLink,
  FaShieldAlt,
  FaTachometerAlt,
  FaSlidersH,
  FaTabletAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaThumbsUp size={44} />,
    title: "Easy",
    description:
      "ZipLink is easy and fast — just paste your long URL and get a short one instantly.",
  },
  {
    icon: <FaLink size={44} />,
    title: "Shortened",
    description:
      "Works with any link — no matter the length or source, ZipLink shortens it.",
  },
  {
    icon: <FaShieldAlt size={44} />,
    title: "Secure",
    description:
      "Built with HTTPS & encryption for maximum privacy and protection.",
  },
  {
    icon: <FaTachometerAlt size={44} />,
    title: "Dashboard",
    description:
      "Get a beautiful dashboard with click stats, QR views, and top-performing links.",
  },
  {
    icon: <FaSlidersH size={44} />,
    title: "Customizable",
    description:
      "Set your custom alias, expiration time, and even password-protect links.",
  },
  {
    icon: <FaTabletAlt size={44} />,
    title: "Devices",
    description: "Works seamlessly across smartphones, tablets, and desktops.",
  },
];

const FeatureSection = () => {
  return (
    <section
      id="features"
      className=" py-16 pt-25 bg-[var(--background)] text-[var(--text)] relative"
    >
      <div class="[top:0] right-[0] left-[0] relative landing_gradConic__KaiR0 "></div>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--destructive-foreground)] text-center mb-12">
          FEATURES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" card gap-3 text-[var(--text)] leading-7 text-center p-10 border rounded-lg hover:shadow-md transition duration-300"
            >
              <div className="text-[#00bfff] mb-4">{feature.icon}</div>

              <h3 className="text-2xl font-bold mb-2 inline-block relative text-[var(--text)] border-b-3 border-transparent hover:border-[var(--text)] transition duration-500">
                {feature.title}
              </h3>
              <p className=" text-sm font- text-[var(--text)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
