import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faSync,
  faExclamationCircle,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';

interface StatusIconProps {
  status: 'completed' | 'processing' | 'failed';
}

export const StatusIcon = ({ status }: StatusIconProps) => {
  const getIcon = () => {
    switch (status) {
      case 'completed':
        return (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-green-500 text-xs"
          />
        );
      case 'processing':
        return (
          <FontAwesomeIcon
            icon={faSync}
            className="text-blue-500 text-xs animate-spin"
          />
        );
      case 'failed':
        return (
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="text-red-500 text-xs"
          />
        );
      default:
        return (
          <FontAwesomeIcon icon={faFileAlt} className="text-gray-500 text-xs" />
        );
    }
  };

  return getIcon();
};
