import { CSSProp, styled } from 'styled-components';
import { getColorsForComponent } from '@/design/designFunctions/colorCalculatorForComponent';

import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

// Define the styled component for the dialog

type TStyledDialog = {
  theme: TTheme;
  $themeType: TUiColorsNotTransparent;
  $layer?: TLayer;
  $externalStyle?: CSSProp;
  $isAnimating: boolean;
};

export const StyledDialog = styled.div<TStyledDialog>`
  position: fixed;
  top: 50dvh;
  left: 50vw;
  transform: translate(-50%, ${({ $isAnimating }) => ($isAnimating ? '-50%' : '-40%')});
  opacity: ${({ $isAnimating }) => ($isAnimating ? 1 : 0)};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: none;
  width: 80%;
  ${({ theme, $themeType, $layer = 1 }) => getColorsForComponent({ theme, $themeType, $layer })}
  z-index: 100;
  outline: none;
  transition:
    transform 300ms ease-out,
    opacity 300ms ease-out;
  ${({ $externalStyle }) => $externalStyle};
`;

export const StyledHeader = styled.div<{ theme: TTheme }>`
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.lg} 0`};
`;

export const StyledContent = styled.div<{ theme: TTheme }>`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 85vh;
  padding: ${({ theme }) => `0 ${theme.spacing.lg}`};
  box-sizing: border-box;
`;

export const StyledFooter = styled.div<{ theme: TTheme }>`
  padding: ${({ theme }) => `0 ${theme.spacing.lg}  ${theme.spacing.lg}  ${theme.spacing.lg}`};
`;
