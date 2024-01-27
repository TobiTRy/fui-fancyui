import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TLayer } from '@/types/TLayer';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

interface IProgressBarContainerProps {
  theme: TTheme;
  $themeType?: TUiColorsNotTransparent;
  $layer?: TLayer;
}
// Define the styled component for the progress bar container
export const ProgressBarContainer = styled.div<IProgressBarContainerProps>`
  width: 100%;
  height: 4px;
  background-color: ${({ theme, $themeType = 'secondary', $layer = 4 }) =>
    getBackgroundColor({ theme, $themeType, $layer })};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

// Define the interface for the progress bar fill props
interface IProgressBarFillProps {
  width: number;
  theme: TTheme;
}
// Define the styled component for the progress bar fill
export const ProgressBarFill = styled.div<IProgressBarFillProps>`
  height: 100%;
  width: ${({ width }) => width}%;
  background-color: ${({ theme }) => theme.colors.accent[0]};
  border-radius: ${({ theme }) => theme.borderRadius.complete} 0 0 ${({ theme }) => theme.borderRadius.complete};
  transition: width 0.2s ease-out;
`;
