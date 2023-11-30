import { TThemeTypes } from '@/Components/Interface/TUiColors';
import themeStore from '../../theme/themeStore/themeStore';

const getSimpleColorThemeType = (themeType?: TThemeTypes) => {
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
