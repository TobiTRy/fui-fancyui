import { TThemeCSSValue } from '@/design/designFunctions/arrayToCssValues';
import { themeStore } from '@/design/theme/themeStore';
import { TSpacings } from '@/types/TSpacings';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

// ----------------------------------------------------------------------------- //
//with this function you can pass normal css values or theme values like "XS" ..-//
// ----------------------------------------------------------------------------- //
const getThemeOrValueForCSS = (value: TThemeCSSValue, themeSetting?: 'borderRadius' | 'spacing'): string => {
  if (themeSetting) {
    let themeValue;

    // Get the theme from the store
    const theme = themeStore.getState().theme;

    // Check if the themeSetting is 'borderRadius' or 'spacing' and access the value using the key
    if (themeSetting === 'borderRadius') {
      const borderRadius = value as TBorderRadiusSizes;
      themeValue = theme[themeSetting][borderRadius];
    } else if (themeSetting === 'spacing') {
      const spacing = value as TSpacings;
      themeValue = theme[themeSetting][spacing];
    }

    return themeValue ?? '';
  }
  return `${value}`;
};

export default getThemeOrValueForCSS;
