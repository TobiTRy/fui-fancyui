import { TUiColorsType } from '../../../Design/color/designColor';
import { TLayer } from '../../../Design/color/generateColorSteps';
import { generateNormalStyle } from './utils/generateNormalStyle';
import { generateTransparentStyle } from './utils/generateTransparentStyle';
import { generateOutlineStyle } from './utils/generateOutlineStyle';

import IStyledPrefixAndPicker from '../../../Interface/IStyledPrefixAndPicker.model';
import { getSimpletColorThemeType } from '../getOpositColorThemeType';

export interface IGenerateThemeDesignForComponentProps {
  themeType?: keyof TUiColorsType;
  hoverColor?: Exclude<keyof TUiColorsType, 'transparent'>;
  textColor?: Exclude<keyof TUiColorsType, 'transparent'>;
  layer?: TLayer;
  outlined?: boolean;
  backgroundStrength?: number;
  backgroundState?: 'hover' | 'active';
  useSimpleeTextColor?: boolean;
}

export type IGenerateThemeDesignForComponent = IStyledPrefixAndPicker<IGenerateThemeDesignForComponentProps> & { theme: TUiColorsType };
// --------------------------------------------------------------------------- //
// -------  The main function to generate a style for the components -- ------ //
// --------------------------------------------------------------------------- //
export default function generateThemeDesignForComponent(props: IGenerateThemeDesignForComponent) {
  const { $themeType, theme, $outlined, $layer, $backgroundStrength, $backgroundState, $hoverColor, $textColor, $useSimpleeTextColor } =
    props;

  const calcTextColor = $useSimpleeTextColor ? ($textColor ? $textColor : getSimpletColorThemeType($themeType)) : $textColor;

  if ($themeType === 'transparent') {
    return generateTransparentStyle({ theme, $backgroundState, $hoverColor, $layer, $textColor: calcTextColor });
  } else if ($outlined) {
    return generateOutlineStyle({ $themeType, theme, $backgroundStrength, $backgroundState, $hoverColor, $textColor: calcTextColor, $layer });
  } else {
    return generateNormalStyle({ $themeType, theme, $layer, $backgroundState, $textColor: calcTextColor, $hoverColor });
  }
}
