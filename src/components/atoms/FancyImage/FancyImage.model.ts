import { CSSProp } from 'styled-components';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TComponentSizesExtended } from '@/types/TComponentSizes';
import { TCssFiltersTypes } from '@/design/designFunctions/createCssFilterString';

export type TFancyImage = {
  aspectRatio?: string; // e.g. "16/9"
  children?: React.ReactNode;
  darken?: number | boolean;
  filter?: TCssFiltersTypes;
  externalStyle?: CSSProp;
  borderRadius?: TBorderRadiusSizes;
  sizeW?: TComponentSizesExtended | 'fit' | string;
  sizeH?: TComponentSizesExtended | 'fit' | string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
};
