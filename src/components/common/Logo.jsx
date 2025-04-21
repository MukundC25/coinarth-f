import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
`;

const LogoImage = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
`;

const Logo = ({ className, darkMode = false }) => {
  // Use the appropriate logo version based on the background
  const logoSrc = darkMode 
    ? "/images/coinarth-logo-light.png" // Light version for dark backgrounds
    : "/images/coinarth-logo-dark.png"; // Dark version for light backgrounds
    
  return (
    <LogoContainer className={className}>
      <LogoImage 
        src={logoSrc} 
        alt="COINARTH Logo" 
      />
    </LogoContainer>
  );
};

export default Logo;
