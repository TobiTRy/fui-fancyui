import React, { useEffect, useState, useRef } from 'react';

import { MonthContainer, StyledCalendar } from './RangeCalendar.style';

import MonthWithDays from '../MonthWithDays/MonthWithDays';
import useSelectedDates from './helperFunctions/useSelectedDates';
import useVisibleMonths from './helperFunctions/useVisibleMonths';

import { IDisabledDateSettings } from '../MonthWithDays/utils/Interfaces/IDisableDateSettings.model';
import { IExternalMonthWithDays } from '../MonthWithDays/utils/Interfaces/IExternalMonthWithDays.model';
import { IDateArray } from './IDateArray.model';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';

interface ICalendar {
  selectedYear?: number;
  rangeCalendar: boolean;
  handler?: (date: IDateArray) => void;
  selectFromTo?: 'from' | 'to' | undefined;
  handleSwitchFromTo?: (change: 'from' | 'to') => void;
  disabledDateSetting?: IDisabledDateSettings;
  externalMonthsWithDays?: IExternalMonthWithDays[];
  themeType?: TThemeTypes;
  layer?: TLayer;
}
// --------------------------------------------------------------------------- //
// -------- The main calenader wich can select a date, or date range --------- //
// --------------------------------------------------------------------------- //
export default function RangeCalendar(props: ICalendar) {
  const {
    selectedYear = new Date().getFullYear(),
    handler,
    selectFromTo,
    handleSwitchFromTo,
    disabledDateSetting,
    externalMonthsWithDays,
    rangeCalendar = false,
    themeType,
    layer,
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
    // compare the year of the external state with the selected year
    if (externalMonthsWithDays) {
      // create a array for each month of a year and fill it with the external state
      const monthsOfYearExternal = new Array(12).fill({});
      externalMonthsWithDays.forEach((month) => {
        monthsOfYearExternal[month.monthIdx] = month;
      });
      setExternalMonthsData(monthsOfYearExternal);
    } else {
      setExternalMonthsData([]);
    }
  }, [selectedYear, externalMonthsWithDays]);

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
              themeType={themeType}
              layer={layer}
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
  rangeCalendar: false,
};
