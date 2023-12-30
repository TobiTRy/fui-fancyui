import { CSSProp } from 'styled-components';
import { TBorderRadiusSizes } from '@/interface/TBorderRadiusSizes';
import { TComponentSizesExtended } from '@/interface/TComponentSizes';

export type TFancyImage = {
  aspectRatio?: string; // e.g. "16/9"
  darken?: number | boolean;
  externalStyle?: CSSProp;
  borderRadius?: TBorderRadiusSizes;
  sizeW?: TComponentSizesExtended | 'fit';
  sizeH?: TComponentSizesExtended | 'fit';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
} & React.ImgHTMLAttributes<HTMLImageElement>;
