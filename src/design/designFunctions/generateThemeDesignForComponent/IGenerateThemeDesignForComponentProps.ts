import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TThemeTypesNotTransparent } from '@/interface/TThemeTypesNotTransparent';

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
