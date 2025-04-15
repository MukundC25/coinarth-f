import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: var(--card-bg);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  transition: var(--transition);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1rem;
  color: var(--text-light);
`;

const CardIconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor || 'var(--blue-light)'};
  
  svg {
    color: ${props => props.iconColor || 'var(--blue)'};
  }
`;

const Card = ({ 
  children, 
  title, 
  icon, 
  iconBgColor, 
  iconColor, 
  className 
}) => {
  return (
    <CardContainer className={className}>
      {(title || icon) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {icon && (
            <CardIconWrapper bgColor={iconBgColor} iconColor={iconColor}>
              {icon}
            </CardIconWrapper>
          )}
        </CardHeader>
      )}
      {children}
    </CardContainer>
  );
};

export default Card;
