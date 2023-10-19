import { css } from 'styled-components';

import { getBackgroundColor } from '../../../Design/color/colorCalculatorForComponet';
import { tabSwitchSizes } from '../FancyTabSwitch';
import { IFancyTabSwitchStyle } from '../FancyTabSwitch.style';
import colorTransparencyCalculator from '../../../Design/color/colorTransparencyCalculator';
import { borderRadius } from '../../../Design/design';

const generateTransparentStyle = (props: TGenerateOutlineStyle) => {
  const { $padding, theme, $rounded } = props;

  const getPaddings = $padding ? parseInt(tabSwitchSizes[$padding].paddingComponent) : 0;
  const calcPadding = Math.max(0, getPaddings - 1.5) + 'px ' + (getPaddings + parseInt(borderRadius[$rounded || 'sm'])) + 'px';

  return css`
    overflow: hidden;
    border: 1.5px solid ${getBackgroundColor({ theme, $themeType: 'primary', $layer: 4 })};

    ${$rounded &&
    css`
      padding: ${calcPadding};
    `}
  `;
};

// Define the function to generate the outline style for the tab switch
type TGenerateOutlineStyle = Pick<IFancyTabSwitchStyle, '$outlined' | '$padding' | '$themeType' | '$rounded' | 'theme' | '$layer'>;
const generateOutlineStyle = (props: TGenerateOutlineStyle) => {
  const { $padding, $themeType, theme, $rounded, $layer = 3 } = props;

  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: $layer || 3 });
  if ($themeType === 'transparent') return generateTransparentStyle({ $padding, $themeType, theme, $rounded });

  const generateSlightBackgroundColor = colorTransparencyCalculator(
    getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: Math.max(1, $layer - 3 ) }),
    0.5
  );

  return css`
    box-sizing: border-box;
    background-color: ${generateSlightBackgroundColor};
    border: 1.5px solid ${backgroundColor};
    padding: ${$padding ? (parseInt(tabSwitchSizes[$padding].paddingComponent) - 1.5) + 'px' : '0'}; // 1.5px is the border width
  `;
};

// Define the function to generate the color design for the tab switch
type TGenerateColorDesign = Pick<IFancyTabSwitchStyle, '$themeType' | 'theme' | '$outlined' | '$padding' | '$rounded' | '$layer'>;
export default function generateColorDesign(props: TGenerateColorDesign) {
  const { $themeType, theme, $outlined, $padding, $rounded, $layer } = props;
  let outlinedStyle;

  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: $layer || 3 });

  if ($outlined) outlinedStyle = generateOutlineStyle({ $outlined, $padding, $themeType, theme, $rounded, $layer });

  return css`
    padding: ${$padding && $themeType !== 'transparent' ? tabSwitchSizes[$padding].paddingComponent : '0'};
    background-color: ${$themeType !== 'transparent' && backgroundColor};
    ${outlinedStyle}
  `;
}
