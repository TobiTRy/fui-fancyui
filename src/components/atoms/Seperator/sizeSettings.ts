import { TComponentSizesExtended } from '@/types/TComponentSizes';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  iconSize: TComponentSizesExtended;
  fontVariant: TTypographyVariants;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    iconSize: 'xxs',
    fontVariant: 'subTextFootnote',
  },
  md: {
    iconSize: 'xxs',
    fontVariant: 'subTextCaption',
  },
  lg: {
    iconSize: 'xs',
    fontVariant: 'bodytextSm',
  },
};
