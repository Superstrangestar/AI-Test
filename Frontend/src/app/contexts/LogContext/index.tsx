import React, { createContext, useContext, useEffect } from 'react';
import { useLogState } from './useLogState';
import type { LogContextType } from './types';

const LogContext = createContext<LogContextType | undefined>(undefined);

export const LogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const logState = useLogState();

  // Load logs on component mount
  useEffect(() => {
    logState.refreshLogs();
  }, [logState.refreshLogs]);

  return <LogContext.Provider value={logState}>{children}</LogContext.Provider>;
};

export const useLog = (): LogContextType => {
  const context = useContext(LogContext);
  if (context === undefined) {
    throw new Error('useLog must be used within a LogProvider');
  }
  return context;
};

export type { LogEntry, LogContextType } from './types';
