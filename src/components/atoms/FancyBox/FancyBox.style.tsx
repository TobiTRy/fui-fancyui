import { styled } from 'styled-components';

import { generateThemeForCard } from '@/design/designFunctions/generateThemeForCard';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';

import { TFancyBox } from './FancyBox.model';
// the fancy box that gets the style from the theme
type IStyledFancyBox = IStyledPrefixAndPicker<TFancyBox> & { theme: TTheme };
export const StyledFancyBox = styled.div<IStyledFancyBox>`
  box-sizing: border-box;
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })};

  ${({ $externalStyle }) => $externalStyle};
`;
