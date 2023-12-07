import { getBackgroundColor } from '../../colorCalculatorForComponent/colorCalculatorForComponent';
import themeStore from '../../../theme/themeStore/themeStore';
import { IGenerateThemeDesignForComponent } from '../generateThemeDesignForComponent';

// --------------------------------------------------------------------------- //
// ------------- generate the text color for the components  ----------------- //
// --------------------------------------------------------------------------- //
export const generateTextColor = (
  props: Pick<IGenerateThemeDesignForComponent, '$themeType' | '$textColor' | '$layer'>
) => {
  const { $themeType, $textColor, $layer } = props;
  const theme = themeStore.getState().theme;

  // if the userer profides a $textColor use this
  if ($textColor) return theme.colors[$textColor][$layer ?? 0];

  return getBackgroundColor({ theme, $themeType: $textColor ?? $themeType ?? 'secondary', $layer: $layer ?? 0 });
};
