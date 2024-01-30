import { TComponentSizesExtended } from '@/types/TComponentSizes';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  fontSizeTitle: TTypographyVariants;
  iconSize: TComponentSizesExtended;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    fontSizeTitle: 'bodytextSm',
    iconSize: 'xxs',
  },
  md: {
    fontSizeTitle: 'bodytextMd',
    iconSize: 'xxs',
  },
  lg: {
    fontSizeTitle: 'bodytextLg',
    iconSize: 'xs',
  },
};
