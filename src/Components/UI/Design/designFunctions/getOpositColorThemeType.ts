import { TUiColors } from '@/Components/UI/Interface/TUiColors';
import themeStore from '../color/themeStore';

export const getSimpletColorThemeType = (themeType?: TUiColors) => {
  const isDarkTheme = themeStore.getState().isDarkTheme;

  if (themeType === 'primary') {
    return isDarkTheme ? 'secondary' : 'primary';
  } else if (themeType === 'secondary') {
    return isDarkTheme ? 'primary' : 'secondary';
  } else {
    return isDarkTheme ? 'secondary' : 'primary';
  }
};
