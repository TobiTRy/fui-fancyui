import themeStore from '../../theme/themeStore/themeStore';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

const flipThemeType = (isPrimary: boolean) => {
  const isDarkTheme = themeStore.getState().isDarkTheme;

  // If the theme is not dark, return the appropriate theme type based on the isPrimary parameter
  if (!isDarkTheme) {
    return isPrimary ? 'secondary' : 'primary';
  } else {
    // If the theme is dark, return the appropriate theme type based on the isPrimary parameter
    return isPrimary ? 'secondary' : 'primary';
  }
};

export default function flipThemeTypeFunction(currentThemeType: TUiColorsNotTransparent): TUiColorsNotTransparent {
  // Check if the current theme type is primary
  const isCurrentThemePrimary = currentThemeType === 'primary';

  // Get the flipped theme type based on the current theme type
  const flippedThemeType = flipThemeType(isCurrentThemePrimary);

  return flippedThemeType as TUiColorsNotTransparent;
}
