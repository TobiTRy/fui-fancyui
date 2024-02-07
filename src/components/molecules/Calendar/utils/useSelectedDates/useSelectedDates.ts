// useSelectedDates.ts
import { useCallback, useState } from 'react';

import { TDay } from '@/components/molecules/MonthWithDays/utils/types/TDay.model';

import { TDateArray, TDateOnlyArray } from '@/components/molecules/Calendar/TCalendar.model';
import { selectDayRange } from '../selectDayRange/selectDayRange';
import { TuseSelectedDates } from './TuseSelectedDates.model';

// --------------------------------------------------------------------------- //
// -------- this hook handles the selection of one date or range dates ------- //
// --------------------------------------------------------------------------- //
export default function useSelectedDates(props: TuseSelectedDates) {
  const { handleDates, rangeCalendar } = props;

  const [selectedDates, setSelectedDates] = useState<TDateArray>([undefined, undefined]);

  const handleDateClick = useCallback(
    (day: TDay, monthIndex: number, year: number) => {
      // when a range is slected you can select two dates
      if (rangeCalendar) {
        const pickedDays = selectedDates as TDateOnlyArray;

        // select the range of dates
        const selectedDays = selectDayRange({
          day,
          monthIndex,
          selectedDates: pickedDays,
          selectedYear: year,
          selectFromTo: props.selectFromTo,
          handleSwitchFromTo: props.handleSwitchFromTo,
        });
        // set the selected dates
        setSelectedDates(selectedDays);
        handleDates?.(selectedDays);
      } else {
        // when a single date is selected
        const newDate = new Date(year, monthIndex, day.number);

        setSelectedDates(newDate);
        handleDates?.(newDate);
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedDates, props.selectFromTo]
  );
  return { selectedDates, handleDateClick };
}
