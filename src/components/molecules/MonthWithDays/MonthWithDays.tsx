import { useEffect, useMemo, useState } from 'react';

import { Typography } from '@/components/atoms/Typography';
import { IDateWithExternalState } from './utils/types/IExternalMonthWithDays.model';

import { DateNumberWithStatus } from '@/components/molecules/DateNumberWithStatus';
import { TMonthWithDays } from '@/components/molecules/MonthWithDays/TMonthWithDays.model';
import { CalendarWrapper, DateNumber, DaysContainer } from './MonthWithDays.style';
import createDaysOfMonth from './utils/createDaysOfMonth';

// --------------------------------------------------------------------------- //
// --------- This Component generates a single month with the dates ---------- //
// --------------------------------------------------------------------------- //
export default function MonthWithDays(props: TMonthWithDays) {
  const {
    monthIdx,
    year,
    handleDateClick,
    selectedDates,
    isRangePicking,
    disabledDateSetting,
    externalMonthWithDays,
    layer,
    themeType,
  } = props;
  const [monthDays, setMonthDays] = useState<IDateWithExternalState[]>([]);

  // Create the days of the month and memoize them
  const month = useMemo(() => {
    const month = {
      name: new Date(0, monthIdx + 1, 0).toLocaleString('default', { month: 'long' }),
      weeks: createDaysOfMonth({
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

  console.log(month);

  useEffect(() => {
    if (externalMonthWithDays) {
      // create a array for the month of a year and fill it with the external state
      const daysOfMonth = Array.from({ length: getDaysInMonth(monthIdx + 1, year) });
      externalMonthWithDays?.dates?.forEach((date) => {
        daysOfMonth[date.date] = date;
      });

      setMonthDays(daysOfMonth as IDateWithExternalState[]);
    }
  }, [externalMonthWithDays, year, monthIdx]);

  return (
    <CalendarWrapper>
      <Typography
        variant="bodytextLg"
        fontWeight={'bold'}
        elType="span"
        tabIndex={0}
        className="month_with_days_and_headding"
        aria-label={`${month.name} ${year}`}
      >
        {month.name}
      </Typography>
      <DaysContainer>
        <tbody>
          {month.weeks.map((weeks, i) => (
            <tr key={i}>
              {/* Generate the days of the month */}
              {weeks.map((day, i) => {
                if (!day) return <DateNumber key={`empty-${i}`} />;
                {
                  /* Generate the empty spaces for the start of the month  */
                }
                return (
                  <DateNumberWithStatus
                    key={day.number}
                    themeType={themeType}
                    layer={layer}
                    disabled={day.disabled}
                    dateNumber={day.number}
                    isCurrentDay={
                      day.number === new Date().getDate() &&
                      monthIdx === new Date().getMonth() &&
                      year === new Date().getFullYear()
                    }
                    isSelected={day.isSelected}
                    range={day.range}
                    isAvailable={day.isAvilable || 'completly'}
                    onClick={() => handleDateClick && handleDateClick(day, monthIdx, year)}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </DaysContainer>
    </CalendarWrapper>
  );
}

// --------------------------------------------------------------------------- //
// ------------------------ Some helperfunctions ----------------------------- //
// --------------------------------------------------------------------------- //

const getFirstDayOfMonth = (month: number, year: number): number => {
  return new Date(year, month - 1, 1).getDay() || 7;
};

const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
};
