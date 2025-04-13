# COINARTH Financial Dashboard Preview

## Dashboard Layout

The React implementation of the COINARTH Financial Dashboard would look like this:

```
+------------------------------------------------------------------------------------------------------+
|                                                                                                      |
|  +----------------+  +-------------------------------------------------------------------------+     |
|  |                |  |  [Search Bar]                 [Bell] [Mail] [Calendar] [Theme] [Profile] |     |
|  |    COINARTH    |  +-------------------------------------------------------------------------+     |
|  |                |                                                                                  |
|  |  MANAGE        |  Financial Dashboard                                                            |
|  |  [Overview]    |  Welcome back, Yash! Here's your financial summary.                             |
|  |  Assets        |                                                                                  |
|  |  Expenses      |  +------------+  +------------+  +------------+  +------------+                 |
|  |  Tax           |  | Total      |  | CIBIL      |  | Total      |  | Total      |                 |
|  |  Investment    |  | Balance    |  | Score      |  | Expenses   |  | Savings    |                 |
|  |  Govt. Schemes |  |            |  |            |  |            |  |            |                 |
|  |  Legal         |  | ₹45,250.00 |  | 780/900    |  | ₹12,350.00 |  | ₹32,900.00 |                 |
|  |                |  | +2.5%      |  | [Progress] |  | +4.3%      |  | +1.8%      |                 |
|  |                |  +------------+  +------------+  +------------+  +------------+                 |
|  |                |                                                                                  |
|  |                |  +---------------------------------------+  +------------------------+           |
|  |                |  | Income vs Expenses                    |  | Expense Breakdown     |           |
|  |                |  |                                       |  |                       |           |
|  |                |  | [Bar Chart showing income/expenses]   |  | [Doughnut Chart]      |           |
|  |                |  |                                       |  |                       |           |
|  |                |  |                                       |  |                       |           |
|  |                |  +---------------------------------------+  +------------------------+           |
|  |                |                                                                                  |
|  |  Help & Support|  +------------------------+  +------------------------+                         |
|  |  Settings      |  | Financial Recommendations |  | Financial News        |                         |
|  |  Profile       |  |                        |  |                        |                         |
|  |  Log out       |  | [Recommendation cards] |  | [News items with      |                         |
|  |                |  |                        |  |  images and metadata]  |                         |
|  +----------------+  +------------------------+  +------------------------+                         |
|                                                                                                      |
|                      +------------------------------------------------------------------+           |
|                      | Recent Transactions                                               |           |
|                      |                                                                   |           |
|                      | [Table with Date, Description, Category, Amount columns]          |           |
|                      |                                                                   |           |
|                      +------------------------------------------------------------------+           |
|                                                                                                      |
+------------------------------------------------------------------------------------------------------+
```

## Component Breakdown

1. **Sidebar**: Left navigation panel with the COINARTH logo and menu items
2. **Header**: Top bar with search, notifications, and user profile
3. **Dashboard Content**:
   - Financial summary cards (Balance, CIBIL Score, Expenses, Savings)
   - Charts section (Income vs Expenses bar chart, Expense Breakdown doughnut chart)
   - Recommendations and News section
   - Recent Transactions table

## Styling Features

- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Adapts to different screen sizes
- **Interactive Elements**: Hover effects, animations, and transitions
- **Consistent Color Scheme**: Blue, green, red, and purple accent colors

## Interactive Features

- **Navigation**: Click sidebar items to navigate between sections
- **Dark Mode Toggle**: Switch between light and dark themes
- **Animated Charts**: Visual representation of financial data
- **Hover Effects**: Cards and interactive elements have hover states
