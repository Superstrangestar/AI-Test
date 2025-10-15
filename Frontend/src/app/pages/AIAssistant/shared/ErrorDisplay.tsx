import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface ErrorDisplayProps {
  error: string | null;
}

export const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  if (!error) return null;

  return (
    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start">
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        className="text-red-500 mr-2 mt-0.5 flex-shrink-0"
      />
      <p className="text-red-700 text-sm">{error}</p>
    </div>
  );
};
