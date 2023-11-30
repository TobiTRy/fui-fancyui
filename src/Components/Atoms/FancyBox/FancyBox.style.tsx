import { styled } from 'styled-components';

import generateThemeForCard from '../../../design/designFunctions/generateThemeForCard/generateThemeForCard';
import IStyledPrefixAndPicker from '../../../interface/IStyledPrefixAndPicker.model';
import { IFancyBoxProps } from './FancyBox.model';
import { TTheme } from '@/interface/TTheme';

// the styled-component for the FancyBar
type IStyledFancyBox = IStyledPrefixAndPicker<IFancyBoxProps> & { theme: TTheme };
export const StyledFancyBox = styled.div<IStyledFancyBox>`
  box-sizing: border-box;
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })};

  ${({ $externalStyle }) => $externalStyle};
`;