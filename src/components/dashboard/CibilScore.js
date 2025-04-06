import React from 'react';
import { FiDollarSign } from 'react-icons/fi';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const CibilScore = ({ score, nextUpdateDays }) => {
  // Calculate the percentage for the gauge
  const percentage = (score / 900) * 100;

  // Determine color based on score
  let color = '#FF4D4F'; // Red for poor score
  if (score >= 750) {
    color = '#52C41A'; // Green for excellent score
  } else if (score >= 650) {
    color = '#FAAD14'; // Yellow for fair score
  }

  // Chart data
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color, '#F0F0F0'],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  // Chart options
  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="dashboard-card-yellow p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <div className="bg-yellow-500 p-2 rounded-full mr-3 shadow-sm">
          <FiDollarSign className="text-white" />
        </div>
        <h3 className="text-gray-700 font-medium">Your CIBIL Score</h3>
      </div>

      <div className="relative h-32 flex justify-center">
        <Doughnut data={data} options={options} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">{score}</h2>
        </div>
      </div>

      <div className="text-sm text-gray-600 text-center mt-2">
        <p>Next update in {nextUpdateDays} days</p>
      </div>
    </div>
  );
};

export default CibilScore;
