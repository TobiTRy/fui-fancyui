import { styled } from 'styled-components';

import { TWeekDays } from '@/components/atoms/WeekDays/TWeekdays.model';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';

type TWeekdaysConatiner = TStyledPrefixAndPicker<TWeekDays, 'border' | 'layer' | 'themeType'>;
export const WeekdaysConatiner = styled.div<TWeekdaysConatiner & { theme: TTheme }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;

  color: ${({ theme, $themeType = 'secondary', $layer }) =>
    getBackgroundColor({ theme, $themeType, $layer: $layer ?? 0 })};

  ${({ theme, $themeType = 'secondary', $border, $layer }) =>
    generateBorder({ theme, $themeType, $border, $layer: $layer ?? 0 })};

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// --------------------------------------------------------------------------- //
// ----------------------------- Helper Functions ---------------------------- //
// --------------------------------------------------------------------------- //
const generateBorder = (props: TWeekdaysConatiner & { theme: TTheme }) => {
  const { $border, $layer, theme, $themeType } = props;
  if ($border === 'none') return;

  const borderColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'secondary', $layer: $layer });

  return `
    border-${$border ?? 'bottom'}: solid 1px ${borderColor};
    padding-${$border ?? 'bottom'}: ${theme.spacing.xs};
  `;
};
