import './NoTasks.css';

const NoTasks = ({ type }) => {
  return (
    <div className='task-list__empty'>
      <h3>{type === '' ? 'Your To-Do-List is empty.' : `No ${type} tasks`}</h3>
      <p>You can add new task using the button on the bottom of your screen!</p>
      <p>Enjoy!</p>
    </div>
  );
};
export default NoTasks;
