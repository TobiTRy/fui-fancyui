import { css, styled } from 'styled-components';

import { TFancyUnderline } from '@/components/atoms/InputUnderline/InputUnderline';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker.model';
import { TTheme } from '@/interface/TTheme';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

// Define the styled component for the underline
type IStyledUnderline = IStyledPrefixAndPicker<TFancyUnderline>;
export const UnderLine = styled.i<IStyledUnderline & { theme: TTheme }>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  border-radius: 5px;
  background: ${({ theme, $themeType = 'secondary', $layer }) => getBackgroundColor({ theme, $themeType, $layer })};
  overflow: hidden;
  width: 100%;

  // Define the styles for the gradient overlay
  &::before {
    content: '';
    width: 100%;
    border-radius: 5px;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    height: 100%;
    background: ${({ $colorState, theme }) => {
      switch ($colorState) {
        case 'error':
          return css`linear-gradient(90deg, ${theme.colors.error[1]}, ${theme.colors.error[0]})`;
        case 'active':
          return css`linear-gradient(90deg, ${theme.colors.accent[1]}, ${theme.colors.accent[0]})`;
        case 'default':
          return css`linear-gradient(90deg, ${theme.colors.secondary[0]}, ${theme.colors.secondary[4]})`;
        default:
          return '';
      }
    }};

    // Define the transition styles for the gradient overlay
    transition: 0.25s;
    transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  }
`;
