import React from 'react';
import { FiBell } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-white py-3 px-6 flex justify-between items-center shadow-sm border-b border-gray-100">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 rounded-full py-2 pl-10 pr-4 w-[300px] focus:outline-none text-sm border border-gray-200"
        />
        <div className="absolute left-3 top-2.5 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center">
        <div className="relative mr-5">
          <FiBell className="h-6 w-6 text-gray-500" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center">
          <div className="mr-3 text-right">
            <p className="font-medium text-sm">Yash More</p>
            <p className="text-xs text-gray-500">User</p>
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-gray-200">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
