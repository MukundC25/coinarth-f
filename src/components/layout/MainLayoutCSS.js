import React from 'react';
import SidebarCSS from './SidebarCSS';
import Header from './Header';

const MainLayoutCSS = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarCSS />
      <div className="flex-1 ml-[250px]">
        <Header />
        <main className="p-6 max-w-[1200px] mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayoutCSS;
