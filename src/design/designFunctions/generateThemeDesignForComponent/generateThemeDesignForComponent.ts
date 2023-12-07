import { IGenerateThemeDesignForComponentProps } from './IGenerateThemeDesignForComponentProps';
import { generateNormalStyle } from './utils/generateNormalStyle';
import { generateOutlineStyle } from './utils/generateOutlineStyle';
import { generateTransparentStyle } from './utils/generateTransparentStyle';

import { getSimpleColorThemeType } from '@/design/designFunctions/getSimpleColorThemeType';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker.model';
import { TTheme } from '@/interface/TTheme';

export type IGenerateThemeDesignForComponent = IStyledPrefixAndPicker<IGenerateThemeDesignForComponentProps> & {
  theme: TTheme;
};
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

  const calcTextColor = $useSimpleTextColor
    ? $textColor
      ? $textColor
      : getSimpleColorThemeType($themeType)
    : $textColor;

  if ($themeType === 'transparent') {
    return generateTransparentStyle({
      theme,
      $backgroundState,
      $hoverColor,
      $layer,
      $textColor: calcTextColor,
      $textHover,
    });
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
