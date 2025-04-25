import React from 'react';

const dummyLinks = [
  {
    id: 1,
    originalUrl: 'https://example.com/product-a',
    shortUrl: 'zip.ly/abc123',
    created: '2025-04-10',
    expires: '2025-05-10',
    clicks: 132,
    status: 'active',
  },
  {
    id: 2,
    originalUrl: 'https://example.com/promo',
    shortUrl: 'zip.ly/promo45',
    created: '2025-03-22',
    expires: '2025-04-22',
    clicks: 98,
    status: 'expired',
  },
];

const LinkAnalyticsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 overflow-x-auto border">
      <table className="min-w-full text-sm text-left table-auto">
        <thead className="text-gray-600 border-b">
          <tr>
            <th className="p-2">Original URL</th>
            <th className="p-2">Short URL</th>
            <th className="p-2">Created</th>
            <th className="p-2">Expires</th>
            <th className="p-2">Clicks</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyLinks.map((link) => (
            <tr key={link.id} className="border-t">
              <td className="p-2 text-blue-600">{link.originalUrl}</td>
              <td className="p-2 text-blue-500">{link.shortUrl}</td>
              <td className="p-2">{link.created}</td>
              <td className="p-2">{link.expires}</td>
              <td className="p-2 font-bold">{link.clicks}</td>
              <td className={`p-2 ${link.status === 'active' ? 'text-green-600' : 'text-red-500'}`}>
                {link.status}
              </td>
              <td className="p-2 space-x-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LinkAnalyticsTable;
