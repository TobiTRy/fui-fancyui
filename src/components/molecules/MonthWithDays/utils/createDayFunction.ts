import { IDisabledDateSettings } from './Interfaces/IDisableDateSettings.model';
import { IDateWithExternalState } from './Interfaces/IExternalMonthWithDays.model';
import Day from './Interfaces/IDay.model';
import { IDateArray } from '../../RangeCalendar/IDateArray.model';
import { disableDate } from './disableDate';

// --------------------------------------------------------------------------- //
// ----this function creates a day object based on the following parameters--- //
// --------------------------------------------------------------------------- //
interface ICreateDay {
  dayNumber: number;
  month: number;
  year: number;
  isRangePicking?: boolean;
  selectedDates: IDateArray;
  disabledDateSetting?: IDisabledDateSettings;
  externalDate?: IDateWithExternalState;
}
const createDay = (props: ICreateDay): Day => {
  const { dayNumber, month, year, selectedDates, disabledDateSetting, isRangePicking, externalDate } = props;

  const date = new Date(year, month, dayNumber);
  let isStart, isEnd, isInRange;

  // if isRangePicking is true, pick a date range (start and end date)
  if (isRangePicking && Array.isArray(selectedDates)) {
    const validRange = selectedDates[0] && selectedDates[1] ? true : false;
    const isRangeStart = selectedDates[0] ? true : false;
    const isRangeEnd = selectedDates[1] ? true : false;

    isInRange = validRange && selectedDates[0]! <= date && date <= selectedDates[1]!;
    isStart = isRangeStart && selectedDates[0]!.getTime() === date.getTime();
    isEnd = isRangeEnd && selectedDates[1]!.getTime() === date.getTime();
  }

  // this function disables the date
  const isDateDisabled = disableDate(date, disabledDateSetting);

  return {
    number: dayNumber,
    disabled: isDateDisabled,
    isAvilable: externalDate?.isAvilable,
    isSelected: Array.isArray(selectedDates)
      ? selectedDates.some((selectedDate) => selectedDate && selectedDate.getTime() === date.getTime())
      : selectedDates.getTime() === date.getTime(),
    range: { start: isStart, end: isEnd, inRange: isInRange },
  };
};

export default createDay;
