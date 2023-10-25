import { TUiColorsType } from '../../Design/color/designColor';
import themeStore from '../../Design/color/themeStore';

export const getSimpletColorThemeType = (themeType?: keyof TUiColorsType) => {
  const isDarkTheme = themeStore.getState().isDarkTheme;

  if (themeType === 'primary') {
    return isDarkTheme ? 'secondary' : 'primary';
  } else if (themeType === 'secondary') {
    return isDarkTheme ? 'primary' : 'secondary';
  } else {
    return isDarkTheme ? 'secondary' : 'primary';
  }
};
