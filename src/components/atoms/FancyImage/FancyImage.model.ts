import { CSSProp } from 'styled-components';
import { TBorderRadiusSizes } from '@/interface/TBorderRadiusSizes';
import { TComponentSizesExtended } from '@/interface/TComponentSizes';

export type TFancyImage = {
  aspectRatio?: string; // e.g. "16/9"
  darken?: number | boolean;
  externalStyle?: CSSProp;
  borderRadius?: TBorderRadiusSizes;
  size?: TComponentSizesExtended | 'fit';
} & React.ImgHTMLAttributes<HTMLImageElement>;
