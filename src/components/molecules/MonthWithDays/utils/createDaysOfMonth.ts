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
}

// --------------------------------------------------------------------------- //
// --------- This function creates the days for the specific month ----------- //
// --------------------------------------------------------------------------- //
const createDaysOfMonth = (props: ICreateDaysOfMonth): TDay[] => {
  const { monthIdx, year, selectedDates, disabledDateSetting, isRangePicking, externalMonthWithDays } = props;

  const MonthDays = Array.from({ length: getDaysInMonth(monthIdx + 1, year) }, (_, j) =>
    createDay({
      dayNumber: j + 1,
      month: monthIdx,
      year: year,
      selectedDates,
      disabledDateSetting,
      isRangePicking,
      externalDate: externalMonthWithDays![j],
    })
  );
  return MonthDays;
};

// get the number of days in a month based on the month and year
const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
};

export default createDaysOfMonth;
