import { styled } from 'styled-components';

import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TTheme } from '@/types/TTheme';
import { sizes } from '@/components/atoms/FancySVGAtom/sizeSettings';
import IStyledPrefixAndOmiter from '@/types/IStyledPrefixAndOmiter';
import { ISVGAtom } from '@/components/atoms/FancySVGAtom/FancySVGAtom.model';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

interface ICalcIconColor {
  theme: TTheme;
  $isActive?: boolean;
  $errorMessage?: string | undefined;
  $themeType: TUiColorsNotTransparent;
  $layer?: number;
}
// calculate the color of the icon based on the props and the theme
const calcIconColor = ({ theme, $isActive, $errorMessage, $themeType, $layer }: ICalcIconColor): string => {
  if (!$errorMessage) {
    return $isActive ? theme.colors.accent[0] : getBackgroundColor({ theme, $themeType, $layer });
  } else {
    return theme.colors.error[0];
  }
};

type IStyledSVGAtom = IStyledPrefixAndOmiter<ISVGAtom, 'children'>;
export const StyledSVG = styled.i<IStyledSVGAtom & { theme: TTheme }>`
  display: flex;
  justify-content: center;
  font-style: normal;
  align-items: center;
  width: ${({ $sizeC }) => sizes[$sizeC!]};
  aspect-ratio: 1/1;
  color: ${({ $isActive, $errorMessage, $isPassive, theme, $themeType = 'secondary', $layer = 0 }) =>
    !$isPassive && calcIconColor({ theme, $isActive, $errorMessage, $layer, $themeType })};
  ${({ $externalStyle }) => $externalStyle};
  will-change: transform;

  svg {
    width: 100%;
    height: 100%;
  }
`;
