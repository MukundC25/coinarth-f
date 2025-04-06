import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { FiShare2, FiDownload } from 'react-icons/fi';

// Register the required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const SpendingStats = ({ total, period, monthlyData, highlightPoint }) => {
  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount).replace('₹', '₹ ');
  };

  // Extract months and amounts for the chart
  const months = monthlyData.map(item => item.month);
  const amounts = monthlyData.map(item => item.amount);

  // Find the index of the highlight point
  const highlightIndex = months.indexOf(highlightPoint.month);

  // Chart data
  const data = {
    labels: months,
    datasets: [
      {
        fill: true,
        label: 'Spending',
        data: amounts,
        borderColor: '#1890FF',
        backgroundColor: 'rgba(24, 144, 255, 0.1)',
        tension: 0.4,
        pointBackgroundColor: Array(months.length).fill('#1890FF').map((color, index) =>
          index === highlightIndex ? '#1890FF' : 'transparent'
        ),
        pointBorderColor: Array(months.length).fill('#1890FF').map((color, index) =>
          index === highlightIndex ? '#1890FF' : 'transparent'
        ),
        pointRadius: Array(months.length).fill(0).map((radius, index) =>
          index === highlightIndex ? 6 : 0
        ),
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#1890FF',
        pointHoverBorderColor: '#1890FF',
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(context) {
            return `${formatCurrency(context.parsed.y)}`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          callback: function(value) {
            return value.toLocaleString();
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        hoverRadius: 6,
      },
    },
  };

  return (
    <div className="dashboard-card p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-gray-800 font-medium">Spending Stats</h3>
          <p className="text-sm text-gray-500">Total: {formatCurrency(total)}</p>
        </div>

        <div className="flex items-center">
          <div className="relative mr-4">
            <select className="appearance-none bg-gray-100 border border-gray-200 rounded px-3 py-1 pr-8 text-sm focus:outline-none">
              <option>{period}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <button className="text-gray-500 hover:text-gray-700 mr-2">
            <FiShare2 size={18} />
          </button>

          <button className="text-gray-500 hover:text-gray-700">
            <FiDownload size={18} />
          </button>
        </div>
      </div>

      <div className="relative h-64">
        <Line data={data} options={options} />

        {/* Highlight point annotation */}
        {highlightIndex !== -1 && (
          <div
            className="absolute text-white bg-blue-600 rounded px-2 py-1 text-xs shadow-md"
            style={{
              top: '30%',
              left: `${(highlightIndex / (months.length - 1)) * 100}%`,
              transform: 'translate(-50%, -100%)'
            }}
          >
            {formatCurrency(highlightPoint.amount)}
            <br />
            <span className="text-blue-100 text-[10px]">{highlightPoint.label}</span>
            <div className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-600"></div>
          </div>
        )}
      </div>

      <div className="mt-4">
        <div className="relative">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>May-Jan</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SpendingStats;
