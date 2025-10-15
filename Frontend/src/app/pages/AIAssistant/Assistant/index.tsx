import { useState } from 'react';
import { useLog, type LogEntry } from '@contexts';
import { Header } from './Header';
import { TaskForm } from './TaskForm';
import { SampleTasks } from './SampleTasks';
import { ErrorDisplay } from '../shared';
import { ResponseDisplay } from './ResponseDisplay';

export const Assistant = () => {
  const [task, setTask] = useState('');
  const [response, setResponse] = useState<LogEntry | null>(null);
  const { processTask, isLoading, error } = useLog();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      const result = await processTask(task);
      setResponse(result);
      setTask('');
    } catch (error) {
      console.error('Task processing failed:', error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 h-full">
      <Header />

      <TaskForm
        task={task}
        setTask={setTask}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />

      <SampleTasks setTask={setTask} isLoading={isLoading} />

      <ErrorDisplay error={error} />

      <ResponseDisplay response={response} />
    </div>
  );
};
