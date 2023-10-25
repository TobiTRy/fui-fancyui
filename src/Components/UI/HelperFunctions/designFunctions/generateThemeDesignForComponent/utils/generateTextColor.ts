import { getBackgroundColor } from "../../../../Design/color/colorCalculatorForComponet";
import themeStore from "../../../../Design/color/themeStore";
import { IGenerateThemeDesignForComponent } from "../generateThemeDesignForComponent";

export const generateTextColor = (props: Pick<IGenerateThemeDesignForComponent, '$themeType' | '$textColor' | '$layer'>) => {
  const { $themeType, $textColor, $layer } = props;
  const theme = themeStore.getState().theme;

  // if the userer profides a $textColor use this
  if ($textColor) return theme[$textColor][0];

  return getBackgroundColor({ theme, $themeType: $textColor ?? $themeType ?? 'secondary', $layer: $layer ?? 0 });
};