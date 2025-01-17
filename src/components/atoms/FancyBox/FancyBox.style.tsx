import { css, styled } from 'styled-components';

import { generateThemeForCard } from '@/design/designFunctions/generateThemeForCard';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';

import { TFancyBox } from './FancyBox.model';
import { TThemeArrayOrValueCSS, arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

// the fancy box that gets the style from the theme
type IStyledFancyBox = TStyledPrefixAndPicker<TFancyBox> & { $padding?: TThemeArrayOrValueCSS };
export const StyledFancyBox = styled.div<IStyledFancyBox & { theme?: TTheme }>`
  border-radius: ${({ $borderRadius }) => arrayToCssValues($borderRadius, 'borderRadius')};
  padding: ${({ $padding }) => arrayToCssValues($padding, 'spacing')};
  margin: ${({ $margin }) => arrayToCssValues($margin, 'spacing')};

  box-sizing: border-box;
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength, $outlinedRemoveBorder }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength, $outlinedRemoveBorder })};

  ${({ $themeType, theme, $outlined, $outlinedBackgroundStrength, $outlinedRemoveBorder, $hoverLayer }) =>
    $hoverLayer &&
    css`
      transition: background-color 0.3s ease-in-out;

      @media (hover: hover) {
        &:hover {
          ${generateThemeForCard({
            $themeType,
            theme,
            $outlined,
            $layer: $hoverLayer,
            $outlinedBackgroundStrength,
            $outlinedRemoveBorder,
          })};
        }
      }
    `}

  ${({ $externalStyle }) => $externalStyle};
`;
