import { TTextAlignLRC } from '@/types/TTextAlignLRC';

export type TLeftRightCenterToFlexJustify = 'flex-start' | 'flex-end' | 'center';

const leftRightCenterToFlexJustify: Record<TTextAlignLRC, 'flex-start' | 'flex-end' | 'center'> = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

export default leftRightCenterToFlexJustify;
