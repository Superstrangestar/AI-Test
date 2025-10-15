import { type LogEntry } from '@contexts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';

interface ResponseDisplayProps {
  response: LogEntry | null;
}

export const ResponseDisplay = ({ response }: ResponseDisplayProps) => {
  if (!response) return null;

  return (
    <div className="border-t pt-4 md:pt-6">
      <h3 className="text-lg font-medium text-gray-800 mb-3 md:mb-4 flex items-center">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
        AI Response
      </h3>
      <div className="bg-gray-50 rounded-lg p-3 md:p-4 border">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-sm mb-3 md:mb-4">
          <div>
            <span className="font-medium text-gray-600">Task:</span>
            <p className="text-gray-800 mt-1">{response.task}</p>
          </div>
          <div>
            <span className="font-medium text-gray-600">Status:</span>
            <span
              className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                response.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {response.status}
            </span>
          </div>
        </div>
        <div>
          <span className="font-medium text-gray-600">Result:</span>
          <p className="text-gray-800 mt-1 bg-white p-2 md:p-3 rounded border text-sm">
            {response.result}
          </p>
        </div>
        <div className="mt-2 md:mt-3 text-xs text-gray-500 flex items-center">
          <FontAwesomeIcon icon={faClock} className="mr-1 text-xs" />
          {new Date(response.timestamp).toLocaleString()}
        </div>
      </div>
    </div>
  );
};
