import LogItem from './LogItem';
import EmptyState from './EmptyState';
import { type LogEntry } from '@contexts';

interface LogsListProps {
  logs: LogEntry[];
}

export const LogsList = ({ logs }: LogsListProps) => {
  if (logs.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-3 max-h-80 md:max-h-96 overflow-y-auto">
      {logs.map((log) => (
        <LogItem key={log.id} log={log} />
      ))}
    </div>
  );
};
