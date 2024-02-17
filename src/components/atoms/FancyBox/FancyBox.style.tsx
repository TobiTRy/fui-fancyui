import { styled } from 'styled-components';

import { generateThemeForCard } from '@/design/designFunctions/generateThemeForCard';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';

import { TFancyBox } from './FancyBox.model';
// the fancy box that gets the style from the theme
type IStyledFancyBox = TStyledPrefixAndPicker<TFancyBox> & { theme: TTheme };
export const StyledFancyBox = styled.div<IStyledFancyBox>`
  box-sizing: border-box;
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })};

  ${({ $externalStyle }) => $externalStyle};
`;
