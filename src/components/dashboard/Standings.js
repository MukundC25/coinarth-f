import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const Standings = ({ income, expenses, investments, savings, period }) => {
  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount).replace('₹', '₹ ');
  };

  // Chart data
  const data = {
    labels: ['Income', 'Expenses', 'Investments', 'Savings'],
    datasets: [
      {
        data: [income, expenses, investments, savings],
        backgroundColor: [
          '#FAAD14', // Yellow for income
          '#FF4D4F', // Red for expenses
          '#1890FF', // Blue for investments
          '#52C41A', // Green for savings
        ],
        borderWidth: 0,
      },
    ],
  };

  // Chart options
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="dashboard-card p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 font-medium">Standings | {period}</h3>
        <div className="flex items-center">
          <button className="text-sm text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 h-48">
          <Pie data={data} options={options} />
        </div>

        <div className="w-1/2 pl-4 flex flex-col justify-center">
          <div className="mb-3">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-sm text-gray-600">Income:</span>
              <span className="ml-auto text-sm font-medium text-gray-800">{formatCurrency(income)}</span>
            </div>
          </div>

          <div className="mb-3">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-sm text-gray-600">Expenses:</span>
              <span className="ml-auto text-sm font-medium text-gray-800">{formatCurrency(expenses)}</span>
            </div>
          </div>

          <div className="mb-3">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-sm text-gray-600">Investments:</span>
              <span className="ml-auto text-sm font-medium text-gray-800">{formatCurrency(investments)}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-600">Savings:</span>
              <span className="ml-auto text-sm font-medium text-gray-800">{formatCurrency(savings)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standings;
