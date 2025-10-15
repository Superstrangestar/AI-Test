import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

export const Header = () => (
  <div className="flex items-center mb-4 md:mb-6">
    <FontAwesomeIcon
      icon={faRobot}
      className="text-blue-600 text-xl md:text-2xl mr-3"
    />
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
      Task Processor
    </h2>
  </div>
);
