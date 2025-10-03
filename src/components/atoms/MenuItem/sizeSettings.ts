import { TSizeSettingsMid } from '@/types/TSizeSettings';
import { TSpacingArray, TSpacings } from '@/types/TSpacings';

type TSizeObj = {
  padding: TSpacingArray;
  lineHeight: TSpacings;
};

export const sizeSettings: TSizeSettingsMid<TSizeObj> = {
  xs: {
    padding: ['xs', 'sm'],
    lineHeight: 'md',
  },
  sm: {
    padding: ['xs', 'md'],
    lineHeight: 'md',
  },
  md: {
    padding: ['xs', 'lg'],
    lineHeight: 'lg',
  },
  lg: {
    padding: ['sm', 'lg'],
    lineHeight: 'md',
  },
  xl: {
    padding: ['sm', 'lg'],
    lineHeight: 'md',
  },
};
