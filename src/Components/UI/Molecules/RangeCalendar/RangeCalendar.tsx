import React, { useEffect, useState, useMemo, useCallback } from 'react';
import DateNumberWithStatus from '../DateNumberWithStatus/DateNumberWithStatus';
import { DateContainer, DateNumber, MonthContainer, StyledCalendar } from '../Calendar/Calendar.style';
import { IRange } from '../../Atoms/DateNumberAtom/DateNumberAtom';

interface Day {
  number: number;
  isWeekend: boolean;
  isSelected: boolean;
  range: IRange;
  // Add more attributes as needed
}

interface Month {
  name: string;
  days: Day[];
}

interface ICalendar {
  selectedYear?: number;
  handler?: (date: Date[]) => void;
}

export default function RangeCalendar({ selectedYear, handler }: ICalendar) {
  const [currentYear, setCurrentYear] = useState(selectedYear || new Date().getFullYear());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]); // Track selected dates

  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number): number => {
    // Shift Sunday from 0 to 7
    return new Date(year, month - 1, 1).getDay() || 7;
  };

  const createDay = (dayNumber: number, month: number, year: number) => {
    const date = new Date(year, month, dayNumber);
    const isInRange = selectedDates.length === 2 && selectedDates[0] <= date && date <= selectedDates[1];
    const isStart = selectedDates.length > 0 && selectedDates[0].getTime() === date.getTime();
    const isEnd = selectedDates.length === 2 && selectedDates[1].getTime() === date.getTime();

    return {
      number: dayNumber,
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
      isSelected: selectedDates.some((selectedDate) => selectedDate.getTime() === date.getTime()),
      range: {start: isStart, end: isEnd, inRange: isInRange}
    };
  };

  const months = useMemo(() => (
    Array.from({ length: 12 }, (_, i) => ({
      name: new Date(0, i + 1, 0).toLocaleString('default', { month: 'long' }),
      days: Array.from({ length: getDaysInMonth(i + 1, currentYear) }, (_, j) => createDay(j + 1, i, currentYear)),
    }))
  ), [currentYear, selectedDates]);

  const handleDateClick = useCallback((day: Day, monthIndex: number) => {
    // Handle date selection
    const newDate = new Date(currentYear, monthIndex, day.number);
    let newSelectedDates;

    if (selectedDates.length === 0) {
      newSelectedDates = [newDate];
    } else if (selectedDates.length === 1) {
      // Prevent adding the same date twice
      if (newDate.getTime() !== selectedDates[0].getTime()) {
        newSelectedDates = [...selectedDates, newDate].sort((a, b) => a.getTime() - b.getTime());
      }
    } else {
      const firstDate = selectedDates[0];
      const lastDate = selectedDates[1];

      if (newDate.getTime() > lastDate.getTime()) {
        newSelectedDates = [firstDate, newDate];
      } else if (newDate.getTime() < firstDate.getTime()) {
        newSelectedDates = [newDate, lastDate];
      } else if(newDate.getTime() !== lastDate.getTime() && newDate.getTime() !== firstDate.getTime()) {
        newSelectedDates = [newDate];
      }
    }

    if(newSelectedDates) {
      setSelectedDates(newSelectedDates);
      handler && handler(newSelectedDates);
    }
  }, [selectedDates, currentYear]);


  useEffect(() => {
    if (selectedYear) {
      setCurrentYear(selectedYear);
    }
  }, [selectedYear]);

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
              <DateNumberWithStatus
                key={day.number}
                dateNumber={day.number}
                isWeekend={day.isWeekend}
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
