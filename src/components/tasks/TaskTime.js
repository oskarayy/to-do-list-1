import { useEffect, useState } from 'react';
import { getRemainingTime } from '../../utils/getRemainingTime';
import classes from './TaskTime.module.css';

const TaskTime = ({ time, isFinished, title }) => {
  const [timerId, setTimerId] = useState(0);
  const [timeToDisplay, setTimeToDisplay] = useState(getRemainingTime(time));
  const [days, hours, minutes, seconds] = timeToDisplay;

  useEffect(() => {
    const currentTime = new Date().getTime();
    if (!isFinished && currentTime < time) {
      //it gives a lot of rerenders but it's very accurate
      const milisecsToHalfTime = 500 - (currentTime % 500);
      const index = setTimeout(() => {
        const newRemainingTime = getRemainingTime(time);
        if (
          (newRemainingTime[3] !== seconds && hours < 1 && days < 1) ||
          (newRemainingTime[2] !== minutes && days < 1) ||
          newRemainingTime[1] !== hours
        ) {
          setTimeToDisplay(newRemainingTime);
        }
        setTimerId(index);
      }, milisecsToHalfTime);
    }
    return () => clearTimeout(timerId);
  }, [timerId, time, isFinished, days, hours, minutes, seconds]);

  const showMinutes =
    (days > 0 && hours < 1) ||
    (days < 1 && hours > 0) ||
    (days < 1 && hours < 1);
  const showSeconds = hours < 1 && days < 1;

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
      {minutes > 0 && showMinutes && (
        <span>
          {hours > 0 ? minutes + 1 : minutes} minute{minutes > 1 && 's'}
        </span>
      )}
      {seconds > 0 && showSeconds && (
        <span>
          {`${minutes < 1 ? 'Hurry up! ' : ''}${seconds} second${
            seconds > 1 ? 's' : ''
          }`}
        </span>
      )}
      {!days && !hours && !minutes && !seconds && <span>Time's over!</span>}
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
