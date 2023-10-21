import { css } from 'styled-components';

import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import colorTransparencyCalculator from '../../Design/color/colorTransparencyCalculator';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { IFancyBarProps } from './FancyBar.model';
import { TUiColorsType } from '../../Design/color/designColor';

// Define the function to generate the outline style for the tab switch
type TGenerateOutlineStyle = IStyledPrefixAndPicker<IFancyBarProps, 'outlined' | 'themeType' | 'layer' | 'outlinedBackgroundStrength'> & {
  theme: TUiColorsType;
};
const generateOutlineStyle = (props: TGenerateOutlineStyle) => {
  const { $themeType, theme, $layer = 3, $outlinedBackgroundStrength = 0.5 } = props;

  // get theme background color
  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: $layer || 3 });

  // generate the background color with a transparency of the background color
  const generateSlightBackgroundColor = colorTransparencyCalculator(
    getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: Math.max(1, $layer - 3) }),
    $outlinedBackgroundStrength
  );

  return css`
    box-sizing: border-box;
    background-color: ${generateSlightBackgroundColor};
    border: 1.5px solid ${backgroundColor};
  `;
};

// --------------------------------------------------------------------------- //
// -----------  The Main generator function to create a the square  ---------- //
// --------------------------------------------------------------------------- //
type TGenerateColorDesign = IStyledPrefixAndPicker<IFancyBarProps, 'themeType' | 'outlined' | 'layer' | 'outlinedBackgroundStrength'> & {
  theme: TUiColorsType;
};
export default function generateColorDesign(props: TGenerateColorDesign) {
  const { $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength } = props;
  let outlinedStyle, backgroundColor;

  // generate the outlined style if the outlined prop is true else generate only the background color
  if ($outlined) {
    outlinedStyle = generateOutlineStyle({ $outlined, $themeType, theme, $layer, $outlinedBackgroundStrength });
  } else {
    backgroundColor = getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: $layer || 3 });
  }

  // padding: ${$padding && $themeType !== 'transparent' ? tabSwitchSizes[$padding].paddingComponent : '0'};
  return css`
    background-color: ${$themeType !== 'transparent' && backgroundColor};
    ${outlinedStyle}
  `;
}
