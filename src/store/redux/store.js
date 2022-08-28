import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './tasksSlice';

export const store = configureStore({
  reducer: {
    taskReducer
  }
});
