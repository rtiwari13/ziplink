import { FaLink, FaQrcode, FaChartLine } from "react-icons/fa";

const services = [
  {
    title: "URL Shortener",
    icon: <FaLink size={32} className="text-primary" />,
    description:
      "Turn long, messy URLs into sleek, shareable links in seconds. Simplify sharing and boost click-through rates effortlessly.",
  },
  {
    title: "QR Code Generator",
    icon: <FaQrcode size={32} className="text-primary" />,
    description:
      "Create dynamic, scannable QR codes instantly for your shortened links. Perfect for print, product packaging, or mobile sharing.",
  },
  {
    title: "Analytics & Tracking",
    icon: <FaChartLine size={32} className="text-primary" />,
    description:
      "Track every click with real-time analytics. Gain powerful insights into your audience and optimize your link strategy.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full py-20 px-6  text-[var(--text)]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="gap-3 bg-[var(--card-bg)] leading-8 text-left  rounded-lg p-10 shadow-lg hover:shadow-xl border border-[hsl(var(--border))] hover:scale-105 transition-transform duration-300"
            >
              <div className="text-[#ADD8E6] mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2 inline-block relative text-[var(--text)] border-b-3 border-transparent hover:border-[var(--text)] transition duration-500">{service.title}</h3>
              <p className="font-[400] font- text-[var(--text)]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


