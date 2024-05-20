import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TRawRadio } from './TRawRadio.model';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

export const RadioWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  margin: 0;
  position: absolute;
  cursor: pointer;
  opacity: 1;
  background-color: transparent;
  z-index: 0;
  appearance: none;
  outline: none;
  width: 16px;
  height: 16px;
`;

type TStyledRadio = TStyledPrefixAndPicker<TRawRadio, 'themeType' | 'layer' | 'checked'>;
export const StyledRadio = styled.span<TStyledRadio & { theme: TTheme }>`
  width: 16px;
  height: 16px;
  border: 2px solid;
  border-color: ${({ $checked, $layer, $themeType = 'primary', theme }) =>
    $checked ? theme.color.accent[2] : getBackgroundColor({ theme, $themeType, $layer })};
  background: ${({ $checked, $layer, $themeType = 'primary', theme }) =>
    $checked ? 'transparent' : getBackgroundColor({ theme, $themeType, $layer })};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  flex-shrink: 0;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ $checked, theme }) => ($checked ? theme.color.accent[1] : 'transparent')};
    transition:
      background 0.2s ease,
      border-color 0.2s ease;
  }
`;
