import { ElementType } from 'react';

import { TFancyFlexBoxWithDynamicElAttrs } from '@/components/templates/FancyFlexBox';
import { TSpacingsContainerWithHTMLAttrs } from '@/components/atoms/SpacingContainer';

export type TFancyAlignBox<T extends ElementType> = TFancyFlexBoxWithDynamicElAttrs<T> &
  TSpacingsContainerWithHTMLAttrs<T>;
