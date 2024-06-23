import { TSkeletonBox } from '@/components/atoms/SkeletonBox';
import { TFancyGridTemplate } from '@/components/templates/FancyGridTemplate';

export type TFancySkeletonGrid = Omit<TFancyGridTemplate, 'children' | 'breakPoints'> &
  Omit<TSkeletonBox, 'aspectRatio' | 'sizeW' | 'sizeH'>;
