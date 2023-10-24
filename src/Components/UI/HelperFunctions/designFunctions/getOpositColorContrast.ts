import Color from 'color';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import themeStore from '../../Design/color/themeStore';

const filpThemeColor = (isLightColor: boolean,) => {
  const isDarkTheme = themeStore.getState().isDarkTheme;
  const theme = themeStore.getState().theme;


  if(!isDarkTheme) return isLightColor ? theme['secondary'] : theme['primary'];
  else return isLightColor ? theme['primary'] : theme['secondary'];
  
};

export const getOpositColorContrast = (color: keyof TUiColorsType, layer?: TLayer) => {
  const theme = themeStore.getState().theme;

  const isCurrentColorLight = Color(theme[color][layer || 0]).isLight();

  const getFlipedColor = filpThemeColor(isCurrentColorLight);

  return getFlipedColor[layer || 0];
};
