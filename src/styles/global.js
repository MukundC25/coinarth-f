import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Background colors */
    --primary-bg: #f8fafc;
    --sidebar-bg: #070B14;
    --card-bg: #ffffff;
    --input-bg: #ffffff;
    --hover-bg: #f9fafb;

    /* Text colors */
    --text-color: #333333;
    --text-light: #6b7280;
    --text-muted: #9ca3af;

    /* Border colors */
    --border-color: rgba(0, 0, 0, 0.05);
    --input-border: #e5e7eb;
    --input-focus-border: #3b82f6;

    /* Brand colors */
    --blue: #3b82f6;
    --blue-light: #eff6ff;
    --blue-dark: #2563eb;
    --green: #10b981;
    --green-light: #ecfdf5;
    --red: #ef4444;
    --red-light: #fef2f2;
    --purple: #8b5cf6;
    --purple-light: #f5f3ff;
    --yellow: #f59e0b;
    --yellow-light: #fffbeb;

    /* Social media colors */
    --google-color: #DB4437;
    --facebook-color: #4267B2;
    --apple-color: #000000;

    /* Effects */
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-input: 0 0 0 3px rgba(59, 130, 246, 0.3);
    --transition: all 0.3s ease;

    /* Form elements */
    --input-radius: 0.5rem;
    --button-radius: 0.5rem;
    --card-radius: 1rem;
  }

  .dark-mode {
    /* Background colors */
    --primary-bg: #121212;
    --sidebar-bg: #000000;
    --card-bg: #1e1e1e;
    --input-bg: #2d2d2d;
    --hover-bg: #2a2a2a;

    /* Text colors */
    --text-color: #ffffff;
    --text-light: #a0aec0;
    --text-muted: #6b7280;

    /* Border colors */
    --border-color: rgba(255, 255, 255, 0.05);
    --input-border: #3d3d3d;
    --input-focus-border: #3b82f6;
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
    font-size: 1rem;
    color: var(--text-color);
  }

  input, select, textarea {
    font-family: inherit;
    font-size: 1rem;
    color: var(--text-color);
    background-color: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: var(--input-radius);
    padding: 0.75rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--input-focus-border);
    box-shadow: var(--shadow-input);
  }

  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyle;
