import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './components/layout/DashboardLayout';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          } />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
