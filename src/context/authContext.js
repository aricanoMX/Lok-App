import { useState, createContext, useMemo, useCallback } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem('Persistant_Auth'),
  );

  const login = useCallback(() => {
    window.localStorage.setItem('Persistant_Auth', true);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem('Persistant_Auth', true);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
    }),
    [login, logout, isAuthenticated],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
