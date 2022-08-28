export const getTasksToRender = (tasks, config) => {
  const activeTasks = tasks.filter((task) => !task.isFinished);
  const finishedTasks = tasks.filter((task) => task.isFinished);
  const lengths = [tasks.length, activeTasks.length, finishedTasks.length];

  switch (config) {
    case 'active':
      return {
        data: activeTasks,
        lengths
      };
    case 'finished':
      return {
        data: finishedTasks,
        lengths
      };
    default:
      return {
        data: tasks,
        lengths
      };
  }
};
