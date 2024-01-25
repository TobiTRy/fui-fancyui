import { TLayer } from '@/types/TLayer';

import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
import { TUiColorTypes } from '@/types/TUiColorTypes';

export interface IGenerateThemeDesignForComponentProps {
  themeType?: TUiColorTypes;
  hoverColor?: TThemeTypesNotTransparent;
  textColor?: TThemeTypesNotTransparent;
  textHover?: TThemeTypesNotTransparent;
  layer?: TLayer;
  outlined?: boolean;
  backgroundStrength?: number;
  backgroundState?: 'hover' | 'active';
  useSimpleTextColor?: boolean;
}

export default IGenerateThemeDesignForComponentProps;
