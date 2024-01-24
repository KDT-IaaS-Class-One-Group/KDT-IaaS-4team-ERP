// AppContext.js (수정)
'use client'
import React, { createContext, useContext, useState } from 'react';

// 컨텍스트의 값의 타입 정의
// type AppContextType = {
//   isLoggedIn: boolean,
//   login : any,
//   logout : any
// };

const AuthContext = createContext(false);

const AuthProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  }

  const logout =() => {
    setIsLoggedIn(false)
  }


  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// const useAuth = useContext(AuthContext);

export { AuthProvider, AuthContext}