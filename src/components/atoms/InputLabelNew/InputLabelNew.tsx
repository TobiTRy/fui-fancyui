import { css, styled } from 'styled-components';

import { TInputLabel } from '@/components/atoms/InputLabelNew/TInputLabel';
import { getBackgroundColor, getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TTheme } from '@/types/TTheme';
import { IStyledPrefixAndPicker } from 'lib';

const generateAlignStyle = (align?: TTextAlignLC) => {
  if (align === 'center') {
    return css`
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    `;
  }
};
//TODO: ADJUST TRANSLATE

const generateLableVariant = (lableVariant: TInputLabel['lableVariant'], isActive?: boolean) => {
  if (lableVariant === 'static') {
    return css`
      font-size: 18px;
    `;
  }

  return css`
    position: absolute;
    top: ${isActive ? '8px' : '56%'};
    font-size: ${isActive ? '12px' : '18px'};
  `;
};

type TSytledInputLabel = IStyledPrefixAndPicker<TInputLabel>;
export const NewInputLabel = styled.label<TSytledInputLabel & { theme: TTheme }>`
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

NewInputLabel.displayName = 'InputLabel';

export default NewInputLabel;
