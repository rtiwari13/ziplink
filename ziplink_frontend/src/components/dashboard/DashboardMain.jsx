import {
  LinkIcon,
  EyeIcon,
  UserIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";

const metrics = [
  // ... (same as before)
];

const urls = [
  // ... (same as before)
];

function getStatusColor(status) {
  return status === 'Active' 
    ? 'bg-green-100 text-green-700' 
    : 'bg-red-100 text-red-600';
}

export default function DashboardMain() {
  return (
    <main className="flex-1 bg-[var(--background)] p-6 space-y-6">
              {/* Filters Section */}
      <section className="bg-[#2e3440] text-white rounded-lg shadow p-5">
        <h2 className="text-lg font-semibold text-[#ffffff] mb-4">Search & Filter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="date"
            className="border rounded px-3 py-2 w-full text-sm text-white"
            placeholder="Start date"
          />
          <input
            type="date"
            className="border rounded px-3 py-2 w-full text-sm text-white"
            placeholder="End date"
          />
          <input
            type="text"
            className="border rounded px-3 py-2 w-full text-sm text-white"
            placeholder="Filter by tag or keyword"
          />
        </div>
      </section>
      
      {/* Summary Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map(({ name, value, icon: Icon, bg, iconColor }) => (
          <div
            key={name}
            className="bg-[#3b4252] rounded-lg shadow p-5 flex items-center gap-4 hover:shadow-md transition"
          >
            <div className={`${bg} p-2 rounded-full`}>
              <Icon className={`w-6 h-6 ${iconColor}`} />
            </div>
            <div>
              <p className="text-black0 text-sm">{name}</p>
              <p className="text-lg font-bold">{value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Charts Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#2e3440] rounded-lg shadow p-5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-white">
              Clicks & Scans Over Time
            </h2>
            <ArrowTrendingUpIcon className="w-5 h-5 text-blue-500" />
          </div>
          <div className="h-48 flex items-center justify-center text-gray-400 bg-black rounded">
            📈 Line Chart Placeholder
          </div>
        </div>

        <div className="bg-[#2e3440] rounded-lg shadow p-5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-white">
              Scan-to-Click Conversion
            </h2>
            <CursorArrowRaysIcon className="w-5 h-5 text-green-500" />
          </div>
          <div className="h-48 flex items-center justify-center text-gray-400 bg-black rounded">
            📊 Bar Chart Placeholder
          </div>
        </div>
      </section>

      {/* URL Performance Table */}
      <section className="bg-[#2e3440] rounded-lg shadow p-5">
        <h2 className="text-lg font-semibold text-white mb-4">Top Performing Links</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="text-left bg-black">
              <tr>
                <th className="p-2">Short URL</th>
                <th className="p-2">Original URL</th>
                <th className="p-2">Clicks</th>
                <th className="p-2">Status</th>
                <th className="p-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2 text-blue-600">{url.shortUrl}</td>
                  <td className="p-2 truncate max-w-xs">{url.originalUrl}</td>
                  <td className="p-2">{url.clicks}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(url.status)}`}>
                      {url.status}
                    </span>
                  </td>
                  <td className="p-2 text-right space-x-2">
                    <button className="text-sm text-black0 hover:text-red-600">Disable</button>
                    <button className="text-sm text-blue-500 hover:underline">Extend</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* QR Code Insights Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Scans vs Clicks Chart */}
        <div className="bg-[#2e3440] rounded-lg shadow p-5">
          <h2 className="text-lg font-semibold text-white mb-2">Scans vs. Clicks</h2>
          <div className="h-48 flex items-center justify-center text-gray-400 bg-black rounded">
            🍩 Donut Chart Placeholder
          </div>
        </div>

        {/* Most Scanned QR Codes */}
        <div className="bg-[#2e3440] rounded-lg shadow p-5">
          <h2 className="text-lg font-semibold text-white mb-2">Most Scanned QR Codes</h2>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-gray-600">zip.link/promo1</span>
              <span className="font-semibold">482 scans</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">zip.link/event-qr</span>
              <span className="font-semibold">389 scans</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">zip.link/store-flyer</span>
              <span className="font-semibold">205 scans</span>
            </li>
          </ul>
        </div>

        {/* QR Scan Success Rate */}
        <div className="md:col-span-2 bg-[#2e3440] rounded-lg shadow p-5">
          <h2 className="text-lg font-semibold text-white mb-2">Scan Success Rate</h2>
          <div className="h-32 flex items-center justify-center text-green-500 font-bold text-2xl bg-green-50 rounded">
            ✅ 98.7% Success Rate
          </div>
        </div>
      </section>


    </main>
  );
}
