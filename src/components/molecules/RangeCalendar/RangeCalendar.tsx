import { RefObject, useEffect, useMemo, useRef, useState } from 'react';

import { MonthContainer, StyledCalendar } from './RangeCalendar.style';

import MonthWithDays from '../MonthWithDays/MonthWithDays';
import useSelectedDates from './helperFunctions/useSelectedDates';

import { IExternalMonthWithDays } from '@/components/molecules/MonthWithDays/utils/types/IExternalMonthWithDays.model';
import { TRangeCalendar } from '@/components/molecules/RangeCalendar/TRangeCalendar.model';
import { scrollToElm } from '@/utils/functions/scrollToElementInContainer/scrollToElementInContainer';
import { useShowAreaOfArray } from '@/utils/hooks/useShowAreaOfArray';
import { useIntersectionObserver } from '@/utils/hooks/useIntersectionObserver';

// --------------------------------------------------------------------------- //
// -------- The main calenader wich can select a date, or date range --------- //
// --------------------------------------------------------------------------- //
export default function RangeCalendar(props: TRangeCalendar) {
  const {
    selectedYear = new Date().getFullYear(),
    handleDates,
    selectFromTo,
    handleSwitchFromTo,
    disabledDateSetting,
    externalMonthsWithDays,
    rangeCalendar = false,
    themeType,
    layer,
  } = props;
  const ContainerRef: RefObject<HTMLDivElement> = useRef(null);
  const [monthDummyArray] = useState<number[]>(Array.from({ length: 12 }, (_, index) => index));

  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastRef = useRef<HTMLDivElement | null>(null);

  const isVisible = useIntersectionObserver(lastRef);

  const { areaItems } = useShowAreaOfArray({
    areaBackward: 1,
    areaForward: 1,
    areaStart: new Date().getMonth(),
    array: monthDummyArray,
  });

  const [externalMonthsData, setExternalMonthsData] = useState<IExternalMonthWithDays[]>([]);
  // hooks for selected dates and visible months
  const { selectedDates, handleDateClick } = useSelectedDates(
    selectedYear,
    selectFromTo,
    handleSwitchFromTo,
    handleDates,
    rangeCalendar
  );

  // Scroll to current month on mount and set isScrolled to true
  useEffect(() => {
    if (monthRefs.current.length > 0) {
      scrollToElm(ContainerRef.current as HTMLElement, monthRefs.current[new Date().getMonth()] as HTMLElement, 0);
    }
  }, [areaItems]);

  // this handles the external state of the months with days
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
      {areaItems.length > 0 &&
        areaItems.map((monthIdx) => {
          return (
            <MonthContainer
              key={monthIdx}
              data-month={monthIdx}
              ref={(ref) => {
                monthRefs.current[monthIdx] = ref;
                if (monthIdx === areaItems[areaItems.length - 1]) {
                  lastRef.current = ref;
                }
              }}
            >
              <MonthWithDays
                disabledDateSetting={disabledDateSetting}
                monthIdx={monthIdx}
                externalMonthWithDays={externalMonthsData[monthIdx]}
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
