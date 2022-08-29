import { useDispatch } from 'react-redux';
import { toggleTaskState } from '../../store/redux/tasksSlice';
import { getFormattedDate } from '../../utils/getFormattedDate';

import TaskState from './controls/TaskState';
import TaskTime from './TaskTime';
import Grabbox from './controls/dnd/Grabbox';
import RemoveBox from './controls/RemoveBox';
import classes from './TaskItem.module.css';
import Draggable from './controls/dnd/Draggable';

const TaskItem = ({ id, title, isFinished, time }) => {
  const dispatch = useDispatch();
  const dateString = getFormattedDate(time);

  const toggleTaskFinished = () => {
    dispatch(toggleTaskState({ id }));
  };

  return (
    <Draggable id={id}>
      <div
        className={isFinished ? classes['task--finished'] : classes.task}
        onClick={toggleTaskFinished}>
        <TaskState id={id} isFinished={isFinished} />
        <div className={classes['task__main']}>
          <h2 className={classes['task__main__title']}>{title}</h2>
          <p className={classes['task__main__date']}>{dateString}</p>
          {time && (
            <TaskTime time={time} isFinished={isFinished} title={title} />
          )}
        </div>
        <Grabbox />
        <RemoveBox id={id} />
      </div>
    </Draggable>
  );
};
export default TaskItem;
