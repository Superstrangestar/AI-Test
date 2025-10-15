import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = () => {
  return (
    <header className="text-center mb-6 md:mb-12">
      <div className="flex items-center justify-center mb-3">
        <FontAwesomeIcon
          icon={faRobot}
          className="text-blue-600 text-2xl md:text-3xl mr-3"
        />
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          AI Assistant Module
        </h1>
      </div>
      <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
        Simulate AI task processing with persistent logging
      </p>
    </header>
  );
};
