import { CSSProp, css, styled } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { getBackgroundColor, getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TTheme } from '@/types/TTheme';
import { TTextAlignLC } from '@/types/TTextAlignLC';

const generateAlignStyle = (align?: TTextAlignLC) => {
  if (align === 'center') {
    return css`
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    `;
  }
};

const generateLableVariant = (lableVariant: 'static' | 'animated', isActive?: boolean) => {
  if (lableVariant === 'static') {
    return css`
      font-size: 18px;
    `;
  }

  return css`
    position: absolute;
    top: ${isActive ? '8px' : '54%'};
    font-size: ${isActive ? '12px' : '18px'};
  `;
};

type TInputLabel = {
  $isActive?: boolean;
  $systemMessageType?: TUiColorsSystemMessage;
  $themeType?: TUiColorsMain;
  $layer?: TLayer;
  $align?: TTextAlignLC;
  $lableVariant: 'static' | 'animated';
  $externalStyle?: CSSProp;
};
export const NewInputLabel = styled.label<TInputLabel & { theme: TTheme }>`
  color: ${({ theme }) => getTextColor({ theme, $themeType: 'secondary', $textLayer: 4 })};
  ${({ $align }) => generateAlignStyle($align)}
  ${({ $lableVariant, $isActive }) => generateLableVariant($lableVariant, $isActive)}
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
  ${({ $externalStyle }) => $externalStyle};
`;
