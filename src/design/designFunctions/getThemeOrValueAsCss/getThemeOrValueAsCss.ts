import { TThemeValueOrCSS } from './TgetThemeOrValueAsCSS.model';
import { themeStore } from '@/design/theme/themeStore';
import { TSpacings } from '@/types/TSpacings';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

// ----------------------------------------------------------------------------- //
//with this function you can pass normal css values or theme values like "XS" ..-//
// ----------------------------------------------------------------------------- //
export default function getThemeOrValueAsCSS(
  value?: TThemeValueOrCSS,
  themeSetting?: 'borderRadius' | 'spacing' | 'default'
) {
  if (value === undefined) return '';

  // Check if the themeSetting is set and not 'default'
  if (themeSetting && themeSetting !== 'default') {
    let themeValue;

    // Get the theme from the store
    const theme = themeStore.getState().theme;
    if (checkForNumberValue(value)) return `${value}`;

    // Check if the themeSetting is 'borderRadius' or 'spacing' and access the value using the key
    if (themeSetting === 'borderRadius') {
      const borderRadius = value as TBorderRadiusSizes;
      themeValue = theme[themeSetting][borderRadius];

      // Check if the themeSetting is 'spacing' and access the value using the key
    } else if (themeSetting === 'spacing') {
      const spacing = value as TSpacings;

      themeValue = theme[themeSetting][spacing];
    }

    return themeValue ?? '';
  }
  return `${value}`;
}

const checkForNumberValue = (value: TThemeValueOrCSS) => {
  const numberValue = typeof value === 'string' ? parseInt(value) : value;

  return isNaN(numberValue) ? false : true;
};
