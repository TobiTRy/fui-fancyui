import Color from 'color';

import { TThemeTypes } from '@/interface/TUiColors';
import { TLayer } from '@/interface/TLayer';
import themeStore from '../../theme/themeStore/themeStore';

const filpColor = (isLightColor: boolean) => {
  const isDarkTheme = themeStore.getState().isDarkTheme;
  const theme = themeStore.getState().theme;

  if (!isDarkTheme) return isLightColor ? theme.colors['secondary'] : theme.colors['primary'];
  else return isLightColor ? theme.colors['primary'] : theme.colors['secondary'];
};

export default function flipThemeColor(color: TThemeTypes, layer?: TLayer) {
  const theme = themeStore.getState().theme;

  const isCurrentColorLight = Color(theme.colors[color][layer || 0]).isLight();

  const getFlipedColor = filpColor(isCurrentColorLight);

  return getFlipedColor[layer || 0];
}
