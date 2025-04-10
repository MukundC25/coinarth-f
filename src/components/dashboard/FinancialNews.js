import React from 'react';

const NewsCard = ({ title, source, date, imageUrl, category }) => {
  return (
    <div className="flex border-b border-gray-100 pb-4 mb-4 last:mb-0 last:pb-0 last:border-0">
      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="ml-4 flex-1">
        <div className="flex items-center mb-1">
          <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryStyles(category)}`}>
            {category}
          </span>
          <span className="text-xs text-gray-500 ml-2">{date}</span>
        </div>
        <h3 className="font-medium text-gray-900 text-sm leading-tight mb-1">{title}</h3>
        <p className="text-xs text-gray-500">Source: {source}</p>
      </div>
    </div>
  );
};

const getCategoryStyles = (category) => {
  switch (category.toLowerCase()) {
    case 'markets':
      return 'bg-blue-100 text-blue-800';
    case 'economy':
      return 'bg-green-100 text-green-800';
    case 'policy':
      return 'bg-purple-100 text-purple-800';
    case 'stocks':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const FinancialNews = () => {
  const newsItems = [
    {
      id: 1,
      title: 'RBI Keeps Repo Rate Unchanged at 6.5% for Third Consecutive Time',
      source: 'Economic Times',
      date: '2 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      category: 'Policy',
    },
    {
      id: 2,
      title: 'Sensex Crosses 66,000 Mark for the First Time, Nifty at Record High',
      source: 'Business Standard',
      date: '5 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      category: 'Markets',
    },
    {
      id: 3,
      title: "India's GDP Growth Projected at 6.8% for FY 2023-24, Says World Bank",
      source: 'Mint',
      date: '1 day ago',
      imageUrl: 'https://images.unsplash.com/photo-1551260627-fd1b6daa6224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWNvbm9teXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      category: 'Economy',
    },
    {
      id: 4,
      title: 'Reliance Industries Reports 10% Increase in Q1 Net Profit',
      source: 'Financial Express',
      date: '2 days ago',
      imageUrl: 'https://images.unsplash.com/photo-1612010167108-3e6b327405f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVsaWFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      category: 'Stocks',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Financial News</h2>
        <button className="text-blue-600 hover:text-blue-800 text-sm">View All</button>
      </div>

      <div>
        {newsItems.map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            source={news.source}
            date={news.date}
            imageUrl={news.imageUrl}
            category={news.category}
          />
        ))}
      </div>
    </div>
  );
};

export default FinancialNews;
