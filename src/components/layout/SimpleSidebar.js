import React from 'react';
import Link from 'next/link';
import {
  FiHome,
  FiList,
  FiCreditCard,
  FiTrendingUp,
  FiFileText,
  FiEdit,
  FiHelpCircle,
  FiSettings,
  FiUser,
  FiLogOut
} from 'react-icons/fi';

const SimpleSidebar = () => {
  return (
    <div style={{backgroundColor: '#070B14', color: 'white', height: '100vh', width: '250px', display: 'flex', flexDirection: 'column', position: 'fixed', left: 0, top: 0, zIndex: 9999}} className="sidebar-container">
      {/* Logo */}
      <div style={{padding: '24px'}}>
        <h1 style={{fontSize: '24px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <span style={{color: '#fbbf24'}}>COIN</span>
          <span style={{color: 'white'}}>A</span>
          <span style={{color: '#fbbf24'}}>RTH</span>
        </h1>
      </div>

      {/* Navigation */}
      <div style={{flex: 1, paddingLeft: '16px', paddingRight: '16px'}}>
        <p style={{fontSize: '12px', color: '#6b7280', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center'}}>MANAGE</p>

        <div className="space-y-2">
          <Link href="/" style={{display: 'flex', alignItems: 'center', backgroundColor: 'white', color: 'black', padding: '8px', borderRadius: '8px', marginBottom: '8px'}}>
            <FiHome style={{marginRight: '8px', fontSize: '18px'}} />
            <span>Overview</span>
          </Link>

          <Link href="/assets" style={{display: 'flex', alignItems: 'center', color: '#a0aec0', padding: '8px', borderRadius: '8px', marginBottom: '8px'}}>
            <FiList style={{marginRight: '8px', fontSize: '18px'}} />
            <span>Assets</span>
          </Link>

          <Link href="/expenses" style={{display: 'flex', alignItems: 'center', color: '#a0aec0', padding: '8px', borderRadius: '8px', marginBottom: '8px'}}>
            <FiCreditCard style={{marginRight: '8px', fontSize: '18px'}} />
            <span>Expenses</span>
          </Link>

          <Link href="/tax" style={{display: 'flex', alignItems: 'center', color: '#a0aec0', padding: '8px', borderRadius: '8px', marginBottom: '8px'}}>
            <FiHome style={{marginRight: '8px', fontSize: '18px'}} />
            <span>Tax</span>
          </Link>

          <Link href="/investment" style={{display: 'flex', alignItems: 'center', color: '#a0aec0', padding: '8px', borderRadius: '8px', marginBottom: '8px'}}>
            <FiTrendingUp style={{marginRight: '8px', fontSize: '18px'}} />
            <span>Investment</span>
          </Link>

          <Link href="/govt-schemes" style={{display: 'flex', alignItems: 'center', color: '#a0aec0', padding: '8px', borderRadius: '8px', marginBottom: '8px'}}>
            <FiFileText style={{marginRight: '8px', fontSize: '18px'}} />
            <span>Govt. Schemes</span>
          </Link>

          <Link href="/legal" style={{display: 'flex', alignItems: 'center', color: '#a0aec0', padding: '8px', borderRadius: '8px', marginBottom: '8px'}}>
            <FiEdit style={{marginRight: '8px', fontSize: '18px'}} />
            <span>Legal</span>
          </Link>

          <Link href="/support" style={{display: 'flex', alignItems: 'center', color: '#a0aec0', padding: '8px', borderRadius: '8px', marginBottom: '8px'}}>
            <FiHelpCircle style={{marginRight: '8px', fontSize: '18px'}} />
            <span>Help & Support</span>
          </Link>

          <Link href="/settings" style={{display: 'flex', alignItems: 'center', color: '#a0aec0', padding: '8px', borderRadius: '8px', marginBottom: '8px'}}>
            <FiSettings style={{marginRight: '8px', fontSize: '18px'}} />
            <span>Settings</span>
          </Link>
        </div>
      </div>

      {/* User Section */}
      <div style={{padding: '16px', marginTop: 'auto', marginBottom: '40px'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <Link href="/profile" style={{display: 'flex', alignItems: 'center', color: '#a0aec0', padding: '8px', borderRadius: '8px', marginBottom: '8px'}}>
            <FiUser style={{marginRight: '8px', fontSize: '18px'}} />
            <span>Profile</span>
          </Link>

          <Link href="/logout" style={{display: 'flex', alignItems: 'center', color: '#a0aec0', padding: '8px', borderRadius: '8px', marginBottom: '8px'}}>
            <FiLogOut style={{marginRight: '8px', fontSize: '18px'}} />
            <span>Log out</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SimpleSidebar;
