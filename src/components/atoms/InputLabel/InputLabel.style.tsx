import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TInputLabel } from '@/components/atoms/InputLabel/TInputLabel.model';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

import { getBackgroundColor, getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { generateLableVariant } from './utils/generateLableVariant';

type TSytledInputLabel = TStyledPrefixAndPicker<TInputLabel>;
export const StyledInputLabel = styled.label<TSytledInputLabel & { theme?: TTheme }>`
  position: absolute;
  color: ${({ theme }) => getTextColor({ theme, $themeType: 'secondary', $textLayer: 4 })};
  ${({ $lableVariant, $isActive, $align }) => generateLableVariant({ $lableVariant, $isActive, $align })}
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
