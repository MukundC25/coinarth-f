import React from 'react';
import { FiDollarSign } from 'react-icons/fi';

const CurrentBalance = ({ balance, currentMonthSalary, lastMonthSavings }) => {
  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount).replace('₹', '₹ ');
  };

  return (
    <div className="dashboard-card-blue p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <div className="bg-blue-600 p-2 rounded-full mr-3 shadow-sm">
          <FiDollarSign className="text-white" />
        </div>
        <h3 className="text-gray-700 font-medium">Current Balance</h3>
      </div>

      <div className="mb-4">
        <h2 className="text-3xl font-bold text-gray-800">₹ {balance.toLocaleString()}</h2>
      </div>

      <div className="text-sm text-gray-600">
        <div className="flex justify-between mb-2">
          <span>Current Month Salary:</span>
          <span className="font-medium text-gray-800">{formatCurrency(currentMonthSalary)}</span>
        </div>
        <div className="flex justify-between">
          <span>Last Month Savings:</span>
          <span className="font-medium text-gray-800">{formatCurrency(lastMonthSavings)}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentBalance;
