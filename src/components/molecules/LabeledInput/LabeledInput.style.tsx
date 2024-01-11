import { css, styled } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
import { TTheme } from '@/types/TTheme';
import { getBackgroundColor, getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { calcInputPadding } from '@/components/molecules/LabeledInput/utils/calcInputPadding';
import { TLabeledInput } from '@/components/molecules/LabeledInput/TLabledInput.model';

type TWrapper = {
  $themeType?: TThemeTypesNotTransparent;
  $layer?: TLayer;
};

export const Wrapper = styled.div<TWrapper & { theme: TTheme }>`
  position: relative;
  width: 100%;
`;

type TInputWrapper = {
  $isActive: boolean;
  $isLabelProvided?: boolean;
};

export const InputWrapper = styled.div<TInputWrapper & { theme: TTheme }>`
  font-size: 18px;
  color: ${({ theme }) => getTextColor({ theme, $themeType: 'secondary', $textLayer: 4 })};
  border-radius: 3px;
  outline: none;
  background-color: transparent;
  box-sizing: border-box; /* Added to include padding in the width */

  input:not([type='range']),
  select {
    ${({ $isActive, $isLabelProvided }) => calcInputPadding({ $isActive, $isLabelProvided })}
    font-size: 18px;
  }
`;

type TInputLabel = {
  $isActive: boolean;
  $systemMessageType?: TUiColorsSystemMessage;
  $themeType?: TUiColorsMain;
  $layer?: TLayer;
  $align?: TLabeledInput['align'];
};
export const InputLabel = styled.label<TInputLabel & { theme: TTheme }>`
  position: absolute;
  color: ${({ theme }) => getTextColor({ theme, $themeType: 'secondary', $textLayer: 4 })};
  ${({ $align }) =>
    $align === 'center'
      ? css`
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        `
      : css`
          transform: translateY(-50%);
        `};
  top: ${({ $isActive }) => ($isActive ? '8px' : '54%')};
  font-size: ${({ $isActive }) => ($isActive ? '12px' : '18px')};
  font-weight: 500;
  transition:
    top 0.25s ease,
    color 0.25s ease,
    font-size 0.25s ease;
  pointer-events: none; /* Ensures the input can be focused when clicking on the label */
  color: ${({ $systemMessageType, theme, $isActive, $themeType = 'secondary', $layer }) =>
    getBackgroundColor({
      theme,
      $themeType: $systemMessageType ? $systemMessageType : $isActive ? 'accent' : $themeType,
      $layer: $isActive ? 0 : $layer,
    })};
`;
