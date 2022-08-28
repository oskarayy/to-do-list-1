import classes from './Grabbox.module.css';

const Grabbox = () => {
  return (
    <div className={classes['task__grabbox']}>
      <span className={classes['task__grabbox__bar1']}></span>
      <span className={classes['task__grabbox__bar2']}></span>
      <span className={classes['task__grabbox__bar3']}></span>
    </div>
  );
};
export default Grabbox;
