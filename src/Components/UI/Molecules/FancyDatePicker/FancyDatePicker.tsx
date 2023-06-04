import React, { useState } from 'react';
import styled from 'styled-components';

import YearSelector from '../../Atoms/YearSelector/YearSelector';
import WeekDays from '../../Atoms/WeekDays/WeekDays';
import Calendar from '../../Atoms/Calendar/Calendar';
import { borderRadius, spacingPx, uiColors } from '../../Design/design';

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${uiColors.primary.hover};
  border-radius: ${borderRadius.extraLarge};
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const WrapperYearSelector = styled.div`
  width: 100%;
  padding: ${spacingPx.md} ${spacingPx.md} ${spacingPx.md};
  box-sizing: border-box;
`;

const WrapperWeekdays = styled.div`
  width: 100%;
  border-bottom: solid 1px ${uiColors.secondary.hover};
  padding-bottom: ${spacingPx.xxs};
`;

export default function FancyDatePicker() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleYearChange = (changedYear: number) => {
    setCurrentYear(changedYear);
  };

  return (
    <DatePickerContainer>
      <WrapperYearSelector>
        <YearSelector selectedYear={currentYear} handler={handleYearChange} />
      </WrapperYearSelector>
      <WrapperWeekdays>
        <WeekDays />
      </WrapperWeekdays>
      <Calendar selectedYear={currentYear} />
    </DatePickerContainer>
  );
}
