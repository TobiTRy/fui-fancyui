import { TLayer } from '@/types/TLayer';
import { TThemeTypes } from '@/types/TThemeTypes';

export interface IGenerateThemeForCardProps {
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TThemeTypes;
  outlinedBackgroundStrength?: number;
}

export default IGenerateThemeForCardProps;
