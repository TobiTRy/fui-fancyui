import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TInputLabel } from '@/components/atoms/InputLabel/TInputLabel.model';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

import { getBackgroundColor, getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { generateLableVariant } from './utils/generateLableVariant';

// calculate the theme type of the label based on the active state
const calcThemeType = ({ $systemMessageType, $isActive, $themeType = 'secondary', $isMovedUp }: TSytledInputLabel) => {
  // if the system message is set, return it
  if ($systemMessageType) {
    return $systemMessageType;
  }

  // if the label is moved up, return the theme type
  if ($isMovedUp && !$isActive) {
    return $themeType;
  }

  // if the label is active, return accent
  if ($isActive) {
    return 'accent';
  }
  return $themeType;
};

type TSytledInputLabel = TStyledPrefixAndPicker<TInputLabel>;
export const StyledInputLabel = styled.label<TSytledInputLabel & { theme?: TTheme }>`
  position: absolute;
  color: ${({ theme }) => getTextColor({ theme, $themeType: 'secondary', $textLayer: 4 })};
  ${({ $lableVariant, $isMovedUp, $isActive, $align }) =>
    generateLableVariant({ $lableVariant, $isActive: $isMovedUp || $isActive, $align })}
  font-weight: 500;
  transition:
    top 0.25s ease,
    color 0.25s ease,
    font-size 0.25s ease;
  pointer-events: none; /* Ensures the input can be focused when clicking on the label */
  color: ${({ $systemMessageType, theme, $isActive, $themeType = 'secondary', $layer, $isMovedUp }) =>
    getBackgroundColor({
      theme,
      $themeType: calcThemeType({ $systemMessageType, $isActive, $themeType, $isMovedUp }),
      $layer: $isActive ? 0 : $layer,
    })};
  ${({ $externalStyle }) => $externalStyle};
`;
