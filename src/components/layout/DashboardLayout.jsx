import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 260px;
  padding: 1.5rem;
`;

const DashboardContent = styled.div`
  padding-top: 70px;
`;

const DashboardLayout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <DashboardContent>
          {children}
        </DashboardContent>
      </MainContent>
    </DashboardContainer>
  );
};

export default DashboardLayout;
