import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { uiColors } from '../../Design/design';

//uiColors.primary.light
const DateOutputButton = styled.button<{ $isActive?: boolean }>`
  text-align: center;
  width: 100%;
  background-color: ${({ $isActive }) => ($isActive ? uiColors.primary.lighter : uiColors.primary.light)};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${uiColors.primary.lighter};
  }
`;

interface IDateOutput {
  date?: Date;
  isActive?: boolean;
  onDateSelect?: (date: Date) => void;
  handler?: () => void;
}
export default function DateOutput({ date, isActive, onDateSelect, handler }: IDateOutput) {
  const [active, setActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(date);

  // Format the date to display as "6. Juni"
  const formattedDate = useMemo(() => {
    if (!selectedDate) return '';
    const userLang = navigator.language;
    const options = { day: 'numeric', month: 'short' } as const;
    return selectedDate.toLocaleDateString(userLang, options);
  }, [selectedDate]);

  const handleOpenCalendar = () => {
    setActive(true);
    handler && handler();
  };

  useEffect(() => {
    setSelectedDate(date);
  }, [date]);

  useEffect(() => {
    setActive(isActive ?? false);
  }, [isActive]);



  return (
    <DateOutputButton onClick={handleOpenCalendar} $isActive={active && isActive}>
      {formattedDate || 'Select a date'}
    </DateOutputButton>
  );
}

DateOutput.defaultProps = {
  date: new Date(),
};
