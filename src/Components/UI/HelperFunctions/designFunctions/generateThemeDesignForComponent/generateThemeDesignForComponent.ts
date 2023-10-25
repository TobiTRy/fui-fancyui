import { css } from 'styled-components';

import { TUiColorsType } from '../../../Design/color/designColor';
import { TLayer } from '../../../Design/color/generateColorSteps';
import { generateNormalStyle } from './utils/generateNormalStyle';
import { generateTransparentStyle } from './utils/generateTransparentStyle';
import { generateOutlineStyle } from './utils/generateOutlineStyle';


// --------------------------------------------------------------------------- //
// -----------  The Main generator function to create a the square  ---------- //
// --------------------------------------------------------------------------- //
export interface IGenerateThemeDesignForComponent{
  $themeType?: keyof TUiColorsType;
  $hoverColor?: keyof TUiColorsType;
  $textColor?: keyof TUiColorsType;
  $layer?: TLayer;
  theme: TUiColorsType;
  $outlined?: boolean;
  $backgroundStrength?: number;
  $backgroundState: 'normal' | 'hover' | 'active';
}
export default function generateThemeDesignForComponent(props: IGenerateThemeDesignForComponent) {
  const { $themeType, theme, $outlined, $layer, $backgroundStrength, $backgroundState, $hoverColor, $textColor } = props;
  let style;

  // generate the outlined style if the outlined prop is true else generate only the background color
  if ($themeType === 'transparent') {
    style = generateTransparentStyle({ $themeType, theme, $backgroundState, $hoverColor });
  } else if ($outlined) {
    style = generateOutlineStyle({ $themeType, theme, $backgroundStrength, $backgroundState, $hoverColor, $textColor });
  } else {
    style = generateNormalStyle({ $themeType, theme, $layer, $backgroundState });
  }

  return css`


    ${style}
  `;
}
