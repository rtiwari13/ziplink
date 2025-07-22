import {
  LinkIcon,
  EyeIcon,
  UserIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";

const metrics = [
  {
    name: "Shortened Links",
    value: "1,248",
    icon: LinkIcon,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "Total Clicks",
    value: "34,590",
    icon: EyeIcon,
    bg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    name: "Unique Visitors",
    value: "12,430",
    icon: UserIcon,
    bg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    name: "Failed Redirects",
    value: "36",
    icon: ExclamationTriangleIcon,
    bg: "bg-red-100",
    iconColor: "text-red-600",
  },
];

const urls = [
  {
    shortUrl: 'zip.link/xYz123',
    originalUrl: 'https://example.com/article/seo-guide',
    clicks: 1342,
    status: 'Active',
    created: '2023-06-15',
  },
  {
    shortUrl: 'zip.link/AbC888',
    originalUrl: 'https://anotherdomain.com/page',
    clicks: 2,
    status: 'Expired',
    created: '2023-05-01',
  },
  {
    shortUrl: 'zip.link/ZzQ450',
    originalUrl: 'https://something.com/blog',
    clicks: 328,
    status: 'Active',
    created: '2023-06-20',
  },
];

const trafficSources = [
  { name: 'Direct', value: 45, color: 'bg-blue-500' },
  { name: 'Social Media', value: 30, color: 'bg-green-500' },
  { name: 'Email', value: 15, color: 'bg-yellow-500' },
  { name: 'Referral', value: 10, color: 'bg-purple-500' },
];

const devices = [
  { name: 'Mobile', value: 62, icon: DevicePhoneMobileIcon, color: 'bg-blue-500' },
  { name: 'Desktop', value: 34, icon: DevicePhoneMobileIcon, color: 'bg-green-500' },
  { name: 'Tablet', value: 4, icon: DevicePhoneMobileIcon, color: 'bg-yellow-500' },
];

function getStatusColor(status) {
  return status === 'Active' 
    ? 'bg-green-100 text-green-700' 
    : 'bg-red-100 text-red-600';
}

export default function UrlAnalytics() {
  return (
    <main className="flex-1 bg-[#3b4252] p-6 space-y-6">
      {/* Summary Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map(({ name, value, icon: Icon, bg, iconColor }) => (
          <div
            key={name}
            className="bg-[#81a1c1] rounded-lg shadow p-5 flex items-center gap-4 hover:shadow-md transition"
          >
            <div className={`${bg} p-2 rounded-full`}>
              <Icon className={`w-6 h-6 ${iconColor}`} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{name}</p>
              <p className="text-lg font-bold">{value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Charts Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Clicks Over Time */}
        <div className="bg-[#5e81ac] rounded-lg shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-700 text-lg">
              Clicks Over Time
            </h2>
            <ArrowTrendingUpIcon className="w-5 h-5 text-blue-500" />
          </div>
          <div className="h-64 flex items-center justify-center text-gray-400 bg-gray-50 rounded">
            📈 Line Chart Placeholder (Last 30 days)
          </div>
        </div>

        {/* Geographic Distribution */}
        <div className="bg-white rounded-lg shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-700 text-lg">
              Geographic Distribution
            </h2>
            <GlobeAltIcon className="w-5 h-5 text-blue-500" />
          </div>
          <div className="h-64 flex items-center justify-center text-gray-400 bg-gray-50 rounded">
            🌎 World Map Placeholder
          </div>
        </div>
      </section>

      {/* URL Performance Table */}
      <section className="bg-[#5e81ac] rounded-lg shadow p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Link Performance</h2>
          <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            Create New
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="text-left bg-gray-50">
              <tr>
                <th className="p-3">Short URL</th>
                <th className="p-3">Original URL</th>
                <th className="p-3">Clicks</th>
                <th className="p-3">Created</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="p-3 text-blue-600 font-medium">{url.shortUrl}</td>
                  <td className="p-3 truncate max-w-xs">{url.originalUrl}</td>
                  <td className="p-3 font-semibold">{url.clicks.toLocaleString()}</td>
                  <td className="p-3 text-gray-500">{url.created}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(url.status)}`}>
                      {url.status}
                    </span>
                  </td>
                  <td className="p-3 text-right space-x-2">
                    <button className="text-sm text-gray-500 hover:text-blue-600">View</button>
                    <button className="text-sm text-gray-500 hover:text-red-600">Copy</button>
                    <button className="text-sm text-red-500 hover:text-red-700">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Additional Analytics Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <div className="bg-[#5e81ac] rounded-lg shadow p-5">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Traffic Sources</h2>
          <div className="space-y-3">
            {trafficSources.map((source, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-600">{source.name}</span>
                  <span className="font-medium">{source.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${source.color} h-2 rounded-full`} 
                    style={{ width: `${source.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-[#5e81ac] rounded-lg shadow p-5">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Device Breakdown</h2>
          <div className="flex items-center justify-center h-48">
            <div className="relative w-40 h-40">
              {devices.map((device, idx) => {
                const Icon = device.icon;
                return (
                  <div 
                    key={idx}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{ transform: `rotate(${idx * 120}deg)` }}
                  >
                    <div className={`${device.color} w-8 h-8 rounded-full flex items-center justify-center mb-2`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium">{device.name}</span>
                    <span className="text-xs">{device.value}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-[#5e81ac] rounded-lg shadow p-5">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <MagnifyingGlassIcon className="w-5 h-5" />
          Search & Filter Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <input
              type="text"
              className="border rounded px-3 py-2 w-full pl-10 text-sm text-gray-700"
              placeholder="Search URLs"
            />
            <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          
          <div className="relative">
            <select className="border rounded px-3 py-2 w-full text-sm text-gray-700 appearance-none pl-3 pr-8">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="expired">Expired</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          
          <div className="relative">
            <input
              type="date"
              className="border rounded px-3 py-2 w-full pl-10 text-sm text-gray-700"
              placeholder="Start date"
            />
            <CalendarDaysIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          
          <div className="relative">
            <input
              type="date"
              className="border rounded px-3 py-2 w-full pl-10 text-sm text-gray-700"
              placeholder="End date"
            />
            <CalendarDaysIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </section>
    </main>
  );
}