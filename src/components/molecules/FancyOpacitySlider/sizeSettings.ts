import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TGlobalElementSizes } from '@/types/TGlobalElementSizes';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  height: TGlobalElementSizes;
  borderRadius: TBorderRadiusSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    height: 'xxs',
    borderRadius: 'xxs',
  },
  md: {
    height: 'xs',
    borderRadius: 'xs',
  },
  lg: {
    height: 'sm',
    borderRadius: 'sm',
  },
};
