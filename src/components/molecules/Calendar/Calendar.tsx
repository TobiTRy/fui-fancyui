import { RefObject, useEffect, useMemo, useRef, useState } from 'react';

import { MonthContainer, StyledCalendar } from './Calendar.style';

import { MonthWithDays } from '@/components/molecules/MonthWithDays';
import useSelectedDates from './utils/useSelectedDates/useSelectedDates';

import { TCalendar } from '@/components/molecules/Calendar/TCalendar.model';
import { useShowAreaOfArray } from '@/utils/hooks/useShowAreaOfArray';
import { useMultiIntersectionObserver } from '@/utils/hooks/useMiltiIntersectionObserver';
import { scrollToElm } from '@/utils/functions/scrollToElementInContainer/scrollToElementInContainer';

// --------------------------------------------------------------------------- //
// -------- The main calenader wich can select a date, or date range --------- //
// --------------------------------------------------------------------------- //
export default function Calendar(props: TCalendar) {
  const {
    selectedYear = new Date().getFullYear(),
    handleDates,
    selectFromTo,
    yearHandler,
    handleSwitchFromTo,
    disabledDateSetting,
    externalMonthsWithDays,
    rangeCalendar = true,
    themeType,
    layer,
  } = props;

  // --------------------------------------------------------------------------- //
  // ---- This area of the component handles the rendering of the months ------- //
  // --------------------------------------------------------------------------- //
  //ref for the main container (wrapper)
  const ContainerRef: RefObject<HTMLDivElement> = useRef(null);

  // generate the array with the months of the selected year and the year before and after (smooth scrolling)
  const threeYearsArray = useMemo(() => generateArrayWithMontsAndYear(selectedYear), [selectedYear]);

  // state for the current month in view (used for lazy loading) {year: 2024, month: 10}
  const [currentInViewYearMonth, setCurrentInViewYearMonth] = useState({
    year: selectedYear,
    month: new Date().getMonth(),
  });

  // get the area of the array( currenrt month and the month before and after)
  // this is used to render the months (in this setting only three)
  const { areaItems } = useShowAreaOfArray({
    areaBackward: 1,
    areaForward: 1,
    areaStart: threeYearsArray.findIndex(
      (month) => month.month === currentInViewYearMonth.month && month.year === currentInViewYearMonth.year
    ),
    array: threeYearsArray,
  });

  // ref for the months
  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);
  // this hook is for the intersection observer to get the current month in view and set the state
  // this is used to render new months before they are in view (lazy loading)
  useMultiIntersectionObserver({
    elements: monthRefs.current,
    callback: (el) => {
      if (el) {
        const dataMonthAttribute = parseInt(el.getAttribute('data-month') || '0');
        const dataYearAttribute = parseInt(el.getAttribute('data-year') || '0');

        // if the next month is in view, set the selected month to the next month
        if (dataYearAttribute !== currentInViewYearMonth.year || dataMonthAttribute !== currentInViewYearMonth.month) {
          setCurrentInViewYearMonth({ year: dataYearAttribute, month: dataMonthAttribute });
        }

        // if the next year is in view, set the selected year to the next year
        if (dataYearAttribute && dataYearAttribute > selectedYear) {
          yearHandler?.(dataYearAttribute);
        } else if (dataYearAttribute && dataYearAttribute < selectedYear) {
          yearHandler?.(dataYearAttribute);
        }
      }
    },
    options: {
      threshold: 0.6, // is the smoothest setting
    },
  });

  // --------------------------------------------------------------------------- //
  // -- handle the scrolling to the current month and the slection of the dates- //
  // --------------------------------------------------------------------------- //

  // Scroll to current month on mount and set isScrolled to true
  useEffect(() => {
    if (monthRefs.current.length > 0) {
      scrollToElm(ContainerRef.current as HTMLElement, monthRefs.current[new Date().getMonth()] as HTMLElement, 0);
    }
  }, []);

  // handle the selection of the date or date range
  const { selectedDates, handleDateClick } = useSelectedDates({
    selectFromTo,
    handleSwitchFromTo,
    handleDates,
    rangeCalendar,
  });

  return (
    <StyledCalendar ref={ContainerRef}>
      {areaItems.length > 0 &&
        areaItems.map((monthWithYear) => {
          return (
            <MonthContainer
              key={monthWithYear.month + monthWithYear.year}
              data-month={monthWithYear.month}
              data-year={monthWithYear.year}
              ref={(ref) => {
                monthRefs.current[monthWithYear.month] = ref;
              }}
            >
              <MonthWithDays
                disabledDateSetting={disabledDateSetting}
                monthIdx={monthWithYear.month}
                externalMonthWithDays={externalMonthsWithDays?.[`${monthWithYear.year}`]?.find(
                  (months) => months.monthIdx === monthWithYear.month
                )}
                year={monthWithYear.year}
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

const generateArrayWithMontsAndYear = (currentYear: number) => {
  const generateOneYearArray = (year: number) =>
    Array.from({ length: 12 }, (_, index) => {
      return {
        month: index,
        year: year,
      };
    });

  return [
    ...generateOneYearArray(currentYear - 1),
    ...generateOneYearArray(currentYear),
    ...generateOneYearArray(currentYear + 1),
  ];
};
