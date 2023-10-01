import { css } from 'styled-components';
import { getBackgroundColor } from '../../../Design/color/colorCalculatorForComponet';
import { tabSwitchSizes } from '../FancyTabSwitch';
import { IFancyTabSwitchStyle } from '../FancyTabSwitch.style';
import colorTransparencyCalculator from '../../../Design/color/colorTransparencyCalculator';

const generateTransparentStyle = (props: TGenerateOutlineStyle) => {
  const { $padding, $themeType, theme, $rounded } = props;

  const getPaddings = $padding ? parseInt(tabSwitchSizes[$padding].paddingComponent) : 0;
  const calcPadding = getPaddings - 1.5 + 'px ' + (getPaddings + 12) + 'px';

  return css`
    overflow: hidden;
    border: 1.5px solid ${getBackgroundColor({ theme, $themeType: 'primary', $layer: 1 })};

    ${$rounded &&
    css`
      padding: ${calcPadding};
    `}
  `;
};

// Define the function to generate the outline style for the tab switch
type TGenerateOutlineStyle = Pick<IFancyTabSwitchStyle, '$outlined' | '$padding' | '$themeType' | '$rounded' | 'theme'>;
const generateOutlineStyle = (props: TGenerateOutlineStyle) => {
  const { $padding, $themeType, theme, $rounded } = props;

  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: 3 });
  if ($themeType === 'transparent') return generateTransparentStyle({ $padding, $themeType, theme, $rounded });

  const generateSlightBackgroundColor = colorTransparencyCalculator(
    getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: 1 }),
    0.5
  );

  return css`
    box-sizing: border-box;
    background-color: ${generateSlightBackgroundColor};
    border: 1.5px solid ${backgroundColor};
    padding: ${$padding ? (parseInt(tabSwitchSizes[$padding].paddingComponent) - 1.5) + 'px' : '0'};
  `;
};

// Define the function to generate the color design for the tab switch
type TGenerateColorDesign = Pick<IFancyTabSwitchStyle, '$themeType' | '$tabSpacing' | 'theme' | '$outlined' | '$padding' | '$rounded'>;
export default function generateColorDesign(props: TGenerateColorDesign) {
  const { $themeType, theme, $outlined, $padding, $rounded } = props;
  let outlinedStyle;

  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: 3 });

  if ($outlined) outlinedStyle = generateOutlineStyle({ $outlined, $padding, $themeType, theme, $rounded });

  return css`
    padding: ${$padding && $themeType !== 'transparent' ? tabSwitchSizes[$padding].paddingComponent : '0'};
    background-color: ${$themeType !== 'transparent' && backgroundColor};
    ${outlinedStyle}
  `;
}
