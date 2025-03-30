import { TComponentSizes, TglobalElementSizes, TSizeSettings } from '@/types';

type TSizeObj = {
  iconSize: TComponentSizes;
  deleteButtonSize: TComponentSizes;
  height: TglobalElementSizes;
};

// the template for the sizes
export const sizesSettings: TSizeSettings<TSizeObj> = {
  sm: {
    height: 'xs',
    deleteButtonSize: 'sm',
    iconSize: 'sm',
  },
  md: {
    height: 'sm',
    deleteButtonSize: 'sm',
    iconSize: 'md',
  },
  lg: {
    height: 'md',
    deleteButtonSize: 'md',
    iconSize: 'lg',
  },
};
