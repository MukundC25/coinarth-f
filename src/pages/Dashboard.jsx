import styled from 'styled-components';
import CurrentBalance from '../components/dashboard/CurrentBalance';
import CibilScore from '../components/dashboard/CibilScore';
import ExpensesCard from '../components/dashboard/ExpensesCard';
import SavingsCard from '../components/dashboard/SavingsCard';
import IncomeExpensesChart from '../components/dashboard/IncomeExpensesChart';
import ExpenseBreakdownChart from '../components/dashboard/ExpenseBreakdownChart';
import Recommendations from '../components/dashboard/Recommendations';
import FinancialNews from '../components/dashboard/FinancialNews';
import RecentTransactions from '../components/dashboard/RecentTransactions';

import { 
  financialData, 
  incomeExpensesData, 
  expenseBreakdownData,
  recommendations,
  financialNews,
  recentTransactions
} from '../data/mockData';

const DashboardHeader = styled.div`
  margin-bottom: 2rem;
`;

const DashboardTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const DashboardSubtitle = styled.p`
  color: var(--text-light);
`;

const SummaryCards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ChartsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const RecommendationsNewsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TransactionsSection = styled.div`
  margin-bottom: 1.5rem;
`;

const Dashboard = () => {
  return (
    <>
      <DashboardHeader>
        <DashboardTitle>Financial Dashboard</DashboardTitle>
        <DashboardSubtitle>Welcome back, Yash! Here's your financial summary.</DashboardSubtitle>
      </DashboardHeader>
      
      {/* Financial Summary Cards */}
      <SummaryCards>
        <CurrentBalance 
          balance={financialData.currentBalance} 
          change={financialData.balanceChange} 
        />
        
        <CibilScore score={financialData.cibilScore} />
        
        <ExpensesCard 
          expenses={financialData.totalExpenses} 
          change={financialData.expenseChange} 
        />
        
        <SavingsCard 
          savings={financialData.totalSavings} 
          change={financialData.savingsChange} 
        />
      </SummaryCards>
      
      {/* Charts Section */}
      <ChartsSection>
        <IncomeExpensesChart data={incomeExpensesData} />
        <ExpenseBreakdownChart data={expenseBreakdownData} />
      </ChartsSection>
      
      {/* Recommendations and News Section */}
      <RecommendationsNewsSection>
        <Recommendations recommendations={recommendations} />
        <FinancialNews news={financialNews} />
      </RecommendationsNewsSection>
      
      {/* Recent Transactions */}
      <TransactionsSection>
        <RecentTransactions transactions={recentTransactions} />
      </TransactionsSection>
    </>
  );
};

export default Dashboard;
