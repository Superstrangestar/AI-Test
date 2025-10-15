import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { StatusIcon } from './StatusIcon';
import { type LogEntry } from '@contexts';

interface LogItemProps {
  log: LogEntry;
}

const LogItem = ({ log }: LogItemProps) => (
  <div className="border rounded-lg p-3 hover:bg-gray-50 transition-colors duration-150">
    <div className="flex justify-between items-start mb-2">
      <div className="flex items-start flex-1 min-w-0">
        <StatusIcon status={log.status} />
        <span className="font-medium text-gray-800 text-sm ml-2 truncate">
          {log.task}
        </span>
      </div>
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 ${
          log.status === 'completed'
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}
      >
        {log.status}
      </span>
    </div>
    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{log.result}</p>
    <div className="text-xs text-gray-500 flex items-center">
      <FontAwesomeIcon icon={faClock} className="mr-1 text-xs" />
      {new Date(log.timestamp).toLocaleString()}
    </div>
  </div>
);

export default LogItem;
