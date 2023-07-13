import Day from '../MonthWithDays/day.model';

import { IDateOnlyArray } from './IDateArray.model';
type DateArray = Date[] | (Date | undefined)[];

const checkForValidDatesEnterd = (dates: DateArray) => {
  return dates[0] && dates[1] ? true : false;
};

const checkDateIsSame = (dates: Date[]) => {
  // Check if date is the same
  return dates[0].getTime() === dates[1].getTime();
};

interface ISelectDayFunction {
  day: Day;
  monthIndex: number;
  selectedYear: number;
  selectedDates: IDateOnlyArray;
  selectFromTo: 'from' | 'to' | undefined;
}

// inputs:  selectFromTo
const selectDayFunction = (props: ISelectDayFunction) => {
  const { day, monthIndex, selectedYear, selectedDates, selectFromTo } = props;

  // create day with the selected date
  const newDate = new Date(selectedYear, monthIndex, day.number);
  let newSelectedDates: DateArray = [...selectedDates];

  // When no dates are selected or when "from" date is selected
  if (selectFromTo === 'from' || selectFromTo === undefined) {
    newSelectedDates = [newDate, selectedDates[1]];

    if (newSelectedDates[1] && newDate > newSelectedDates[1]) {
      newSelectedDates[1] = undefined; // Swap dates if "from" date is later than "to" date
    }

    //handleSwitchFromTo && handleSwitchFromTo('to');
  } else if (selectFromTo === 'to') {
    newSelectedDates = [selectedDates[0], newDate];

    if (newSelectedDates[0] && newDate < newSelectedDates[0]) {
      newSelectedDates[0] = undefined; // Swap dates if "to" date is earlier than "from" date
    }
  }

  //When Valid dates are entered
  if (checkForValidDatesEnterd(newSelectedDates)) {
    if (checkDateIsSame(newSelectedDates as Date[])) {
      const identifySecondAsDate = newSelectedDates[1] as Date;
      identifySecondAsDate.setDate(identifySecondAsDate.getDate() + 1);
      newSelectedDates = [newSelectedDates[0], identifySecondAsDate];
    }
    // else if when selection 1 is after selection 2 then set selection 2 to undefined
    else if (newSelectedDates[0]!.getTime() > newSelectedDates[1]!.getTime()) {
      newSelectedDates[1] = undefined;
    }
  }

  return newSelectedDates as IDateOnlyArray;
};

export default selectDayFunction;
