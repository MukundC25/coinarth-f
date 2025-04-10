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
import '../../styles/sidebar.css';

const SidebarCSS = () => {
  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="sidebar-logo">
        <h1>
          <span className="coin">COIN</span>
          <span className="a">A</span>
          <span className="rth">RTH</span>
        </h1>
      </div>

      {/* Navigation Section */}
      <div className="sidebar-nav">
        <p className="sidebar-heading">MANAGE</p>
        <nav className="sidebar-menu">
          {/* Active link */}
          <Link href="/" className="sidebar-link-active">
            <FiHome className="icon" size={20} />
            <span className="text">Overview</span>
          </Link>

          {/* Inactive links */}
          <Link href="/assets" className="sidebar-link">
            <FiList className="icon" size={20} />
            <span className="text">Assets</span>
          </Link>

          <Link href="/expenses" className="sidebar-link">
            <FiCreditCard className="icon" size={20} />
            <span className="text">Expenses</span>
          </Link>

          <Link href="/tax" className="sidebar-link">
            <FiHome className="icon" size={20} />
            <span className="text">Tax</span>
          </Link>

          <Link href="/investment" className="sidebar-link">
            <FiTrendingUp className="icon" size={20} />
            <span className="text">Investment</span>
          </Link>

          <Link href="/govt-schemes" className="sidebar-link">
            <FiFileText className="icon" size={20} />
            <span className="text">Govt. Schemes</span>
          </Link>

          <Link href="/legal" className="sidebar-link">
            <FiEdit className="icon" size={20} />
            <span className="text">Legal</span>
          </Link>

          <Link href="/support" className="sidebar-link">
            <FiHelpCircle className="icon" size={20} />
            <span className="text">Help & Support</span>
          </Link>

          <Link href="/settings" className="sidebar-link">
            <FiSettings className="icon" size={20} />
            <span className="text">Settings</span>
          </Link>
        </nav>
      </div>

      {/* User Section */}
      <div className="sidebar-user">
        <Link href="/profile" className="sidebar-link">
          <FiUser className="icon" size={20} />
          <span className="text">Profile</span>
        </Link>

        <Link href="/logout" className="sidebar-link">
          <FiLogOut className="icon" size={20} />
          <span className="text">Log out</span>
        </Link>
      </div>
    </div>
  );
};

export default SidebarCSS;
