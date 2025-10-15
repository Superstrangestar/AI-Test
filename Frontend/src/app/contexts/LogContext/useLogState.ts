import { useState, useCallback } from 'react';
import { apiService } from '../../services/apiService';
import type { LogEntry, LogContextType } from './types';

export const useLogState = (): LogContextType => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshLogs = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const logsData = await apiService.get<LogEntry[]>('/logs');
      setLogs(logsData);
    } catch (error: any) {
      setError(error.message || 'Failed to load logs');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addLog = useCallback((entry: LogEntry) => {
    setLogs((prevLogs) => [entry, ...prevLogs]);
  }, []);

  const clearLogs = useCallback(async () => {
    setIsLoading(true);
    try {
      await apiService.delete('/logs');
      setLogs([]);
      setError(null);
    } catch (error: any) {
      setError(error.message || 'Failed to clear logs');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const processTask = useCallback(
    async (task: string): Promise<LogEntry> => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await apiService.post<LogEntry>('/process', { task });

        const logEntry: LogEntry = {
          ...response,
          id: response.id || Date.now().toString(),
        };

        addLog(logEntry);
        return logEntry;
      } catch (error: any) {
        const errorMessage = error.message || 'Failed to process task';
        setError(errorMessage);
        throw new Error(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [addLog]
  );

  return {
    logs,
    isLoading,
    error,
    refreshLogs,
    addLog,
    clearLogs,
    processTask,
  };
};
