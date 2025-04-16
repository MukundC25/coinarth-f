// Mock API service to simulate backend authentication

// Simulated database of users
let users = JSON.parse(localStorage.getItem('users') || '[]');

// Save users to localStorage
const saveUsers = () => {
  localStorage.setItem('users', JSON.stringify(users));
};

// Generate a JWT token (this is a simplified version for demonstration)
const generateToken = (user) => {
  // In a real app, you would use a library like jsonwebtoken
  // and include proper signing with a secret key
  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
    exp: Date.now() + 15 * 60 * 1000, // 15 minutes expiration
  };
  
  return btoa(JSON.stringify(payload)); // Base64 encode the payload
};

// Generate a refresh token
const generateRefreshToken = (user) => {
  const payload = {
    id: user.id,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days expiration
  };
  
  return btoa(JSON.stringify(payload)); // Base64 encode the payload
};

// Verify a token
const verifyToken = (token) => {
  try {
    const payload = JSON.parse(atob(token));
    
    // Check if token is expired
    if (payload.exp < Date.now()) {
      return { valid: false, expired: true };
    }
    
    return { valid: true, payload };
  } catch (error) {
    return { valid: false, expired: false };
  }
};

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// API endpoints
export const api = {
  // Register a new user
  register: async (userData) => {
    await delay(800); // Simulate network delay
    
    // Check if user already exists
    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    
    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email: userData.email,
      name: userData.name,
      password: userData.password, // In a real app, this would be hashed
      createdAt: new Date().toISOString(),
    };
    
    users.push(newUser);
    saveUsers();
    
    // Generate tokens
    const accessToken = generateToken(newUser);
    const refreshToken = generateRefreshToken(newUser);
    
    // Store refresh token (in a real app, this would be in a secure HTTP-only cookie)
    localStorage.setItem('refreshToken', refreshToken);
    
    // Return user data and tokens
    return {
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      },
      accessToken,
      refreshToken,
    };
  },
  
  // Login a user
  login: async (credentials) => {
    await delay(800); // Simulate network delay
    
    // Find user
    const user = users.find(user => user.email === credentials.email);
    if (!user || user.password !== credentials.password) {
      throw new Error('Invalid email or password');
    }
    
    // Generate tokens
    const accessToken = generateToken(user);
    const refreshToken = generateRefreshToken(user);
    
    // Store refresh token (in a real app, this would be in a secure HTTP-only cookie)
    localStorage.setItem('refreshToken', refreshToken);
    
    // Return user data and tokens
    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      accessToken,
      refreshToken,
    };
  },
  
  // Refresh access token
  refreshToken: async () => {
    await delay(300); // Simulate network delay
    
    // Get refresh token
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('No refresh token found');
    }
    
    // Verify refresh token
    const { valid, expired, payload } = verifyToken(refreshToken);
    if (!valid) {
      localStorage.removeItem('refreshToken');
      throw new Error('Invalid refresh token');
    }
    
    // Find user
    const user = users.find(user => user.id === payload.id);
    if (!user) {
      localStorage.removeItem('refreshToken');
      throw new Error('User not found');
    }
    
    // Generate new access token
    const accessToken = generateToken(user);
    
    // Return new access token
    return {
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  },
  
  // Logout a user
  logout: async () => {
    await delay(300); // Simulate network delay
    
    // Remove refresh token
    localStorage.removeItem('refreshToken');
    
    return { success: true };
  },
  
  // Get current user
  getCurrentUser: async (accessToken) => {
    await delay(300); // Simulate network delay
    
    // Verify access token
    const { valid, expired, payload } = verifyToken(accessToken);
    if (!valid) {
      if (expired) {
        throw new Error('Token expired');
      }
      throw new Error('Invalid token');
    }
    
    // Find user
    const user = users.find(user => user.id === payload.id);
    if (!user) {
      throw new Error('User not found');
    }
    
    // Return user data
    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  },
  
  // Social login (mock)
  socialLogin: async (provider) => {
    await delay(800); // Simulate network delay
    
    // Create a mock user based on the provider
    const mockUser = {
      id: `${provider}_${Date.now().toString()}`,
      email: `user_${Date.now()}@${provider}.com`,
      name: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
    };
    
    // Generate tokens
    const accessToken = generateToken(mockUser);
    const refreshToken = generateRefreshToken(mockUser);
    
    // Store refresh token
    localStorage.setItem('refreshToken', refreshToken);
    
    // Return user data and tokens
    return {
      user: mockUser,
      accessToken,
      refreshToken,
    };
  },
};

// Initialize with some test users if none exist
if (users.length === 0) {
  users = [
    {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      password: 'password123',
      createdAt: new Date().toISOString(),
    },
  ];
  saveUsers();
}

export default api;
