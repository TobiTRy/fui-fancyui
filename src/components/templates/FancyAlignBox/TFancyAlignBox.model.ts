import { ElementType } from 'react';

import { TFancyFlexBox } from '@/components/templates/FancyFlexBox/FancyFlexBox';
import { TSpacingsContainerFullProps } from '@/components/atoms/SpacingContainer';

export type TFancyAlignBox<T extends ElementType> = TFancyFlexBox<T> & TSpacingsContainerFullProps<T>;
