import React, { useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';
import Typography from '../Typography/Typography';
import { TUiColorsType } from '../../Design/color/designColor';

const DateOutputButton = styled.button<{ $isActive?: boolean, theme: TUiColorsType }>`
  text-align: center;
  width: 100%;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.primary[2] : theme.primary[1])};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.primary[2]};
  }
`;

interface IDateOutput {
  date?: Date;
  isActive?: boolean;
  handler?: () => void;
}
export default function DateOutput({ date = new Date(), isActive, handler }: IDateOutput) {
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
      <Typography type='button'>{formattedDate || 'Select a date'}</Typography>
    </DateOutputButton>
  );
}
