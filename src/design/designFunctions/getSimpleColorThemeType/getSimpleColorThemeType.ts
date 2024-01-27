import { TUiColorTypes } from '@/types/TUiColorTypes';
import { themeStore } from '@/design/theme/themeStore';

const getSimpleColorThemeType = (themeType?: TUiColorTypes) => {
  const isDarkTheme = themeStore.getState().isDarkTheme;

  if (themeType === 'primary') {
    return isDarkTheme ? 'secondary' : 'primary';
  } else if (themeType === 'secondary') {
    return isDarkTheme ? 'primary' : 'secondary';
  } else {
    return isDarkTheme ? 'secondary' : 'primary';
  }
};

export default getSimpleColorThemeType;
