import { styled } from 'styled-components';

import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import { disabledStyle } from '@/design/designFunctions/disabledStyle/disableStyle';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';
import { TBottomBarIcon } from './TBottomBarIcon.model';
import { sizeSettings } from './sizeSettings';

type TContentWrapper = TStyledPrefixAndPicker<
  TBottomBarIcon,
  'sizeC' | 'disabled' | 'isActive' | 'themeType' | 'layer'
>;
export const ContentWrapper = styled.div<TContentWrapper & { theme?: TTheme }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 78px;
  height: ${({ $sizeC }) => sizeSettings[$sizeC ?? 'md'].componentHeight};
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  color: ${({ $isActive, theme, $layer = 0, $themeType = 'secondary' }) =>
    $isActive ? theme.colors.accent[0] : getBackgroundColor({ theme, $themeType, $layer })};
  transition: all 0.3s ease-in-out;
  ${({ $disabled }) => $disabled && disabledStyle}
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  text-decoration: none;

  /* This is a media query that tests if the primary input mechanism of the device (e.g., mouse or touch screen) is capable of hovering  */
  @media (hover: hover) {
    &:hover {
      color: ${({ $disabled, theme }) => !$disabled && theme.colors.accent[0]};
    }
  }
`;
