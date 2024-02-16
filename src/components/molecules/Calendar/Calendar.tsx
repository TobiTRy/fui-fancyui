import { RefObject, useEffect, useMemo, useRef, useState } from 'react';

import { MonthContainer, StyledCalendar } from './Calendar.style';

import { MonthWithDays } from '@/components/molecules/MonthWithDays';
import useSelectedDates from './utils/useSelectedDates/useSelectedDates';

import { TCalendar } from '@/components/molecules/Calendar/TCalendar.model';
import { scrollToElm } from '@/utils/functions/scrollToElementInContainer/scrollToElementInContainer';
import createMultiIntersectionObserver from '@/utils/hooks/useMiltiIntersectionObserver/multiplyIntersectionObserver';
import showAreaOfArray from '@/utils/hooks/useShowAreaOfArray/showAreaOfArray';
import { useDebounce } from '@/utils/hooks/useDebounce';
import VirtualScroll from '@/components/shared/VirtualScrolling/FancyVirtualScroll';

// --------------------------------------------------------------------------- //
// -------- The main calenader wich can select a date, or date range --------- //
// --------------------------------------------------------------------------- //
export default function Calendar(props: TCalendar) {
  const {
    selectedYearMonth,
    handleDates,
    selectFromTo,
    currentInViewhandler,
    handleSwitchFromTo,
    disabledDateSetting,
    externalMonthsWithDays,
    rangeCalendar = true,
    themeType,
    startWeekOn = 1,
    layer,
  } = props;

  // --------------------------------------------------------------------------- //
  // ---- This area of the component handles the rendering of the months ------- //
  // --------------------------------------------------------------------------- //
  //ref for the main container (wrapper)
  const [selectedYearMonthState, setSelectedYearMonthState] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });
  const ContainerRef: RefObject<HTMLDivElement> = useRef(null);
  // generate the array with the months of the selected year and the year before and after (smooth scrolling)
  const threeYearsArray = useMemo(
    () => generateArrayWithMontsAndYear(selectedYearMonthState?.year),
    [selectedYearMonthState.year]
  );

  // ref for the months
  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);

  // const debounceMonthChange = useDebounce((index: number) => {
  //   console.log('debounce', index);
  // }, 100);

  // this hook is for the intersection observer to get the current month in view and set the state
  // this is used to render new months before they are in view (lazy loading)
  useEffect(() => {
    // Initialize the intersection observer and store the cleanup function#
    const cleanupObserver = createMultiIntersectionObserver({
      elements: monthRefs.current?.filter(Boolean), // Convert monthRefs to a format suitable for the observer
      callback: (el) => {
        console.log(el);
        const dataMonth = parseInt(el.getAttribute('data-month') || '0');
        const dataYear = parseInt(el.getAttribute('data-year') || '0');
        if (dataYear !== selectedYearMonthState.year || dataMonth !== selectedYearMonthState.month) {
          //debounceObserver({ year: dataYear, month: dataMonth });
        }
      },

      options: { threshold: 0.7, root: ContainerRef.current },
    });

    // Call the cleanup function on component unmount or before re-running this effect
    return () => {
      if (cleanupObserver) {
        cleanupObserver();
      }
    };
  }, [selectedYearMonthState, currentInViewhandler]);

  // --------------------------------------------------------------------------- //
  // -- handle the scrolling to the current month and the slection of the dates- //
  // --------------------------------------------------------------------------- //
  //Scroll to current month on mount
  useEffect(() => {
    console.log(
      'mooiin',
      threeYearsArray.findIndex((month) => {
        return month.month === selectedYearMonth?.month && month.year === selectedYearMonth.year;
      })
    );
  }, []);

  useEffect(() => {
    if (selectedYearMonth) setSelectedYearMonthState(selectedYearMonth);
  }, [selectedYearMonth]);

  console.log(monthRefs.current);

  // handle the selection of the date or date range
  const { selectedDates, handleDateClick } = useSelectedDates({
    selectFromTo,
    handleSwitchFromTo,
    handleDates,
    rangeCalendar,
  });

  const call = (index: number) => {
    console.log('call', index);
  };

  return (
    <StyledCalendar ref={ContainerRef}>
      <VirtualScroll
        containerHeight="300px"
        itemHeight={300}
        initialItemIndex={13}
        currentItemsInView={(idx) => call(idx)}
      >
        {threeYearsArray.map((monthWithYear, index) => {
          return (
            <MonthContainer
              key={index}
              data-month={monthWithYear.month}
              data-year={monthWithYear.year}
              style={{
                scrollSnapAlign: 'start',
              }}
              ref={(ref) => {
                monthRefs.current[monthWithYear.month] = ref;
              }}
            >
              <MonthWithDays
                disabledDateSetting={disabledDateSetting}
                monthIdx={monthWithYear.month}
                startWeekOn={startWeekOn}
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
      </VirtualScroll>
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
