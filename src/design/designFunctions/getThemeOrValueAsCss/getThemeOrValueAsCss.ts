import { TThemeValueMap, TThemeValueOrCSS } from './TgetThemeOrValueAsCSS.model';
import { themeStore } from '@/design/theme/themeStore';
import { TSpacings } from '@/types/TSpacings';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TglobalElementSizes } from '@/types/TGlobalElementSizes';

// ----------------------------------------------------------------------------- //
//with this function you can pass normal css values or theme values like "XS" ..-//
// ----------------------------------------------------------------------------- //
export default function getThemeOrValueAsCSS<T extends keyof TThemeValueMap = 'default'>(
  value?: TThemeValueOrCSS,
  themeSetting?: T
) {
  if (value === undefined) return '';

  // Check if the themeSetting is set and not 'default'
  if (themeSetting && themeSetting !== 'default') {
    let themeValue: string | undefined;

    // Get the theme from the store
    const theme = themeStore.getState().theme;
    if (checkForNumberValue(value)) return `${value}`;

    // Check if the themeSetting is 'borderRadius' or 'spacing' and access the value using the key
    switch (themeSetting) {
      case 'borderRadius': {
        const borderRadius = value as TBorderRadiusSizes;
        themeValue = theme.borderRadius[borderRadius];
        break;
      }
      case 'spacing': {
        const spacing = value as TSpacings;
        themeValue = theme.spacing[spacing];
        break;
      }
      case 'elementSize': {
        const elementSize = value as TglobalElementSizes;
        themeValue = theme.globalElementSizes[elementSize];
        break;
      }
    }

    return themeValue ?? '';
  }
  return `${value}`;
}

const checkForNumberValue = (value: TThemeValueOrCSS) => {
  const numberValue = typeof value === 'string' ? parseInt(value) : value;

  return isNaN(numberValue) ? false : true;
};
