import { TSizeSettings } from '@/types/TSizeSettings';
import { TglobalElementSizes } from '@/types/TglobalElementSizes';

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
