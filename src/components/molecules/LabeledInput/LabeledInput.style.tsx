import { styled } from 'styled-components';

import { calcInputPadding } from '@/components/molecules/LabeledInput/utils/calcInputPadding';
import { getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TTheme } from '@/types/TTheme';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
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
  background-color: transparent;
  box-sizing: border-box; /* Added to include padding in the width */

  input:not([type='range']),
  select {
    ${({ $isActive, $isLabelProvided }) => calcInputPadding({ $isActive, $isLabelProvided })}
    font-size: 18px;
  }

  input[type='range'] {
    margin-top: ${({ $isLabelProvided }) => ($isLabelProvided ? '30px' : '12px')};
    margin-bottom: 12px;
  }
`;
