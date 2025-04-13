// Financial Data
export const financialData = {
  currentBalance: 45250.00,
  balanceChange: 2.5,
  cibilScore: 780,
  totalExpenses: 12350.00,
  expenseChange: 4.3,
  totalSavings: 32900.00,
  savingsChange: 1.8,
};

// Income vs Expenses Data
export const incomeExpensesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Income',
      data: [42000, 45000, 40000, 50000, 45000, 40000],
      backgroundColor: '#3b82f6',
    },
    {
      label: 'Expenses',
      data: [30000, 25000, 28000, 32000, 30000, 28000],
      backgroundColor: '#ef4444',
    }
  ]
};

// Expense Breakdown Data
export const expenseBreakdownData = {
  labels: ['Housing', 'Food', 'Transportation', 'Utilities', 'Entertainment', 'Others'],
  datasets: [{
    data: [35, 25, 15, 10, 8, 7],
    backgroundColor: [
      '#3b82f6', // blue
      '#ef4444', // red
      '#f59e0b', // yellow
      '#10b981', // green
      '#8b5cf6', // purple
      '#6b7280'  // gray
    ],
  }]
};

// Recommendations
export const recommendations = [
  {
    id: 1,
    title: 'Increase Emergency Fund',
    description: 'Consider adding ₹5,000 more to your emergency fund to reach the 6-month target.',
    icon: 'piggy-bank',
    type: 'green'
  },
  {
    id: 2,
    title: 'Investment Opportunity',
    description: 'Based on your profile, index funds could be a good addition to your portfolio.',
    icon: 'chart-line',
    type: 'blue'
  },
  {
    id: 3,
    title: 'Tax Saving',
    description: 'You can save up to ₹15,000 in taxes by investing in tax-saving instruments.',
    icon: 'file-invoice',
    type: 'yellow'
  }
];

// Financial News
export const financialNews = [
  {
    id: 1,
    title: 'Sensex Crosses 66,000 Mark for the First Time',
    source: 'Business Standard',
    time: '5 hours ago',
    category: 'Markets',
    categoryClass: 'markets',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    title: 'India\'s GDP Growth Projected at 6.8% for FY 2023-24',
    source: 'Mint',
    time: '1 day ago',
    category: 'Economy',
    categoryClass: 'economy',
    image: 'https://images.unsplash.com/photo-1551260627-fd1b6daa6224?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  }
];

// Recent Transactions
export const recentTransactions = [
  {
    id: 1,
    date: '10 Apr 2023',
    description: 'Grocery Shopping',
    category: 'Food',
    categoryClass: 'expense',
    amount: -2500.00,
  },
  {
    id: 2,
    date: '8 Apr 2023',
    description: 'Salary Credit',
    category: 'Income',
    categoryClass: 'income',
    amount: 45000.00,
  },
  {
    id: 3,
    date: '5 Apr 2023',
    description: 'Electricity Bill',
    category: 'Utilities',
    categoryClass: 'expense',
    amount: -1200.00,
  },
  {
    id: 4,
    date: '3 Apr 2023',
    description: 'Investment in Mutual Fund',
    category: 'Investment',
    categoryClass: 'investment',
    amount: -5000.00,
  }
];
