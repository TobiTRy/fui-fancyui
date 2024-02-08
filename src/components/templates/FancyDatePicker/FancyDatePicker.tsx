import { useEffect, useState } from 'react';

import { WeekDays } from '@/components/atoms/WeekDays';
import { YearSelector } from '@/components/atoms/YearSelector';
import { DateOutputFromTo } from '@/components/molecules/DateOutputFromTo';
import { Calendar, TDateArray } from '@/components/molecules/Calendar';

import { TFancyDatePicker } from '@/components/templates/FancyDatePicker/TFancyDatePicker.model';
import { DatePickerContainer, WrapperYearSelector } from './FancyDatePicker.style';
import { clampLayer } from '@/utils/functions/clampLayer';

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
  } = props;

  const [selectedDate, setSelectedDate] = useState<TDateArray>([undefined, undefined]);
  const [currentlySelectedFromOrTo, setCurrentlySelectedFromOrTo] = useState<'from' | 'to'>('from');
  const [currentlyMonthYearInView, setCurrentlyMonthYearInView] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });
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

  // update the state if the selectedYear changes
  useEffect(() => {
    if (monthYearInView) setCurrentlyMonthYearInView(monthYearInView);
  }, [monthYearInView]);

  return (
    <DatePickerContainer $themeType={themeType} $layer={layer}>
      <WrapperYearSelector>
        <YearSelector
          selectedYear={currentlyMonthYearInView.year}
          handler={(year: number) => setCurrentlyMonthYearInView({ year, month: currentlyMonthYearInView.month })}
          themeType={swapedTheme}
          layer={layer}
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
