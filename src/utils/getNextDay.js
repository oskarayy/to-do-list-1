export const getNextDay = () => {
  const today = new Date().toLocaleDateString();
  const preformattedDateArray = today.split('.');

  const day = +preformattedDateArray[0];
  const month = +preformattedDateArray[1];
  const year = +preformattedDateArray[2];

  const leapYears = [2024, 2028, 2032, 2036, 2040];
  const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
  const newYearsEve = day === 31 && month === 12;
  let daysInMonth;

  if (month === 2) {
    daysInMonth = leapYears.includes(year) ? 29 : 28;
  } else {
    daysInMonth = monthsWith31Days.includes(month) ? 31 : 30;
  }

  const lastDayofMonth = day === daysInMonth;

  const nextDayWithZero =
    preformattedDateArray[0] < 9 ? `0${day + 1}` : (day + 1).toString();
  const nextMonthWithZero =
    preformattedDateArray[1] < 9 ? `0${month + 1}` : (month + 1).toString();

  preformattedDateArray[0] = lastDayofMonth ? '01' : nextDayWithZero;
  preformattedDateArray[1] = lastDayofMonth
    ? nextMonthWithZero
    : preformattedDateArray[1];

  if (newYearsEve) {
    preformattedDateArray[1] = '01';
    preformattedDateArray[2] = (year + 1).toString();
  }

  const nextDay = preformattedDateArray.reverse().join('-').toString();

  return nextDay;
};
