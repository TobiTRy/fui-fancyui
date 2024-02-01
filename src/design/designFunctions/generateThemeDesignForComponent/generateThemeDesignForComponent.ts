import { IGenerateThemeDesignForComponentProps } from './IGenerateThemeDesignForComponentProps';
import { generateNormalStyle } from './utils/generateNormalStyle';
import { generateOutlineStyle } from './utils/generateOutlineStyle';
import { generateTransparentStyle } from './utils/generateTransparentStyle';

import { getSimpleColorThemeType } from '@/design/designFunctions/getSimpleColorThemeType';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';

export type IGenerateThemeDesignForComponent = IStyledPrefixAndPicker<IGenerateThemeDesignForComponentProps> & {
  theme: TTheme;
};
// --------------------------------------------------------------------------- //
// -------  The main function to generate a style for the components -- ------ //
// --------------------------------------------------------------------------- //
export default function generateThemeDesignForComponent(props: IGenerateThemeDesignForComponent) {
  const { $themeType, $outlined, $textColor, $useSimpleTextColor } = props;

  const calcTextColor = $useSimpleTextColor ? $textColor || getSimpleColorThemeType($themeType) : $textColor;

  if ($themeType === 'transparent') {
    return generateTransparentStyle({
      $textColor: calcTextColor,
      ...props,
    });
  } else if ($outlined) {
    return generateOutlineStyle({
      $textColor: calcTextColor,
      ...props,
    });
  } else {
    return generateNormalStyle({
      $textColor: calcTextColor,
      ...props,
    });
  }
}
