import React, { useEffect, useState, useRef } from 'react';
import { MonthContainer, StyledCalendar } from './RangeCalendar.style';

import MonthWithDays from '../MonthWithDays/MonthWithDays';
import useSelectedDates from './useSelectedDates';
import useVisibleMonths from './useVisibleMonths';

import { IDisabledDateSettings } from '../MonthWithDays/IDisableDateSettings.model';
import IExternalMonthWithDays from '../MonthWithDays/IExternalMonthWithDays.model';
import { IDateArray } from './IDateArray.model';



const externalMonth: IExternalMonthWithDays[] = [
  {
    monthIdx: 7,
    year: 2023,
    dates: [
      {
        date: 1,
        isAvilable: 'not',
      },
    ],
  },
  {
    monthIdx: 5,
    year: 2023,
    dates: [
      {
        date: 1,
        isAvilable: 'not',
      },
      {
        date: 2,
        isAvilable: 'not',
      },
      {
        date: 3,
        isAvilable: 'partially',
      },
      
    ],
  },
];

// --------------------------------------------------------------------------- //
// -------- The main calenader wich can select a date, or date range ---------- //
// --------------------------------------------------------------------------- //
interface ICalendar {
  selectedYear?: number;
  rangeCalendar: boolean;
  handler?: (date: IDateArray) => void;
  selectFromTo?: 'from' | 'to' | undefined;
  handleSwitchFromTo?: (change: 'from' | 'to') => void;
  disabledDateSetting?: IDisabledDateSettings;
  externalMonthWithDays?: IExternalMonthWithDays[];
}
export default function RangeCalendar(props: ICalendar) {
  const {
    selectedYear = new Date().getFullYear(),
    handler,
    selectFromTo,
    handleSwitchFromTo,
    disabledDateSetting,
    externalMonthWithDays,
    rangeCalendar
  } = props;
  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [externalMonthsData, setExternalMonthsData] = useState<IExternalMonthWithDays[]>([]);
  // hooks for selected dates and visible months
  const { visibleMonths, firstMonthRef, lastMonthRef } = useVisibleMonths(isScrolled);
  const { selectedDates, handleDateClick } = useSelectedDates(selectedYear, selectFromTo, handleSwitchFromTo, handler, rangeCalendar);

  // Scroll to current month on mount and set isScrolled to true
  useEffect(() => {
    const currentMonth = new Date().getMonth();
    monthRefs.current[currentMonth]?.scrollIntoView();
    setTimeout(() => {
      setIsScrolled(true);
    }, 300);
  }, []);

  useEffect(() => {
    if (externalMonthWithDays) {
      // create a array for each month of a year and fill it with the external state
      const monthsOfYearExternal = new Array(12).fill({});
      externalMonthWithDays.forEach((month) => {
        monthsOfYearExternal[month.monthIdx] = month as IExternalMonthWithDays; 
      });;
      setExternalMonthsData(monthsOfYearExternal);
    }
  }, []);

  return (
    <StyledCalendar>
      {visibleMonths.map((MonthIdx, idx) => {
        return (
          <MonthContainer
            key={MonthIdx}
            ref={(ref: HTMLDivElement) => {
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
              disabledDateSetting={disabledDateSetting}
              monthIdx={MonthIdx}
              externalMonthWithDays={externalMonthsData[MonthIdx]}
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

RangeCalendar.defaultProps = {
  externalMonthWithDays: externalMonth,
  rangeCalendar: false,
}