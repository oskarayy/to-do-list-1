import classes from './Grabbox.module.css';

const Grabbox = () => {
  return (
    <div className={classes['task__grabbox']}>
      <span className={classes['task__grabbox__dot1']}></span>
      <span className={classes['task__grabbox__dot2']}></span>
      <span className={classes['task__grabbox__dot3']}></span>
    </div>
  );
};
export default Grabbox;
