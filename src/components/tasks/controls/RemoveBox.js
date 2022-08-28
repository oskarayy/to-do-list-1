import { useDispatch } from 'react-redux';
import { removeTask } from '../../../store/redux/tasksSlice';
import classes from './RemoveBox.module.css';

const RemoveBox = ({ id }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeTask({ id }));
  };

  return (
    <div className={classes['task__removebox']} onClick={removeItemHandler}>
      <span className={classes['task__removebox__slash1']}></span>
      <span className={classes['task__removebox__slash2']}></span>
    </div>
  );
};
export default RemoveBox;
