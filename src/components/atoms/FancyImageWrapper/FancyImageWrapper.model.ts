import { CSSProp } from 'styled-components';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TComponentSizesExtended } from '@/types/TComponentSizes';
import { TCssFiltersTypes } from '@/design/designFunctions/createCssFilterString';
import { ReactElement } from 'react';

export type TFancyImageWrapper = {
  aspectRatio?: string; // e.g. "16/9"
  children?: ReactElement<HTMLImageElement>;
  darken?: number | boolean;
  filter?: TCssFiltersTypes;
  externalStyle?: CSSProp;
  borderRadius?: TBorderRadiusSizes;
  sizeW?: TComponentSizesExtended | 'fit' | string;
  sizeH?: TComponentSizesExtended | 'fit' | string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
} & React.ImgHTMLAttributes<HTMLImageElement>; // Remove that and adjsut chip component
