import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-[250px]">
        <Header />
        <main className="p-6 max-w-[1200px] mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
