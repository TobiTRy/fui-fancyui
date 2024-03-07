import { TSpacings } from '@/types/TSpacings';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TGlobalElementSizes } from '@/types/TGlobalElementSizes';

type TSizeObj = {
  sizeIcon: TSpacings;
  componentHeight: TGlobalElementSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    sizeIcon: 'xs',
    componentHeight: 'sm',
  },
  md: {
    sizeIcon: 'sm',
    componentHeight: 'sm',
  },
  lg: {
    sizeIcon: 'lg',
    componentHeight: 'md',
  },
};
