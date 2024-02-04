import { RefObject, useEffect, useRef, useState } from 'react';

import { MonthContainer, StyledCalendar } from './RangeCalendar.style';

import MonthWithDays from '../MonthWithDays/MonthWithDays';
import useSelectedDates from './helperFunctions/useSelectedDates';

import { IExternalMonthWithDays } from '@/components/molecules/MonthWithDays/utils/types/IExternalMonthWithDays.model';
import { TRangeCalendar } from '@/components/molecules/RangeCalendar/TRangeCalendar.model';
import { scrollToElm } from '@/utils/functions/scrollToElementInContainer/scrollToElementInContainer';

// --------------------------------------------------------------------------- //
// -------- The main calenader wich can select a date, or date range --------- //
// --------------------------------------------------------------------------- //
export default function RangeCalendar(props: TRangeCalendar) {
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

  const [externalMonthsData, setExternalMonthsData] = useState<IExternalMonthWithDays[]>([]);
  // hooks for selected dates and visible months
  const { selectedDates, handleDateClick } = useSelectedDates(
    selectedYear,
    selectFromTo,
    handleSwitchFromTo,
    handler,
    rangeCalendar
  );

  const ContainerRef: RefObject<HTMLDivElement> = useRef(null);

  // Scroll to current month on mount and set isScrolled to true
  useEffect(() => {
    const currentMonth = new Date().getMonth();
    scrollToElm(ContainerRef.current as HTMLElement, monthRefs.current[currentMonth] as HTMLElement, 0);
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
    <StyledCalendar ref={ContainerRef}>
      {Array.from({ length: 12 }).map((_, idx) => {
        return (
          <MonthContainer
            key={idx}
            ref={(ref: HTMLDivElement) => {
              monthRefs.current[idx] = ref;
            }}
          >
            <MonthWithDays
              disabledDateSetting={disabledDateSetting}
              monthIdx={idx}
              externalMonthWithDays={externalMonthsData[idx]}
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
