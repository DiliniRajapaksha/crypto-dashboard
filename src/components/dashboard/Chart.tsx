import React from 'react';

const Chart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Revenue Overview</h2>
        <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>
      
      <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
        <p className="text-gray-500">Chart visualization would go here</p>
      </div>
    </div>
  );
};

export default Chart;