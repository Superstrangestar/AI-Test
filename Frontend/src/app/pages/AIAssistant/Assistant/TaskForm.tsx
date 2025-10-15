import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faPlay,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

interface TaskFormProps {
  task: string;
  setTask: (task: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export const TaskForm = ({
  task,
  setTask,
  onSubmit,
  isLoading,
}: TaskFormProps) => (
  <form onSubmit={onSubmit} className="mb-4 md:mb-6">
    <div className="mb-4">
      <label
        htmlFor="task"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Enter your task
      </label>
      <div className="relative">
        <input
          type="text"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="e.g., analyze leads, summarize calls, update client report"
          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          disabled={isLoading}
        />
        <FontAwesomeIcon
          icon={faLightbulb}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"
        />
      </div>
    </div>

    <button
      type="submit"
      disabled={isLoading || !task.trim()}
      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
    >
      {isLoading ? (
        <>
          <FontAwesomeIcon
            icon={faSpinner}
            className="animate-spin mr-2 text-sm"
          />
          <span className="text-sm md:text-base">Processing...</span>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faPlay} className="mr-2 text-sm" />
          <span className="text-sm md:text-base">Process Task</span>
        </>
      )}
    </button>
  </form>
);
