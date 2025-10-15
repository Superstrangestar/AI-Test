import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

interface LoadingIndicatorProps {
  isLoading: boolean;
}

export const LoadingIndicator = ({ isLoading }: LoadingIndicatorProps) => {
  if (!isLoading) return null;

  return (
    <div className="flex justify-center py-4">
      <FontAwesomeIcon
        icon={faSync}
        className="animate-spin text-blue-600 text-lg"
      />
    </div>
  );
};
