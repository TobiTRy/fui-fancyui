import { useEffect, useState } from 'react';

import { WeekDays } from '@/components/atoms/WeekDays';
import { YearSelector } from '@/components/atoms/YearSelector';
import { DateOutputFromTo } from '@/components/molecules/DateOutputFromTo';
import { RangeCalendar } from '@/components/molecules/RangeCalendar';
import { IDateArray } from '@/components/molecules/RangeCalendar/IDateArray.model';

import { TFancyDatePicker } from '@/components/organisms/FancyDatePicker/TFancyDatePicker.model';
import { DatePickerContainer, WrapperWeekdays, WrapperYearSelector } from './FancyDatePicker.style';
import { clampLayer } from '@/utils/functions/clampLayer';

// --------------------------------------------------------------------------- //
// --------- A Datepicker thats really fancy with some advanced logic -------- //
// --------------------------------------------------------------------------- //
export default function FancyDatePicker(props: TFancyDatePicker) {
  const { rangeCalendar = true, handler, selectedYear, disabledDateSetting, externalData, themeType, layer } = props;

  const [selectedDate, setSelectedDate] = useState<IDateArray>([undefined, undefined]);
  const [currentlySelectedFromOrTo, setCurrentlySelectedFromOrTo] = useState<'from' | 'to'>('from');
  const [currentlySelectedYear, setCurrentlySelectedYear] = useState<number>(new Date().getFullYear());
  const swapedTheme = themeType ? (themeType === 'primary' ? 'secondary' : 'primary') : undefined;

  // handle date change
  const handleDateChange = (changedDate: IDateArray) => {
    handler?.(changedDate);
    setSelectedDate(changedDate);
  };

  // switch between from and to date
  const handleSwitchFromTo = (change: 'from' | 'to') => {
    setCurrentlySelectedFromOrTo(change);
  };

  // update the state if the selectedYear changes
  useEffect(() => {
    if (selectedYear) setCurrentlySelectedYear(selectedYear);
  }, [selectedYear]);

  return (
    <DatePickerContainer $themeType={themeType} $layer={layer}>
      <WrapperYearSelector>
        <YearSelector
          selectedYear={currentlySelectedYear}
          handler={(year: number) => setCurrentlySelectedYear(year)}
          themeType={swapedTheme}
          layer={layer}
        />
      </WrapperYearSelector>
      <WrapperWeekdays $themeType={swapedTheme}>
        <WeekDays themeType={swapedTheme} layer={layer} />
      </WrapperWeekdays>
      <RangeCalendar
        rangeCalendar={rangeCalendar}
        externalMonthsWithDays={externalData ? externalData[`${currentlySelectedYear}`] : undefined}
        selectedYear={currentlySelectedYear}
        handler={handleDateChange}
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
