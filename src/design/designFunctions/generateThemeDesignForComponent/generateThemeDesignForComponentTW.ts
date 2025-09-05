import { TGenerateThemeDesignForComponentProps } from './TGenerateThemeDesignForComponentProps';
import { generateNormalStyleTW } from './utils/generateNormalStyleTW';
import { generateOutlineStyleTW } from './utils/generateOutlineStyleTW';
import { generateTransparentStyleTW } from './utils/generateTransparentStyleTW';

import { getSimpleColorThemeType } from '@/design/designFunctions/getSimpleColorThemeType';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';

export type IGenerateThemeDesignForComponentTW = TStyledPrefixAndPicker<TGenerateThemeDesignForComponentProps> & {
  theme: TTheme;
};

/**
 * Generates Tailwind CSS classes for component theming
 *
 * This is the Tailwind CSS equivalent of generateThemeDesignForComponent
 * Returns a string of Tailwind classes instead of styled-components CSS
 *
 * @param props Component props containing theme configuration
 * @returns String of Tailwind CSS classes
 */
export default function generateThemeDesignForComponentTW(props: IGenerateThemeDesignForComponentTW): string {
  const { $themeType, $outlined, $textColor, $useSimpleTextColor } = props;

  const calcTextColor = $useSimpleTextColor ? $textColor || getSimpleColorThemeType($themeType) : $textColor;

  if ($themeType === 'transparent') {
    return generateTransparentStyleTW({
      $textColor: calcTextColor,
      ...props,
    });
  } else if ($outlined) {
    return generateOutlineStyleTW({
      $textColor: calcTextColor,
      ...props,
    });
  } else {
    return generateNormalStyleTW({
      $textColor: calcTextColor,
      ...props,
    });
  }
}
