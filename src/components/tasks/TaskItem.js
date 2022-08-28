import { getFormattedDate } from '../../utils/getFormattedDate';

import TaskState from './controls/TaskState';
import TaskTime from './TaskTime';
import Grabbox from './dnd/Grabbox';
import RemoveBox from './controls/RemoveBox';
import classes from './TaskItem.module.css';

const TaskItem = ({ id, title, isFinished, time }) => {
  const dateString = getFormattedDate(time);

  return (
    <div className={isFinished ? classes['task--finished'] : classes.task}>
      <TaskState id={id} isFinished={isFinished} />
      <div className={classes['task__main']}>
        <h2 className={classes['task__main__title']}>{title}</h2>
        <p className={classes['task__main__date']}>{dateString}</p>
        {time && (
          <div className={classes['task__main__time']}>
            <TaskTime time={time} />
          </div>
        )}
      </div>
      <Grabbox />
      <RemoveBox id={id} />
    </div>
  );
};
export default TaskItem;
