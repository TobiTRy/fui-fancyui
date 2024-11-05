import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TglobalElementSizes } from '@/types/TGlobalElementSizes';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  height: TglobalElementSizes;
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
