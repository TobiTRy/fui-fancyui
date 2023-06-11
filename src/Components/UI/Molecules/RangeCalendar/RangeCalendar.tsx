import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import DateNumberWithStatus from '../DateNumberWithStatus/DateNumberWithStatus';
import { DateContainer, DateNumber, MonthContainer, StyledCalendar } from '../Calendar/Calendar.style';
import { IRange } from '../../Atoms/DateNumberAtom/DateNumberAtom';

import { useYearSelectorState } from '../../Atoms/YearSelector/YearSelector.state';
import createDay from './createDayFunction';
import selectDayFunction from './selectDayFunction';
import Day from './day.model';

import { useIntersectionObserver } from '../../Atoms/functions/hooks/useIntersectionObserver';




interface ICalendar {
  selectedYear?: number;
  handler?: (date: Date[] | (Date | undefined)[] | Date) => void;
  selectFromTo?: 'from' | 'to' | undefined;
  handleSwitchFromTo?: (change: 'from' | 'to') => void;
  disablePastDates?: boolean;
  disableWeekends?: boolean;
}

// rethink handleswitch handler
export default function RangeCalendar(props: ICalendar) {
  const rangeCalendar = false
  
  const { selectedYear = new Date().getFullYear(), handler, selectFromTo, handleSwitchFromTo, disablePastDates, disableWeekends } = props;
  const monthRefs = useRef(Array.from({ length: 12 }, () => React.createRef<HTMLDivElement>()));

  const [selectedDates, setSelectedDates] = useState<(Date | undefined)[]>([]); // Track selected dates

  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number): number => {
    // Shift Sunday from 0 to 7
    return new Date(year, month - 1, 1).getDay() || 7;
  };



  const months = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        name: new Date(0, i + 1, 0).toLocaleString('default', { month: 'long' }),
        days: Array.from({ length: getDaysInMonth(i + 1, selectedYear) }, (_, j) =>
          createDay({ dayNumber: j + 1, month: i, year: selectedYear, selectedDates })
        ),
      })),
    [selectedYear, selectedDates]
  );

  const handleDateClick = useCallback(
    (day: Day, monthIndex: number) => {
      if(rangeCalendar) {
        // handleSwitchFromTo, selectedYear, selectFromTo, selectedDates
        const selectedDays = selectDayFunction({day, monthIndex, selectedDates, selectedYear, selectFromTo})
        if(selectFromTo === 'from') handleSwitchFromTo && handleSwitchFromTo('to');
        if(selectFromTo === 'to') handleSwitchFromTo && handleSwitchFromTo('from');
        setSelectedDates(selectedDays);
      } else {
        const newDate = new Date(selectedYear, monthIndex, day.number);
        setSelectedDates([newDate]);
        handler && handler(newDate);
      }
    },
    [selectedDates, selectedYear, selectFromTo]
  );

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    monthRefs.current[currentMonth].current?.scrollIntoView();
  }, []);

  return (
    <StyledCalendar>
      {months.map((month, i) => (
        <MonthContainer key={month.name} ref={monthRefs.current[i]}>
          <h2>{month.name}</h2>
          <DateContainer>
            {Array.from({ length: getFirstDayOfMonth(i + 1, selectedYear) - 1 }, (_, i) => (
              <DateNumber key={`empty-${i}`} />
            ))}
            {month.days.map((day) => (
              <DateNumberWithStatus
                key={day.number}
                disabled={day.disabled}
                dateNumber={day.number}
                isCurrentDay={day.number === new Date().getDate() && i === new Date().getMonth()}
                isSelected={day.isSelected} // Pass the selected state
                range={day.range}
                isAvailable="completly"
                onClick={() => handleDateClick(day, i)} // Handle date click
              />
            ))}
          </DateContainer>
        </MonthContainer>
      ))}
    </StyledCalendar>
  );
}
