import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TGlobalElementSizes } from '@/types/TGlobalElementSizes';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  width: TGlobalElementSizes;
  borderRadius: TBorderRadiusSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    width: 'md',
    borderRadius: 'xs',
  },
  md: {
    width: 'lg',
    borderRadius: 'sm',
  },
  lg: {
    width: 'xl',
    borderRadius: 'md',
  },
};
