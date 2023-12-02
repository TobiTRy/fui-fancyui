import Color from 'color';

import { TThemeTypes } from '@/interface/TUiColors';
import { TLayer } from '@/interface/TLayer';
import themeStore from '../../theme/themeStore/themeStore';

const filpColor = (isLightColor: boolean) => {
  const isDarkTheme = themeStore.getState().isDarkTheme;
  const theme = themeStore.getState().theme;

  // If the theme is not dark, return the appropriate color based on the isLightColor parameter
  if (!isDarkTheme) {
    return isLightColor ? theme.colors['secondary'] : theme.colors['primary'];
  } else {
    // If the theme is dark, return the appropriate color based on the isLightColor parameter
    return isLightColor ? theme.colors['primary'] : theme.colors['secondary'];
  }
};

export default function flipThemeColor(color: TThemeTypes, layer?: TLayer) {
  const theme = themeStore.getState().theme;

  // Check if the current color is light or dark
  const isCurrentColorLight = Color(theme.colors[color][layer || 0]).isLight();

  // Get the flipped color based on the current color's lightness
  const getFlippedColor = filpColor(isCurrentColorLight);

  return getFlippedColor[layer || 0];
}
