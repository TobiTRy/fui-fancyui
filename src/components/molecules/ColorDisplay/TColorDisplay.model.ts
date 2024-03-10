import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TComponentSizes } from '@/types/TComponentSizes';
import Color from 'color';

export type TColorDisplay = {
  color: Color | string;
  opacity?: number;
  showText?: boolean;
  fullHeight?: boolean;
  borderRadius?: TBorderRadiusSizes;
  sizeC?: TComponentSizes;
  borderR?: TComponentSizes;
};
