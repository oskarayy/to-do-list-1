import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTasksList } from '../../redux/tasksSlice';
import { getTasksToRender } from '../../utils/getTasksToRender';

import TasksSorting from './controls/TasksSorting';
import Draggable from './dnd/Draggable';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskReducer.tasks);

  const savedRenderType = sessionStorage.getItem('savedRenderType') ?? '';
  const [tasksRenderType, setTasksRenderType] = useState(savedRenderType);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const saveRenderTypeHandler = (type) => {
    sessionStorage.setItem('savedRenderType', type);
    setTasksRenderType(type);
  };

  const sortItemsHandler = () => {
    const updatedList = [...tasks];

    const draggedItemContent = updatedList.splice(dragItem.current, 1)[0];
    updatedList.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    dispatch(updateTasksList(updatedList));
  };

  const { data: tasksToRender, lengths } = getTasksToRender(
    tasks,
    tasksRenderType
  );

  const noTaksContent = (
    <div className='task-list__empty'>
      <h3>
        {tasksRenderType === ''
          ? 'Your To-Do-List is empty.'
          : `No ${tasksRenderType} tasks`}
      </h3>
      <p>You can add new task using the button on the bottom of your screen!</p>
      <p>Enjoy!</p>
    </div>
  );

  const tasksListContent = (
    <ul className='task-list__content'>
      {tasksToRender.map((task, index) => (
        <Draggable
          key={task.id}
          onDragStart={() => (dragItem.current = index)}
          onDragEnter={() => (dragOverItem.current = index)}
          onDragEnd={sortItemsHandler}>
          <TaskItem {...task} />
        </Draggable>
      ))}
    </ul>
  );

  return (
    <section className='task-list'>
      <TasksSorting
        renderType={tasksRenderType}
        lengths={lengths}
        onClick={saveRenderTypeHandler}
      />
      {tasksToRender.length === 0 ? noTaksContent : tasksListContent}
    </section>
  );
};
export default TaskList;
