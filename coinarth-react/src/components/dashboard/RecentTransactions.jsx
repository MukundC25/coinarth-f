import styled from 'styled-components';
import { FaExchangeAlt } from 'react-icons/fa';
import Card from '../ui/Card';

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  text-align: left;
`;

const TableHeader = styled.th`
  padding: 0.75rem 0.5rem;
  font-weight: 500;
  color: var(--text-light);
  border-bottom: 1px solid var(--border-color);
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:last-child td {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid var(--border-color);
  font-size: 0.875rem;
`;

const TransactionCategory = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  
  background-color: ${props => {
    switch(props.type) {
      case 'expense': return 'var(--red-light)';
      case 'income': return 'var(--green-light)';
      case 'investment': return 'var(--blue-light)';
      default: return 'var(--blue-light)';
    }
  }};
  
  color: ${props => {
    switch(props.type) {
      case 'expense': return 'var(--red)';
      case 'income': return 'var(--green)';
      case 'investment': return 'var(--blue)';
      default: return 'var(--blue)';
    }
  }};
`;

const TransactionAmount = styled.span`
  font-weight: 500;
  color: ${props => props.amount > 0 ? 'var(--green)' : 'var(--red)'};
`;

const RecentTransactions = ({ transactions }) => {
  return (
    <Card 
      title="Recent Transactions" 
      icon={<FaExchangeAlt />} 
      iconBgColor="var(--blue-light)" 
      iconColor="var(--blue)"
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Date</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader>Category</TableHeader>
              <TableHeader style={{ textAlign: 'right' }}>Amount</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>
                  <TransactionCategory type={transaction.categoryClass}>
                    {transaction.category}
                  </TransactionCategory>
                </TableCell>
                <TableCell style={{ textAlign: 'right' }}>
                  <TransactionAmount amount={transaction.amount}>
                    {transaction.amount > 0 ? '+' : ''}
                    ₹{Math.abs(transaction.amount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </TransactionAmount>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default RecentTransactions;
