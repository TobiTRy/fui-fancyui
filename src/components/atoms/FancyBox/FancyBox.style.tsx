import { css, styled } from 'styled-components';

import { generateThemeForCard } from '@/design/designFunctions/generateThemeForCard';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker.model';
import { TTheme } from '@/interface/TTheme';

import { IFancyBox } from './FancyBox.model'

;
import { TBorderRadiusSizes } from '@/interface/TBorderRadiusSizes';

const generatePillStyle = (theme: TTheme, $borderRadius?: TBorderRadiusSizes ) => {
  return css`
    border-radius: ${theme.borderRadius[$borderRadius || 'complete']};
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
  `;
};

// the fancy box that gets the style from the theme
type IStyledFancyBox = IStyledPrefixAndPicker<IFancyBox> & { theme: TTheme };
export const StyledFancyBox = styled.div<IStyledFancyBox>`
  box-sizing: border-box;
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })};

  ${({theme}) => generatePillStyle(theme)};


  ${({ $externalStyle }) => $externalStyle};
`;
