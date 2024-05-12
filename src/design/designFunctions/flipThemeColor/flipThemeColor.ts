import Color from 'color';

import { TLayer } from '@/types/TLayer';
import themeStore from '../../theme/themeStore/themeStore';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

const filpColor = (isLightColor: boolean) => {
  const isDarkTheme = themeStore.getState().isDarkTheme;
  const theme = themeStore.getState().theme;

  // If the theme is not dark, return the appropriate color based on the isLightColor parameter
  if (!isDarkTheme) {
    return isLightColor ? theme.color['secondary'] : theme.color['primary'];
  } else {
    // If the theme is dark, return the appropriate color based on the isLightColor parameter
    return isLightColor ? theme.color['primary'] : theme.color['secondary'];
  }
};

export default function flipThemeColor(color: TUiColorsNotTransparent, layer?: TLayer) {
  const theme = themeStore.getState().theme;

  // Check if the current color is light or dark
  const isCurrentColorLight = Color(theme.color[color][layer || 0]).isLight();

  // Get the flipped color based on the current color's lightness
  const getFlippedColor = filpColor(isCurrentColorLight);

  return getFlippedColor[layer || 0];
}
