import { TComponentSizes } from '@/types/TComponentSizes';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  fontSizeTitle: TTypographyVariants;
  iconSize: TComponentSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    fontSizeTitle: 'interactiveSm',
    iconSize: 'sm',
  },
  md: {
    fontSizeTitle: 'interactiveMd',
    iconSize: 'md',
  },
  lg: {
    fontSizeTitle: 'bodytextLg',
    iconSize: 'lg',
  },
};
