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


export default function FancyDatePicker() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const pickedDate = useState<Date>();
  const [pickedRange, setPickedRange] = useState<Date[]>([]);

  const handleYearChange = (changedYear: number) => {
    setCurrentYear(changedYear);
  };

  const handleDateChange = (changedDate: Date | Date[]) => {
    console.log(changedDate);
    setPickedRange(changedDate as Date[]);
  }

  return (
    <DatePickerContainer>
      <WrapperYearSelector>
        <YearSelector selectedYear={currentYear} handler={handleYearChange} />
      </WrapperYearSelector>
      <WrapperWeekdays>
        <WeekDays />
      </WrapperWeekdays>
      <RangeCalendar selectedYear={currentYear} handler={handleDateChange} />
      {/* <Calendar selectedYear={currentYear} /> */}
      <DateOutputFromTo dateFrom={pickedRange[0]} dateTo={pickedRange[1]} />
    </DatePickerContainer>
  );
}
