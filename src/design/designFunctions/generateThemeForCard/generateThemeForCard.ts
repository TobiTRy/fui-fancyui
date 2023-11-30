import { css } from 'styled-components';

import { TThemeTypes } from '@/interface/TUiColors';
import { TLayer } from '@/interface/TLayer';
import IStyledPrefixAndPicker from '../../../interface/IStyledPrefixAndPicker.model';
import { getBackgroundColor } from '../../color/colorCalculatorForComponent/colorCalculatorForComponet';
import colorTransparencyCalculator from '../../color/colorTransparencyCalculator/colorTransparencyCalculator';
import { TTheme } from '@/interface/TTheme';

export interface IgenerateThemeForCard {
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TThemeTypes;
  outlinedBackgroundStrength?: number;
}

const generateOutlineStyle = (props: TGenerateColorDesign) => {
  const { $themeType, theme, $layer = 3, $outlinedBackgroundStrength = 0.5 } = props;

  // get theme background color
  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 3 });

  // generate the background color with a transparency of the background color
  const generateSlightBackgroundColor = colorTransparencyCalculator(
    getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: Math.max(1, $layer - 3) }),
    $outlinedBackgroundStrength
  );

  return css`
    background-color: ${generateSlightBackgroundColor};
    border: 1.5px solid ${backgroundColor};
  `;
};

// --------------------------------------------------------------------------- //
// -----------  The Main generator function to create a the square  ---------- //
// --------------------------------------------------------------------------- //
type TGenerateColorDesign = IStyledPrefixAndPicker<IgenerateThemeForCard> & {
  theme: TTheme;
};
export default function generateThemeForCard(props: TGenerateColorDesign) {
  const { $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength } = props;
  let outlinedStyle, backgroundColor;

  // generate the outlined style if the outlined prop is true else generate only the background color
  if ($outlined) {
    outlinedStyle = generateOutlineStyle({ $outlined, $themeType, theme, $layer, $outlinedBackgroundStrength });
  } else {
    backgroundColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 1 });
  }

  // padding: ${$padding && $themeType !== 'transparent' ? tabSwitchSizes[$padding].paddingComponent : '0'};
  return css`
    background-color: ${$themeType !== 'transparent' && backgroundColor};
    ${$themeType !== 'transparent' &&
    backgroundColor &&
    css`
      border: 1.5px solid ${backgroundColor};
    `};
    ${outlinedStyle}
  `;
}
