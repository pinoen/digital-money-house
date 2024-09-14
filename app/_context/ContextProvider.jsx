'use client';

import { LoginContextProvider } from './LoginContext';

export const ContextProvider = ({ children }) => {
  return <LoginContextProvider>{children}</LoginContextProvider>;
};
