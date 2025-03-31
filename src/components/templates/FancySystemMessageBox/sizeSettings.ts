import { TComponentSizes } from '@/types';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  systemMessageSize: TComponentSizes;
};

// the template for the sizes
export const sizes: TSizeSettings<TSizeObj> = {
  sm: {
    systemMessageSize: 'sm',
  },
  md: {
    systemMessageSize: 'md',
  },
  lg: {
    systemMessageSize: 'md',
  },
};
