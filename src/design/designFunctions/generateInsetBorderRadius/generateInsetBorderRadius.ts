import { TSpacings } from '@/interface/TSpacings';
import { TBorderRadiusSizes } from '@/interface/TBorderRadiusSizes';
import { themeStore } from '@/design/theme/themeStore';
import checkThemeValue from '@/design/designFunctions/checkThemeValue/checkThemeValue';

export default function generateInsetBorderRadius(
  outerRadius: TBorderRadiusSizes | string | number,
  padding: TSpacings | string | number
) {
  const theme = themeStore.getState().theme;

  // check the incomming value is a theme value or not
  if (checkThemeValue(padding)) {
    padding = theme.spacing[padding as TSpacings];
  }

  if (checkThemeValue(outerRadius)) {
    outerRadius = theme.borderRadius[outerRadius as TBorderRadiusSizes];
  }

  // calculate the border radius minus padding for the inset border
  return `calc(${outerRadius} - ${padding})`;
}
