import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskState } from '../../../redux/tasksSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import classes from './TaskState.module.css';

const TaskState = ({ isFinished, id }) => {
  const dispatch = useDispatch();
  const [taskFinished, setTaskFinished] = useState(isFinished);

  const toggleTaskFinished = () => {
    dispatch(toggleTaskState({ id }));
    setTaskFinished((prevState) => !prevState);
  };

  return (
    <div
      onClick={toggleTaskFinished}
      className={
        classes[taskFinished ? 'task__checkbox--finished' : 'task__checkbox']
      }>
      {taskFinished && (
        <FontAwesomeIcon
          className={classes['task__checkbox__icon']}
          icon={faCheck}
        />
      )}
    </div>
  );
};
export default TaskState;
