import styled from 'styled-components';

import { TThemeTypes } from '@/components/Interface/TUiColors';
import { TLayer } from '@/components/Interface/TLayer';
import { TTheme } from '@/components/Interface/TTheme';
import { getBackgroundColor, getTextColor } from '../../design/color/colorCalculatorForComponent/colorCalculatorForComponet';

type StyledMenuProps = {
  $themeType?: TThemeTypes;
  $layer?: TLayer;
  theme: TTheme;
  as?: 'a' | 'button';
};

export const StyledMenuItem = styled.button<StyledMenuProps>`
  display: flex;
  box-sizing: border-box;
  padding: 10px 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: ${({ theme, $themeType }) => getTextColor({ theme, $themeType: $themeType ?? 'secondary', $textLayer: 1 })};

  &:hover {
    background-color: ${({ theme, $themeType, $layer }) =>
      getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 3 })};
  }
`;
