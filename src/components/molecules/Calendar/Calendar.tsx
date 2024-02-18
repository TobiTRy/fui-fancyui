import { RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { MonthContainer, StyledCalendar } from './Calendar.style';

import { MonthWithDays } from '@/components/molecules/MonthWithDays';
import useSelectedDates from './utils/useSelectedDates/useSelectedDates';

import { TCalendar, TYearMonth } from '@/components/molecules/Calendar/TCalendar.model';
import { FancyVirtualScroll } from '@/components/shared/FancyVirtualScroll';
import { useDebounce } from '@/utils/hooks/useDebounce';
import { debounce } from '@/utils/functions/debounce';

// --------------------------------------------------------------------------- //
// -------- The main calenader wich can select a date, or date range --------- //
// --------------------------------------------------------------------------- //
export default function Calendar(props: TCalendar) {
  const {
    selectedYearMonth = { year: new Date().getFullYear() + 5, month: new Date().getMonth() },
    startCalendar = { year: new Date().getFullYear(), month: 0 },
    endCalendar = { year: new Date().getFullYear() + 5, month: new Date().getMonth() },
    handleDates,
    selectFromTo,
    currentInViewhandler,
    handleSwitchFromTo,
    disabledDateSetting,
    externalMonthsWithDays,
    rangeCalendar = true,
    themeType,
    startWeekOnDay = 1,
    layer,
  } = props;

  // --------------------------------------------------------------------------- //
  // ---- This area of the component handles the rendering of the months ------- //
  // --------------------------------------------------------------------------- //
  const [currentInView, setCurrentInView] = useState<TYearMonth>({
    year: selectedYearMonth.year,
    month: selectedYearMonth.month,
  });
  const [yearChangeExternal, setYearChangeExternal] = useState(false);

  const ContainerRef: RefObject<HTMLDivElement> = useRef(null);
  // generate the array with the months of the selected year and the year before and after (smooth scrolling)
  const monthYearRange: TYearMonth[] = useMemo(
    () =>
      generateArrayWithMonthYearRange(
        {
          year: startCalendar.year,
          month: startCalendar.month,
        },
        {
          year: endCalendar.year,
          month: endCalendar.month,
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // --------------------------------------------------------------------------- //
  // -- handle the scrolling to the current month and the slection of the dates- //
  // --------------------------------------------------------------------------- //

  // handle the selection of the date or date range
  const { selectedDates, handleDateClick } = useSelectedDates({
    selectFromTo,
    handleSwitchFromTo,
    handleDates,
    rangeCalendar,
  });

  const toScrolledMonthIdx = useMemo(() => {
    return monthYearRange.findIndex((month) => {
      return month.month === currentInView?.month && month.year === currentInView.year;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentInView]);

  // const debouncedYearChange = useCallback(
  //   (yearMonth: TYearMonth) => {
  //     const debouncedFunc = debounce((yearMonth: TYearMonth) => {
  //       currentInViewhandler?.(yearMonth);
  //     }, 200);

  //     debouncedFunc(yearMonth);
  //   },
  //   []
  // );

  const monthYearChangeHandler = (index: number) => {
    if (yearChangeExternal) {
      return;
    }
    // debouncedYearChange(monthYearRange[index]);
  };

  useEffect(() => {
    console.log('useEffect', selectedYearMonth);
    if (selectedYearMonth.year !== currentInView.year) {
      setYearChangeExternal(true);
      setCurrentInView(selectedYearMonth);
    }

    setCurrentInView(selectedYearMonth);
  }, [selectedYearMonth]);

  return (
    <StyledCalendar ref={ContainerRef}>
      <FancyVirtualScroll
        containerHeight="300px"
        itemHeight={300}
        itemIndexInView={2}
        currentItemsInViewHandler={(idx) => monthYearChangeHandler(idx)}
      >
        {monthYearRange.map((monthWithYear, index) => {
          return (
            <MonthContainer key={index} data-month={monthWithYear.month} data-year={monthWithYear.year}>
              <MonthWithDays
                disabledDateSetting={disabledDateSetting}
                monthIdx={monthWithYear.month}
                startWeekOn={startWeekOnDay}
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
      </FancyVirtualScroll>
    </StyledCalendar>
  );
}

const generateArrayWithMonthYearRange = (start: TYearMonth, end: TYearMonth) => {
  const startDate = new Date(start.year, start.month);
  const endDate = new Date(end.year, end.month);

  const dateArray = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    dateArray.push({
      month: currentDate.getMonth(),
      year: currentDate.getFullYear(),
    });

    currentDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
  }

  return dateArray;
};
