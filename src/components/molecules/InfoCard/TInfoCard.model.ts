import { ComponentProps } from 'react';

import { FancyBox } from '@/components/atoms/FancyBox';
import { TComponentSizes } from '@/types/TComponentSizes';

export type TInfoCardProps = ComponentProps<typeof FancyBox> & {
  sizeC?: TComponentSizes;
};
