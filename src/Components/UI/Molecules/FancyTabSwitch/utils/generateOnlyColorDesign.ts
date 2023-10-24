import { css } from 'styled-components';

import { getBackgroundColor } from '../../../Design/color/colorCalculatorForComponet';
import colorTransparencyCalculator from '../../../Design/color/colorTransparencyCalculator';
import { TUiColorsType } from '../../../Design/color/designColor';
import { TLayer } from '../../../Design/color/generateColorSteps';

type TGenerateOutlinedHoverStyle = Pick<IGenerateColorDesignProps, '$themeType' | 'theme' | '$layer' | '$outlinedBackgroundStrength'>;
const generateOutlinedHoverStyle = (props: TGenerateOutlinedHoverStyle) => {
  const { theme, $layer = 3, $themeType, $outlinedBackgroundStrength = 0.1 } = props;

  // generate the background color with a transparency of the background color
  const generateSlightBackgroundColor = colorTransparencyCalculator(
    getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: Math.max(1, $layer - 3) }),
    $outlinedBackgroundStrength
  );

  return generateSlightBackgroundColor;
};


type TGenerateTransparentStyle = Pick<
  IGenerateColorDesignProps,
  '$outlined' | '$themeType' | 'theme' | '$layer' | '$outlinedBackgroundStrength' | '$backgroundState'
>;
const generateTransparentStyle = (props: TGenerateTransparentStyle) => {
  const { theme, $backgroundState } = props;



  return css`
    background-color: transparent;
  `;
};

// Define the function to generate the outline style for the tab switch
type TGenerateOutlineStyle = Pick<
  IGenerateColorDesignProps,
  '$outlined' | '$themeType' | 'theme' | '$layer' | '$outlinedBackgroundStrength' | '$backgroundState'
>;
const generateOutlineStyle = (props: TGenerateOutlineStyle) => {
  const { $themeType, theme, $layer = 3, $backgroundState, $outlinedBackgroundStrength } = props;

  // if the theme type istransparent, generate the transparent style and return it
  // if ($themeType === 'transparent') return generateTransparentStyle({ $themeType, theme });
  // get theme background color
  const borderColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 0 });
  const backgroundColor = generateOutlinedHoverStyle({
    $themeType,
    theme,
    $layer,
    $outlinedBackgroundStrength: $outlinedBackgroundStrength ?? 0.1,
  });

  return css`
    box-sizing: border-box;
    background-color: ${backgroundColor};
    border: 1.5px solid ${borderColor};
  `;
};

// --------------------------------------------------------------------------- //
// ---------- The main generator functions to generate the style ------------ //
// --------------------------------------------------------------------------- //
type TGenerateNormalStyle = Pick<IGenerateColorDesignProps, '$themeType' | 'theme' | '$layer'>;
const generateBackground = (props: TGenerateNormalStyle) => {
  const { $themeType, theme, $layer = 0 } = props;
  const backgorundColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 0 });

  return css`
    background-color: ${backgorundColor};
  `;
};

// --------------------------------------------------------------------------- //
// -----------  The Main generator function to create a the square  ---------- //
// --------------------------------------------------------------------------- //
export interface IGenerateColorDesignProps {
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  $hoverColor?: keyof TUiColorsType;
  theme: TUiColorsType;
  $outlined?: boolean;
  $outlinedBackgroundStrength?: number;
  $backgroundState: 'normal' | 'hover' | 'active';
}
export default function generateOnlyColorDesign(props: IGenerateColorDesignProps) {
  const { $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength, $backgroundState } = props;
  let style;

  // generate the outlined style if the outlined prop is true else generate only the background color
  if ($themeType === 'transparent') {
    style = generateTransparentStyle({ $themeType, theme });
  } else if ($outlined) {
    style = generateOutlineStyle({ $themeType, theme, $outlinedBackgroundStrength, $backgroundState });

  } else {
    style = generateBackground({ $themeType, theme, $layer });
  }

  return css`
    ${style}
  `;
}
