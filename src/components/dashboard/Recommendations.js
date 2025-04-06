import React from 'react';

const Recommendations = ({ taxTips, investmentOpportunities }) => {
  return (
    <div className="dashboard-card p-6 rounded-lg">
      <h3 className="text-gray-800 font-medium mb-4">Recommendations</h3>

      <div className="mb-4">
        <h4 className="text-sm text-gray-600 mb-2">Tax Tips:</h4>
        <div className="bg-gray-50 p-4 rounded-lg hover:shadow-sm transition-shadow duration-200 border border-gray-100 cursor-pointer">
          {taxTips.length > 0 ? (
            <div>
              <h5 className="font-medium text-gray-800">{taxTips[0].title}</h5>
              <p className="text-sm text-gray-600 mt-1">{taxTips[0].description}</p>
            </div>
          ) : (
            <p className="text-sm text-gray-500">No tax tips available</p>
          )}
        </div>
      </div>

      <div>
        <h4 className="text-sm text-gray-600 mb-2">Investment Opportunities:</h4>
        <div className="bg-gray-50 p-4 rounded-lg hover:shadow-sm transition-shadow duration-200 border border-gray-100 cursor-pointer">
          {investmentOpportunities.length > 0 ? (
            <div>
              <h5 className="font-medium text-gray-800">{investmentOpportunities[0].title}</h5>
              <p className="text-sm text-gray-600 mt-1">{investmentOpportunities[0].description}</p>
            </div>
          ) : (
            <p className="text-sm text-gray-500">No investment opportunities available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
