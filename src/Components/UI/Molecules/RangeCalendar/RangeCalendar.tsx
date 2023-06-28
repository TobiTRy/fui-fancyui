import React, { useEffect, useState, useRef } from 'react';
import { MonthContainer, StyledCalendar } from './RangeCalendar.style';

import MonthWithDays from '../MonthWithDays/MonthWithDays';
import useSelectedDates from './useSelectedDates';
import useVisibleMonths from './useVisibleMonths';



// --------------------------------------------------------------------------- //
// -------- The main calenader wich can select a date, or date range ---------- //
// --------------------------------------------------------------------------- //
interface ICalendar {
  selectedYear?: number;
  handler?: (date: Date[] | (Date | undefined)[] | Date) => void;
  selectFromTo?: 'from' | 'to' | undefined;
  handleSwitchFromTo?: (change: 'from' | 'to') => void;
  disablePastDates?: boolean;
  disableWeekends?: boolean;
};
export default function RangeCalendar(props: ICalendar) {
  const rangeCalendar = true;
  const { selectedYear = new Date().getFullYear(), handler, selectFromTo, handleSwitchFromTo, disablePastDates, disableWeekends } = props;
  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  // hooks for selected dates and visible months
  const { selectedDates, handleDateClick } = useSelectedDates(selectedYear, selectFromTo, handleSwitchFromTo, handler, rangeCalendar);
  const { visibleMonths, firstMonthRef, lastMonthRef } = useVisibleMonths(isScrolled);

  // Scroll to current month on mount and set isScrolled to true
  useEffect(() => {
    const currentMonth = new Date().getMonth();
    monthRefs.current[currentMonth]?.scrollIntoView();
    setTimeout(() => {
      setIsScrolled(true);
    }, 300);
  }, []);

  return (
    <StyledCalendar>
      {visibleMonths.map((MonthIdx, idx) => {
        return (
          <MonthContainer
            key={MonthIdx}
            ref={(ref) => {
              monthRefs.current[MonthIdx] = ref;
              if (idx === 0) {
                firstMonthRef.current = ref;
              }
              if (idx === visibleMonths.length - 1) {
                lastMonthRef.current = ref;
              }
            }}
          >
            <MonthWithDays
              disablePastDates={disablePastDates}
              monthIdx={MonthIdx}
              year={selectedYear}
              handleDateClick={handleDateClick}
              isRangePicking={rangeCalendar}
              selectedDates={selectedDates}
            />
          </MonthContainer>
        );
      })}
    </StyledCalendar>
  );
}
