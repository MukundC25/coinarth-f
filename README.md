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
- **Vite**: For fast development and building of the application

## Running the Project

### Option 1: Running with Docker (Recommended)

This project is configured to run in a Docker container, which isolates it from other projects and ensures consistent behavior across different environments.

#### Prerequisites

- Docker installed on your machine
- Docker Compose installed on your machine

#### Starting the Application with Docker

You can start the application in Docker using one of the following methods:

##### Method 1: Using npm scripts

```bash
npm run docker:start
```

##### Method 2: Using the shell script directly

```bash
./docker-start.sh
```

##### Method 3: Using Docker Compose directly

```bash
docker-compose up -d
```

#### Accessing the Application

Once the Docker container is running, you can access the application at:

```
http://localhost:5173/#/login
```

#### Stopping the Application

To stop the application, you can use one of the following methods:

##### Method 1: Using npm scripts

```bash
npm run docker:stop
```

##### Method 2: Using the shell script directly

```bash
./docker-stop.sh
```

##### Method 3: Using Docker Compose directly

```bash
docker-compose down
```

#### Viewing Logs

To view the logs of the running container:

```bash
docker-compose logs -f
```

### Option 2: Running without Docker

If you prefer to run the application without Docker:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```
