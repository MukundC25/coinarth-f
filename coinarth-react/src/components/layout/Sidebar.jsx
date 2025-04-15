import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styled from 'styled-components';
import {
  FaHome,
  FaList,
  FaCreditCard,
  FaFileInvoice,
  FaChartLine,
  FaLandmark,
  FaGavel,
  FaQuestionCircle,
  FaCog,
  FaUser,
  FaSignOutAlt
} from 'react-icons/fa';

const SidebarContainer = styled.aside`
  width: 260px;
  background-color: var(--sidebar-bg);
  color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  z-index: 50;
`;

const SidebarHeader = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const LogoCoin = styled.span`
  color: #f59e0b;
`;

const LogoA = styled.span`
  color: white;
`;

const LogoRth = styled.span`
  color: #f59e0b;
`;

const SidebarContent = styled.div`
  flex: 1;
  padding: 0 1rem;
`;

const SidebarCategory = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  text-align: center;
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.5rem;
  color: #9ca3af;
  text-decoration: none;
  transition: var(--transition);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background-color: white;
    color: black;
  }

  svg {
    margin-right: 0.75rem;
    font-size: 1.125rem;
  }
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  margin-bottom: 2.5rem;
  padding: 0 1rem;
`;

const Sidebar = () => {
  const [activePath, setActivePath] = useState('/');
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setActivePath(path);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <Logo>
          <LogoCoin>COIN</LogoCoin>
          <LogoA>A</LogoA>
          <LogoRth>RTH</LogoRth>
        </Logo>
      </SidebarHeader>

      <SidebarContent>
        <SidebarCategory>MANAGE</SidebarCategory>

        <SidebarNav>
          <SidebarLink
            to="/"
            className={activePath === '/' ? 'active' : ''}
            onClick={() => handleNavClick('/')}
          >
            <FaHome />
            <span>Overview</span>
          </SidebarLink>

          <SidebarLink
            to="/assets"
            className={activePath === '/assets' ? 'active' : ''}
            onClick={() => handleNavClick('/assets')}
          >
            <FaList />
            <span>Assets</span>
          </SidebarLink>

          <SidebarLink
            to="/expenses"
            className={activePath === '/expenses' ? 'active' : ''}
            onClick={() => handleNavClick('/expenses')}
          >
            <FaCreditCard />
            <span>Expenses</span>
          </SidebarLink>

          <SidebarLink
            to="/tax"
            className={activePath === '/tax' ? 'active' : ''}
            onClick={() => handleNavClick('/tax')}
          >
            <FaFileInvoice />
            <span>Tax</span>
          </SidebarLink>

          <SidebarLink
            to="/investment"
            className={activePath === '/investment' ? 'active' : ''}
            onClick={() => handleNavClick('/investment')}
          >
            <FaChartLine />
            <span>Investment</span>
          </SidebarLink>

          <SidebarLink
            to="/govt-schemes"
            className={activePath === '/govt-schemes' ? 'active' : ''}
            onClick={() => handleNavClick('/govt-schemes')}
          >
            <FaLandmark />
            <span>Govt. Schemes</span>
          </SidebarLink>

          <SidebarLink
            to="/legal"
            className={activePath === '/legal' ? 'active' : ''}
            onClick={() => handleNavClick('/legal')}
          >
            <FaGavel />
            <span>Legal</span>
          </SidebarLink>
        </SidebarNav>
      </SidebarContent>

      <SidebarFooter>
        <SidebarNav>
          <SidebarLink
            to="/support"
            onClick={() => handleNavClick('/support')}
          >
            <FaQuestionCircle />
            <span>Help & Support</span>
          </SidebarLink>

          <SidebarLink
            to="/settings"
            onClick={() => handleNavClick('/settings')}
          >
            <FaCog />
            <span>Settings</span>
          </SidebarLink>

          <SidebarLink
            to="/profile"
            onClick={() => handleNavClick('/profile')}
          >
            <FaUser />
            <span>Profile</span>
          </SidebarLink>

          <SidebarLink
            to="#"
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            <span>Log out</span>
          </SidebarLink>
        </SidebarNav>
      </SidebarFooter>
    </SidebarContainer>
  );
};

export default Sidebar;
