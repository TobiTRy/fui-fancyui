import { TLayer } from '@/types/TLayer';
import { TUiColorTypes } from '@/types/TUiColorTypes';

export interface TGenerateThemeForCardProps {
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TUiColorTypes;
  outlinedBackgroundStrength?: number;
  outlinedRemoveBorder?: boolean;
}

export default TGenerateThemeForCardProps;
