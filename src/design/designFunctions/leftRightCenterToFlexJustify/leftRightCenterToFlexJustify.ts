import { TTextAlignLRC } from '@/types/TTextAlignLRC';

const leftRightCenterToFlexJustify: Record<TTextAlignLRC, string> = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

export default leftRightCenterToFlexJustify;
