import Color from "color";
import { TUiColorsType } from "../../Design/color/designColor";
import themeStore from "../../Design/color/themeStore";
import { TLayer } from "../../Design/color/generateColorSteps";


export const getOpositColorContrast = (color: keyof TUiColorsType, layer?: TLayer) => {
  const theme = themeStore.getState().theme;

  const isCurrentColorLight = Color(theme[color][layer || 0]).isLight();
  
  return isCurrentColorLight ? theme.primary[layer || 0] : theme.secondary[layer || 0];
}