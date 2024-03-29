import { css, styled } from 'styled-components';

import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import { disabledStyle } from '@/design/designFunctions/disabledStyle/disableStyle';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';
import { TBottomBarIcon } from './TBottomBarIcon.model';

type TContentWrapper = TStyledPrefixAndPicker<
  TBottomBarIcon,
  'disabled' | 'isActive' | 'themeType' | 'layer' | 'externalStyle' | 'hoverStyle' | 'activeThemeType' | 'activeLayer'
>;
export const ContentWrapper = styled.div<TContentWrapper & { theme?: TTheme }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 78px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  color: ${({
    $isActive,
    theme,
    $layer = 0,
    $activeThemeType = 'accent',
    $themeType = 'secondary',
    $activeLayer = 0,
  }) =>
    $isActive
      ? getBackgroundColor({ theme, $themeType: $activeThemeType, $layer })
      : getBackgroundColor({ theme, $themeType, $layer: $activeLayer })};
  transition: all 0.3s ease-in-out;
  ${({ $disabled }) => $disabled && disabledStyle}
  text-decoration: none;

  /* This is a media query that tests if the primary input mechanism of the device (e.g., mouse or touch screen) is capable of hovering  */
  ${({ $disabled, $hoverStyle, theme }) =>
    $hoverStyle &&
    css`
      @media (hover: hover) {
        &:hover {
          color: ${!$disabled && theme.colors.accent[0]};
        }
      }
    `}

  ${({ $externalStyle }) => $externalStyle}
`;
