import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import YearSelector from '../../Atoms/YearSelector/YearSelector';
import WeekDays from '../../Atoms/WeekDays/WeekDays';
import { borderRadius, spacingPx, uiColors } from '../../Design/design';
import RangeCalendar from '../../Molecules/RangeCalendar/RangeCalendar';
import DateOutput from '../../Atoms/DateOutput/DateOutput';
import { DatePickerContainer, WrapperWeekdays, WrapperYearSelector } from './FancyDatePicker.style';


import DateOutputFromTo from '../../Molecules/DateOutputFromTo/DateOutputFromTo';
import { useDateOutputFromToState } from '../../Molecules/DateOutputFromTo/DateOutputFromTo.state';

import { useFancyDatePickerState } from './FancyDatePicker.state';
import { useYearSelectorState } from '../../Atoms/YearSelector/YearSelector.state';
import { IDisabledDateSettings } from '../../Molecules/MonthWithDays/IDisableDateSettings.model';
import { IDateArray } from '../../Molecules/RangeCalendar/IDateArray.model';

interface IFancyDatePicker {
  rangeCalendar?: boolean;
  handler?: (date: IDateArray) => void;
  selectedYear?: number;
  disabledDateSetting?: IDisabledDateSettings;
}

export default function FancyDatePicker(props: IFancyDatePicker) {
  const { rangeCalendar, handler, selectedYear, disabledDateSetting } = props;
  const selectedDate = useFancyDatePickerState((state) => state.selectedDateRange);
  const setSelectedDate = useFancyDatePickerState((state) => state.setSelectedDateRange);

  const currentlySelectedFromOrTo = useDateOutputFromToState((state) => state.currentlySelected);
  const setCurrentlySelectedFromOrTo = useDateOutputFromToState((state) => state.setCurrentlySelected);

  const currentlySelectedYear = useYearSelectorState((state) => state.selectedYear);


  const handleDateChange = (changedDate: IDateArray) => {
    handler && handler(changedDate);
    setSelectedDate(changedDate);
  };

  const handleSwitchFromTo = (change: 'from' | 'to') => {
    setCurrentlySelectedFromOrTo(change);
  };

  return (
    <DatePickerContainer>
      <WrapperYearSelector>
        <YearSelector selectedYear={currentlySelectedYear} />
      </WrapperYearSelector>
      <WrapperWeekdays>
        <WeekDays />
      </WrapperWeekdays>
      <RangeCalendar
        rangeCalendar={rangeCalendar}
        selectedYear={currentlySelectedYear}
        handler={handleDateChange}
        selectFromTo={currentlySelectedFromOrTo ?? 'from'}
        handleSwitchFromTo={handleSwitchFromTo}
        disabledDateSetting={disabledDateSetting}
      />
      {(rangeCalendar && Array.isArray(selectedDate)) && <DateOutputFromTo dateFrom={selectedDate[0]} dateTo={selectedDate[1]} />}
    </DatePickerContainer>
  );
}

FancyDatePicker.defaultProps = {
  rangeCalendar: true,
  selectedYear: new Date().getFullYear(),
}