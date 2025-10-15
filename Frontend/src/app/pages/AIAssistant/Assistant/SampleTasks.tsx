import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faLightbulb,
  faCheckCircle,
  faChartBar,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';

const sampleTasks = [
  { text: 'analyze leads', icon: faLightbulb },
  { text: 'summarize calls', icon: faClock },
  { text: 'update client report', icon: faCheckCircle },
  { text: 'review sales data', icon: faChartBar },
  { text: 'generate weekly metrics', icon: faFileAlt },
];

interface SampleTasksProps {
  setTask: (task: string) => void;
  isLoading: boolean;
}

export const SampleTasks = ({ setTask, isLoading }: SampleTasksProps) => (
  <div className="mb-4 md:mb-6">
    <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
      <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-400 text-xs" />
      Quick tasks:
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
      {sampleTasks.map((sampleTask, index) => (
        <button
          key={index}
          onClick={() => setTask(sampleTask.text)}
          disabled={isLoading}
          className="flex flex-col items-center p-2 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 text-xs rounded-lg transition-colors duration-150 h-16"
        >
          <FontAwesomeIcon icon={sampleTask.icon} className="mb-1 text-xs" />
          <span className="text-center leading-tight">{sampleTask.text}</span>
        </button>
      ))}
    </div>
  </div>
);
