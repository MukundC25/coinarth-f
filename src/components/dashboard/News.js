import React from 'react';

const News = ({ news }) => {
  return (
    <div className="dashboard-card p-6 rounded-lg">
      <h3 className="text-gray-800 font-medium mb-4">Insights & News</h3>

      {news.length > 0 ? (
        <div className="space-y-4">
          {news.map((item) => (
            <div key={item.id} className="pb-3 last:pb-0 border-b last:border-b-0 border-gray-100 cursor-pointer hover:bg-gray-50 -mx-2 px-2 rounded transition-colors duration-150">
              <h4 className="font-medium text-sm text-gray-800">{item.title}</h4>
              <p className="text-xs text-gray-500 mt-1">
                {item.source} • {item.date}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">No news available</p>
      )}
    </div>
  );
};

export default News;
