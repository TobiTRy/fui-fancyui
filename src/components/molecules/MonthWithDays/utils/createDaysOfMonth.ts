import createDay from './createDayFunction';
import { TDay } from './types/TDay.model';

import { IDisabledDateSettings } from './types/IDisableDateSettings.model';
import { IDateWithExternalState } from './types/IExternalMonthWithDays.model';
import { TDateArray } from '@/components/molecules/Calendar';

interface ICreateDaysOfMonth {
  monthIdx: number;
  year: number;
  selectedDates: TDateArray;
  disabledDateSetting?: IDisabledDateSettings;
  isRangePicking?: boolean;
  externalMonthWithDays?: IDateWithExternalState[];
  fillAdjacentMonths?: boolean;
  weekStartsOn?: number; // New property to specify the first day of the week
}

const createDaysOfMonth = (props: ICreateDaysOfMonth): (TDay | null)[][] => {
  const {
    monthIdx,
    year,
    selectedDates,
    disabledDateSetting,
    isRangePicking,
    externalMonthWithDays,
    fillAdjacentMonths = true,
    weekStartsOn = 1, // Default to Monday if not provided
  } = props;

  const daysInMonth = getDaysInMonth(monthIdx + 1, year);
  let firstDayOfMonth = new Date(year, monthIdx, 1).getDay() - weekStartsOn;
  if (firstDayOfMonth < 0) firstDayOfMonth += 7; // Adjust if weekStartsOn is not Sunday

  const weeks: (TDay | null)[][] = [];
  let week: (TDay | null)[] = [];

  // Calculate previous month's overflow days if fillAdjacentMonths is true
  if (fillAdjacentMonths && firstDayOfMonth > 0) {
    const prevMonthDays = getDaysInMonth(monthIdx, year); // Get total days of previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
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
  }

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

    if ((day + firstDayOfMonth - 1) % 7 === 0 && day > 1) {
      weeks.push(week);
      week = [];
    }

    week.push(dayObj);
  }

  // Adjust the next month's overflow and current month's alignment
  const daysNeeded = 7 - week.length;
  if (fillAdjacentMonths && daysNeeded > 0) {
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
  } else {
    while (week.length < 7) {
      week.push(null);
    }
  }

  weeks.push(week);

  return weeks;
};

const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
};

export default createDaysOfMonth;
