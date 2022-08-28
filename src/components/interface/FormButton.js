import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faTrash } from '@fortawesome/free-solid-svg-icons';
import './FormButton.css';

const FormButton = ({ add, onClick }) => {
  return (
    <button
      type={add ? 'submit' : 'button'}
      onClick={onClick ? onClick : () => {}}
      className='new-task__form__btn'>
      <FontAwesomeIcon
        icon={add ? faAdd : faTrash}
        className='add-task-button__icon'
      />
    </button>
  );
};
export default FormButton;
