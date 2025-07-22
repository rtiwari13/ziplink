// src/components/Header.jsx
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-[#2e3440]  shadow px-4 py-3 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-white">Ziplink Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="text-sm text-gray-600 hover:underline">Export</button>
        <UserCircleIcon className="w-8 h-8 text-gray-500" />
      </div>
    </header>
  );
}
