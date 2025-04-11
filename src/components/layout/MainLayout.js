import React from 'react';
import SimpleSidebar from './SimpleSidebar';
import Header from './Header';

/**
 * MainLayout - The primary layout component for the application
 *
 * This component provides the overall structure for all pages in the application,
 * including the sidebar, header, and main content area.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render in the main content area
 * @returns {React.ReactElement} The rendered layout
 */
const MainLayout = ({ children }) => {
  return (
    // Container for the entire layout with flex display and minimum height
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar component - fixed position on the left side */}
      <SimpleSidebar />

      {/* Main content area - takes remaining width with left margin to accommodate sidebar */}
      <div className="flex-1 ml-[250px]">
        {/* Header component - appears at the top of the main content area */}
        <Header />

        {/* Main content container with padding and maximum width for better readability */}
        <main className="p-6 max-w-[1200px] mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
