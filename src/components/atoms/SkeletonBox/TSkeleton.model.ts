import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TglobalElementSizes } from '@/types/TGlobalElementSizes';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TLayer } from '@/types/TLayer';
import { CSSProp } from 'styled-components';

export type TSkeletonBox = {
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  sizeW?: TglobalElementSizes | 'fit';
  sizeH?: TglobalElementSizes | 'fit';
  borderRadius?: TBorderRadiusSizes;
  aspectRatio?: string;
  externalStyle?: CSSProp;
  index?: number;
};

export type TSkeletonBoxWithHTMLAttrs = TSkeletonBox & React.HTMLAttributes<HTMLDivElement>;
