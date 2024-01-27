import { CSSProp, styled } from 'styled-components';

import { generateThemeForCard } from '@/design/designFunctions/generateThemeForCard';

import { TTheme } from '@/types/TTheme';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { IGenerateThemeForCardProps } from '@/design/designFunctions/generateThemeForCard';

type TStyledHeader = IStyledPrefixAndPicker<IGenerateThemeForCardProps> & { theme: TTheme; $externalStyle?: CSSProp };
export const StyledHeader = styled.header<TStyledHeader>`
  box-sizing: border-box;
  display: flex;
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })}
  ${({ $externalStyle }) => $externalStyle}
`;
