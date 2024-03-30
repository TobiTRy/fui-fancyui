import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  borderRadius: TBorderRadiusSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    borderRadius: 'sm',
  },
  md: {
    borderRadius: 'md',
  },
  lg: {
    borderRadius: 'lg',
  },
};
