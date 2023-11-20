import React, { useEffect, useMemo, useState } from 'react';

import DateNumberWithStatus from '../DateNumberWithStatus/DateNumberWithStatus';
import { DateNumber, DaysContainer } from './MonthWithDays.style';
import { IDateArray } from '../RangeCalendar/IDateArray.model';
import { IDisabledDateSettings } from './IDisableDateSettings.model';
import Typography from '../../Atoms/Typography/Typography';
import Day from './day.model';
import createDaysOfMonth from './helperFunctions/createDaysOfMonth';
import { IDateWithExternalState, IExternalMonthWithDays } from './IExternalMonthWithDays.model';
import { TUiColors } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from '@/Components/UI/Interface/TLayer';

const getFirstDayOfMonth = (month: number, year: number): number => {
  return new Date(year, month - 1, 1).getDay() || 7;
};

const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
};

interface IMonthWithDays {
  monthIdx: number;
  year: number;
  handleDateClick?: (day: Day, monthIdx: number) => void;
  isRangePicking?: boolean;
  selectedDates: IDateArray;
  externalMonthWithDays?: IExternalMonthWithDays;
  disabledDateSetting?: IDisabledDateSettings;
  themeType?: TUiColors;
  layer?: TLayer;
}
// --------------------------------------------------------------------------- //
// --------- This Component generates a single month with the dates ---------- //
// --------------------------------------------------------------------------- //
export default function MonthWithDays(props: IMonthWithDays) {
  const { monthIdx, year, handleDateClick, selectedDates, isRangePicking, disabledDateSetting, externalMonthWithDays, layer, themeType } =
    props;
  const [monthDays, setMonthDays] = useState<IDateWithExternalState[]>([]);

  // Create the days of the month and memoize them
  const month = useMemo(() => {
    const month = {
      name: new Date(0, monthIdx + 1, 0).toLocaleString('default', { month: 'long' }),
      days: createDaysOfMonth({
        monthIdx,
        year,
        selectedDates,
        disabledDateSetting,
        isRangePicking,
        externalMonthWithDays: monthDays,
      }),
    };
    return month;
  }, [monthIdx, selectedDates, isRangePicking, monthDays, year, disabledDateSetting]);

  useEffect(() => {
    if (externalMonthWithDays) {
      // create a array for each month of a year and fill it with the external state
      const daysOfMonth = Array.from({ length: getDaysInMonth(monthIdx + 1, year) });
      externalMonthWithDays?.dates?.forEach((date) => {
        daysOfMonth[date.date] = date;
      });

      setMonthDays(daysOfMonth as IDateWithExternalState[]);
    }
  }, [externalMonthWithDays, year, monthIdx]);

  return (
    <div>
      <Typography type="h2" tabIndex={0} aria-label={`${month.name} ${year}`}>
        {month.name}
      </Typography>
      <DaysContainer>
        {/* Generate the empty spaces for the start of the month  */}
        {Array.from({ length: getFirstDayOfMonth(monthIdx + 1, year) - 1 }, (_, i) => (
          <DateNumber key={`empty-${i}`} />
        ))}
        {/* Generate the days of the month */}
        {month.days.map((day) => (
          <DateNumberWithStatus
            key={day.number}
            themeType={themeType}
            layer={layer}
            disabled={day.disabled}
            dateNumber={day.number}
            isCurrentDay={day.number === new Date().getDate() && monthIdx === new Date().getMonth() && year === new Date().getFullYear()}
            isSelected={day.isSelected}
            range={day.range}
            isAvailable={day.isAvilable || 'completly'}
            onClick={() => handleDateClick && handleDateClick(day, monthIdx)}
          />
        ))}
      </DaysContainer>
    </div>
  );
}
