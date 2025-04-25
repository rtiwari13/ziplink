import React from 'react';

const stats = [
  { name: 'Total Clicks', value: '12,500' },
  { name: 'QR Code Scans', value: '3,421' },
  { name: 'Short URLs', value: '215' },
];

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow-md text-center border border-gray-200"
        >
          <div className="text-xl font-semibold text-gray-700">{stat.name}</div>
          <div className="text-2xl font-bold text-blue-600 mt-2">{stat.value}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
