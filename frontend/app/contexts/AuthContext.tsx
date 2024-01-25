'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  adminName: string;
  login: (adminName: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  adminName: '',
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [adminName, setAdminName] = useState<string>('');

  const login = (name: string) => {
    setIsLoggedIn(true);
    setAdminName(name);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setAdminName('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, adminName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext) as AuthContextType;
