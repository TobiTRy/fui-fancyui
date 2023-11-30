import React, { useEffect, useState } from 'react';

import YearSelector from '../../atoms/YearSelector/YearSelector';
import WeekDays from '../../atoms/WeekDays/WeekDays';
import RangeCalendar from '../../molecules/RangeCalendar/RangeCalendar';
import { DatePickerContainer, WrapperWeekdays, WrapperYearSelector } from './FancyDatePicker.style';
import IExternalYearWithMonths from '../../molecules/MonthWithDays/IExternalMonthWithDays.model';
import DateOutputFromTo from '../../molecules/DateOutputFromTo/DateOutputFromTo';
import { IDisabledDateSettings } from '../../molecules/MonthWithDays/IDisableDateSettings.model';
import { IDateArray } from '../../molecules/RangeCalendar/IDateArray.model';
import { TLayer } from '@/Components/Interface/TLayer';
import { TThemeTypes } from '@/Components/Interface/TUiColors';

interface IFancyDatePicker {
  rangeCalendar?: boolean;
  handler?: (date: IDateArray) => void;
  selectedYear?: number;
  disabledDateSetting?: IDisabledDateSettings;
  externalData?: IExternalYearWithMonths;
  themeType?: TThemeTypes;
  layer?: TLayer;
}

export default function FancyDatePicker(props: IFancyDatePicker) {
  const { rangeCalendar, handler, selectedYear, disabledDateSetting, externalData, themeType, layer } = { ...defaultProps, ...props };
  const [selectedDate, setSelectedDate] = useState<IDateArray>([new Date(), new Date()]);
  const [currentlySelectedFromOrTo, setCurrentlySelectedFromOrTo] = useState<'from' | 'to'>('from');
  const [currentlySelectedYear, setCurrentlySelectedYear] = useState<number>(new Date().getFullYear());
  const swapedTheme = themeType ? (themeType === 'primary' ? 'secondary' : 'primary') : undefined;

  const handleDateChange = (changedDate: IDateArray) => {
    handler && handler(changedDate);
    setSelectedDate(changedDate);
  };

  const handleSwitchFromTo = (change: 'from' | 'to') => {
    setCurrentlySelectedFromOrTo(change);
  };

  useEffect(() => {
    if (selectedYear) {
      setCurrentlySelectedYear(selectedYear);
    }
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
          layer={layer}
          whichIsSelecting={currentlySelectedFromOrTo}
          handler={handleSwitchFromTo}
          dateFrom={Array.isArray(selectedDate) ? selectedDate[0] : new Date()}
          dateTo={Array.isArray(selectedDate) ? selectedDate[1] : new Date()}
        />
      )}
    </DatePickerContainer>
  );
}

const defaultProps: IFancyDatePicker = {
  rangeCalendar: false,
};
