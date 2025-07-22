import {
  HomeIcon,
  ChartBarIcon,
  QrCodeIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  { name: "Home", icon: HomeIcon, key: "home" },
  { name: "Overview", icon: HomeIcon, key: "overview" },
  { name: "URL Analytics", icon: ChartBarIcon, key: "urlanalytics" },
  { name: "QR Insights", icon: QrCodeIcon, key: "qrinsights" },
  { name: "Settings", icon: Cog6ToothIcon, key: "settings" },
];

export default function Sidebar({ selected, setSelected }) {
  return (
    <aside className="w-64 bg-[#3b4252] h-screen px-4 py-6 hidden md:block ">
      <nav className="space-y-4">
        {menuItems.map(({ name, key, icon: Icon }) => (
          <button
            key={name}
            onClick={() => {
              setSelected(key);
              if (key == "home" )
              window.location.href = "/";
            }}
            className="flex items-center gap-3 px-4 py-2  text-white hover:border-white  hover:border-b-3 transition duration-50"
          >
            <Icon className="w-5 h-5" />
            <span>{name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
