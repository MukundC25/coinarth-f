# COINARTH Financial Dashboard - React Implementation

This project is a React implementation of the COINARTH Financial Dashboard, converted from the original HTML/CSS/JS version.

## Project Structure

```
coinarth-react/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── CibilScore.jsx
│   │   │   ├── CurrentBalance.jsx
│   │   │   ├── ExpenseBreakdownChart.jsx
│   │   │   ├── ExpensesCard.jsx
│   │   │   ├── FinancialNews.jsx
│   │   │   ├── IncomeExpensesChart.jsx
│   │   │   ├── Recommendations.jsx
│   │   │   ├── RecentTransactions.jsx
│   │   │   └── SavingsCard.jsx
│   │   ├── layout/
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Sidebar.jsx
│   │   └── ui/
│   │       └── Card.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── pages/
│   │   └── Dashboard.jsx
│   ├── styles/
│   │   └── global.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Features

- **Component-Based Architecture**: Modular components for better organization and reusability
- **Styled Components**: Modern CSS-in-JS styling solution
- **Responsive Design**: Works on all screen sizes
- **Dark Mode**: Toggle between light and dark themes
- **Interactive Charts**: Visualize financial data with Chart.js
- **Mock Data**: Simulated financial data for demonstration

## Key Components

### Layout Components

- **DashboardLayout**: Main layout wrapper with sidebar and header
- **Sidebar**: Navigation sidebar with links to different sections
- **Header**: Top header with search, notifications, and user profile

### Dashboard Components

- **CurrentBalance**: Displays the user's current balance
- **CibilScore**: Shows the user's credit score with a visual indicator
- **ExpensesCard**: Displays the user's total expenses
- **SavingsCard**: Shows the user's total savings
- **IncomeExpensesChart**: Bar chart comparing income and expenses
- **ExpenseBreakdownChart**: Doughnut chart showing expense categories
- **Recommendations**: Financial recommendations for the user
- **FinancialNews**: Latest financial news
- **RecentTransactions**: Table of recent financial transactions

## Technologies Used

- **React**: UI library for building component-based interfaces
- **React Router**: For navigation between different sections
- **Styled Components**: For component-scoped styling
- **Chart.js**: For data visualization
- **React Icons**: For icons throughout the application
- **Vite**: For fast development and building

## Running the Project

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

4. Preview the production build:
   ```
   npm run preview
   ```
