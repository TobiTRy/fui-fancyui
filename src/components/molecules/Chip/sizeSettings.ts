import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom';
import { TComponentSizesMid, TglobalElementSizes, TSizeSettingsMid } from '@/types';

type TSizeObj = {
  iconSize: TFancySVGAtomSizes;
  deleteButtonSize: TComponentSizesMid;
  height: TglobalElementSizes;
};

// the template for the sizes
export const sizesSettings: TSizeSettingsMid<TSizeObj> = {
  xs: {
    height: 'xxs',
    deleteButtonSize: 'xs',
    iconSize: 'xxs',
  },
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
  xl: {
    height: 'lg',
    deleteButtonSize: 'lg',
    iconSize: 'xl',
  },
};
