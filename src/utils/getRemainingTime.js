export const getRemainingTime = (deadlineTime) => {
  const currentTime = new Date().getTime();
  const timeLeft = deadlineTime - currentTime;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  // if (days === 0 && hours === 0 && minutes === 0) return 'Time left!';
  // return [
  //   `${days !== 0 ? days + ' days ' : ''}`,
  //   `${hours !== 0 && days !== 0 ? hours + ' hours ' : ''}`,
  //   `${minutes} minutes`
  // ];
  return [days, hours, minutes];
};
