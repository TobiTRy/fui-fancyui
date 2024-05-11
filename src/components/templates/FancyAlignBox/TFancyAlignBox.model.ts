import { ElementType } from 'react';

import { TFancyFlexBoxWithDynamicElAttrs } from '@/components/templates/FancyFlexBox';
import { TFancySpacingBoxWithHTMLAttrs } from '@/components/atoms/FancySpacingBox';

export type TFancyAlignBox<T extends ElementType> = TFancyFlexBoxWithDynamicElAttrs<T> &
  TFancySpacingBoxWithHTMLAttrs<T>;
