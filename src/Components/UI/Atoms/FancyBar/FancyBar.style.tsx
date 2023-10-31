import { styled } from 'styled-components';

import { TUiColorsType } from '../../Design/color/designColor';
import generateThemeForCard from '../../HelperFunctions/designFunctions/generateThemeForCard/generateThemeForCard';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { IFancyBarProps } from './FancyBar.model';


// the styled-component for the FancyBar
type IStyledFancyBar = IStyledPrefixAndPicker<IFancyBarProps> & { theme: TUiColorsType };
export const StyledFancyBar = styled.div<IStyledFancyBar>`
  box-sizing: border-box;
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })};
    
  ${({ $externalStyle }) => $externalStyle};
`;
