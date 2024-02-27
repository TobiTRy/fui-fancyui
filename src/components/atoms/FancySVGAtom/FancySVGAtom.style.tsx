import { styled } from 'styled-components';

import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TTheme } from '@/types/TTheme';
import { sizes } from '@/components/atoms/FancySVGAtom/sizeSettings';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { TSVGAtom } from '@/components/atoms/FancySVGAtom/TFancySVGAtom.model';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

interface ICalcIconColor {
  theme: TTheme;
  $isActive?: boolean;
  $systemMessage?: TUiColorsSystemMessage;
  $themeType: TUiColorsNotTransparent;
  $layer?: number;
}
// calculate the color of the icon based on the props and the theme
const calcIconColor = ({ theme, $isActive, $systemMessage, $themeType, $layer }: ICalcIconColor): string => {
  if (!$systemMessage) {
    return $isActive ? theme.colors.accent[0] : getBackgroundColor({ theme, $themeType, $layer });
  } else {
    return theme.colors[$systemMessage][$layer ?? 0];
  }
};

type IStyledSVGAtom = TStyledPrefixAndOmiter<TSVGAtom, 'children'>;
export const StyledSVG = styled.i<IStyledSVGAtom & { theme: TTheme }>`
  display: flex;
  justify-content: center;
  font-style: normal;
  align-items: center;
  width: ${({ $sizeC }) => sizes[$sizeC ?? 'xxs']};
  aspect-ratio: 1/1;
  color: ${({ $isActive, $systemMessage, $isPassive, theme, $themeType = 'secondary', $layer = 0 }) =>
    !$isPassive && calcIconColor({ theme, $isActive, $systemMessage, $layer, $themeType })};
  ${({ $externalStyle }) => $externalStyle};
  will-change: transform;

  svg {
    width: 100%;
    height: 100%;
  }
`;
