import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Auth Context
const AuthContext = createContext(null);

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);

  // Persist login state by checking localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUserName = localStorage.getItem('userName');

    if (token) {
      setIsAuthenticated(true);
      if (storedUserName) setUserName(storedUserName);
    } else {
      setIsAuthenticated(false);
      setUserName(null);
    }
    setLoading(false); // Loading done
  }, []);

  // Login function
  const login = (token, name) => {
    if (token) {
      localStorage.setItem('authToken', token);
      if (name) localStorage.setItem('userName', name);
      setIsAuthenticated(true);
      setUserName(name || null);
    } else {
      console.error('Invalid token');
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    setUserName(null);
  };

  // Provide context values
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoggedIn: isAuthenticated, // Alias for clarity
        userName,
        login,
        logout,
        loading, // Expose loading state
      }}
    >
      {!loading && children} {/* Render children only after loading */}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
