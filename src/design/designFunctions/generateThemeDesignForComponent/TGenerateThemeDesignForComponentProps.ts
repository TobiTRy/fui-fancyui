import { TLayer } from '@/types/TLayer';

import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TUiColorTypes } from '@/types/TUiColorTypes';

export type TGenerateThemeDesignForComponentProps = {
  themeType?: TUiColorTypes;
  hoverColor?: TUiColorsNotTransparent;
  textColor?: TUiColorsNotTransparent;
  textHover?: TUiColorsNotTransparent;
  outlinedRemoveBorder?: boolean;
  layer?: TLayer;
  outlined?: boolean;
  backgroundStrength?: number;
  backgroundState?: 'hover' | 'active';
  useSimpleTextColor?: boolean;
};

export default TGenerateThemeDesignForComponentProps;
