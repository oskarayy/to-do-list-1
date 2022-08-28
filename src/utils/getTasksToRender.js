export const getTasksToRender = (tasks, config) => {
  const activeTasks = tasks.filter((task) => !task.isFinished);
  const finishedTasks = tasks.filter((task) => task.isFinished);
  const lengths = [tasks.length, activeTasks.length, finishedTasks.length];

  let data = tasks;

  if (config === 'active') data = activeTasks;
  if (config === 'finished') data = finishedTasks;

  // SORTING WITH FINISHED ON THE BOTTOM OF THE LIST
  // if (config === '')
  //   data = tasks.reduce((acc, task) => {
  //     acc = task.isFinished ? [...acc, task] : [task, ...acc];
  //     return acc;
  //   }, []);

  return { tasksToRender: data, lengths };
};
