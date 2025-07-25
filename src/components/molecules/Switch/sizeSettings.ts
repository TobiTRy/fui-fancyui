import { TComponentSizesMid } from '@/types';
import { TSizeSettingsMid } from '@/types/TSizeSettings';
import { TglobalElementSizes } from '@/types/TGlobalElementSizes';

type TSizeObj = {
  height: TglobalElementSizes;
  thumbSize: TglobalElementSizes;
};

export const sizeSettings: TSizeSettingsMid<TSizeObj> = {
  xs: {
    height: 'xs',
    thumbSize: 'xxs',
  },
  sm: {
    height: 'sm',
    thumbSize: 'xs',
  },
  md: {
    height: 'sm',
    thumbSize: 'xs',
  },
  lg: {
    height: 'md',
    thumbSize: 'sm',
  },
  xl: {
    height: 'lg',
    thumbSize: 'md',
  },
};
