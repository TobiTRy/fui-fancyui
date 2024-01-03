import { TLayer } from '@/types/TLayer';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

export interface IGenerateThemeDesignForComponentProps {
  themeType?: TThemeTypes;
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
