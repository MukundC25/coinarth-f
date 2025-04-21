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
