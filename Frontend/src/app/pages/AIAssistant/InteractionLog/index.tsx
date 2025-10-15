import { useLog } from '@contexts';
import { Header } from './Header';
import { ErrorDisplay, LoadingIndicator } from '../shared';
import { LogsList } from './LogList';
import { LogCount } from './LogCount';

export const InteractionLog = () => {
  const { logs, isLoading, error, refreshLogs, clearLogs } = useLog();

  const handleClearLogs = async () => {
    if (window.confirm('Are you sure you want to clear all logs?')) {
      await clearLogs();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 h-fit">
      <Header
        onRefresh={refreshLogs}
        onClear={handleClearLogs}
        isLoading={isLoading}
        hasLogs={logs.length > 0}
      />

      <ErrorDisplay error={error} />

      <LogsList logs={logs} />

      <LoadingIndicator isLoading={isLoading} />

      <LogCount count={logs.length} />
    </div>
  );
};
