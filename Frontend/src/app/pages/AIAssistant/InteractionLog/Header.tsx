import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faSync, faTrash } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  onRefresh: () => void;
  onClear: () => void;
  isLoading: boolean;
  hasLogs: boolean;
}

export const Header = ({
  onRefresh,
  onClear,
  isLoading,
  hasLogs,
}: HeaderProps) => (
  <div className="flex justify-between items-center mb-4 md:mb-6">
    <div className="flex items-center">
      <FontAwesomeIcon
        icon={faHistory}
        className="text-purple-600 text-xl md:text-2xl mr-3"
      />
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
        Interaction Log
      </h2>
    </div>
    <div className="flex gap-2">
      <button
        onClick={onRefresh}
        disabled={isLoading}
        className="p-2 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 rounded-lg transition-colors duration-150"
        title="Refresh logs"
      >
        <FontAwesomeIcon
          icon={faSync}
          className={`text-sm ${isLoading ? 'animate-spin' : ''}`}
        />
      </button>
      <button
        onClick={onClear}
        disabled={isLoading || !hasLogs}
        className="p-2 bg-red-100 hover:bg-red-200 disabled:bg-gray-50 disabled:text-gray-400 text-red-700 rounded-lg transition-colors duration-150"
        title="Clear all logs"
      >
        <FontAwesomeIcon icon={faTrash} className="text-sm" />
      </button>
    </div>
  </div>
);
