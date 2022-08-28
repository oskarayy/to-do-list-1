const { createSlice } = require('@reduxjs/toolkit');

const DUMMY_TASKS = [
  {
    id: 'task-1',
    title: 'Task Title',
    isFinished: false,
    time: new Date(2022, 8, 1, 12, 0, 0).getTime()
  },
  {
    id: 'task-2',
    title: 'Task Title',
    isFinished: false
  },
  {
    id: 'task-3',
    title: 'Task Title',
    isFinished: true,
    time: new Date(2022, 9, 19, 17, 20, 0).getTime()
  },
  {
    id: 'task-4',
    title: 'Task Title',
    isFinished: true
  },
  {
    id: 'task-5',
    title: 'Task Title',
    time: new Date(2022, 7, 28, 10, 20, 0).getTime(),
    isFinished: false
  }
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    // tasks: DUMMY_TASKS)
    tasks: JSON.parse(localStorage.getItem('tasks'))
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    removeTask: (state, action) => {
      const updatedList = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      state.tasks = updatedList;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTasksList: (state, action) => {
      state.tasks = action.payload;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleTaskState: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[taskIndex].isFinished = !state.tasks[taskIndex].isFinished;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  }
});

export const addTask = tasksSlice.actions.addTask;
export const removeTask = tasksSlice.actions.removeTask;
export const updateTasksList = tasksSlice.actions.updateTasksList;
export const toggleTaskState = tasksSlice.actions.toggleTaskState;

export default tasksSlice.reducer;
