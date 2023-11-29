import { TThemeTypes, TThemeTypesNotTrasparent } from '@/Components/Interface/TUiColors';
import { TLayer } from '@/Components/Interface/TLayer';
import { generateNormalStyle } from './utils/generateNormalStyle';
import { generateTransparentStyle } from './utils/generateTransparentStyle';
import { generateOutlineStyle } from './utils/generateOutlineStyle';

import IStyledPrefixAndPicker from '@/Components/Interface/IStyledPrefixAndPicker.model';
import { getSimpleColorThemeType } from '@/Components/Design/designFunctions/getSimpleColorThemeType';
import { TTheme } from '@/Components/Interface/TTheme';

export interface IGenerateThemeDesignForComponentProps {
  themeType?: TThemeTypes;
  hoverColor?: TThemeTypesNotTrasparent;
  textColor?: TThemeTypesNotTrasparent;
  textHover?: TThemeTypesNotTrasparent;
  layer?: TLayer;
  outlined?: boolean;
  backgroundStrength?: number;
  backgroundState?: 'hover' | 'active';
  useSimpleTextColor?: boolean;
}

export type IGenerateThemeDesignForComponent = IStyledPrefixAndPicker<IGenerateThemeDesignForComponentProps> & { theme: TTheme };
// --------------------------------------------------------------------------- //
// -------  The main function to generate a style for the components -- ------ //
// --------------------------------------------------------------------------- //
export default function generateThemeDesignForComponent(props: IGenerateThemeDesignForComponent) {
  const {
    $themeType,
    theme,
    $outlined,
    $layer,
    $backgroundStrength,
    $backgroundState,
    $hoverColor,
    $textColor,
    $useSimpleTextColor,
    $textHover,
  } = props;

  const calcTextColor = $useSimpleTextColor ? ($textColor ? $textColor : getSimpleColorThemeType($themeType)) : $textColor;

  if ($themeType === 'transparent') {
    return generateTransparentStyle({ theme, $backgroundState, $hoverColor, $layer, $textColor: calcTextColor, $textHover });
  } else if ($outlined) {
    return generateOutlineStyle({
      $themeType,
      theme,
      $backgroundStrength,
      $backgroundState,
      $hoverColor,
      $textColor: calcTextColor,
      $layer,
    });
  } else {
    return generateNormalStyle({ $themeType, theme, $layer, $backgroundState, $textColor: calcTextColor, $hoverColor });
  }
}
