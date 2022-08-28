import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import './FixedButton.css';

const FixedButton = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      <FontAwesomeIcon icon={faAdd} className='add-task-button__icon' /> new
      task
    </button>
  );
};
export default FixedButton;
