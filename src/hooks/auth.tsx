/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInProps {
  email: string;
  password: string;
}

interface User {
  id: string;
  photo: string;
  first_name: string;
}

interface AuthContextProps {
  user: User;
  signIn(credentials: SignInProps): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@JuQuestions:token');
    const user = localStorage.getItem('@JuQuestions:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('authenticate', {
      email,
      password,
    });
    const { token, user } = response.data;

    localStorage.setItem('@JuQuestions:token', token);
    localStorage.setItem('@JuQuestions:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@JuQuestions:token');
    localStorage.removeItem('@JuQuestions:user');

    setData({} as AuthState);
  }, []);

  return <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within and AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
