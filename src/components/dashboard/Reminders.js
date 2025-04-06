import React from 'react';

const Reminders = ({ reminders }) => {
  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount).replace('₹', '₹ ');
  };

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Upcoming':
        return 'bg-blue-500';
      case 'Due Date':
        return 'bg-yellow-500';
      case 'Repayment':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Get icon based on type
  const getIcon = (type) => {
    switch (type) {
      case 'Mobile Recharge':
        return (
          <div className="bg-red-100 p-2 rounded-lg shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'Electricity Bill':
        return (
          <div className="bg-green-100 p-2 rounded-lg shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'Loan Bill':
        return (
          <div className="bg-blue-100 p-2 rounded-lg shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="bg-gray-100 p-2 rounded-lg shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-card p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-800 font-medium">Reminders & Bill Payments</h3>
        <button className="text-sm text-blue-500 hover:text-blue-700 font-medium">View all</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
              <th className="pb-3 font-normal w-10"></th>
              <th className="pb-3 font-normal">Type</th>
              <th className="pb-3 font-normal">Provider</th>
              <th className="pb-3 font-normal">Amount</th>
              <th className="pb-3 font-normal">Date</th>
              <th className="pb-3 font-normal">Time</th>
              <th className="pb-3 font-normal text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {reminders.map((reminder) => (
              <tr key={reminder.id} className="text-sm hover:bg-gray-50 cursor-pointer transition-colors duration-150">
                <td className="py-3">{getIcon(reminder.type)}</td>
                <td className="py-3 font-medium text-gray-800">{reminder.type}</td>
                <td className="py-3 text-gray-500">{reminder.provider}</td>
                <td className="py-3 font-medium text-gray-800">{formatCurrency(reminder.amount)}</td>
                <td className="py-3 text-gray-500">{reminder.date}</td>
                <td className="py-3 text-gray-500">{reminder.time}</td>
                <td className="py-3 text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${getStatusColor(reminder.status)} text-white shadow-sm`}>
                    {reminder.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reminders;
