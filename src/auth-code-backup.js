// This file contains all the code we've added for authentication

// AuthContext.jsx
/*
import { createContext, useState, useContext, useEffect } from 'react';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component that wraps the app and makes auth object available to any child component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Sign up function
  const signup = (email, password, name) => {
    // In a real app, this would be an API call to create a user
    const user = { email, name, id: Date.now().toString() };
    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user);
    return Promise.resolve(user);
  };

  // Login function
  const login = (email, password) => {
    // In a real app, this would be an API call to authenticate
    const user = { email, name: email.split('@')[0], id: Date.now().toString() };
    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user);
    return Promise.resolve(user);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
    return Promise.resolve();
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
*/

// ProtectedRoute.jsx
/*
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export default ProtectedRoute;
*/

// SignUp.jsx
/*
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--primary-bg);
  padding: 2rem;
`;

const FormCard = styled.div`
  background-color: var(--card-bg);
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const LogoCoin = styled.span`
  color: #f59e0b;
`;

const LogoA = styled.span`
  color: var(--text-color);
`;

const LogoRth = styled.span`
  color: #f59e0b;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--blue);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const Button = styled.button`
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2563eb;
  }
  
  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: var(--red);
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const LinkText = styled.p`
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1.5rem;
  
  a {
    color: var(--blue);
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }
    
    if (password.length < 6) {
      return setError('Password must be at least 6 characters');
    }
    
    try {
      setError('');
      setLoading(true);
      await signup(email, password, name);
      navigate('/');
    } catch (err) {
      setError('Failed to create an account');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Container>
      <FormCard>
        <Logo>
          <LogoCoin>COIN</LogoCoin>
          <LogoA>A</LogoA>
          <LogoRth>RTH</LogoRth>
        </Logo>
        <Title>Create your account</Title>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input 
              type="password" 
              id="confirmPassword" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </FormGroup>
          
          <Button type="submit" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </Form>
        
        <LinkText>
          Already have an account? <Link to="/login">Log In</Link>
        </LinkText>
      </FormCard>
    </Container>
  );
};

export default SignUp;
*/

// Login.jsx
/*
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--primary-bg);
  padding: 2rem;
`;

const FormCard = styled.div`
  background-color: var(--card-bg);
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const LogoCoin = styled.span`
  color: #f59e0b;
`;

const LogoA = styled.span`
  color: var(--text-color);
`;

const LogoRth = styled.span`
  color: #f59e0b;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--blue);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const Button = styled.button`
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2563eb;
  }
  
  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: var(--red);
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const LinkText = styled.p`
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1.5rem;
  
  a {
    color: var(--blue);
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ForgotPassword = styled.div`
  text-align: right;
  
  a {
    font-size: 0.875rem;
    color: var(--blue);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to log in');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Container>
      <FormCard>
        <Logo>
          <LogoCoin>COIN</LogoCoin>
          <LogoA>A</LogoA>
          <LogoRth>RTH</LogoRth>
        </Logo>
        <Title>Log in to your account</Title>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <ForgotPassword>
              <Link to="/forgot-password">Forgot password?</Link>
            </ForgotPassword>
          </FormGroup>
          
          <Button type="submit" disabled={loading}>
            {loading ? 'Logging In...' : 'Log In'}
          </Button>
        </Form>
        
        <LinkText>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </LinkText>
      </FormCard>
    </Container>
  );
};

export default Login;
*/

// App.jsx
/*
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './components/layout/DashboardLayout';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
*/

// Sidebar.jsx (logout functionality)
/*
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styled from 'styled-components';

// ... rest of the component ...

const Sidebar = () => {
  const [activePath, setActivePath] = useState('/');
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setActivePath(path);
  };
  
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  // ... rest of the component ...

  <SidebarLink 
    to="#" 
    onClick={handleLogout}
  >
    <FaSignOutAlt />
    <span>Log out</span>
  </SidebarLink>

  // ... rest of the component ...
};

export default Sidebar;
*/

// Header.jsx (show user info)
/*
import styled from 'styled-components';
import { FaBell, FaEnvelope, FaCalendar, FaMoon, FaSun } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

// ... rest of the component ...

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const { currentUser } = useAuth();
  
  // ... rest of the component ...
  
  <UserName>{currentUser?.name || 'User'}</UserName>
  <UserStatus>{currentUser?.email || 'user@example.com'}</UserStatus>
  
  // ... rest of the component ...
};

export default Header;
*/
