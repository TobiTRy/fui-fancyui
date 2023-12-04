import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TThemeTypes';

export interface IGenerateThemeForCardProps {
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TThemeTypes;
  outlinedBackgroundStrength?: number;
}

export default IGenerateThemeForCardProps;
