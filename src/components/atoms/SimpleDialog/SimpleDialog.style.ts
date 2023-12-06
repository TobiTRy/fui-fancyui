import { styled } from 'styled-components';
import { getColorsForComponent } from '@/design/designFunctions/colorCalculatorForComponent';

import { TLayer } from '@/interface/TLayer';
import { TTheme } from '@/interface/TTheme';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { animated } from '@react-spring/web';

// Define the styled component for the dialog
export const StyledDialog = styled(animated.div)<{ theme: TTheme; $themeType?: TThemeTypes; $layer?: TLayer }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: none;
  width: 70%;
  max-height: 85%;
  ${({ theme, $themeType = 'primary', $layer = 1 }) => getColorsForComponent({ theme, $themeType, $layer })}
  z-index: 1000;
`;
