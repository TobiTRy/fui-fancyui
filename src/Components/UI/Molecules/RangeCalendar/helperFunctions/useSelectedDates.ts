// useSelectedDates.ts
import { useState, useCallback } from 'react';
import Day from '../../MonthWithDays/day.model';
import selectDayFunction from './selectDayFunction';
import { IDateArray, IDateOnlyArray } from '../IDateArray.model';

// the hook for handle the selected dates
export default function useSelectedDates(
  selectedYear: number,
  selectFromTo: 'from' | 'to' | undefined,
  handleSwitchFromTo: ((change: 'from' | 'to') => void) | undefined,
  handler: ((date: IDateArray) => void) | undefined,
  rangeCalendar: boolean
) {
  const [selectedDates, setSelectedDates] = useState<IDateArray>([undefined, undefined]);
  const handleDateClick = useCallback(
    (day: Day, monthIndex: number) => {
      // when a range is slected you can select two dates
      if (rangeCalendar) {
        const pickedDays = selectedDates as IDateOnlyArray;
        const selectedDays = selectDayFunction({ day, monthIndex, selectedDates: pickedDays, selectedYear, selectFromTo });
        if (selectFromTo === 'from') handleSwitchFromTo && handleSwitchFromTo('to');
        if (selectFromTo === 'to') handleSwitchFromTo && handleSwitchFromTo('from');
        setSelectedDates(selectedDays);
        handler && handler(selectedDays);
        // when a single date is selected
      } else {
        const newDate = new Date(selectedYear, monthIndex, day.number);
        setSelectedDates(newDate);
        handler && handler(newDate);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedDates, selectedYear, selectFromTo]
  );
  return { selectedDates, handleDateClick };
}
