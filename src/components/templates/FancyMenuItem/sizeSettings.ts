import { TComponentSizesExtended } from '@/types/TComponentSizes';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  fontSizeTitle: TTypographyVariants;
  iconSize: TComponentSizesExtended;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    fontSizeTitle: 'interactiveSm',
    iconSize: 'xxs',
  },
  md: {
    fontSizeTitle: 'interactiveMd',
    iconSize: 'xs',
  },
  lg: {
    fontSizeTitle: 'bodytextLg',
    iconSize: 'xs',
  },
};
