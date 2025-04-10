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
    // ========== MAIN SIDEBAR CONTAINER ==========
    <div
      // Main sidebar container styling
      // bg-[#070B14]: Dark background color
      // text-white: White text color
      // h-screen: Full height of the screen
      // w-[250px]: Width of the sidebar - ADJUST THIS to make sidebar wider/narrower
      // flex flex-col: Arrange items in a column
      // fixed left-0 top-0: Position sidebar at the left top of the screen
      // z-50: High z-index to appear above other elements
      // overflow-y-auto: Add scrollbar when content overflows
      className="bg-[#070B14] text-white h-screen w-[250px] flex flex-col fixed left-0 top-0 z-50 overflow-y-auto">

      {/* ========== LOGO SECTION ========== */}
      {/* You can modify the logo styling here */}
      <div className="p-6 pb-8">
        <h1 className="text-2xl font-bold flex items-center justify-center">
          <span className="text-yellow-400">COIN</span>
          <span className="text-white">A</span>
          <span className="text-yellow-400">RTH</span>
        </h1>
      </div>

      {/* ========== NAVIGATION SECTION ========== */}
      <div className="flex-1">
        {/* Section heading - you can modify the styling here */}
        <p className="px-6 text-xs text-gray-500 mb-6 uppercase tracking-wider text-center">MANAGE</p>

        {/* Navigation menu container */}
        <nav className="flex flex-col space-y-4 px-4">

          {/* ========== ACTIVE LINK STYLING ========== */}
          {/* This is the active link with white background */}
          {/* Modify this section to change the active link appearance */}
          <Link href="/"
            // Active link styling
            // bg-white: White background for active item
            // rounded-lg: Rounded corners
            // py-3 px-4: Padding vertical and horizontal
            // flex items-center justify-center: Center content horizontally and vertically
            className="bg-white rounded-lg py-3 px-4 flex items-center justify-center">
            <FiHome className="text-blue-600 mr-3" size={20} />
            <span className="text-lg font-bold text-black">Overview</span>
          </Link>

          {/* ========== INACTIVE LINKS STYLING ========== */}
          {/* These are the inactive links */}
          {/* Modify these sections to change the inactive links appearance */}

          {/* Assets Link */}
          <Link href="/assets"
            // Inactive link styling
            // flex items-center justify-center: Center content horizontally and vertically
            // py-3 px-4: Padding vertical and horizontal
            // text-gray-400: Gray text color for inactive items
            // hover:bg-white: Change background to white on hover
            // hover:text-black: Change text to black on hover
            // rounded-lg: Rounded corners
            // transition-all duration-150: Smooth transition effect
            className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiList className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Assets</span>
          </Link>

          {/* Expenses Link */}
          <Link href="/expenses" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiCreditCard className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Expenses</span>
          </Link>

          {/* Tax Link */}
          <Link href="/tax" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiHome className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Tax</span>
          </Link>

          {/* Investment Link */}
          <Link href="/investment" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiTrendingUp className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Investment</span>
          </Link>

          {/* Govt. Schemes Link */}
          <Link href="/govt-schemes" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiFileText className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Govt. Schemes</span>
          </Link>

          {/* Legal Link */}
          <Link href="/legal" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiEdit className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Legal</span>
          </Link>

          {/* Help & Support Link */}
          <Link href="/support" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiHelpCircle className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Help & Support</span>
          </Link>

          {/* Settings Link */}
          <Link href="/settings" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
            <FiSettings className="text-gray-400 mr-3" size={20} />
            <span className="text-lg">Settings</span>
          </Link>
        </nav>
      </div>

      {/* ========== USER SECTION (BOTTOM LINKS) ========== */}
      {/* This section contains the Profile and Logout links */}
      {/* Modify this section to change the bottom links appearance and position */}
      <div
        // Bottom section styling
        // mb-20: Large bottom margin to push content up from bottom
        // px-4: Horizontal padding
        // space-y-4: Vertical spacing between child elements
        className="mb-20 px-4 space-y-4">
        {/* Profile Link */}
        <Link href="/profile" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
          <FiUser className="text-gray-400 mr-3" size={20} />
          <span className="text-lg">Profile</span>
        </Link>

        {/* Logout Link */}
        <Link href="/logout" className="flex items-center justify-center py-3 px-4 text-gray-400 hover:bg-white hover:text-black rounded-lg transition-all duration-150">
          <FiLogOut className="text-gray-400 mr-3" size={20} />
          <span className="text-lg">Log out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
