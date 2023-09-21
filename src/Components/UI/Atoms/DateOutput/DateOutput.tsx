import React, { useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';
import Typography from '../Typography/Typography';
import { TUiColorsType } from '../../Design/color/designColor';
import { getBackgroundColor, getTextColor } from '../../Design/color/colorCalculatorForComponet';
import { TLayer } from '../../Design/color/generateColorSteps';

const DateOutputButton = styled.button<{ $isActive?: boolean; theme: TUiColorsType; $themeType?: keyof TUiColorsType; $layer?: TLayer }>`
  text-align: center;
  width: 100%;
  background-color: ${({ theme, $isActive, $themeType = 'primary', $layer }) =>
    $isActive
      ? getBackgroundColor({ theme, $themeType, $layer: $layer ? $layer + 3 : 3 })
      : getBackgroundColor({ theme, $themeType, $layer: $layer ? $layer + 2 : 2 })};
  color: ${({ theme, $themeType = 'primary', $layer = 1 }) => getTextColor({ theme, $themeType, $textLayer: $layer })};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, $themeType = 'primary', $layer }) =>
      getBackgroundColor({ theme, $themeType, $layer: $layer ? $layer + 3 : 3 })};
  }
`;

interface IDateOutput {
  date?: Date;
  isActive?: boolean;
  handler?: () => void;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}
export default function DateOutput({ date = new Date(), isActive, handler, themeType, layer }: IDateOutput) {
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
    <DateOutputButton onClick={handleOpenCalendar} $themeType={themeType} $layer={layer} $isActive={active && isActive}>
      <Typography type="button">{formattedDate || 'Select a date'}</Typography>
    </DateOutputButton>
  );
}
