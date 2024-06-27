import { styled } from 'styled-components';

import { calcInputPadding } from '@/components/molecules/LabeledInput/utils/calcInputPadding';
import { getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TTheme } from '@/types/TTheme';
import { globalElementsizes } from '@/design/theme/globalSizes';

const handleHeight = ({ $hasLabel = false, $isTextArea = false }) => {
  if (!$isTextArea) {
    if ($hasLabel) {
      return globalElementsizes.md;
    } else {
      return globalElementsizes.sm;
    }
  }
  return '';
};
export const Wrapper = styled.div<{ $hasLabel?: boolean; $isTextArea?: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  height: ${({ $hasLabel, $isTextArea }) => handleHeight({ $hasLabel, $isTextArea })};
`;

type TInputWrapper = {
  $isActive: boolean;
  $isLabelProvided?: boolean;
  $lableVariant?: 'static' | 'animated';
};
export const InputWrapper = styled.div<TInputWrapper & { theme: TTheme }>`
  color: ${({ theme }) => getTextColor({ theme, $themeType: 'secondary', $textLayer: 4 })};
  border-radius: 3px;
  outline: none;
  width: 100%;
  background-color: transparent;
  box-sizing: border-box; /* Added to include padding in the width */

  input:not([type='range']),
  select,
  textarea {
    ${({ $isActive, $isLabelProvided }) => calcInputPadding({ $isActive, $isLabelProvided })}
  }

  input[type='range'] {
    margin-top: ${({ $isLabelProvided }) => ($isLabelProvided ? '30px' : '12px')};
    margin-bottom: 12px;
  }
`;
