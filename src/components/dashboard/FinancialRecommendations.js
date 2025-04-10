import React from 'react';
import { FiTrendingUp, FiAlertCircle, FiCheckCircle, FiBarChart2 } from 'react-icons/fi';

const RecommendationCard = ({ icon, title, description, actionText, type }) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-green-50',
          iconColor: 'text-green-500',
          borderColor: 'border-green-200',
        };
      case 'warning':
        return {
          bgColor: 'bg-yellow-50',
          iconColor: 'text-yellow-500',
          borderColor: 'border-yellow-200',
        };
      case 'info':
        return {
          bgColor: 'bg-blue-50',
          iconColor: 'text-blue-500',
          borderColor: 'border-blue-200',
        };
      case 'danger':
        return {
          bgColor: 'bg-red-50',
          iconColor: 'text-red-500',
          borderColor: 'border-red-200',
        };
      default:
        return {
          bgColor: 'bg-gray-50',
          iconColor: 'text-gray-500',
          borderColor: 'border-gray-200',
        };
    }
  };

  const { bgColor, iconColor, borderColor } = getTypeStyles();

  return (
    <div className={`p-4 rounded-lg border ${borderColor} ${bgColor}`}>
      <div className="flex items-start">
        <div className={`p-2 rounded-full ${bgColor} ${iconColor} mr-3`}>
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <button className={`mt-3 text-sm font-medium ${iconColor} hover:underline`}>
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
};

const FinancialRecommendations = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Financial Recommendations</h2>
        <button className="text-blue-600 hover:text-blue-800 text-sm">View All</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RecommendationCard
          icon={<FiTrendingUp size={20} />}
          title="Investment Opportunity"
          description="Based on your profile, investing in SIP mutual funds could yield better returns."
          actionText="Explore Investment Options"
          type="success"
        />
        
        <RecommendationCard
          icon={<FiAlertCircle size={20} />}
          title="Credit Card Bill Due"
          description="Your credit card bill of ₹15,000 is due in 3 days. Pay on time to avoid late fees."
          actionText="Pay Now"
          type="warning"
        />
        
        <RecommendationCard
          icon={<FiCheckCircle size={20} />}
          title="Savings Goal Progress"
          description="You're on track to meet your savings goal of ₹1,00,000 by December 2023."
          actionText="View Savings Plan"
          type="info"
        />
        
        <RecommendationCard
          icon={<FiBarChart2 size={20} />}
          title="Expense Analysis"
          description="Your dining expenses increased by 20% compared to last month."
          actionText="View Detailed Analysis"
          type="danger"
        />
      </div>
    </div>
  );
};

export default FinancialRecommendations;
