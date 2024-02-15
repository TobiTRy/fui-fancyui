import createDay from '../createDayFunction';
import { TDay } from '../types/TDay.model';

import { TCreateDaysOfMonth } from '@/components/molecules/MonthWithDays/utils/createDaysOfMonth/TCreateDaysOfMonth';

const createDaysOfMonth = (props: TCreateDaysOfMonth): (TDay | null)[][] => {
  const {
    monthIdx,
    year,
    selectedDates,
    disabledDateSetting,
    isRangePicking,
    externalMonthWithDays,
    fillAdjacentMonths = true,
    weekStartsOn = 1, // Default is Monday
  } = props;

  const daysInMonth = getDaysInMonth(monthIdx + 1, year);
  let firstDayOfMonth = new Date(year, monthIdx, 1).getDay() - weekStartsOn;
  if (firstDayOfMonth < 0) firstDayOfMonth += 7; // Adjust if weekStartsOn is not Sunday

  const weeks: (TDay | null)[][] = [];
  let week: (TDay | null)[] = [];

  // --------------------------------------------------------------------------- //
  // - Calculate previous month's overflow days if fillAdjacentMonths is true -- //
  // --------------------------------------------------------------------------- //
  if (firstDayOfMonth > 0) {
    const prevMonthDays = getDaysInMonth(monthIdx, year); // Get total days of previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
      if (fillAdjacentMonths) {
        const dayNumber = prevMonthDays - firstDayOfMonth + i + 1;
        week.push(
          createDay({
            dayNumber,
            month: monthIdx - 1,
            year,
            selectedDates,
            disabledDateSetting: true,
            isRangePicking,
            externalDate: undefined,
          })
        );
      }
      // Fill the rest of the week with nulls
      week.push(null);
    }
  }

  // --------------------------------------------------------------------------- //
  // --------------------  Create days of the month ---------------------------- //
  // --------------------------------------------------------------------------- //
  for (let day = 1; day <= daysInMonth; day++) {
    const dayObj = createDay({
      dayNumber: day,
      month: monthIdx,
      year,
      selectedDates,
      disabledDateSetting,
      isRangePicking,
      externalDate: externalMonthWithDays ? externalMonthWithDays[day - 1] : undefined,
    });

    // If the day is a Sunday and not the first day of the month, start a new week
    if ((day + firstDayOfMonth - 1) % 7 === 0 && day > 1) {
      weeks.push(week);
      week = [];
    }

    week.push(dayObj);
  }

  // --------------------------------------------------------------------------- //
  // -----  Adjust the next month's overflow and current month's alignment ----- //
  // --------------------------------------------------------------------------- //
  const daysNeeded = 7 - week.length;
  if (daysNeeded > 0) {
    if (fillAdjacentMonths) {
      for (let i = 1; i <= daysNeeded; i++) {
        week.push(
          createDay({
            dayNumber: i,
            month: monthIdx + 1,
            year,
            selectedDates,
            disabledDateSetting: true,
            isRangePicking,
            externalDate: undefined,
          })
        );
      }
    }
  } else {
    // Fill the rest of the week with nulls
    while (week.length < 7) {
      week.push(null);
    }
  }

  weeks.push(week);

  return weeks;
};

// Get the number of days in a month and year
const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
};

export default createDaysOfMonth;
