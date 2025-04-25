import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  { date: 'Apr 10', clicks: 30 },
  { date: 'Apr 11', clicks: 80 },
  { date: 'Apr 12', clicks: 45 },
  { date: 'Apr 13', clicks: 95 },
  { date: 'Apr 14', clicks: 70 },
  { date: 'Apr 15', clicks: 120 },
];

const TrendsAndGraphs = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border">
      <h2 className="text-xl font-bold text-gray-700 mb-4">📊 Click Trends (Daily)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="clicks" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendsAndGraphs;
