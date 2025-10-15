import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const EmptyState = () => (
  <div className="text-center py-6 md:py-8 text-gray-500">
    <FontAwesomeIcon
      icon={faList}
      className="mx-auto h-8 w-8 text-gray-400 mb-3"
    />
    <p className="text-sm md:text-base">No interactions yet</p>
    <p className="text-xs md:text-sm mt-1">Process a task to see logs here</p>
  </div>
);

export default EmptyState;
