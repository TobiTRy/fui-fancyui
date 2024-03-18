import { TYearMonth } from '../../TCalendar.model';

// Generate array with month and year range
export const generateArrayWithMonthYearRange = (start: TYearMonth, end: TYearMonth) => {
  const startDate = new Date(start.year, start.month);
  const endDate = new Date(end.year, end.month);

  const dateArray = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    dateArray.push({
      month: currentDate.getMonth(),
      year: currentDate.getFullYear(),
    });

    currentDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
  }

  return dateArray;
};
