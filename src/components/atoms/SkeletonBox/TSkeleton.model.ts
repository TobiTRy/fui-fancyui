import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TGlobalElementSizes } from '@/types/TGlobalElementSizes';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
import { TLayer } from '@/types/TLayer';

export type TSkeletonBox = {
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
  sizeW?: TGlobalElementSizes | 'fit';
  sizeH?: TGlobalElementSizes | 'fit';
  borderRadius?: TBorderRadiusSizes;
  aspectRatio?: string;
};
