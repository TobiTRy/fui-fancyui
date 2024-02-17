import { RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { MonthContainer, StyledCalendar } from './Calendar.style';

import { MonthWithDays } from '@/components/molecules/MonthWithDays';
import useSelectedDates from './utils/useSelectedDates/useSelectedDates';

import { TCalendar, TYearMonth } from '@/components/molecules/Calendar/TCalendar.model';
import { FancyVirtualScroll } from '@/components/shared/FancyVirtualScroll';

// --------------------------------------------------------------------------- //
// -------- The main calenader wich can select a date, or date range --------- //
// --------------------------------------------------------------------------- //
export default function Calendar(props: TCalendar) {
  const {
    selectedYearMonth = { year: new Date().getFullYear(), month: new Date().getMonth() },
    startCalendar = { year: new Date().getFullYear(), month: 0 },
    endCalendar = { year: new Date().getFullYear() + 1, month: new Date().getMonth() },
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
  //ref for the main container (wrapper)
  const [selectedYearMonthState, setSelectedYearMonthState] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });

  const ContainerRef: RefObject<HTMLDivElement> = useRef(null);
  // generate the array with the months of the selected year and the year before and after (smooth scrolling)
  const threeYearsArray = useMemo(
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
    []
  );

  // ref for the months
  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);

  // const debounceMonthChange = useDebounce((index: number) => {
  //   console.log('debounce', index);
  // }, 100);

  // --------------------------------------------------------------------------- //
  // -- handle the scrolling to the current month and the slection of the dates- //
  // --------------------------------------------------------------------------- //

  useEffect(() => {
    if (selectedYearMonth) setSelectedYearMonthState(selectedYearMonth);
  }, [selectedYearMonth]);

  // handle the selection of the date or date range
  const { selectedDates, handleDateClick } = useSelectedDates({
    selectFromTo,
    handleSwitchFromTo,
    handleDates,
    rangeCalendar,
  });

  const toScrolledMonthIdx = useMemo(() => {
    return threeYearsArray.findIndex((month) => {
      return month.month === selectedYearMonth?.month && month.year === selectedYearMonth.year;
    });
  }, []);

  const monthYearChangeHandler = (index: number) => {
    console.log(
      'call',
      threeYearsArray.findIndex((month) => {
        return month.month === selectedYearMonth?.month && month.year === selectedYearMonth.year;
      })
    );

    currentInViewhandler?.(threeYearsArray[index]);

    console.log(monthRefs.current);

    console.log(threeYearsArray[index]);
  };

  return (
    <StyledCalendar ref={ContainerRef}>
      <FancyVirtualScroll
        containerHeight="300px"
        itemHeight={300}
        initialItemIndex={toScrolledMonthIdx}
        currentItemsInView={(idx) => monthYearChangeHandler(idx)}
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

type TMonthYear = {
  month: number;
  year: number;
};

const generateArrayWithMonthYearRange = (start: TMonthYear, end: TMonthYear) => {
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

console.log(generateArrayWithMonthYearRange({ year: 2022, month: 0 }, { year: 2023, month: 0 }));
