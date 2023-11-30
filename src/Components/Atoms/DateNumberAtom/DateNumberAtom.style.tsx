import { css, styled } from 'styled-components';

import { IRange } from './DateNumberAtom';
import { disabledStyle } from '../../design/designFunctions/disabledStyle/disableStyle';
import { TThemeTypes } from '@/components/Interface/TUiColors';
import { TLayer } from '@/components/Interface/TLayer';
import { getTextColor } from '../../design/color/colorCalculatorForComponent/colorCalculatorForComponet';
import { TTheme } from '@/components/Interface/TTheme';

// --------------------------------------------------------------------------- //
// ----------------- The Style for one Day with diferent sates --------------- //
// --------------------------------------------------------------------------- //
interface IStyledDay {
  $range?: IRange;
  $isCurrentDay?: boolean;
  $selected?: boolean;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
}
export const StyledDay = styled.button<IStyledDay & { theme: TTheme }>`
  cursor: pointer;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.complete};
  color: ${({ $isCurrentDay, theme, $themeType = 'secondary', $layer }) =>
    $isCurrentDay ? theme.colors.accent[0] : getTextColor({ $themeType, $textLayer: $layer, theme })};
  border: ${({ $selected, theme }) => ($selected ? `1px solid ${theme.colors.accent[0]}` : `none`)};
  background-color: transparent;
  padding: 0;
  width: 80%;
  max-width: 40px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  &:hover,
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.accent[0]};
  }

  ${({ $range, theme }) =>
    $range?.start &&
    css`
      border-radius: 40% 5px 5px 40%;
      background-image: linear-gradient(to right, ${theme.colors.accent[0]}, transparent);
      color: white;
    `}

  ${({ $range, theme }) =>
    $range?.end &&
    `
    border-radius: 5px 40% 40% 5px;
    background-image: linear-gradient(to left, ${theme.colors.accent[0]}, transparent);
    color: white;
  `}

  ${({ $range, theme }) =>
    $range?.inRange &&
    `
    background-color: ${theme.colors.accent[0]};
    color: white;
  `}

  &:disabled {
    ${disabledStyle}
  }
`;
