import { TUiColorsType } from '../../../Design/color/designColor';
import { TLayer } from '../../../Design/color/generateColorSteps';
import { generateNormalStyle } from './utils/generateNormalStyle';
import { generateTransparentStyle } from './utils/generateTransparentStyle';
import { generateOutlineStyle } from './utils/generateOutlineStyle';

export interface IGenerateThemeDesignForComponent {
  $themeType?: keyof TUiColorsType;
  $hoverColor?: keyof TUiColorsType;
  $textColor?: keyof TUiColorsType;
  $layer?: TLayer;
  theme: TUiColorsType;
  $outlined?: boolean;
  $backgroundStrength?: number;
  $backgroundState: 'normal' | 'hover' | 'active';
}
// --------------------------------------------------------------------------- //
// -------  The main function to generate a style for the components -- ------ //
// --------------------------------------------------------------------------- //
export default function generateThemeDesignForComponent(props: IGenerateThemeDesignForComponent) {
  const { $themeType, theme, $outlined, $layer, $backgroundStrength, $backgroundState, $hoverColor, $textColor } = props;

  if ($themeType === 'transparent') {
    return generateTransparentStyle({ theme, $backgroundState, $hoverColor });
  } else if ($outlined) {
    return generateOutlineStyle({ $themeType, theme, $backgroundStrength, $backgroundState, $hoverColor, $textColor });
  } else {
    return generateNormalStyle({ $themeType, theme, $layer, $backgroundState });
  }
}
