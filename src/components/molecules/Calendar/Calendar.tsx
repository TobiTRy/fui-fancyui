import { RefObject, useEffect, useMemo, useRef, useState } from 'react';

import { MonthContainer, StyledCalendar } from './Calendar.style';

import { MonthWithDays } from '@/components/molecules/MonthWithDays';
import useSelectedDates from './utils/useSelectedDates/useSelectedDates';

import { TCalendar } from '@/components/molecules/Calendar/TCalendar.model';
import { scrollToElm } from '@/utils/functions/scrollToElementInContainer/scrollToElementInContainer';
import createMultiIntersectionObserver from '@/utils/hooks/useMiltiIntersectionObserver/multiplyIntersectionObserver';
import showAreaOfArray from '@/utils/hooks/useShowAreaOfArray/showAreaOfArray';
import useDebounce from '@/utils/hooks/useDebounce/useDebounce';

// --------------------------------------------------------------------------- //
// -------- The main calenader wich can select a date, or date range --------- //
// --------------------------------------------------------------------------- //
export default function Calendar(props: TCalendar) {
  const {
    selectedYearMonth = { year: new Date().getFullYear(), month: new Date().getMonth() },
    handleDates,
    selectFromTo,
    currentInViewhandler,
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

  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  // generate the array with the months of the selected year and the year before and after (smooth scrolling)
  const threeYearsArray = useMemo(
    () => generateArrayWithMontsAndYear(selectedYearMonth?.year),
    [selectedYearMonth?.year]
  );
  // get the area of the array( currenrt month and the month before and after)
  // this is used to render the months (in this setting only three)
  const areaItems = useMemo(
    () =>
      showAreaOfArray({
        areaBackward: 1,
        areaForward: 1,
        areaStart: threeYearsArray.findIndex(
          (month) => month.month === selectedYearMonth?.month && month.year === selectedYearMonth.year
        ),
        array: threeYearsArray,
      }),

    [threeYearsArray, selectedYearMonth]
  );

  // ref for the months
  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);

  // this hook is for the intersection observer to get the current month in view and set the state
  // this is used to render new months before they are in view (lazy loading)
  useEffect(() => {
    // Initialize the intersection observer and store the cleanup function#
    setTimeout(() => {
      const cleanupObserver = createMultiIntersectionObserver({
        elements: monthRefs.current.filter(Boolean), // Convert monthRefs to a format suitable for the observer
        callback: (el) => {
          const dataMonth = parseInt(el.getAttribute('data-month') || '0');
          const dataYear = parseInt(el.getAttribute('data-year') || '0');
          if (dataYear !== selectedYearMonth.year || dataMonth !== selectedYearMonth.month) {
            setTimeout(() => {
              console.log('in view', el);
              currentInViewhandler?.({ year: dataYear, month: dataMonth });
            }, 0);
          }
        },

        options: { threshold: 0.75, root: ContainerRef.current },
      });

      // Call the cleanup function on component unmount or before re-running this effect
      return () => {
        if (cleanupObserver) {
          cleanupObserver();
        }
      };
    }, 100);
  }, [selectedYearMonth, currentInViewhandler]);

  // --------------------------------------------------------------------------- //
  // -- handle the scrolling to the current month and the slection of the dates- //
  // --------------------------------------------------------------------------- //
  // Scroll to current month on mount and set isScrolled to true
  useEffect(() => {
    if (monthRefs.current.length > 0 && !isScrolling) {
      scrollToElm(ContainerRef.current as HTMLElement, monthRefs.current[selectedYearMonth?.month] as HTMLElement, 0);
    }
  }, [selectedYearMonth, isScrolling]);

  // handle the selection of the date or date range
  const { selectedDates, handleDateClick } = useSelectedDates({
    selectFromTo,
    handleSwitchFromTo,
    handleDates,
    rangeCalendar,
  });

  const debouncedSetScrollingFalse = useDebounce(() => setIsScrolling(false), 1000);
  const handleIsScrolling = () => {
    setIsScrolling(true); // Sofort setzen, um Scroll-Start anzuzeigen
    debouncedSetScrollingFalse(); // Debounce das Zurücksetzen auf false
  };

  return (
    <StyledCalendar ref={ContainerRef} onScroll={handleIsScrolling}>
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
