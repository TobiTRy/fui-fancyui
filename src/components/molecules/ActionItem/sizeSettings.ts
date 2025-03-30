import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom';
import { TComponentSizesMid } from '@/types';
import { TSizeSettingsMid } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  size: TComponentSizesMid;
  fontSize: TTypographyVariants;
  iconSize?: TFancySVGAtomSizes;
};

export const sizeSettings: TSizeSettingsMid<TSizeObj> = {
  xs: {
    size: 'xs',
    fontSize: 'interactiveSm',
    iconSize: '3xs',
  },
  sm: {
    size: 'sm',
    fontSize: 'interactiveSm',
    iconSize: 'xxs',
  },
  md: {
    size: 'md',
    fontSize: 'interactiveMd',
    iconSize: 'xxs',
  },
  lg: {
    size: 'lg',
    fontSize: 'interactiveLg',
    iconSize: 'xs',
  },
  xl: {
    size: 'xl',
    fontSize: 'interactiveLg',
    iconSize: 'xs',
  },
};
