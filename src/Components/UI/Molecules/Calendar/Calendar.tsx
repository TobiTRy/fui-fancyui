import React, { useEffect, useState, useMemo, useRef } from 'react';
import styled from 'styled-components';
import DateNumberWithStatus from '../DateNumberWithStatus/DateNumberWithStatus';
import { spacingPx, uiColors } from '../../Design/design';
import { DateContainer, DateNumber, MonthContainer, StyledCalendar } from './Calendar.style';

interface Day {
  number: number;
  isWeekend: boolean;
}

interface ICalendar {
  selectedYear?: number;
}

export default function Calendar({ selectedYear }: ICalendar) {
  const [currentYear, setCurrentYear] = useState(selectedYear || new Date().getFullYear());
  const monthRefs = useRef(Array.from({ length: 12 }, () => React.createRef<HTMLDivElement>()));
  
  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number): number => {
    // Shift Sunday from 0 to 7
    return new Date(year, month - 1, 1).getDay() || 7;
  };

  const createDay = (dayNumber: number, month: number, year: number): Day => {
    const date = new Date(year, month, dayNumber);
    return {
      number: dayNumber,
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
    };
  };

  const months = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        name: new Date(0, i + 1, 0).toLocaleString('default', { month: 'long' }),
        days: Array.from({ length: getDaysInMonth(i + 1, currentYear) }, (_, j) => createDay(j + 1, i, currentYear)),
      })),
    [currentYear]
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
            {Array.from({ length: getFirstDayOfMonth(i + 1, currentYear) - 1 }, (_, i) => (
              <DateNumber key={`empty-${i}`} />
            ))}
            {month.days.map((day) => (
              <DateNumberWithStatus
                key={day.number}
                dateNumber={day.number}
                isAvailable="completly"
                isCurrentDay={day.number === new Date().getDate() && i === new Date().getMonth()}
              />
            ))}
          </DateContainer>
        </MonthContainer>
      ))}
    </StyledCalendar>
  );
}
