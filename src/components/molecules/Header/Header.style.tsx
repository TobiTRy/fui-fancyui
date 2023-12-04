import { CSSProp, styled } from 'styled-components';

import generateThemeForCard from '@/design/designFunctions/generateThemeForCard/generateThemeForCard';

import { TTheme } from '@/interface/TTheme';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker.model';
import { IGenerateThemeForCardProps } from '@/design/designFunctions/generateThemeForCard';

type TStyledHeader = IStyledPrefixAndPicker<IGenerateThemeForCardProps> & { theme: TTheme; $externalStyle?: CSSProp };
export const StyledHeader = styled.header<TStyledHeader>`
  box-sizing: border-box;
  display: flex;
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })}
  ${({ $externalStyle }) => $externalStyle}
`;
