import Color from 'color';

import { TThemeTypes } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from '@/Components/UI/Interface/TLayer';
import themeStore from '../color/themeStore/themeStore';

const filpThemeColor = (isLightColor: boolean) => {
  const isDarkTheme = themeStore.getState().isDarkTheme;
  const theme = themeStore.getState().theme;

  if (!isDarkTheme) return isLightColor ? theme.colors['secondary'] : theme.colors['primary'];
  else return isLightColor ? theme.colors['primary'] : theme.colors['secondary'];
};

export const getOpositColorContrast = (color: TThemeTypes, layer?: TLayer) => {
  const theme = themeStore.getState().theme;

  const isCurrentColorLight = Color(theme.colors[color][layer || 0]).isLight();

  const getFlipedColor = filpThemeColor(isCurrentColorLight);

  return getFlipedColor[layer || 0];
};
