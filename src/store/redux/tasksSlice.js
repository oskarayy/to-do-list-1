import { createSlice } from '@reduxjs/toolkit';

const getUpdatedTaskList = (state, newTask) => {
  let newList;
  let stop;

  state.forEach((task, index) => {
    if (!stop && newTask.time <= state[index].time) {
      const itemsWithLessTime = state.slice(0, index);
      const itemsWithMoreTime = state.slice(index, state.length);
      console.log(
        'less' + itemsWithLessTime[itemsWithLessTime.length - 1]?.title
      );
      console.log('more' + itemsWithMoreTime[0]?.title);
      newList = [...itemsWithLessTime, newTask, ...itemsWithMoreTime];
      return (stop = true);
    } else if (!stop) newList = [...state, newTask];
  });

  return newList ?? [newTask];
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: JSON.parse(localStorage.getItem('tasks')) ?? []
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = action.payload;
      state.tasks = getUpdatedTaskList(state.tasks, newTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    removeTask: (state, action) => {
      const updatedList = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      state.tasks = updatedList;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTasksOrder: (state, action) => {
      state.tasks = action.payload;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleTaskState: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (taskIndex === -1) return;
      state.tasks[taskIndex].isFinished = !state.tasks[taskIndex].isFinished;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  }
});

export const addTask = tasksSlice.actions.addTask;
export const removeTask = tasksSlice.actions.removeTask;
export const updateTasksOrder = tasksSlice.actions.updateTasksOrder;
export const toggleTaskState = tasksSlice.actions.toggleTaskState;

export default tasksSlice.reducer;
