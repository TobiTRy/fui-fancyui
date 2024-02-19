import { useEffect, useState } from 'react';

import { WeekDays } from '@/components/atoms/WeekDays';
import { YearSelector } from '@/components/atoms/YearSelector';
import { DateOutputFromTo } from '@/components/molecules/DateOutputFromTo';
import { Calendar, TDateArray } from '@/components/molecules/Calendar';

import { TFancyDatePicker } from '@/components/templates/FancyDatePicker/TFancyDatePicker.model';
import { DatePickerContainer, WrapperYearSelector } from './FancyDatePicker.style';
import { clampLayer } from '@/utils/functions/clampLayer';
import { useDebounce } from '@/utils/hooks/useDebounce';

// --------------------------------------------------------------------------- //
// --------- A Datepicker thats really fancy with some advanced logic -------- //
// --------------------------------------------------------------------------- //
export default function FancyDatePicker(props: TFancyDatePicker) {
  const {
    rangeCalendar = false,
    handler,
    monthYearInView,
    disabledDateSetting,
    externalData,
    themeType,
    layer,
    yearSelector,
    startWeekOn = 1,
  } = props;

  const [selectedDate, setSelectedDate] = useState<TDateArray>([undefined, undefined]);
  const [currentlySelectedFromOrTo, setCurrentlySelectedFromOrTo] = useState<'from' | 'to'>('from');
  const [currentlyMonthYearInView, setCurrentlyMonthYearInView] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  //
  const swapedTheme = themeType ? (themeType === 'primary' ? 'secondary' : 'primary') : undefined;

  // handle date change
  const handleDateChange = (changedDate: TDateArray) => {
    handler?.(changedDate);
    setSelectedDate(changedDate);
  };

  // switch between from and to date
  const handleSwitchFromTo = (change: 'from' | 'to') => {
    setCurrentlySelectedFromOrTo(change);
  };

  const debounceYearFunc = useDebounce((year: number) => {
    console.log(year);
    setCurrentlyMonthYearInView({ month: currentlyMonthYearInView.month, year });
  }, 100);

  // update the state if the selectedYear changes
  useEffect(() => {
    if (monthYearInView) setCurrentlyMonthYearInView(monthYearInView);
  }, [monthYearInView]);

  // update the state if the selectedYear changes

  return (
    <DatePickerContainer $themeType={themeType} $layer={layer}>
      <WrapperYearSelector>
        <YearSelector
          borderRadius="complete"
          selectedYear={currentlyMonthYearInView.year}
          handler={(year: number) => debounceYearFunc(year)}
          themeType={'transparent'}
          ariaTextLeftArrow={yearSelector?.ariaTextLeftArrow || 'go one year back'}
          ariaTextRightArrow={yearSelector?.ariaTextRightArrow || 'go one year forward'}
        />
      </WrapperYearSelector>

      <WeekDays themeType={swapedTheme} layer={layer} />
      <Calendar
        startWeekOnDay={startWeekOn}
        rangeCalendar={rangeCalendar}
        externalMonthsWithDays={externalData}
        selectedYearMonth={currentlyMonthYearInView}
        handleDates={handleDateChange}
        currentInViewhandler={(date) => setCurrentlyMonthYearInView(date)}
        selectFromTo={currentlySelectedFromOrTo ?? 'from'}
        handleSwitchFromTo={handleSwitchFromTo}
        disabledDateSetting={disabledDateSetting}
        themeType={swapedTheme}
        layer={layer}
      />
      {rangeCalendar && (
        <DateOutputFromTo
          themeType={themeType}
          layer={layer ? clampLayer(layer + 1) : undefined}
          whichIsSelecting={currentlySelectedFromOrTo}
          handleFromTo={handleSwitchFromTo}
          dateFrom={Array.isArray(selectedDate) ? selectedDate[0] : undefined}
          dateTo={Array.isArray(selectedDate) ? selectedDate[1] : undefined}
        />
      )}
    </DatePickerContainer>
  );
}
