import { TTextAlignLRC } from '@/types/TTextAlignLRC';

export type TLeftRightCenterToFlexJustify = 'flex-start' | 'flex-end' | 'center';

const leftRightCenterToFlexJustify: Record<TTextAlignLRC, TLeftRightCenterToFlexJustify> = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

export default leftRightCenterToFlexJustify;
