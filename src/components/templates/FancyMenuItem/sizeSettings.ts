import { TComponentSizesMid } from '@/types/TComponentSizes';
import { TSizeSettingsMid } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  fontSizeTitle: TTypographyVariants;
  iconSize: TComponentSizesMid;
};

export const sizeSettings: TSizeSettingsMid<TSizeObj> = {
  xs: {
    fontSizeTitle: 'interactiveSm',
    iconSize: 'sm',
  },
  sm: {
    fontSizeTitle: 'interactiveSm',
    iconSize: 'sm',
  },
  md: {
    fontSizeTitle: 'interactiveMd',
    iconSize: 'sm',
  },
  lg: {
    fontSizeTitle: 'interactiveLg',
    iconSize: 'xs',
  },
  xl: {
    fontSizeTitle: 'interactiveXl',
    iconSize: 'md',
  },
};
