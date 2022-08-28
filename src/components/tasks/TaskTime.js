import { useEffect, useState } from 'react';
import { getRemainingTime } from '../../utils/getRemainingTime';
import classes from './TaskTime.module.css';

const TaskTime = ({ time, isFinished }) => {
  const [timerId, setTimerId] = useState(0);
  const [timeToDisplay, setTimeToDisplay] = useState(getRemainingTime(time));

  useEffect(() => {
    const actualTime = new Date().getTime();
    if (!isFinished && actualTime < time) {
      const index = setTimeout(() => {
        const newRemainingTime = getRemainingTime(time);
        if (newRemainingTime[3] !== timeToDisplay[3]) {
          setTimeToDisplay(newRemainingTime);
        }
        setTimerId(index);
      }, 1000);
    }
    return () => clearTimeout(timerId);
  }, [timerId, timeToDisplay, time, isFinished]);

  const [days, hours, minutes, seconds] = timeToDisplay;

  const timeContent = (
    <>
      {days > 0 && (
        <span>
          {days} day{days > 1 && 's'}
        </span>
      )}
      {hours > 0 && (
        <span>
          {hours} hour{hours > 1 && 's'}
        </span>
      )}
      {minutes > 0 && days < 1 && (
        <span>
          {minutes} minute{minutes > 1 && 's'}
        </span>
      )}
      {seconds > 0 &&
        hours < 1 &&
        days <
          1(
            <span>
              {minutes < 1 && 'Hurry up!'} {seconds} second
              {seconds > 1 && 's'}
            </span>
          )}
      {!days && !hours && !minutes && !seconds && <span>Time's gone!</span>}
    </>
  );

  return (
    <div className={classes['task__main__time']}>
      {!isFinished && timeContent}
      {isFinished && (
        <span className={classes['task__main__time__done']}>Good job!</span>
      )}
    </div>
  );
};

export default TaskTime;
