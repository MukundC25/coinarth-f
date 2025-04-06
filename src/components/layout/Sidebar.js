import React from 'react';
import Link from 'next/link';
import {
  FiHome,
  FiDollarSign,
  FiCreditCard,
  FiFileText,
  FiTrendingUp,
  FiBookOpen,
  FiHelpCircle,
  FiSettings,
  FiUser,
  FiLogOut
} from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="bg-[#0F172A] text-white h-screen w-[180px] flex flex-col fixed left-0 top-0 z-50 shadow-lg">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-xl font-bold flex items-center">
          <span className="text-yellow-400">COIN</span>
          <span className="text-white">A</span>
          <span className="text-yellow-400">RTH</span>
        </h1>
      </div>

      {/* Navigation Section */}
      <div className="mt-4">
        <p className="px-6 text-xs text-gray-400 mb-2 font-medium tracking-wider">MANAGE</p>
        <nav className="flex flex-col">
          <Link href="/" className="flex items-center px-6 py-3 bg-blue-600 text-white border-l-4 border-blue-400">
            <div className="w-6 flex justify-center">
              <FiHome className="text-lg" />
            </div>
            <span className="ml-3 font-medium">Overview</span>
          </Link>
          <Link href="/assets" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:border-l-4 hover:border-blue-500 transition-all duration-150">
            <div className="w-6 flex justify-center">
              <FiDollarSign className="text-lg" />
            </div>
            <span className="ml-3">Assets</span>
          </Link>
          <Link href="/expenses" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:border-l-4 hover:border-blue-500 transition-all duration-150">
            <div className="w-6 flex justify-center">
              <FiCreditCard className="text-lg" />
            </div>
            <span className="ml-3">Expenses</span>
          </Link>
          <Link href="/tax" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:border-l-4 hover:border-blue-500 transition-all duration-150">
            <div className="w-6 flex justify-center">
              <FiFileText className="text-lg" />
            </div>
            <span className="ml-3">Tax</span>
          </Link>
          <Link href="/investment" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:border-l-4 hover:border-blue-500 transition-all duration-150">
            <div className="w-6 flex justify-center">
              <FiTrendingUp className="text-lg" />
            </div>
            <span className="ml-3">Investment</span>
          </Link>
          <Link href="/govt-schemes" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:border-l-4 hover:border-blue-500 transition-all duration-150">
            <div className="w-6 flex justify-center">
              <FiBookOpen className="text-lg" />
            </div>
            <span className="ml-3">Govt. Schemes</span>
          </Link>
          <Link href="/legal" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:border-l-4 hover:border-blue-500 transition-all duration-150">
            <div className="w-6 flex justify-center">
              <FiFileText className="text-lg" />
            </div>
            <span className="ml-3">Legal</span>
          </Link>
          <Link href="/support" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:border-l-4 hover:border-blue-500 transition-all duration-150">
            <div className="w-6 flex justify-center">
              <FiHelpCircle className="text-lg" />
            </div>
            <span className="ml-3">Help & Support</span>
          </Link>
          <Link href="/settings" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:border-l-4 hover:border-blue-500 transition-all duration-150">
            <div className="w-6 flex justify-center">
              <FiSettings className="text-lg" />
            </div>
            <span className="ml-3">Settings</span>
          </Link>
        </nav>
      </div>

      {/* User Section */}
      <div className="mt-auto mb-6">
        <Link href="/profile" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:border-l-4 hover:border-blue-500 transition-all duration-150">
          <div className="w-6 flex justify-center">
            <FiUser className="text-lg" />
          </div>
          <span className="ml-3">Profile</span>
        </Link>
        <Link href="/logout" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:border-l-4 hover:border-blue-500 transition-all duration-150">
          <div className="w-6 flex justify-center">
            <FiLogOut className="text-lg" />
          </div>
          <span className="ml-3">Log out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
