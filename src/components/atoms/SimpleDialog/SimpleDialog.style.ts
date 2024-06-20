import { styled } from 'styled-components';
import { getColorsForComponent } from '@/design/designFunctions/colorCalculatorForComponent';

import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { animated } from '@react-spring/web';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

// Define the styled component for the dialog
type TStyledDialog = {
  theme: TTheme;
  $themeType: TUiColorsNotTransparent;
  $layer?: TLayer;
};

export const StyledDialog = styled(animated.div)<TStyledDialog>`
  position: fixed;
  top: calc(50vh + env(safe-area-inset-bottom));
  left: 50vw;
  transform: translate(-50vh, -50vw);
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: none;
  width: 80%;
  ${({ theme, $themeType, $layer = 1 }) => getColorsForComponent({ theme, $themeType, $layer })}
  z-index: 1000;
  outline: none;
`;
