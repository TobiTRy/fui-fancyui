import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DateNumberWithStatus from '../../Molecules/DateNumberWithStatus/DateNumberWithStatus';
import { spacingPx, uiColors } from '../../Design/design';


const MonthContainer = styled.div`
  margin-top: ${spacingPx.md};

  h2 {
    margin: ${spacingPx.sm};
    margin-left: ${spacingPx.sm};
    color: ${uiColors.secondary.main};
  }
`;

const StyledCalendar = styled.div`
  width: 100%;
  height: 300px;
  overflow-y: auto;
`;

const DateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;



const DateNumber = styled.span`
  width: 14.28%; /* 100 / 7 days */
  text-align: right;
  cursor: pointer;
  box-sizing: border-box;
`;

interface Day {
  number: number;
  isWeekend: boolean;
  // Add more attributes as needed
}

interface Month {
  name: string;
  days: Day[];
}

interface ICalendar {
  selectedYear?: number;
}

export default function Calendar({ selectedYear }: ICalendar) {
  const [currentYear, setCurrentYear] = useState(selectedYear || new Date().getFullYear());

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
      // Initialize other attributes here
    };
  };

  const months: Month[] = Array.from({ length: 12 }, (_, i) => ({
    name: new Date(0, i + 1, 0).toLocaleString('default', { month: 'long' }),
    days: Array.from({ length: getDaysInMonth(i + 1, currentYear) }, (_, j) => createDay(j + 1, i, currentYear)),
  }));

  useEffect(() => {
    if (selectedYear) {
      setCurrentYear(selectedYear);
    }
  }, [selectedYear])

  return (
    <StyledCalendar>
      {months.map((month, i) => (
        <MonthContainer key={month.name}>
          <h2>{month.name}</h2>
          <DateContainer>
            {Array.from({ length: getFirstDayOfMonth(i + 1, currentYear) - 1 }, (_, i) => (
              <DateNumber key={`empty-${i}`} />
            ))}
            {month.days.map((day) => (
              <DateNumberWithStatus key={day.number} dateNumber={day.number} isWeekend={day.isWeekend} isAvailable='completly' />

            ))}
          </DateContainer>
        </MonthContainer>
      ))}
    </StyledCalendar>
  );
}
