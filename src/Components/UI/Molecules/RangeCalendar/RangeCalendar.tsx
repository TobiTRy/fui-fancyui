import React, { useEffect, useState, useMemo, useCallback, useRef, useLayoutEffect } from 'react';
import DateNumberWithStatus from '../DateNumberWithStatus/DateNumberWithStatus';
import { DateContainer, DateNumber, MonthContainer, StyledCalendar } from '../Calendar/Calendar.style';
import { IRange } from '../../Atoms/DateNumberAtom/DateNumberAtom';

import { useYearSelectorState } from '../../Atoms/YearSelector/YearSelector.state';
import createDay from './createDayFunction';
import selectDayFunction from './selectDayFunction';
import Day from './day.model';

import useIntersectionObserver from '../../Atoms/functions/hooks/useIntersectionObserver';

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
  const rangeCalendar = true;

  const { selectedYear = new Date().getFullYear(), handler, selectFromTo, handleSwitchFromTo, disablePastDates, disableWeekends } = props;
  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  const [selectedDates, setSelectedDates] = useState<(Date | undefined)[]>([]);
  const [visibleMonths, setVisibleMonths] = useState(() => {
    const currentMonth = new Date().getMonth();
    const startMonth = Math.max(currentMonth - 2, 0);
    const endMonth = Math.min(currentMonth + 2, 11);
    return Array.from({ length: endMonth - startMonth + 1 }, (_, i) => i + startMonth);
  });

  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month - 1, 1).getDay() || 7;
  };

  const months = useMemo(() => {
    const monthArry = visibleMonths.map((monthIdx) => {
      const month = {
        name: new Date(0, monthIdx + 1, 0).toLocaleString('default', { month: 'long' }),
        days: Array.from({ length: getDaysInMonth(monthIdx + 1, selectedYear) }, (_, j) =>
          createDay({ dayNumber: j + 1, month: monthIdx, year: selectedYear, selectedDates, rangeCalendar })
        ),
      };
      return month;
    });
    setIsScrolled(true);
    return monthArry;
  }, [selectedYear, selectedDates, visibleMonths]);

  const handleDateClick = useCallback(
    (day: Day, monthIndex: number) => {
      if (rangeCalendar) {
        const selectedDays = selectDayFunction({ day, monthIndex, selectedDates, selectedYear, selectFromTo });
        if (selectFromTo === 'from') handleSwitchFromTo && handleSwitchFromTo('to');
        if (selectFromTo === 'to') handleSwitchFromTo && handleSwitchFromTo('from');
        setSelectedDates(selectedDays);
        handler && handler(selectedDays);
      } else {
        const newDate = new Date(selectedYear, monthIndex, day.number);
        setSelectedDates([newDate]);
        handler && handler(newDate);
      }
    },
    [selectedDates, selectedYear, selectFromTo]
  );

  // Create an Intersection Observer for the last visible month
  const [lastMonthRef, isInView] = useIntersectionObserver();
  const [firstMonthRef, isFirstInView] = useIntersectionObserver();

  // When the last visible month enters the viewport, add the next two months
  useEffect(() => {
    if (isFirstInView && isScrolled) {
      setVisibleMonths((prevMonths) => {
        const nextMonth1 = prevMonths[0] - 1;
        const nextMonth2 = prevMonths[0] - 2;
        if (nextMonth1 >= 0) prevMonths.unshift(nextMonth1);
        if (nextMonth2 >= 0) prevMonths.unshift(nextMonth2);
        return [...prevMonths];
      });
    }
  }, [isFirstInView]);

  useEffect(() => {
    if (isInView) {
      setVisibleMonths((prevMonths) => {
        const nextMonth1 = prevMonths[prevMonths.length - 1] + 1;
        const nextMonth2 = prevMonths[prevMonths.length - 1] + 2;
        if (nextMonth1 < 12) prevMonths.push(nextMonth1);
        if (nextMonth2 < 12) prevMonths.push(nextMonth2);
        return [...prevMonths];
      });
    }
  }, [isInView]);

  useEffect(() => {
    setTimeout(() => {
    const currentMonth = new Date().getMonth();
    monthRefs.current[currentMonth]?.scrollIntoView();
    }, 300);
  }, [isScrolled]);

  return (
    <StyledCalendar>
      {visibleMonths.map((MonthIdx, idx) => {
        const month = months[MonthIdx];
        return month ? (
          <MonthContainer
            key={month.name}
            ref={(ref) => {
              monthRefs.current[MonthIdx] = ref;
              if (idx === 0) {
                firstMonthRef.current = ref;
              }
              if (idx === months.length - 1) {
                lastMonthRef.current = ref;
              }
            }}
          >
            <h2>{month.name}</h2>
            <DateContainer>
              {Array.from({ length: getFirstDayOfMonth(MonthIdx + 1, selectedYear) - 1 }, (_, i) => (
                <DateNumber key={`empty-${i}`} />
              ))}
              {month.days.map((day) => (
                <DateNumberWithStatus
                  key={day.number}
                  disabled={day.disabled}
                  dateNumber={day.number}
                  isCurrentDay={day.number === new Date().getDate() && MonthIdx === new Date().getMonth()}
                  isSelected={day.isSelected} // Pass the selected state
                  range={day.range}
                  isAvailable="completly"
                  onClick={() => handleDateClick(day, MonthIdx)} // Handle date click
                />
              ))}
            </DateContainer>
          </MonthContainer>
        ) : null;
      })}
    </StyledCalendar>
  );
}
