import React, { useMemo } from 'react';
import DateNumberWithStatus from '../DateNumberWithStatus/DateNumberWithStatus';
import { DateNumber, DaysContainer } from './MonthWithDays.style';
import { IDateArray } from './createDayFunction';
import { IDisabledDateSettings } from './IDisableDateSettings.model';

import Day from './day.model';
import createDaysOfMonth from './createDaysOfMonth';

const getFirstDayOfMonth = (month: number, year: number): number => {
  return new Date(year, month - 1, 1).getDay() || 7;
};

// --------------------------------------------------------------------------- //
// --------- This Component generates a single month with the dates ---------- //
// --------------------------------------------------------------------------- //
interface IMonthWithDays {
  monthIdx: number;
  year: number;
  handleDateClick?: (day: Day, monthIdx: number) => void;
  isRangePicking?: boolean;
  selectedDates: IDateArray;
  disabledDateSetting: IDisabledDateSettings;
}
export default function MonthWithDays(props: IMonthWithDays) {
  const { monthIdx, year, handleDateClick, selectedDates, isRangePicking, disabledDateSetting } = props;

  // Create the days of the month and memoize them
  const month = useMemo(() => {
    const month = {
      name: new Date(0, monthIdx + 1, 0).toLocaleString('default', { month: 'long' }),
      days: createDaysOfMonth(monthIdx, year, selectedDates, disabledDateSetting ,isRangePicking),
    };
    return month;
  }, [ monthIdx, selectedDates, isRangePicking]);

  return (
    <div>
      <h2>{month.name}</h2>
      <DaysContainer>
        {/* Generate the empty spaces for the start of the month  */}
        {Array.from({ length: getFirstDayOfMonth(monthIdx + 1, year) - 1 }, (_, i) => (
          <DateNumber key={`empty-${i}`} />
        ))}
        {/* Generate the days of the month */}
        {month.days.map((day) => (
          <DateNumberWithStatus
            key={day.number}
            disabled={day.disabled}
            dateNumber={day.number}
            isCurrentDay={day.number === new Date().getDate() && monthIdx === new Date().getMonth()}
            isSelected={day.isSelected} 
            range={day.range}
            isAvailable="not"
            onClick={() => handleDateClick && handleDateClick(day, monthIdx)} 
          />
        ))}
      </DaysContainer>
    </div>
  );
}
