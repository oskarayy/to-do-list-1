export const getTasksToRender = (tasks, config) => {
  const activeTasks = tasks.filter((task) => !task.isFinished);
  const finishedTasks = tasks.filter((task) => task.isFinished);
  const lengths = [tasks.length, activeTasks.length, finishedTasks.length];

  let data = tasks;

  if (config === 'active') data = activeTasks;
  if (config === 'finished') data = finishedTasks;

  return { tasksToRender: data, lengths };
};
