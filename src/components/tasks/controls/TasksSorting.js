import './TasksSorting.css';

const TasksSorting = ({ renderType, onClick, lengths }) => {
  return (
    <div className='task-list__amount'>
      <h4
        className={
          renderType === ''
            ? 'task-list__amount__item--active'
            : 'task-list__amount__item'
        }
        onClick={onClick.bind(null, '')}>
        Tasks: {lengths[0]}
      </h4>
      <h4
        className={
          renderType === 'active'
            ? 'task-list__amount__item--active'
            : 'task-list__amount__item'
        }
        onClick={onClick.bind(null, 'active')}>
        Active: {lengths[1]}
      </h4>
      <h4
        className={
          renderType === 'finished'
            ? 'task-list__amount__item--active'
            : 'task-list__amount__item'
        }
        onClick={onClick.bind(null, 'finished')}>
        Finished: {lengths[2]}
      </h4>
    </div>
  );
};
export default TasksSorting;
