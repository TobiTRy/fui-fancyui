import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TSpacingArray } from '@/types/TSpacings';

type TSizeObj = {
  borderRadius: TBorderRadiusSizes;
  padding: TSpacingArray;
};

export const sizesSettings: TSizeSettings<TSizeObj> = {
  sm: {
    borderRadius: 'sm',
    padding: ['sm', 'md'],
  },
  md: {
    borderRadius: 'md',
    padding: ['md', 'lg'],
  },
  lg: {
    borderRadius: 'lg',
    padding: ['lg', 'xl'],
  },
};
