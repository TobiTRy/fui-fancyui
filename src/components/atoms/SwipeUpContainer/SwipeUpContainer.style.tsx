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
}
export const StyledSwipeUpContainer = styled.div<IStyledSwipeUpContainer>`
  width: 100%;
  max-height: 90%;
  border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
  position: sticky;
  top: 0;
  box-shadow: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ $giveSpace }) => ($giveSpace ? ({ theme }) => theme.spacing.lg : '0')};
  z-index: 101;
  backdrop-filter: blur(4px);
  background-color: ${({ theme, $themeType = 'primary', $layer = 0 }) =>
    getBackgroundColor({ theme, $themeType, $layer })};
`;
