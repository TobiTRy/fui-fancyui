import { TComponentSizes, TComponentSizesMid } from '@/types';
import { TSizeSettingsMid } from '@/types/TSizeSettings';

type TSizeObj = {
  systemMessageSize: TComponentSizes;
  contentSize: TComponentSizesMid;
};

// the template for the sizes
export const sizes: TSizeSettingsMid<TSizeObj> = {
  xs: {
    systemMessageSize: 'sm',
    contentSize: 'xs',
  },
  sm: {
    systemMessageSize: 'sm',
    contentSize: 'sm',
  },
  md: {
    systemMessageSize: 'md',
    contentSize: 'md',
  },
  lg: {
    systemMessageSize: 'lg',
    contentSize: 'lg',
  },
  xl: {
    systemMessageSize: 'lg',
    contentSize: 'xl',
  },
};
