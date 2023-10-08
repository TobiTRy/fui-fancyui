import createDay from './createDayFunction';
import Day from '../day.model';
import { IDateArray } from '../../RangeCalendar/IDateArray.model';
import { IDisabledDateSettings } from '../IDisableDateSettings.model';
import { IDateWithExternalState } from '../IExternalMonthWithDays.model';

const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
};

// --------------------------------------------------------------------------- //
// --------- This function creates the days for the specific month ----------- //
// --------------------------------------------------------------------------- //

interface ICreateDaysOfMonth {
  monthIdx: number;
  year: number;
  selectedDates: IDateArray;
  disabledDateSetting?: IDisabledDateSettings;
  isRangePicking?: boolean;
  externalMonthWithDays?: IDateWithExternalState[];
}
const createDaysOfMonth = (props: ICreateDaysOfMonth): Day[] => {
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

export default createDaysOfMonth;
