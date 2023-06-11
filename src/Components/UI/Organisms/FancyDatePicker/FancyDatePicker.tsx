import React, { useState } from 'react';
import styled from 'styled-components';

import YearSelector from '../../Atoms/YearSelector/YearSelector';
import WeekDays from '../../Atoms/WeekDays/WeekDays';
import Calendar from '../../Molecules/Calendar/Calendar';
import { borderRadius, spacingPx, uiColors } from '../../Design/design';
import RangeCalendar from '../../Molecules/RangeCalendar/RangeCalendar';
import DateOutput from '../../Atoms/DateOutput/DateOutput';
import { DatePickerContainer, WrapperWeekdays, WrapperYearSelector } from './FancyDatePicker.style';

import DateOutputFromTo from '../../Molecules/DateOutputFromTo/DateOutputFromTo';
import { useDateOutputFromToState } from '../../Molecules/DateOutputFromTo/DateOutputFromTo.state';

import { useFancyDatePickerState } from './FancyDatePicker.state';
import { useYearSelectorState } from '../../Atoms/YearSelector/YearSelector.state';




export default function FancyDatePicker() {
  const selectedDate = useFancyDatePickerState((state) => state.selectedDate);
  const setSelectedDate = useFancyDatePickerState((state) => state.setSelectedDate);

  const currentlySelectedFromOrTo = useDateOutputFromToState(state => state.currentlySelected);
  const setCurrentlySelectedFromOrTo = useDateOutputFromToState(state => state.setCurrentlySelected);

  const currentlySelectedYear = useYearSelectorState(state => state.selectedYear);
  

  //TODO: Build in a Varriant to disable dates in the past
  //TODO: Load only a few dates not all in a year
  //TODO: Build in RangePicker / normal Picker Adjust DateOutput accordingly
  const pickedDate = useState<Date>();
  const [pickedRange, setPickedRange] = useState<Date[]>([]);


  const handleDateChange = (changedDate: Date | (Date | undefined)[]) => {
    setPickedRange(changedDate as Date[]);
  }

  const handleSwitchFromTo = (change: 'from' | 'to') => {
    setCurrentlySelectedFromOrTo(change);
  }

  return (
    <DatePickerContainer>
      <WrapperYearSelector>
        <YearSelector selectedYear={currentlySelectedYear} />
      </WrapperYearSelector>
      <WrapperWeekdays>
        <WeekDays />
      </WrapperWeekdays>
      <RangeCalendar selectedYear={currentlySelectedYear} handler={handleDateChange} selectFromTo={currentlySelectedFromOrTo ?? 'from'} handleSwitchFromTo={handleSwitchFromTo} />
      {/* <Calendar selectedYear={currentlySelectedYear} /> */}
      <DateOutputFromTo dateFrom={pickedRange[0]} dateTo={pickedRange[1]} />
    </DatePickerContainer>
  );
}
