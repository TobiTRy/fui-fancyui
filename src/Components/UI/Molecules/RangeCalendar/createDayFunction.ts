import Day from './day.model';

type DateArray = Date[] | (Date | undefined)[];

interface ICreateDay {
  dayNumber: number;
  month: number;
  year: number;
  selectedDates: DateArray;
  disablePastDates?: boolean;
  disableWeekends?: boolean;
  rangeCalendar?: boolean;
}

const createDay = (props: ICreateDay): Day => {
  const { dayNumber, month, year, selectedDates, disablePastDates, disableWeekends, rangeCalendar } = props;

  const date = new Date(year, month, dayNumber);

  let isStart, isEnd, isInRange;
  if (rangeCalendar) {
    const validRange = selectedDates[0] && selectedDates[1] ? true : false;
    const isRangeStart = selectedDates[0] ? true : false;
    const isRangeEnd = selectedDates[1] ? true : false;

    isInRange = validRange && selectedDates[0]! <= date && date <= selectedDates[1]!;
    isStart = isRangeStart && selectedDates[0]!.getTime() === date.getTime();
    isEnd = isRangeEnd && selectedDates[1]!.getTime() === date.getTime();
  }

  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  const isPast = date.getTime() < Date.now();
  const disableSpecificDates = (disablePastDates ? isPast : false) || (disableWeekends ? isWeekend : false);

  return {
    number: dayNumber,
    disabled: disableSpecificDates,
    isSelected: selectedDates.some((selectedDate) => selectedDate && selectedDate!.getTime() === date.getTime()),
    range: { start: isStart, end: isEnd, inRange: isInRange },
  };
};

export default createDay;
