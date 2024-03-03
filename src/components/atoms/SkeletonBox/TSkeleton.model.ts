import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TGlobalElementSizes } from '@/types/TGlobalElementSizes';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TLayer } from '@/types/TLayer';
import { CSSProp } from 'styled-components';

export type TSkeletonBox = {
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  sizeW?: TGlobalElementSizes | 'fit';
  sizeH?: TGlobalElementSizes | 'fit';
  borderRadius?: TBorderRadiusSizes;
  aspectRatio?: string;
  externalStyle?: CSSProp;
};

export type TSkeletonBoxWithHTMLAttrs = TSkeletonBox & React.HTMLAttributes<HTMLDivElement>;
