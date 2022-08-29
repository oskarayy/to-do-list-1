import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTasksOrder } from '../../store/redux/tasksSlice';
import { getTasksToRender } from '../../utils/getTasksToRender';

import {
  DndContext,
  useSensor,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  closestCenter
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove
} from '@dnd-kit/sortable';

import TasksSorting from './controls/TasksSorting';
import NoTasks from '../interface/NoTasks';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskReducer.tasks);

  const savedRenderType = sessionStorage.getItem('savedRenderType') ?? '';
  const [tasksRenderType, setTasksRenderType] = useState(savedRenderType);

  const saveRenderTypeHandler = (type) => {
    sessionStorage.setItem('savedRenderType', type);
    setTasksRenderType(type);
  };

  const sortItemsHandler = ({ active, over }) => {
    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex((item) => item.id === active.id);
      const newIndex = tasks.findIndex((item) => item.id === over.id);
      const updatedList = arrayMove(tasks, oldIndex, newIndex);

      dispatch(updateTasksOrder(updatedList));
    }
  };

  const { tasksToRender, lengths } = getTasksToRender(tasks, tasksRenderType);
  const sensors = [
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 100
      }
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100
      }
    }),
    useSensor(KeyboardSensor, {
      activationConstraint: {
        delay: 100
      }
    })
  ];

  const tasksListContent = (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={sortItemsHandler}>
      <SortableContext
        items={tasks.map((task) => task.id)}
        strategy={verticalListSortingStrategy}>
        <ul className='task-list__content'>
          {tasksToRender.map((task) => (
            <TaskItem key={task.id} id={task.id} {...task} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );

  return (
    <section className='task-list'>
      <TasksSorting
        renderType={tasksRenderType}
        lengths={lengths}
        onClick={saveRenderTypeHandler}
      />
      {!tasksToRender || tasksToRender.length === 0 ? (
        <NoTasks type={tasksRenderType} />
      ) : (
        tasksListContent
      )}
    </section>
  );
};
export default TaskList;
