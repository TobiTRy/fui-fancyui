import { CSSProp, styled } from 'styled-components';

import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import generateThemeForCard, { IgenerateThemeForCard } from '../../Design/designFunctions/generateThemeForCard/generateThemeForCard';
import { TTheme } from '@/Components/Interface/TTheme';

type TStyledHeader = IStyledPrefixAndPicker<IgenerateThemeForCard> & { theme: TTheme; $externalStyle?: CSSProp };
export const StyledHeader = styled.header<TStyledHeader>`
  box-sizing: border-box;
  display: flex;
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })}
  ${({ $externalStyle }) => $externalStyle}
`;
