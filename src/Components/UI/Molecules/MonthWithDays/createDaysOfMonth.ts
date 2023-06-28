import createDay from './createDayFunction';
import Day from './day.model';
import { IDateArray } from './createDayFunction';
import { IDisabledDateSettings } from './IDisableDateSettings.model';


const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
};


const createDaysOfMonth = (monthIdx: number, year: number, selectedDates: IDateArray ,disabledDateSetting: IDisabledDateSettings, isRangePicking?: boolean, ): Day[] => {
  const MonthDays = Array.from({ length: getDaysInMonth(monthIdx + 1, year) }, (_, j) =>
    createDay({ dayNumber: j + 1, month: monthIdx, year: year, selectedDates, disabledDateSetting, isRangePicking })
  );
  return MonthDays;
};

export default createDaysOfMonth;