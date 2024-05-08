import React from 'react';
import { CSSProp } from 'styled-components';

import { TCssFiltersTypes } from '@/design/designFunctions/createCssFilterString';
import { TComponentSizesExtended } from '@/types/TComponentSizes';

export type TFancyImageWrapper = {
  aspectRatio?: string; // e.g. "16/9"
  children?: React.ReactNode;
  filter?: TCssFiltersTypes;
  externalStyle?: CSSProp;
  borderRadius?: string;
  sizeW?: TComponentSizesExtended | 'fit' | string;
  sizeH?: TComponentSizesExtended | 'fit' | string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
};

export type TFancyImageWrapperNativeAttrs = React.HTMLAttributes<HTMLDivElement>;

export type TFancyImageWrapperWithNativeAttrs = TFancyImageWrapper & TFancyImageWrapperNativeAttrs;
