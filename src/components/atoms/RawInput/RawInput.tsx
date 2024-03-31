import { styled } from 'styled-components';

import { TRawInputWith$ } from './TRawInput.model';
import { TTheme } from '@/types/TTheme';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

const RawInput = styled.input<TRawInputWith$ & { theme: TTheme }>`
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  color: ${({ theme, $themeType = 'secondary', $layer }) => getBackgroundColor({ theme, $themeType, $layer })};
  text-align: ${({ $align }) => ($align !== 'center' ? 'left' : 'center')};
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.interactiveMd.fontSize};
  padding: 0;

  ${({ $externalStyle }) => $externalStyle};
`;

RawInput.displayName = 'RawInput';

export default RawInput;
