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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: none;
  width: 70%;
  max-height: 85%;
  ${({ theme, $themeType, $layer = 1 }) => getColorsForComponent({ theme, $themeType, $layer })}
  z-index: 1000;
`;
