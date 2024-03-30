import { TSizeSettings } from '@/types/TSizeSettings';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

type TSizeObj = {
  borderRadius: TBorderRadiusSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    borderRadius: 'xs',
  },
  md: {
    borderRadius: 'sm',
  },
  lg: {
    borderRadius: 'md',
  },
};
