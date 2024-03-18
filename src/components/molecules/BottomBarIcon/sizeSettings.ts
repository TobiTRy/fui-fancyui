import { TSpacings } from '@/types/TSpacings';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  sizeIcon: TSpacings;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    sizeIcon: 'xs',
  },
  md: {
    sizeIcon: 'sm',
  },
  lg: {
    sizeIcon: 'md',
  },
};
