import { styled } from 'styled-components';

import { TFancyUnderline } from '@/components/atoms/InputUnderline/InputUnderline';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

// Define the styled component for the underline
type IStyledUnderline = IStyledPrefixAndPicker<TFancyUnderline>;
export const UnderLine = styled.i<IStyledUnderline & { theme: TTheme }>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  border-radius: 5px;
  background-color: ${({ $systemMessageType, theme, $isActive, $themeType = 'secondary', $layer }) =>
    getBackgroundColor({
      theme,
      $themeType: $isActive ? $systemMessageType ?? 'accent' : $themeType,
      $layer: $isActive ? 0 : $layer,
    })};
  transition: background-color 0.25s ease;
  overflow: hidden;
  width: 100%;
  ${({ $externalStyle }) => $externalStyle}
`;
