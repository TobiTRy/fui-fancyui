import { TSkeletonBox } from '@/components/atoms/SkeletonBox';
import { TFancyGridTemplate } from '@/components/templates/FancyGridTemplate';

export type TFancySkeletonGrid = Omit<TFancyGridTemplate, 'children'> &
  Omit<TSkeletonBox, 'aspectRatio' | 'sizeW' | 'sizeH'>;
