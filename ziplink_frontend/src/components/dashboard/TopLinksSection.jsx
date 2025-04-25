import React from 'react';

const topLinks = [
  { title: 'Promo Page', url: 'zip.ly/promo45', clicks: 500 },
  { title: 'Landing Page', url: 'zip.ly/start', clicks: 342 },
];

const TopLinksSection = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border">
      <h2 className="text-xl font-bold mb-4 text-gray-700">🔥 Top Performing Links</h2>
      <ul className="space-y-2">
        {topLinks.map((link, index) => (
          <li key={index} className="flex justify-between items-center">
            <div>
              <div className="text-blue-600 font-medium">{link.url}</div>
              <div className="text-gray-500 text-sm">{link.title}</div>
            </div>
            <div className="font-bold text-blue-500">{link.clicks} clicks</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopLinksSection;
