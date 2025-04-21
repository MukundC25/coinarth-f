import styled from 'styled-components';
import { FaWallet, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Card from '../ui/Card';

const CardValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--blue);
`;

const CardTrend = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${props => props.isPositive ? 'var(--green)' : 'var(--red)'};
  
  svg {
    margin-right: 0.25rem;
  }
`;

const CurrentBalance = ({ balance, change }) => {
  const isPositive = change > 0;
  
  return (
    <Card 
      title="Total Balance" 
      icon={<FaWallet />} 
      iconBgColor="var(--blue-light)" 
      iconColor="var(--blue)"
    >
      <CardValue>
        ₹{balance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </CardValue>
      <CardTrend isPositive={isPositive}>
        {isPositive ? <FaArrowUp /> : <FaArrowDown />}
        <span>{isPositive ? '+' : ''}{change}% from last month</span>
      </CardTrend>
    </Card>
  );
};

export default CurrentBalance;
