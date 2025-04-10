import React from 'react';

export const SimpleExpensesChart = () => {
  return (
    <div className="h-full flex items-center justify-center bg-gray-50 rounded-lg p-4">
      <div className="text-center">
        <div className="text-gray-500 mb-2">Income vs Expenses Chart</div>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
            <span className="text-xs text-gray-600">Income</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
            <span className="text-xs text-gray-600">Expenses</span>
          </div>
        </div>
        <div className="mt-4 flex items-end justify-center h-32 space-x-4">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => (
            <div key={month} className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <div 
                  className="w-6 bg-red-500 rounded-t-sm" 
                  style={{ 
                    height: `${[50, 60, 43, 57, 45, 49][index]}px` 
                  }}
                ></div>
                <div 
                  className="w-6 bg-green-500 rounded-t-sm" 
                  style={{ 
                    height: `${[80, 80, 80, 80, 80, 80][index]}px`,
                    marginTop: '4px'
                  }}
                ></div>
              </div>
              <div className="text-xs mt-1 text-gray-500">{month}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SimpleSavingsChart = () => {
  return (
    <div className="h-full flex items-center justify-center bg-gray-50 rounded-lg p-4">
      <div className="text-center">
        <div className="text-gray-500 mb-2">Savings Growth</div>
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
            <span className="text-xs text-gray-600">Savings</span>
          </div>
        </div>
        <div className="mt-4 flex items-end justify-center h-32 space-x-4">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => (
            <div key={month} className="flex flex-col items-center">
              <div 
                className="w-6 bg-purple-500 rounded-t-sm" 
                style={{ 
                  height: `${[50, 55, 60, 56, 64, 66][index]}px` 
                }}
              ></div>
              <div className="text-xs mt-1 text-gray-500">{month}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SimpleExpenseBreakdownChart = () => {
  const categories = [
    { name: 'Housing', percentage: 35, color: 'bg-pink-500' },
    { name: 'Food', percentage: 25, color: 'bg-blue-500' },
    { name: 'Transport', percentage: 15, color: 'bg-yellow-500' },
    { name: 'Entertainment', percentage: 10, color: 'bg-teal-500' },
    { name: 'Utilities', percentage: 10, color: 'bg-purple-500' },
    { name: 'Others', percentage: 5, color: 'bg-orange-500' },
  ];

  return (
    <div className="h-full flex items-center justify-center bg-gray-50 rounded-lg p-4">
      <div className="w-full">
        <div className="text-gray-500 mb-4 text-center">Expense Breakdown</div>
        <div className="flex flex-col space-y-2">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center">
              <div className="w-24 text-xs text-gray-600">{category.name}</div>
              <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${category.color}`} 
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
              <div className="w-8 text-xs text-gray-600 text-right">{category.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
