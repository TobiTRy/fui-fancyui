import { TSizeSettings } from '@/types/TSizeSettings';
import { TSpacingArray } from '@/types/TSpacings';

type TSizeObj = {
  padding: TSpacingArray;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    padding: ['sm', 'sm'],
  },
  md: {
    padding: ['sm', 'md'],
  },
  lg: {
    padding: ['md', 'lg'],
  },
};
