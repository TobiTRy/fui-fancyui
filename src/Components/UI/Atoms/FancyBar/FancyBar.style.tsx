import styled, { css } from 'styled-components';

import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { borderRadius, spacingPx } from '../../Design/design';
import colorTransparencyCalculator from '../../Design/color/colorTransparencyCalculator';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { IFancyBarProps } from './FancyBar.model';
import { TUiColorsType } from '../../Design/color/designColor';

export const tabSwitchSizes = {
  sm: {
    paddingComponent: '4px',
  },
  md: {
    paddingComponent: spacingPx.xs,
  },
  lg: {
    paddingComponent: spacingPx.sm,
  },
};

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
type TGenerateOutlineStyle = IStyledPrefixAndPicker<
  IFancyBarProps,
  'outlined' | 'themeType' | 'rounded' | 'layer' | 'outlinedBackgroundStrength' | 'padding'
> & {
  theme: TUiColorsType;
};
const generateOutlineStyle = (props: TGenerateOutlineStyle) => {
  const { $themeType, theme, $rounded, $layer = 3, $outlinedBackgroundStrength = 0.5, $padding } = props;

  // if the theme type istransparent, generate the transparent style and return it
  if ($themeType === 'transparent') return generateTransparentStyle({ $padding, $themeType, theme, $rounded });
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
    padding: ${$padding ? parseInt(tabSwitchSizes[$padding].paddingComponent) - 1.5 + 'px' : '0'}; // 1.5px is the border width
  `;
};

// --------------------------------------------------------------------------- //
// -----------  The Main generator function to create a the square  ---------- //
// --------------------------------------------------------------------------- //
type TGenerateColorDesign = IStyledPrefixAndPicker<
  IFancyBarProps,
  'themeType' | 'outlined' | 'rounded' | 'layer' | 'outlinedBackgroundStrength' | 'padding'
> & { theme: TUiColorsType };

export default function generateColorDesign(props: TGenerateColorDesign) {
  const { $themeType, theme, $outlined, $rounded, $layer, $outlinedBackgroundStrength, $padding } = props;
  let outlinedStyle, backgroundColor;

  // generate the outlined style if the outlined prop is true else generate only the background color
  if ($outlined) {
    outlinedStyle = generateOutlineStyle({ $outlined, $themeType, theme, $rounded, $layer, $outlinedBackgroundStrength, $padding });
  } else {
    backgroundColor = getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: $layer || 3 });
  }

  // padding: ${$padding && $themeType !== 'transparent' ? tabSwitchSizes[$padding].paddingComponent : '0'};
  return css`
    background-color: ${$themeType !== 'transparent' && backgroundColor};
    ${outlinedStyle}
  `;
}


