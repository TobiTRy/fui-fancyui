// useSelectedDates.ts
import { useState, useCallback } from 'react';
import Day from '../MonthWithDays/day.model';
import selectDayFunction from './selectDayFunction';


// the hook for handle the selected dates
export default function useSelectedDates(
  selectedYear: number, 
  selectFromTo: 'from' | 'to' | undefined, 
  handleSwitchFromTo: ((change: 'from' | 'to') => void) | undefined, 
  handler: ((date: Date[] | (Date | undefined)[] | Date) => void) | undefined, 
  rangeCalendar: boolean
) {
  const [selectedDates, setSelectedDates] = useState<(Date | undefined)[]>([]);
  const handleDateClick = useCallback(
    (day: Day, monthIndex: number) => {
      // when a range is slected you can select two dates
      if (rangeCalendar) {
        const selectedDays = selectDayFunction({ day, monthIndex, selectedDates, selectedYear, selectFromTo });
        if (selectFromTo === 'from') handleSwitchFromTo && handleSwitchFromTo('to');
        if (selectFromTo === 'to') handleSwitchFromTo && handleSwitchFromTo('from');
        setSelectedDates(selectedDays);
        handler && handler(selectedDays);
      // when a single date is selected
      } else {
        const newDate = new Date(selectedYear, monthIndex, day.number);
        setSelectedDates([newDate]);
        handler && handler(newDate);
      }
    },
    [selectedDates, selectedYear, selectFromTo]
  );
  return { selectedDates, handleDateClick };
}
