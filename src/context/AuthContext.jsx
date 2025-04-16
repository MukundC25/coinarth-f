import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import api from '../services/api';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component that wraps the app and makes auth object available to any child component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Refresh token function
  const refreshToken = useCallback(async () => {
    try {
      const response = await api.refreshToken();
      setAccessToken(response.accessToken);
      setCurrentUser(response.user);
      return response.accessToken;
    } catch (error) {
      setCurrentUser(null);
      setAccessToken(null);
      throw error;
    }
  }, []);

  // Check if user is already logged in (using refresh token)
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Try to refresh the token
        await refreshToken();
      } catch (error) {
        // If refresh fails, user is not logged in
        console.log('Not logged in or refresh token expired');
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, [refreshToken]);

  // Sign up function
  const signup = async (email, password, name) => {
    try {
      setError('');
      const response = await api.register({ email, password, name });
      setCurrentUser(response.user);
      setAccessToken(response.accessToken);
      return response.user;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      setError('');
      const response = await api.login({ email, password });
      setCurrentUser(response.user);
      setAccessToken(response.accessToken);
      return response.user;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Social login function
  const socialLogin = async (provider) => {
    try {
      setError('');
      const response = await api.socialLogin(provider);
      setCurrentUser(response.user);
      setAccessToken(response.accessToken);
      return response.user;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await api.logout();
      setCurrentUser(null);
      setAccessToken(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    currentUser,
    accessToken,
    signup,
    login,
    socialLogin,
    logout,
    refreshToken,
    loading,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
