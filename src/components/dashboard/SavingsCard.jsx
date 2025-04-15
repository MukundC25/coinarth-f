import styled from 'styled-components';
import { FaPiggyBank, FaArrowUp } from 'react-icons/fa';
import Card from '../ui/Card';

const CardValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--purple);
`;

const CardTrend = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: var(--green);
  
  svg {
    margin-right: 0.25rem;
  }
`;

const SavingsCard = ({ savings, change }) => {
  return (
    <Card 
      title="Total Savings" 
      icon={<FaPiggyBank />} 
      iconBgColor="var(--purple-light)" 
      iconColor="var(--purple)"
    >
      <CardValue>
        ₹{savings.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </CardValue>
      <CardTrend>
        <FaArrowUp />
        <span>+{change}% from last month</span>
      </CardTrend>
    </Card>
  );
};

export default SavingsCard;
