import { useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';

import { Typography } from '@/components/atoms/Typography';
import { TThemeTypes } from '@/types/TThemeTypes';
import { getBackgroundColor, getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';

interface IDateOutput {
  date?: Date;
  isActive?: boolean;
  onClick?: () => void;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
// --------------------------------------------------------------------------- //
// -------------- The Dateoutput displays a selected date -------------------- //
// --------------------------------------------------------------------------- //
export default function DateOutput({ date = new Date(), isActive, onClick, themeType, layer }: IDateOutput) {
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
    onClick && onClick();
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

// --------------------------------------------------------------------------- //
// --------------------- The style for the component ------------------------- //
// --------------------------------------------------------------------------- //
const DateOutputButton = styled.button<{
  $isActive?: boolean;
  theme: TTheme;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
}>`
  text-align: center;
  width: 100%;
  background-color: ${({ theme, $isActive, $themeType = 'primary', $layer = 2 }) =>
    $isActive
      ? getBackgroundColor({ theme, $themeType, $layer: $layer ? $layer + 1 : 3 })
      : getBackgroundColor({ theme, $themeType, $layer: $layer ? $layer : 2 })};
  color: ${({ theme, $themeType = 'secondary', $layer = 1 }) =>
    getTextColor({ theme, $themeType, $textLayer: $layer, turnColorTheme: true })};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, $themeType = 'primary', $layer }) =>
      getBackgroundColor({ theme, $themeType, $layer: $layer ? $layer : 3 })};
  }
`;
