import React, { useEffect, useState } from 'react';

import YearSelector from '../../Atoms/YearSelector/YearSelector';
import WeekDays from '../../Atoms/WeekDays/WeekDays';
import RangeCalendar from '../../Molecules/RangeCalendar/RangeCalendar';
import { DatePickerContainer, WrapperWeekdays, WrapperYearSelector } from './FancyDatePicker.style';
import IExternalYearWithMonths from '../../Molecules/MonthWithDays/IExternalMonthWithDays.model';
import DateOutputFromTo from '../../Molecules/DateOutputFromTo/DateOutputFromTo';
import { IDisabledDateSettings } from '../../Molecules/MonthWithDays/IDisableDateSettings.model';
import { IDateArray } from '../../Molecules/RangeCalendar/IDateArray.model';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

interface IFancyDatePicker {
  rangeCalendar?: boolean;
  handler?: (date: IDateArray) => void;
  selectedYear?: number;
  disabledDateSetting?: IDisabledDateSettings;
  externalData?: IExternalYearWithMonths;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}

export default function FancyDatePicker(props: IFancyDatePicker) {
  const { rangeCalendar, handler, selectedYear, disabledDateSetting, externalData, themeType, layer } = { ...defaultProps, ...props };

  const [selectedDate, setSelectedDate] = useState<IDateArray>([new Date(), new Date()]);
  const [currentlySelectedFromOrTo, setCurrentlySelectedFromOrTo] = useState<'from' | 'to'>('from');
  const [currentlySelectedYear, setCurrentlySelectedYear] = useState<number>(new Date().getFullYear());

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear]);

  return (
    <DatePickerContainer $themeType={themeType} $layer={layer}>
      <WrapperYearSelector>
        <YearSelector selectedYear={currentlySelectedYear} handler={(year: number) => setCurrentlySelectedYear(year)} />
      </WrapperYearSelector>
      <WrapperWeekdays>
        <WeekDays />
      </WrapperWeekdays>
      <RangeCalendar
        rangeCalendar={rangeCalendar}
        externalMonthsWithDays={externalData ? externalData[`${currentlySelectedYear}`] : undefined}
        selectedYear={currentlySelectedYear}
        handler={handleDateChange}
        selectFromTo={currentlySelectedFromOrTo ?? 'from'}
        handleSwitchFromTo={handleSwitchFromTo}
        disabledDateSetting={disabledDateSetting}
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
