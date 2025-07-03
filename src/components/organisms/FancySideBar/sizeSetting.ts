import { TSizeSettingsMid } from '@/types/TSizeSettings';
import { TSpacings } from '@/types/TSpacings';

type TSizeObj = {
  margin: TSpacings;
};

export const sizeSettings: TSizeSettingsMid<TSizeObj> = {
  xs: {
    margin: 'xxs',
  },
  sm: {
    margin: 'xxs',
  },
  md: {
    margin: 'xs',
  },
  lg: {
    margin: 'xs',
  },
  xl: {
    margin: 'sm',
  },
};
