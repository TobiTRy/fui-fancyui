import { TSizeSettings } from '@/types/TSizeSettings';
import { TGlobalElementSizes } from '@/types/TGlobalElementSizes';

type TSizeObj = {
  sizeIcon: TGlobalElementSizes;
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
