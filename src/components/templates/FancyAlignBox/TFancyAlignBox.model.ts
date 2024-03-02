import { ElementType } from 'react';

import { TFancyFlexBox } from '@/components/templates/FancyFlexBox/FancyFlexBox';
import { TSpacingsContainerWithHTMLAttrs } from '@/components/atoms/SpacingContainer';

export type TFancyAlignBox<T extends ElementType> = TFancyFlexBox<T> & TSpacingsContainerWithHTMLAttrs<T>;
