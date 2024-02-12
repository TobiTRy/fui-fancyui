import { useEffect, useState } from 'react';

import { WeekDays } from '@/components/atoms/WeekDays';
import { YearSelector } from '@/components/atoms/YearSelector';
import { DateOutputFromTo } from '@/components/molecules/DateOutputFromTo';
import { Calendar, TDateArray } from '@/components/molecules/Calendar';

import { TFancyDatePicker } from '@/components/templates/FancyDatePicker/TFancyDatePicker.model';
import { DatePickerContainer, WrapperYearSelector } from './FancyDatePicker.style';
import { clampLayer } from '@/utils/functions/clampLayer';
import { debounce } from '@/utils/functions/debounce';

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
  } = props;

  const [selectedDate, setSelectedDate] = useState<TDateArray>([undefined, undefined]);
  const [currentlySelectedFromOrTo, setCurrentlySelectedFromOrTo] = useState<'from' | 'to'>('from');
  const [currentlyMonthYearInView, setCurrentlyMonthYearInView] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
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

  // debounce the year change on the year selector
  const debounceYearChangeOnYearSelect = (year: number) => {
    const debounced = debounce(() => {
      setCurrentlyMonthYearInView({ month: currentlyMonthYearInView.month, year: year });
    }, 200);
    debounced();
  };
  // update the state if the selectedYear changes
  useEffect(() => {
    if (monthYearInView) setCurrentlyMonthYearInView(monthYearInView);
  }, [monthYearInView]);

  return (
    <DatePickerContainer $themeType={themeType} $layer={layer}>
      <WrapperYearSelector>
        <YearSelector
          borderRadius="complete"
          selectedYear={currentlyMonthYearInView.year}
          handler={(year: number) => debounceYearChangeOnYearSelect(year)}
          themeType={'transparent'}
          ariaTextLeftArrow={yearSelector?.ariaTextLeftArrow || 'go one year back'}
          ariaTextRightArrow={yearSelector?.ariaTextRightArrow || 'go one year forward'}
        />
      </WrapperYearSelector>

      <WeekDays themeType={swapedTheme} layer={layer} />
      <Calendar
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
