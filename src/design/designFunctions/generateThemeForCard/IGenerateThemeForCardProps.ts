import { TLayer } from '@/types/TLayer';
import { TUiColorTypes } from '@/types/TUiColorTypes';

export interface IGenerateThemeForCardProps {
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TUiColorTypes;
  outlinedBackgroundStrength?: number;
}

export default IGenerateThemeForCardProps;
