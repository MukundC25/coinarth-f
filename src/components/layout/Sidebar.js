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
    <div className="bg-[#070B14] text-white h-screen w-[250px] flex flex-col fixed left-0 top-0 z-50 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 pb-8">
        <h1 className="text-2xl font-bold flex items-center justify-center">
          <span className="text-yellow-400">COIN</span>
          <span className="text-white">A</span>
          <span className="text-yellow-400">RTH</span>
        </h1>
      </div>

      {/* Navigation Section */}
      <div className="flex-1">
        <p className="px-6 text-xs text-gray-500 mb-6 uppercase tracking-wider text-center">MANAGE</p>
        <nav className="flex flex-col space-y-4 px-4">
          {/* Active link with white background */}
          <Link href="/" className="bg-white rounded-lg py-3 px-4 flex items-center justify-center">
            <FiHome className="text-blue-600 mr-3" size={20} />
            <span className="text-lg font-bold text-black">Overview</span>
          </Link>

          {/* Other links */}
          <Link href="/assets" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiList className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Assets</span>
          </Link>

          <Link href="/expenses" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiCreditCard className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Expenses</span>
          </Link>

          <Link href="/tax" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiHome className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Tax</span>
          </Link>

          <Link href="/investment" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiTrendingUp className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Investment</span>
          </Link>

          <Link href="/govt-schemes" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiFileText className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Govt. Schemes</span>
          </Link>

          <Link href="/legal" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiEdit className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Legal</span>
          </Link>

          <Link href="/support" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiHelpCircle className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Help & Support</span>
          </Link>

          <Link href="/settings" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiSettings className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Settings</span>
          </Link>
        </nav>
      </div>

      {/* User Section */}
      <div className="mb-20 px-4 space-y-4">
        <Link href="/profile" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
          <FiUser className="text-gray-400 mr-3" size={20} />
          <span className="text-lg">Profile</span>
        </Link>

        <Link href="/logout" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
          <FiLogOut className="text-gray-400 mr-3" size={20} />
          <span className="text-lg">Log out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
