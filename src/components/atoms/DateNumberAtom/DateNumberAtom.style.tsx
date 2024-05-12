import { css, styled } from 'styled-components';

import { disabledStyle } from '@/design/designFunctions/disabledStyle/disableStyle';
import { getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';

import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';

import { IRange } from './IDateNumberAtom.model';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

// --------------------------------------------------------------------------- //
// ----------------- The Style for one Day with diferent sates --------------- //
// --------------------------------------------------------------------------- //
interface IStyledDay {
  $range?: IRange;
  $isCurrentDay?: boolean;
  $selected?: boolean;
  $themeType?: TUiColorsNotTransparent;
  $layer?: TLayer;
}
export const StyledDay = styled.button<IStyledDay & { theme: TTheme }>`
  cursor: pointer;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.complete};
  color: ${({ $isCurrentDay, theme, $themeType = 'secondary', $layer }) =>
    $isCurrentDay ? theme.color.accent[0] : getTextColor({ $themeType, $textLayer: $layer, theme })};
  border: ${({ $selected, theme }) => ($selected ? `1px solid ${theme.color.accent[0]}` : `none`)};
  background-color: transparent;
  padding: 0;
  min-height: 24px;
  aspect-ratio: 1/1;
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
    border: 1px solid ${({ theme }) => theme.color.accent[0]};
  }

  ${({ $range, theme }) =>
    $range?.start &&
    css`
      border-radius: 40% 5px 5px 40%;
      background-color: ${theme.color.accent[0]};
      color: ${theme.color.secondary[0]};
    `}

  ${({ $range, theme }) =>
    $range?.inRange &&
    css`
      background-color: ${theme.color.accent[0]};
      color: ${theme.color.secondary[0]};
    `}

  ${({ $range, theme }) =>
    $range?.end &&
    css`
      border-radius: 5px 40% 40% 5px;
      background-color: ${theme.color.accent[0]};
      color: ${theme.color.secondary[0]};
    `}

  &:disabled {
    ${disabledStyle}
  }
`;
