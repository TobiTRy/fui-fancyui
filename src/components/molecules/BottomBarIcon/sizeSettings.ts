import { TSizeSettings } from '@/types/TSizeSettings';
import { TglobalElementSizes } from '@/types/TGlobalElementSizes';

type TSizeObj = {
  sizeIcon: TglobalElementSizes;
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
