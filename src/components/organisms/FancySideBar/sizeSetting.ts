import { TSizeSettings } from '@/types/TSizeSettings';
import { TSpacings } from '@/types/TSpacings';

type TSizeObj = {
  margin: TSpacings;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    margin: 'xxs',
  },
  md: {
    margin: 'xxs',
  },
  lg: {
    margin: 'sm',
  },
};
