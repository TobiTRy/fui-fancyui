import { styled } from 'styled-components';

import { generateThemeForCard } from '@/design/designFunctions/generateThemeForCard';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';

import { TFancyBox } from './FancyBox.model';
import { TThemeArrayOrValueCSS, arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { calcBorderSizeMinusBoxSize } from '@/design/designFunctions/calcBorderSizeMinusBoxSize';

// the fancy box that gets the style from the theme
type IStyledFancyBox = TStyledPrefixAndPicker<TFancyBox> & { theme?: TTheme; $padding?: TThemeArrayOrValueCSS };
export const StyledFancyBox = styled.div<IStyledFancyBox>`
  border-radius: ${({ $borderRadius }) => arrayToCssValues($borderRadius, 'borderRadius')};
  padding: ${({ $padding }) => calcBorderSizeMinusBoxSize($padding, 4)};
  box-sizing: border-box;
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })};

  ${({ $externalStyle }) => $externalStyle};
`;
