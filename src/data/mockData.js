// Mock data for the fintech dashboard

export const userData = {
  currentBalance: 45203,
  currentMonthSalary: 40000,
  lastMonthSavings: 5203,
  cibilScore: 775,
  nextUpdateDays: 32,
  standings: {
    income: 40000,
    expenses: 28000,
    investments: 5000,
    savings: 7000,
    period: "Last 28 days"
  }
};

export const spendingStats = {
  total: 398000,
  period: "2024-2025",
  monthlyData: [
    { month: "May", amount: 20000 },
    { month: "Jun", amount: 10000 },
    { month: "Jul", amount: 35000 },
    { month: "Aug", amount: 30000 },
    { month: "Sep", amount: 25000 },
    { month: "Oct", amount: 15000 },
    { month: "Nov", amount: 18000 },
    { month: "Dec", amount: 25000 },
    { month: "Jan", amount: 30000 }
  ],
  highlightPoint: {
    month: "Dec",
    amount: 23000,
    label: "max point"
  }
};

export const recommendations = {
  taxTips: [
    {
      id: 1,
      title: "Tax saving investment options",
      description: "Explore tax-saving investment options under Section 80C."
    },
    {
      id: 2,
      title: "Home loan tax benefits",
      description: "Claim tax benefits on your home loan interest and principal."
    }
  ],
  investmentOpportunities: [
    {
      id: 1,
      title: "Mutual Funds SIP",
      description: "Start a SIP in equity mutual funds for long-term wealth creation."
    },
    {
      id: 2,
      title: "Fixed Deposits",
      description: "Invest in FDs for stable returns with minimal risk."
    }
  ]
};

export const news = [
  {
    id: 1,
    title: "RBI keeps repo rate unchanged at 6.5%",
    source: "Economic Times",
    date: "2023-02-08"
  },
  {
    id: 2,
    title: "Budget 2023: New income tax regime becomes default",
    source: "Financial Express",
    date: "2023-02-01"
  }
];

export const reminders = [
  {
    id: 1,
    type: "Mobile Recharge",
    provider: "Jio",
    amount: 289,
    date: "Fri, Feb 07 2023",
    time: "10:45:20 PM",
    status: "Upcoming"
  },
  {
    id: 2,
    type: "Electricity Bill",
    provider: "MSEDCL",
    amount: 1500,
    date: "Sun, Feb 12 2023",
    time: "01:15:16 PM",
    status: "Due Date"
  },
  {
    id: 3,
    type: "Loan Bill",
    provider: "Flipkart EMI",
    amount: 3246,
    date: "Wed, Feb 08 2023",
    time: "01:15:16 PM",
    status: "Repayment"
  }
];
