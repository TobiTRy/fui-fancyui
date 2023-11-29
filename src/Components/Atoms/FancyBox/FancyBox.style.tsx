import { styled } from 'styled-components';

import generateThemeForCard from '../../Design/designFunctions/generateThemeForCard/generateThemeForCard';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { IFancyBoxProps } from './FancyBox.model';
import { TTheme } from '@/Components/Interface/TTheme';

// the styled-component for the FancyBar
type IStyledFancyBox = IStyledPrefixAndPicker<IFancyBoxProps> & { theme: TTheme };
export const StyledFancyBox = styled.div<IStyledFancyBox>`
  box-sizing: border-box;
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })};

  ${({ $externalStyle }) => $externalStyle};
`;
