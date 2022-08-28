import { useEffect, useState } from 'react';
import { getRemainingTime } from '../../utils/getRemainingTime';
import classes from './TaskTime.module.css';

const TaskTime = ({ time }) => {
  const [timerId, setTimerId] = useState(0);
  const [days, hours, minutes] = getRemainingTime(time);
  const [timeToDisplay, setTimeToDisplay] = useState({
    days,
    hours,
    minutes
  });

  useEffect(() => {
    const index = setTimeout(() => {
      const newRemainingTime = getRemainingTime(time);
      if (newRemainingTime[2] !== timeToDisplay.minutes) {
        setTimeToDisplay({
          days: newRemainingTime[0],
          hours: newRemainingTime[1],
          minutes: newRemainingTime[2]
        });
      }
      setTimerId(index);
    }, 1000);

    return () => clearTimeout(index);
  }, [getRemainingTime, timerId, timeToDisplay]);

  return (
    <div className={classes['task__main__time']}>
      {days > 0 && <span>{timeToDisplay.days} days</span>}
      {hours > 0 && <span>{timeToDisplay.hours} hours</span>}
      {minutes > 0 && <span>{timeToDisplay.minutes} minutes</span>}
      {!time && 'unknown'}
    </div>
  );
};

export default TaskTime;
