import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { Typography } from '@/components/atoms/Typography';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

// --------------------------------------------------------------------------- //
// ---------- This Atom creates a List of all Weekdas from Mo - Su ----------- //
// --------------------------------------------------------------------------- //
interface IWeekDays {
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
}
export default function WeekDays({ themeType, layer }: IWeekDays) {
  const [weekdays, setWeekdays] = useState<string[]>([]);

  useEffect(() => {
    const days = [];
    for (let i = 5; i <= 11; i++) {
      const day = new Date(1970, 0, i);
      days.push(day.toLocaleString(navigator.language, { weekday: 'short' }).slice(0, 2));
    }
    setWeekdays(days);
  }, []);

  return (
    <WeekdaysConatiner $themeType={themeType} $layer={layer}>
      {weekdays.map((day) => (
        <Typography type="label" key={day}>
          {day}
        </Typography>
      ))}
    </WeekdaysConatiner>
  );
}

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
const WeekdaysConatiner = styled.div<{ theme: TTheme; $themeType?: TThemeTypesNotTransparent; $layer?: TLayer }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme, $themeType, $layer }) =>
    getBackgroundColor({ theme, $themeType: $themeType ?? 'secondary', $layer: $layer ?? 0 })};

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
