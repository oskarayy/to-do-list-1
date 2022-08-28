import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import classes from './TaskState.module.css';

const TaskState = ({ isFinished }) => {
  return (
    <div
      className={
        classes[isFinished ? 'task__checkbox--finished' : 'task__checkbox']
      }>
      {isFinished && (
        <FontAwesomeIcon
          className={classes['task__checkbox__icon']}
          icon={faCheck}
        />
      )}
    </div>
  );
};
export default TaskState;
