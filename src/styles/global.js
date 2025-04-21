import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-bg: #f8fafc;
    --sidebar-bg: #070B14;
    --card-bg: #ffffff;
    --card-bg-secondary: #f9fafb;
    --text-color: #333333;
    --text-secondary: #6b7280;
    --text-light: #6b7280;
    --border-color: rgba(0, 0, 0, 0.05);
    --blue: #3b82f6;
    --blue-light: #eff6ff;
    --green: #10b981;
    --green-light: #ecfdf5;
    --red: #ef4444;
    --red-light: #fef2f2;
    --purple: #8b5cf6;
    --purple-light: #f5f3ff;
    --yellow: #f59e0b;
    --yellow-light: #fffbeb;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --transition: all 0.3s ease;
    --error-color: #ef4444;
    --success-color: #10b981;
    --input-background: #ffffff;
  }

  .dark-mode {
    --primary-bg: #121212;
    --sidebar-bg: #000000;
    --card-bg: #1e1e1e;
    --card-bg-secondary: #2d2d2d;
    --text-color: #ffffff;
    --text-secondary: #a0aec0;
    --text-light: #a0aec0;
    --border-color: rgba(255, 255, 255, 0.05);
    --input-background: #2d2d2d;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text-color);
    background-color: var(--primary-bg);
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyle;
