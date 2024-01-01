import { themeStore } from '@/design/theme/themeStore';
import { TBorderRadiusSizes } from '@/interface/TBorderRadiusSizes';
import { TSpacings } from '@/interface/TSpacings';

// check the incomming value is a theme value or not
export default function checkThemeValue(themeValue?: TBorderRadiusSizes | TSpacings | string | number) {
  const theme = themeStore.getState().theme;

  if (theme.spacing[themeValue as TSpacings] || theme.borderRadius[themeValue as TBorderRadiusSizes]) {
    return true;
  } else {
    return false;
  }
}
