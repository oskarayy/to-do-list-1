export const getFormattedDate = (timeInMiliseconds) => {
  if (!timeInMiliseconds) return;

  const date = new Date(timeInMiliseconds);
  const year = date.getFullYear();
  const month = date.toLocaleDateString('en', { month: 'short' });
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }  ${day} ${month} ${year}`;
};
