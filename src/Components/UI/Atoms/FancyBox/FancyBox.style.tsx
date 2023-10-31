import { styled } from 'styled-components';

import { TUiColorsType } from '../../Design/color/designColor';
import generateThemeForCard from '../../HelperFunctions/designFunctions/generateThemeForCard/generateThemeForCard';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { IFancyBoxProps } from './FancyBox.model';


// the styled-component for the FancyBar
type IStyledFancyBox = IStyledPrefixAndPicker<IFancyBoxProps> & { theme: TUiColorsType };
export const StyledFancyBar = styled.div<IStyledFancyBox>`
  box-sizing: border-box;
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })};
    
  ${({ $externalStyle }) => $externalStyle};
`;
