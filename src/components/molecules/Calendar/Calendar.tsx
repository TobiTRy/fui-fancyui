'use client';

import { RefObject, useEffect, useMemo, useRef, useState } from 'react';

import { MonthContainer, StyledCalendar } from './Calendar.style';

import { MonthWithDays } from '@/components/molecules/MonthWithDays';
import useSelectedDates from './utils/useSelectedDates/useSelectedDates';

import { TCalendar, TYearMonth } from '@/components/molecules/Calendar/TCalendar.model';
import { FancyVirtualScroll } from '@/components/shared/FancyVirtualScroll';
import { useDebounce } from '@/utils/hooks/useDebounce';
import { generateArrayWithMonthYearRange } from './utils/generateArrayWithMonthYearRange/generateArrayWithMonthYearRange';

// --------------------------------------------------------------------------- //
// -------- The main calenader wich can select a date, or date range --------- //
// --------------------------------------------------------------------------- //
export default function Calendar(props: TCalendar) {
  const {
    selectedYearMonth = { year: new Date().getFullYear() + 5, month: new Date().getMonth() },
    startCalendarDate = { year: new Date().getFullYear(), month: 0 },
    endCalendarDate = { year: new Date().getFullYear() + 5, month: new Date().getMonth() },
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

  // the ref to the container of the calendar
  const ContainerRef: RefObject<HTMLDivElement> = useRef(null);

  // handle the selection of the date or date range
  const { selectedDates, handleDateClick } = useSelectedDates({
    selectFromTo,
    handleSwitchFromTo,
    handleDates,
    rangeCalendar,
  });

  // generate the array with the months of the selected year and the year before and after (smooth scrolling)
  const monthYearRange: TYearMonth[] = useMemo(
    () =>
      generateArrayWithMonthYearRange(
        {
          year: startCalendarDate.year,
          month: startCalendarDate.month,
        },
        {
          year: endCalendarDate.year,
          month: endCalendarDate.month,
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // find the index of the selected month in the array with the months
  const toScrolledMonthIdx = useMemo(() => {
    return monthYearRange.findIndex((month) => {
      return month.month === selectedYearMonth?.month && month.year === selectedYearMonth.year;
    });
  }, [selectedYearMonth, monthYearRange]);

  // the current month in view (the month that is in the middle of the container)
  const [currentMonthInView, setCurrentMonthInView] = useState(toScrolledMonthIdx);

  // --------------------------------------------------------------------------- //
  // -------- The Logic down there handles the scrolling on the claendar ------- //
  // --------------------------------------------------------------------------- //
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // debounce the scrolling
  // we need to debounce the scrolling because the scroll event is triggered multiple times
  // it also triggers wehn it is scrolling automaticly
  // it also triggers when the user is not scrolling but the scroll position is changing (like a long fast scroll on iphone)
  // wee need the debounce becasue it needs time to stop the scrolling (like on a longscroll it slowly speeds down)
  const [debounceScrolling, cancleScrollDebounce] = useDebounce(() => {
    setIsScrolling(false);
  }, 200);

  // we need the following logic to make it possible to scroll the calendar with the mousewheel or the trackpad
  // but also make it possible to scroll the calendar with the touch event
  // a jump to the next year via the "selectedYearMonth" is not possible with the scrollsnap mandatory (it jumps only to the next month)
  // so we need to make the scrollsnap mandatory only when the user is scrolling
  // and make it proximity when the user is not scrolling (so it is possible to jump to the next year)

  // the best way to do this in my oppinion is to check if the user is "hovering" on the calendar and when its not
  // than he trys to change the year via the year selector and we need to make the scrollsnap proximity

  const toutchedContainer = () => {
    cancleScrollDebounce();
    setIsScrolling(true);
    setIsHovering(true);
  };

  // is called when the user stops beeing on the container
  // we need this to make it possible
  const toutchedEndContainer = () => {
    debounceScrolling();
    setIsHovering(false);
  };

  // this function is called when the user is scrolling
  const handleScroll = (isScrolling: boolean) => {
    // if the user is scrolling and is hovering on the calendar we need to make the scrollsnap mandatory
    if (isScrolling && isHovering) {
      setIsScrolling(true);
      return;
    }
    // if the user is scrolling and is not hovering on the calendar we need to make the scrollsnap proximity
    if (isScrolling && !isHovering) {
      debounceScrolling();
    }
  };

  // this useffect sends the current month in view to the parent component
  // it sends only when the user is not hovering on the calendar
  useEffect(() => {
    if (!isHovering) {
      debounceCurrentInView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMonthInView, isHovering, isScrolling]);

  const [debounceCurrentInView] = useDebounce(() => {
    currentInViewhandler?.(monthYearRange[currentMonthInView]);
  }, 100);

  return (
    <StyledCalendar ref={ContainerRef}>
      <FancyVirtualScroll
        containerHeight="300px"
        itemHeight={300}
        scrollSnap={isScrolling ? 'mandatory' : 'proximity'}
        firstItemIndexInView={toScrolledMonthIdx}
        currentFirstItemsInViewHandler={(idx) => setCurrentMonthInView(idx)}
        onScrollingStateChange={(isScrolling) => handleScroll(isScrolling)}
        attributesContainer={{
          onTouchStart: toutchedContainer,
          onTouchEnd: toutchedEndContainer,
          onMouseEnter: toutchedContainer,
          onMouseLeave: toutchedEndContainer,
          $externalStyle: {
            scrollBehavior: isScrolling ? 'smooth' : 'auto',
          },
        }}
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
