import { styled } from 'styled-components';

import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TTheme } from '@/types/TTheme';
import { sizes } from '@/components/atoms/FancySVGAtom/sizeSettings';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { TFancySVGAtom } from '@/components/atoms/FancySVGAtom/TFancySVGAtom.model';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TLayer } from '@/types';

interface ICalcIconColor {
  theme: TTheme;
  $isActive?: boolean;
  $systemMessage?: TUiColorsSystemMessage;
  $themeType: TUiColorsNotTransparent;
  $layer?: TLayer;
}
// calculate the color of the icon based on the props and the theme
const calcIconColor = ({ theme, $isActive, $systemMessage, $themeType, $layer }: ICalcIconColor): string => {
  if (!$systemMessage) {
    return $isActive ? theme.color.accent[0] : getBackgroundColor({ theme, $themeType, $layer });
  } else {
    return theme.color[$systemMessage][$layer ?? 0];
  }
};

type IStyledSVGAtom = TStyledPrefixAndOmiter<TFancySVGAtom, 'children'>;
export const StyledSVG = styled.i<IStyledSVGAtom & { theme: TTheme }>`
  display: flex;
  justify-content: center;
  font-style: normal;
  align-items: center;
  width: ${({ $sizeC }) => sizes[$sizeC ?? 'xxs']};
  aspect-ratio: 1/1;
  color: ${({ $isActive, $systemMessage, $isPassive, theme, $themeType = 'secondary', $layer = 0 }) =>
    $themeType === 'inherit'
      ? 'inherit'
      : !$isPassive && calcIconColor({ theme, $isActive, $systemMessage, $layer, $themeType })};
  ${({ $externalStyle }) => $externalStyle};
  will-change: transform;

  svg {
    width: 100%;
    height: 100%;
  }
`;
