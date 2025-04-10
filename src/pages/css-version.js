import React from 'react';
import MainLayoutCSS from '../components/layout/MainLayoutCSS';

export default function CSSVersion() {
  return (
    <MainLayoutCSS>
      <h1 className="text-2xl font-bold mb-6">CSS Version</h1>
      <p className="mb-4">This page uses the CSS-based sidebar implementation.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Account Balance</h2>
          <p className="text-3xl font-bold text-blue-600">₹45,250.00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">CIBIL Score</h2>
          <p className="text-3xl font-bold text-green-600">780</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Investments</h2>
          <p className="text-3xl font-bold text-purple-600">₹12,500.00</p>
        </div>
      </div>
    </MainLayoutCSS>
  );
}
