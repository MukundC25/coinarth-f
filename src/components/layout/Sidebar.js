import React from 'react';
import Link from 'next/link';
import {
  FiList,
  FiCreditCard,
  FiHome,
  FiTrendingUp,
  FiFileText,
  FiEdit,
  FiHelpCircle,
  FiSettings,
  FiUser,
  FiLogOut
} from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="bg-[#070B14] text-white h-screen w-[280px] flex flex-col fixed left-0 top-0 z-50">
      {/* Logo */}
      <div className="p-6 pb-8">
        <h1 className="text-xl font-bold flex items-center">
          <span className="text-yellow-400">COIN</span>
          <span className="text-white">A</span>
          <span className="text-yellow-400">RTH</span>
        </h1>
      </div>

      {/* Navigation Section */}
      <div>
        <p className="px-6 text-[10px] text-gray-500 mb-3 uppercase tracking-wider">MANAGE</p>
        <nav className="flex flex-col space-y-1">
          {/* Active link with white background */}
          <Link href="/" className="flex items-center px-6 py-2 bg-white rounded-r-full mr-3">
            <div className="w-5 flex justify-center">
              <div className="bg-[#2563EB] p-0.5 rounded-sm">
                <FiHome size={24} className="text-white" />
              </div>
            </div>
            <span className="ml-3 text-xs font-medium text-black">Overview</span>
          </Link>

          {/* Other links */}
          <Link
            href="/assets"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white transition-colors duration-150"
          >
            <div className="w-5 flex justify-center">
              <FiList size={24} className="text-gray-400" />
            </div>
            <span className="ml-3 text-xs">Assets</span>
          </Link>

          <Link
            href="/expenses"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white transition-colors duration-150"
          >
            <div className="w-5 flex justify-center">
              <FiCreditCard size={24} className="text-gray-400" />
            </div>
            <span className="ml-3 text-xs">Expenses</span>
          </Link>

          <Link
            href="/tax"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white transition-colors duration-150"
          >
            <div className="w-5 flex justify-center">
              <FiHome size={24} className="text-gray-400" />
            </div>
            <span className="ml-3 text-xs">Tax</span>
          </Link>

          <Link
            href="/investment"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white transition-colors duration-150"
          >
            <div className="w-5 flex justify-center">
              <FiTrendingUp size={24} className="text-gray-400" />
            </div>
            <span className="ml-3 text-xs">Investment</span>
          </Link>

          <Link
            href="/govt-schemes"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white transition-colors duration-150"
          >
            <div className="w-5 flex justify-center">
              <FiFileText size={24} className="text-gray-400" />
            </div>
            <span className="ml-3 text-xs">Govt. Schemes</span>
          </Link>

          <Link
            href="/legal"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white transition-colors duration-150"
          >
            <div className="w-5 flex justify-center">
              <FiEdit size={24} className="text-gray-400" />
            </div>
            <span className="ml-3 text-xs">Legal</span>
          </Link>

          <Link
            href="/support"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white transition-colors duration-150"
          >
            <div className="w-5 flex justify-center">
              <FiHelpCircle size={24} className="text-gray-400" />
            </div>
            <span className="ml-3 text-xs">Help & Support</span>
          </Link>

          <Link
            href="/settings"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white transition-colors duration-150"
          >
            <div className="w-5 flex justify-center">
              <FiSettings size={24} className="text-gray-400" />
            </div>
            <span className="ml-3 text-xs">Settings</span>
          </Link>
        </nav>
      </div>

      {/* User Section */}
      <div className="mt-auto mb-6">
        <Link
          href="/profile"
          className="flex items-center px-6 py-2 text-gray-400 hover:text-white transition-colors duration-150"
        >
          <div className="w-5 flex justify-center">
            <FiUser size={24} className="text-gray-400" />
          </div>
          <span className="ml-3 text-xs">Profile</span>
        </Link>

        <Link
          href="/logout"
          className="flex items-center px-6 py-2 text-gray-400 hover:text-white transition-colors duration-150"
        >
          <div className="w-5 flex justify-center">
            <FiLogOut size={24} className="text-gray-400" />
          </div>
          <span className="ml-3 text-xs">Log out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
