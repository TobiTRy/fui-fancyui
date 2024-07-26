import { styled } from 'styled-components';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

interface IStyledSwipeUpContainer {
  $giveSpace: boolean;
  theme: TTheme;
  $themeType?: TUiColorsNotTransparent;
  $layer?: TLayer;
  $isOpen?: boolean;
}
export const StyledSwipeUpContainer = styled.div<IStyledSwipeUpContainer>`
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-height: 100dvh;
  border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
  position: sticky;
  top: 0;
  box-shadow: unset;
  display: grid;
  align-items: flex-start;
  padding-top: ${({ $giveSpace }) => ($giveSpace ? ({ theme }) => theme.spacing.lg : '0')};
  z-index: 101;
  backdrop-filter: blur(4px);
  background-color: ${({ theme, $themeType = 'primary', $layer = 0 }) =>
    getBackgroundColor({ theme, $themeType, $layer })};
`;
