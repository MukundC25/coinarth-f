import styled from 'styled-components';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import Card from '../ui/Card';

const CardValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--red);
`;

const CardTrend = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: var(--red);
  
  svg {
    margin-right: 0.25rem;
  }
`;

const ExpensesCard = ({ expenses, change }) => {
  return (
    <Card 
      title="Total Expenses" 
      icon={<FaArrowDown />} 
      iconBgColor="var(--red-light)" 
      iconColor="var(--red)"
    >
      <CardValue>
        ₹{expenses.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </CardValue>
      <CardTrend>
        <FaArrowUp />
        <span>+{change}% from last month</span>
      </CardTrend>
    </Card>
  );
};

export default ExpensesCard;
