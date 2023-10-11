import { IDisabledDateSettings, IWeekDays } from '../IDisableDateSettings.model';
import { IDateWithExternalState } from '../IExternalMonthWithDays.model';
import Day from '../day.model';
import { IDateArray } from '../../RangeCalendar/IDateArray.model';

// 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday
// this function disables dates based on the following parameters:
const disableDate = (date: Date, disabledDateSetting?: IDisabledDateSettings): boolean => {
  const { disablePastDates = false, disableWeekends = false, disabledWeekdays = [] } = disabledDateSetting || {};
  
  const dateDay = date.getDay() as IWeekDays;

  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  const isPast = date.getTime() < Date.now();
  const isDisabledDay = disabledWeekdays?.includes(dateDay);
  const disableSpecificDates =
    (disablePastDates ? isPast : false) || (disableWeekends ? isWeekend : false) || (disabledWeekdays ? !!isDisabledDay : false);

  return disableSpecificDates;
};

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
    isSelected: Array.isArray(selectedDates) ? selectedDates.some((selectedDate) => selectedDate && selectedDate.getTime() === date.getTime()) : selectedDates.getTime() === date.getTime(),
    range: { start: isStart, end: isEnd, inRange: isInRange },
  };
};

export default createDay;
