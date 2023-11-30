import { CSSProp, styled } from 'styled-components';

import IStyledPrefixAndPicker from '../../core/interface/IStyledPrefixAndPicker.model';
import generateThemeForCard, { IgenerateThemeForCard } from '../../design/designFunctions/generateThemeForCard/generateThemeForCard';
import { TTheme } from '@/components/core/interface/TTheme';

type TStyledHeader = IStyledPrefixAndPicker<IgenerateThemeForCard> & { theme: TTheme; $externalStyle?: CSSProp };
export const StyledHeader = styled.header<TStyledHeader>`
  box-sizing: border-box;
  display: flex;
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })}
  ${({ $externalStyle }) => $externalStyle}
`;
