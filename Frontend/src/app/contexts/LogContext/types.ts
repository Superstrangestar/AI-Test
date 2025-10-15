export interface LogEntry {
  id: string;
  task: string;
  status: 'completed' | 'processing' | 'failed';
  result: string;
  timestamp: string;
}

export interface LogContextType {
  logs: LogEntry[];
  isLoading: boolean;
  error: string | null;
  refreshLogs: () => Promise<void>;
  addLog: (entry: LogEntry) => void;
  clearLogs: () => Promise<void>;
  processTask: (task: string) => Promise<LogEntry>;
}