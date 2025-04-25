import React from 'react';

const SearchAndFilterBar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-lg shadow border">
      <input
        type="text"
        placeholder="Search by tag, short code, or URL"
        className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Export CSV
      </button>
    </div>
  );
};

export default SearchAndFilterBar;
