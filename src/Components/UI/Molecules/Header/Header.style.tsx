import { CSSProp, styled } from 'styled-components';

import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import generateThemeForCard, { IgenerateThemeForCard } from '../../HelperFunctions/designFunctions/generateThemeForCard/generateThemeForCard';
import { TUiColorsType } from '../../Design/color/designColor';

type TStyledHeader = IStyledPrefixAndPicker<IgenerateThemeForCard> & { theme: TUiColorsType; $externalStyle?: CSSProp };
export const StyledHeader = styled.header<TStyledHeader>`
  box-sizing: border-box;
  display: flex;
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })}
  ${({ $externalStyle }) => $externalStyle}
`;
